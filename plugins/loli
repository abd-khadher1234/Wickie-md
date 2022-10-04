const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'loli ?(.*)', fromMe: isPublic, desc: 'random anime pics', type: 'anime'}, async (m, text, client) => {
let { result} = await getJson ('https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Loli.json')
const { content } = await getJson ('https://www.quotable.io/random')
let mask = result[Math.floor(Math.random()*result.length)]
const buttons = [
  {buttonId: prefix + 'loli', buttonText: {displayText: 'Next'}, type: 1}]

const buttonMessage = {
    image: {url: `${mask}`},
    caption: `${content}`,
    footer: 'Rᴀɴᴅᴏᴍ ʟᴏʟɪ',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
