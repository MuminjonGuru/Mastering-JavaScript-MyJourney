class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }

  _collapseTo(index) {
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}
