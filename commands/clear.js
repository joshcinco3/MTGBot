const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Use this command to prune old messages.')
        .addIntegerOption((option) =>
            option
                .setName('clearamt')
                .setDescription('The amount of messages to prune.')
                .setRequired(true),
        ),
    async execute(interaction) {
        if (interaction.options.get('clearamt').value > 100) {
            return interaction.reply('You cannot prune more than 100 messages.');
        }

        if (interaction.options.get('clearamt').value < 1) {
            return interaction.reply('You must prune at least 1 message.');
        }

        await interaction.channel.messages.fetch({ limit: interaction.options.get('clearamt').value })
            .then(messages => {
                interaction.channel.bulkDelete(messages);
            })
            .catch(console.error);

        await interaction.reply(`Successfully pruned ${interaction.options.get('clearamt').value} messages.`);

    },
};