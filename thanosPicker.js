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

const thanosPickerStr = (userStr) => {
	if (userStr === 'myself') {
		return 1;
	}
	else if (userStr === 'dread' || userStr === 'run' || userStr === 'destiny') {
		return 2;
	}
	else if (userStr === 'balanced') {
		return 4;
	}
	else if (userStr === 'reality') {
		return 5;
	}
	else if (userStr === 'price' || userStr === 'salvation') {
		return 7;
	}
	else if (userStr.replace(/\s+/g, '') === 'littleone') {
		return 9;
	}
	else if (userStr === 'choices' || userStr === 'wills') {
		return 12;
	}
	else if (userStr === 'cursed' || userStr === 'knowledge') {
		return 13;
	}
	else if (userStr === 'head') {
		return 15;
	}
	else if (userStr === 'atoms') {
		return 16;
	}
	else if (userStr === 'inevitable') {
		return 17;
	}
	else if (userStr === 'harshly') {
		return 18;
	}
	else if (userStr === 'failure') {
		return 19;
	}
	else if (userStr === 'stones') {
		return 22;
	}
	else {
		return -1;
	}
};

module.exports = { thanosPickerNum, thanosPickerStr };