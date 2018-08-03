const sum = (...numbers) => {
	if (!numbers.length) return;
	console.log(numbers);
	return numbers.reduce((sum, current) => {
		return sum + current;
	}, 0);
};

export default sum;
