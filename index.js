const Discord = require('discord.js')
require("dotenv").config()

const TOKEN = "OTY3MTAzNDAyNjIwMzgzMjYy.YmLbOw.xxZDQ52NXzPdhwJ6fuEHcCJj-sU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN)