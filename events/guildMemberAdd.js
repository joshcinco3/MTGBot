module.exports = {
	name: 'guildMemberAdd',
	async execute(GuildMember) {
		const welcomeRole = GuildMember.guild.roles.cache.find(role => role.name === 'member');

		GuildMember.roles.add(welcomeRole);
		GuildMember.guild.channels.cache.get('877045138025758733').send(`Welcome <@${GuildMember.user.id}> to the server!`);
	},
};