module.exports function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

module.exports function getLast() {
  return ' is okay';
}

module.exports function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
