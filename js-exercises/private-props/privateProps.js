function privateProps(obj, isPrivate) {
  const handler = {
    get (target, property, receiver) {
      if (isPrivate(property)) {
        throw new TypeError(`Can't get property "_private"`);
      }
      console.log(property);
      let value = target[property];
      return (typeof value === 'function') ? value.bind(target) : value;
    },
    set (target, property, value) {
      if (isPrivate(property)) {
        throw new TypeError(`Can't set property "_private"`);
      } 
      target[property] = value;
      return true;
    },
    has(target, property) {
      if(!isPrivate(property)) {
        return true;
      } 
      return false
    },
    ownKeys (target) {
      return Object.keys(target).filter( key => !isPrivate(key));
    }
  }
  return new Proxy(obj, handler);
};

export { privateProps};
