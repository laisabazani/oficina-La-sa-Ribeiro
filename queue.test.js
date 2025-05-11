const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
  const queue = new Queue();
  queue.add('maçã');
  queue.add('banana');
  queue.add('laranja');

  expect(queue.size()).toBe(3);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
   const queue = new Queue();
queue.add('morango');

expect(queue.elements).toContain('morango');
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
queue.add('maçã');
queue.add('banana');
queue.add('laranja');
queue.add('morango');

  expect(queue.peek()).toBe('maçã');
});

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
queue.add('maçã');
queue.add('banana');
queue.add('laranja');
queue.add('morango');

queue.dequeue(); // remove 'maçã'

expect(queue.peek()).toBe('banana');
  })
})