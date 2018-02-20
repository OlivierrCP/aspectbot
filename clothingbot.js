const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client();

const folder = './src/commands/pictures/'; //Define pictures folder

var images = []; //Define an empty array


fs.readdirSync(folder).forEach(file => { //Read the folder and add each file that is found,
   images.push(file); //Should be added to the image array
});

bot.on("ready", () => {
   console.log("Bot is ready.");
});

bot.on("message", (message) => {
   if(message.content === "shirt"){
       
       var file = new Discord.Attachment(folder + images[Math.floor(Math.random() * images.length)]);
       console.log(file);
       message.channel.send({file: file})
   }
});

bot.login("NDE0MDkyODYyMDIwNTE3ODg4.DWoKDw.co_cigI6DZFMtGXTPl_Y8IW_iQY");