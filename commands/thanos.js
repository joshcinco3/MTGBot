const { SlashCommandBuilder } = require('@discordjs/builders');
const { thanosSwitch } = require('../thanosQuotes.js');
const { thanosNumberPicker } = require('../thanosPicker');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thanos')
		.setDescription('Replies with a Thanos quote.')
		.addIntegerOption((option) =>
			option
				.setName('quotenum')
				.setDescription('Allows a user to choose a specific Thanos quote based on number (Leave blank for random quote).')
				.setRequired(false),
		)
		.addStringOption((option) =>
			option
				.setName('thanoskeyword')
				.setDescription('Allows a user to choose a specific Thanos quote based on keyword (Leave blank for random quote).')
				.setRequired(false),
		),
	async execute(interaction) {
		let thanosQuoteIndex = 0;
		let userQuoteNum = 0;

		if (!interaction.options.get('quotenum') && !interaction.options.get('thanoskeyword')) {
			const min = Math.ceil(1);
			const max = Math.floor(22);
			thanosQuoteIndex = Math.floor(Math.random() * (max - min + 1) + min);
		}
		else if (interaction.options.get('quotenum') && !interaction.options.get('thanoskeyword')) {
			userQuoteNum = interaction.options.get('quotenum').value;

			thanosQuoteIndex = thanosNumberPicker(userQuoteNum);

			if (isNaN(thanosQuoteIndex)) {
				return interaction.reply('Reality has disappointed us once again as it appears you have entered an invalid number. Try once more little one.');
			}
		}
		else if (!interaction.options.get('quotenum') && interaction.options.get('thanoskeyword')) {
			const userKeyword = interaction.options.get('thanoskeyword').value.toLowerCase();

			if (userKeyword === 'myself') {
				thanosQuoteIndex = 1;
			}
			else if (userKeyword === 'dread' || userKeyword === 'run' || userKeyword === 'destiny') {
				thanosQuoteIndex = 2;
			}
			else if (userKeyword === 'balanced') {
				thanosQuoteIndex = 4;
			}
			else if (userKeyword === 'reality') {
				thanosQuoteIndex = 5;
			}
			else if (userKeyword === 'price' || userKeyword === 'salvation') {
				thanosQuoteIndex = 7;
			}
			else if (userKeyword.replace(/\s+/g, '') === 'litleone') {
				thanosQuoteIndex = 9;
			}
			else if (userKeyword === 'choices' || userKeyword === 'wills') {
				thanosQuoteIndex = 12;
			}
			else if (userKeyword === 'cursed' || userKeyword === 'knowledge') {
				thanosQuoteIndex = 13;
			}
			else if (userKeyword === 'head') {
				thanosQuoteIndex = 15;
			}
			else if (userKeyword === 'atoms') {
				thanosQuoteIndex = 16;
			}
			else if (userKeyword === 'inevitable') {
				thanosQuoteIndex = 17;
			}
			else if (userKeyword === 'harshly') {
				thanosQuoteIndex = 18;
			}
			else if (userKeyword === 'failure') {
				thanosQuoteIndex = 19;
			}
			else if (userKeyword === 'stones') {
				thanosQuoteIndex = 22;
			}
			else {
				return interaction.reply('Invalid keyword. Try once more, little one.');
			}
		}
		else {
			return interaction.reply('Reality is often disappointing. Looks like the quote generator failed this time, try once more little one.');
		}

		await interaction.reply(thanosSwitch(thanosQuoteIndex));
	},
};