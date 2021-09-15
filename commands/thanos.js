const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thanos')
		.setDescription('Replies with a Thanos quote.'),
	async execute(interaction) {
		const min = Math.ceil(1);
		const max = Math.floor(22);
		const thanosQuoteIndex = Math.floor(Math.random() * (max - min + 1) + min);
		const thanosSwitch = (thanosQuote) => ({
			1: 'Fine, I\'ll do it myself.',
			2: 'Dread it. Run from  it. Destiny arrives all the same.',
			3: 'Your optimism is misplaced, Asgardian.',
			4: 'Perectly balanced, as all things should be.',
			5: 'Reality is often disappointing.',
			6: 'Reality can be whatever I want.',
			7: 'A small price to pay for salvation,',
			8: 'The universie is finite, its resources finite.',
			9: 'I\'m sorry, little one.',
			10: 'They called me a madman.',
			11: 'I could simply snap my fingers and they would all cease to exist.',
			12: 'The hardest choicees require the strongest wills.',
			13: 'You\'re not the only one cursed with knowledge.',
			14: 'When I\'m done, half of humanity will still be alive.',
			15: 'You should\'ve gone for the head.',
			16: 'Gone. Reduced to atoms.',
			17: 'I am inevitable.',
			18: 'Perhaps I treated you too harshly.',
			19: 'You couldn\'t live with your own failure. Where did that bring you? Back to me.',
			20: 'A grateful universe.',
			21: 'I\'m gonna enjoy it... Very, very much.',
			22: 'I used the stones to destroy the stones.',
		}) [thanosQuote];

		await interaction.reply(thanosSwitch(thanosQuoteIndex));
	},
};