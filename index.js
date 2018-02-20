const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`on ${client.guilds.size} servers Made by Olivierr#2191`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});

client.on('message', msg => {
  if (msg.content === 'hi aspectbot') {
    msg.reply('Hello!!');
  }
});

client.on('message', msg => {
  if (msg.content === 'aspectbot invite?') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=414092862020517888&scope=bot&permissions=1');
  }
});

client.on('message', msg => {
  if (msg.content === 'aspectbot who created you?') {
    msg.reply('Olivierr#2191 Did :)');
  }
});

client.on('message', msg => {
  if (msg.content === 'aspectbot commands?') {
    msg.reply('My commands are (aspectbot commands?) (ping) (aspectbot who created you?) (aspectbot invite?) (hi aspectbot) (aspectbot who is a good boy?) (aspectbot reee');
  }
});

client.on('message', msg => {
  if (msg.content === 'aspectbot who is a good boy?') {
    msg.reply('Me :dog: ');
  }
});

client.on('message', msg => {
  if (msg.content === 'aspectbot reee') {
    msg.reply('http://i0.kym-cdn.com/photos/images/original/000/915/652/b49.gif');
  }
});


client.login('NDE0MDkyODYyMDIwNTE3ODg4.DWiY_Q.4pMldNiuUTj4c9K8HqVZcVnnlzM');