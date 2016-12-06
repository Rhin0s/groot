var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
    msg.channel.sendMessage("I am Groot!");
});

bot.on('ready', () => {
  console.log('I am Groot!');
});

bot.login("MjU1NjUwMzY0MDY4NDYyNTk0.CyguSA.RoOd5dnlnp9w1uJ3IYF0gnI9h7A");
