const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unmute')
		.setDescription('Unmutes a user in the guild.')
		.addUserOption((option) =>
			option
				.setName('usern')
				.setDescription('The user to be unmuted.')
				.setRequired(true),
		),
	execute(interaction) {
		const target = interaction.options.get('usern').value;

		const mainRole = interaction.guild.roles.cache.find(role => role.name === 'member');
		const muteRole = interaction.guild.roles.cache.find(role => role.name === 'mute');

		const memberTarget = interaction.guild.members.cache.get(target);

		memberTarget.roles.remove(muteRole.id);
		memberTarget.roles.add(mainRole.id);

		interaction.reply(`<@${memberTarget.user.id}> has been muted.`);
	},
};