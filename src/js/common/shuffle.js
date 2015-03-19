/**
 * @name Shuffle
 * @description Fisher—Yates shuffle (http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 */

function Shuffle(array) {
  var array_length = array.length, random_index, current_element;

  if (typeof array !== 'object' || array_length === undefined) {
    return array;
  }

  while (array_length) {
    random_index = Math.floor(Math.random() * array_length--);

    current_element = array[array_length];

    // swap random element with current element
    array[array_length] = array[random_index];
    array[random_index] = current_element;
  }

  return array;
}

module.exports = Shuffle;
