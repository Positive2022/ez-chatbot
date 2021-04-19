const Discord = require('discord.js');
const fetch = require('node-fetch')
const Chatbot = require("discord-chatbot")
const client = new Discord.Client()
const chatbot = new Chatbot({name: "Mike" , gender: "Male"})

client.on("ready", () => {
    console.log("kek")
});
client.on("message", async message => {
    if (message.author.bot || !message.member || !message.content) return;
if (message.channel.name === "chat"){
const res = await fetch(`https://api.udit.gq/api/chatbot?message=${encodeURIComponent(message)}&gender=${chatbot.gender}&name=${chatbot.name}`).catch(e => {
    throw new Discord.Error(`Ran into an Error. ${e}`);
});
const response = await res.json().catch(e =>{
    throw new Discord.Error(`Ran into an Error. ${e}`);
});
console.log(response)
try {
await chatbot.chat(message.content).then(message.channel.send(response.message)).catch(e => console.log(e));
} catch (error) {
    console.log(error.message);
}
};
});

client.login("why are you reading this??")