class Group {
  constructor() {
    this.collection = [];
  }

  static from(array) {
    group = new Group();

    for (let element of array) {
      group.add(element);
    }

    return group;
  }

  add(element) {
    if (!this.collection.includes(element)) {
      this.collection.push(element);
    }
  }

  remove(element) {
    this.collection = this.collection.filter((el) => el !== element);
  }

  has(element) {
    return this.collection.includes(element);
  }
}
