const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Music bot will play chosen song')
		.addIntegerOption((option) =>
			option
				.setName('test_amount')
				.setDescription('How many times should the user be booped (defaults to 1)')
				.setRequired(false),
		),
	async execute(interaction) {
		const replyText = 'boop';
		let test_amount = 0;

		if (!interaction.options.get('test_amount')) {
			test_amount = 1;
		}
		else {
			test_amount = interaction.options.get('test_amount').value;
		}

		await interaction.reply(`${replyText.repeat(test_amount)}`);
	},
};