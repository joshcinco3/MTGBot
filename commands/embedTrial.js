const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embedtrial')
		.setDescription('An experimental command for working with embeds.'),
	async execute(interaction) {
		const newEmbed = new MessageEmbed()
			.setColor('#8D6A9F')
			.setTitle('Rules')
			.setDescription('These are the rules for the server.')
			.addFields(
				{ name: 'Rule 1', value: 'No Racism' },
				{ name: 'Rule 2', value: 'No Spam' },
				{ name: 'Rule 3', value: 'Thanos did nothing worng.' },
			)
			.setFooter('Make sure to check out the rules channel.');

		await interaction.channel.send({ embeds: [newEmbed] });

	},
};