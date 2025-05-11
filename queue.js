class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  add(item) {
    this.elements.push(item);
  }

  size() {
    return this.elements.length;
  }
  peek() {
  return this.elements[0];
}
dequeue() {
  return this.elements.shift();
}
}

module.exports = Queue