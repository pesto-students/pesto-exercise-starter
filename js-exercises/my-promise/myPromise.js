const states = {
  pending: 'Pending',
  setelled: 'setelled',
  rejected: 'Rejected'
};

class myPromise {
    constructor(perform) {
        const members = {
            [states.setelled]: {
                state: states.setelled,
                // Chain mechanism
                then: onResolved => myPromise.resolve(onResolved(this.value))
            },
            [states.rejected]: {
                state: states.rejected,
                // Ignore mechanism
                then: _ => this
            },
            [states.pending]: {
                state: states.pending
            }
        };
        const changeState = state => Object.assign(this, members[state]);
        const getCallback = state => value => {
            this.value = value;
            changeState(state);
        };

        const resolve = getCallback(states.setelled);
        const reject = getCallback(states.rejected);
        changeState(states.pending);
        try {
            perform(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    static resolve(value) {
        return new myPromise(resolve => resolve(value));
    }

    static reject(value) {
        return new myPromise((_, reject) => reject(value));
    }
}

export { myPromise };
