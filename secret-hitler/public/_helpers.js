function shuffle (array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

function formatUsername(string) {
  return string.toLowerCase().trim().split(' ').join('-');
}

function formatArray(array) {
  if (array.length > 1) {
    return `${array.slice(0, -1).join(', ')}, and ${array.slice(-1)}`;
  } else {
    return array;
  }
}
