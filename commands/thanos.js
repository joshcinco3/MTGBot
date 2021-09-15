const { SlashCommandBuilder } = require('@discordjs/builders');
const { thanosSwitch } = require('../thanosQuotes.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('thanos')
		.setDescription('Replies with a Thanos quote.'),
	async execute(interaction) {
		const min = Math.ceil(1);
		const max = Math.floor(22);
		const thanosQuoteIndex = Math.floor(Math.random() * (max - min + 1) + min);

		await interaction.reply(thanosSwitch(thanosQuoteIndex));
	},
};