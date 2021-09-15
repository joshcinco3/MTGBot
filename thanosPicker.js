const thanosPickerNum = (userNum) => {
	if (userNum === 420) {
		return 13;
	}
	else if (userNum === 69) {
		return 12;
	}
	else if (userNum === 42069 || userNum === 69420) {
		return 10;
	}
	else if (userNum < 1 || userNum > 22) {
		return NaN;
	}
	else {
		return userNum;
	}
};

module.exports = { thanosPickerNum };