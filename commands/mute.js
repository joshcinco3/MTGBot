const { SlashCommandBuilder } = require('@discordjs/builders');
const ms = require('ms');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Mutes a user in the guild.')
		.addUserOption((option) =>
			option
				.setName('usern')
				.setDescription('The user to be muted.')
				.setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('mutelength')
				.setDescription('The length of time a member will be muted. Leave blank to mute indefinitely.')
				.setRequired(false),
		),
	execute(interaction) {
		const target = interaction.options.get('usern').value;

		const mainRole = interaction.guild.roles.cache.find(role => role.name === 'member');
		const muteRole = interaction.guild.roles.cache.find(role => role.name === 'mute');

		const memberTarget = interaction.guild.members.cache.get(target);

		if (!interaction.options.get('mutelength')) {
			memberTarget.roles.remove(mainRole.id);
			memberTarget.roles.add(muteRole.id);

			return interaction.reply(`<@${memberTarget.user.id}> has been muted.`);
		}

		memberTarget.roles.remove(mainRole.id);
		memberTarget.roles.add(muteRole.id);

		interaction.reply(`<@${memberTarget.user.id}> has been muted for ${ms(ms(interaction.options.get('mutelength').value))} .`);

		setTimeout(function() {
			memberTarget.roles.remove(muteRole.id);
			memberTarget.roles.add(mainRole.id);
		}, ms(interaction.options.get('mutelength').value));
	},
};