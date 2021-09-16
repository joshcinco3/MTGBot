const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user from the guild.')
		.addUserOption((option) =>
			option
				.setName('usern')
				.setDescription('The user to be banned.')
				.setRequired(true),
		),
	async execute(interaction) {
		const member = interaction.options.get('usern').value;

		if (member) {
			const memberTarget = interaction.guild.members.cache.get(member);
			await memberTarget.ban();
			interaction.reply('User has been banned.');
		}
	},
};