const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thanos')
		.setDescription('Replies with a Thanos quote.'),
	async execute(interaction) {
		const min = Math.ceil(1);
		const max = Math.floor(22);
		const thanosQuoteIndex = Math.floor(Math.random() * (max - min + 1) + min);
		switch (thanosQuoteIndex) {
		case 1:
			await interaction.reply('Fine, I\'ll do it myself.');
			break;
		case 2:
			await interaction.reply('Dread it. Run from  it. Destiny arrives all the same.');
			break;
		case 3:
			await interaction.reply('Your optimism is misplaced, Asgardian.');
			break;
		case 4:
			await interaction.reply('Perectly balanced, as all things should be.');
			break;
		case 5:
			await interaction.reply('Reality is often disappointing.');
			break;
		case 6:
			await interaction.reply('Reality can be whatever I want.');
			break;
		case 7:
			await interaction.reply('A small price to pay for salvation,');
			break;
		case 8:
			await interaction.reply('The universie is finite, its resources finite.');
			break;
		case 9:
			await interaction.reply('I\'m sorry, little one.');
			break;
		case 10:
			await interaction.reply('They called me a madman.');
			break;
		case 11:
			await interaction.reply('I could simply snap my fingers and they would all cease to exist.');
			break;
		case 12:
			await interaction.reply('The hardest choicees require the strongest wills.');
			break;
		case 13:
			await interaction.reply('You\'re not the only one cursed with knowledge.');
			break;
		case 14:
			await interaction.reply('When I\'m done, half of humanity will still be alive.');
			break;
		case 15:
			await interaction.reply('You should\'ve gone for the head.');
			break;
		case 16:
			await interaction.reply('Gone. Reduced to atoms.');
			break;
		case 17:
			await interaction.reply('I am inevitable.');
			break;
		case 18:
			await interaction.reply('Perhaps I treated you too harshly.');
			break;
		case 19:
			await interaction.reply('You couldn\'t live with your own failure. Where did that bring you? Back to me.');
			break;
		case 20:
			await interaction.reply('A grateful universe.');
			break;
		case 21:
			await interaction.reply('I\'m gonna enjoy it... Very, very much.');
			break;
		case 22:
			await interaction.reply('I used the stones to destroy the stones.');
			break;
		}
	},
};