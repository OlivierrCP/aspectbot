// Load up the discord.js library
const Discord = require("discord.js");

const fs = require('fs');


const client = new Discord.Client();

const config = require("./config.json");

const folder = './src/commands/pictures/'; //Define pictures folder
var images = [];

var randomimage = images[Math.floor(Math.random() * images.length)]; 

fs.readdirSync(folder).forEach(function(file) { //Read the folder and add each file that is found,
    images.push(file); //Should be added to the image array
});
var eightball = [ 
    "yes!",
    "no...",
    "maybe?",
    "probably",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
]

client.on("ready", () => {
  
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;
  

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
});
  
    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
   
   if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
      if (command == "8ball") { 
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); 
        else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: *8ball [question])"); 
    }
	
	    if (command == "cookie") { // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") 
        else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: *cookie @username)") 
    }

    if(command === "shirt"){
       
        var file = new Discord.Attachment(folder + images[Math.floor(Math.random() * images.length)]);
        console.log(file);
        message.channel.send({file: file})
    }







client.login(process.env.BOT_TOKEN);
