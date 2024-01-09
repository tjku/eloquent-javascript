class GroupIterator {
  constructor(group) {
    this.current = 0;
    this.group = group;
  }

  next() {
    if (this.current == this.group.collection.length) {
      return { done: true };
    }

    let value = this.group.collection[this.current];
    this.current++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};
