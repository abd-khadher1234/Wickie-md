const { Function, isPublic, sendAlive, RandomFancy, runtime, chatBot, isChatBot, chatbot } = require("../lib/");
const config = require('../config')
Function({pattern: 'chatbot ?(.*)', fromMe: true, desc: 'set chat bot', type: 'misc'}, async (message, match) => {
await chatBot(message, match)
});
