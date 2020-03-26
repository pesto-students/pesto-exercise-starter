class Cycled {
  constructor(fixture) {
    this.fixture = fixture;
  }
  [Symbol.iterator]() {
    const fixture = this.fixture;
    let currentIndex = -1;
    return {
      current: () => {
        return {
          value: fixture[currentIndex],
          done: false
        };
      },
      next: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;

          return {
            value: fixture[++currentIndex],
            done: false
          };
        }
      },
      previous: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[--currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      },
      step: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      },
      index: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      },
      reversed: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      },
      indexOf: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      },
      next: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      },
      iterable: () => {
        if (currentIndex < fixture.length) {
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        } else {
          currentIndex = -1;
          return {
            value: fixture[++currentIndex],
            done: currentIndex >= fixture.length
          };
        }
      }
    };
  }
}

const fixture = [1, 2, 3];

const c = new Cycled(fixture)[Symbol.iterator]();
console.log(c.current());
console.log(c.next());
console.log(c.current());
console.log(c.current());
console.log(c.current());
console.log(c.next());
console.log(c.next());
console.log(c.current());
console.log(c.current());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.current());

// export { Cycled };
