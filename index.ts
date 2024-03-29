import DiscordJS, { Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
//Start message
client.on('ready', async () => {
    await mongoose.connect( process.env.MONGO_URI || '', {
            keepAlive: true,
       })
    console.log('The bot is ready')

})

client.on('interactionCreate', async (Interaction) => {
    if(!Interaction.isCommand()) {
        return
    }
    const { commandName, options } = Interaction

    if (commandName === 'daddy') {
        Interaction.reply({
            content: 'Yes babby',
            ephemeral: true,
        })
    }
})

client.on('interactionCreate', async (Interaction) => {
    if(!Interaction.isCommand()) {
        return
    }
    const { commandName, options } = Interaction

    if (commandName === 'pogi') {
        Interaction.reply({
            content: 'no',
            ephemeral: true,
        })
    }
})


//Token
client.login(process.env.TOKEN)