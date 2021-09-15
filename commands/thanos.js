const { SlashCommandBuilder } = require('@discordjs/builders');
const { thanosSwitch } = require('../thanosQuotes.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thanos')
		.setDescription('Replies with a Thanos quote.')
		.addIntegerOption((option) =>
			option
				.setName('quotenum')
				.setDescription('Allows a user to choose a specific Thanos quote based on number (Leave blank for random quote).')
				.setRequired(false),
		),
	async execute(interaction) {
		let thanosQuoteIndex = 0;
		let userQuoteNum = 0;

		if (!interaction.options.get('quotenum')) {
			const min = Math.ceil(1);
			const max = Math.floor(22);
			thanosQuoteIndex = Math.floor(Math.random() * (max - min + 1) + min);
		}
		else {
			userQuoteNum = interaction.options.get('quotenum').value;

			if (userQuoteNum === 420) {
				thanosQuoteIndex = 13;
			}
			else if (userQuoteNum === 69) {
				thanosQuoteIndex = 12;
			}
			else if (userQuoteNum === 42069 || userQuoteNum === 69420) {
				thanosQuoteIndex = 10;
			}
			else if (userQuoteNum < 1 || userQuoteNum > 22) {
				return interaction.reply('Invalid number. Try again little one.');
			}
			else {
				thanosQuoteIndex = userQuoteNum;
			}
		}

		await interaction.reply(thanosSwitch(thanosQuoteIndex));
	},
};