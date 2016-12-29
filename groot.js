var Discord = require("discord.js");
var bot = new Discord.Client();

//Authentifierungsdaten aus Datei laden
try {
        var authFile = require("./auth.json");
} catch (e){
        console.log("Die auth.json-Datei fehlt!\n"+e.stack);
        process.exit();
}

bot.on("message", msg => {
	if(msg.author.bot) return; 
	if (msg.content.toLowerCase().match(/[g]+[r]+[o]{2,}[t]+/g)) {
		msg.reply('ich bin Groot!');
	}
});

bot.on('ready', () => {
  console.log('Ich bin Groot!');
});

bot.login(authFile.bot_token);
