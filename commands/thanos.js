const { SlashCommandBuilder } = require('@discordjs/builders');
const { thanosSwitch } = require('../thanosQuotes.js');
const { thanosPickerNum, thanosPickerStr } = require('../thanosPicker');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thanos')
		.setDescription('Replies with a Thanos quote.')
		.addIntegerOption((option) =>
			option
				.setName('tnum')
				.setDescription('Allows a user to choose a specific Thanos quote based on number (Leave blank for random quote).')
				.setRequired(false),
		)
		.addStringOption((option) =>
			option
				.setName('tkeyword')
				.setDescription('Allows a user to choose a specific Thanos quote based on keyword (Leave blank for random quote).')
				.setRequired(false),
		),
	async execute(interaction) {
		let tQuoteIndex = 0;

		if (!interaction.options.get('tnum') && !interaction.options.get('tkeyword')) {
			const min = Math.ceil(1);
			const max = Math.floor(22);
			tQuoteIndex = Math.floor(Math.random() * (max - min + 1) + min);
		}
		else if (interaction.options.get('tnum') && !interaction.options.get('tkeyword')) {
			const userQuoteNum = interaction.options.get('tnum').value;

			tQuoteIndex = thanosPickerNum(userQuoteNum);

			if (isNaN(tQuoteIndex)) {
				return interaction.reply('Reality has disappointed us once again as it appears you have entered an invalid number. Try once more, little one.');
			}
		}
		else if (!interaction.options.get('tnum') && interaction.options.get('tkeyword')) {
			const userKeyword = interaction.options.get('tkeyword').value.toLowerCase();

			tQuoteIndex = thanosPickerStr(userKeyword);

			if (tQuoteIndex === -1) {
				return interaction.reply('Reality has disappointed us once again as it appears you have entered an invalid keyword. Try once more, little one.');
			}
		}
		else {
			return interaction.reply('Reality is often disappointing. Looks like the quote generator failed this time. Try once more, little one.');
		}

		await interaction.reply(thanosSwitch(tQuoteIndex));
	},
};