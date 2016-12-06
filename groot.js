var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
	if(msg.author.bot) return; 
	if (msg.content.includes("groot") || msg.content.includes("Groot")) {
		msg.reply('ich bin Groot!');
	}
});

bot.on('ready', () => {
  console.log('Ich bin Groot!');
});

bot.login("MjU1NjUwMzY0MDY4NDYyNTk0.CyguSA.RoOd5dnlnp9w1uJ3IYF0gnI9h7A");