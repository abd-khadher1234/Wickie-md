const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'waifu ?(.*)', fromMe: isPublic, desc: 'random anime pics', type: 'anime'}, async (m, text, client) => {
let { url } = await getJson ('https://api.waifu.pics/sfw/neko')
const { content } = await getJson ('https://www.quotable.io/random')
const buttons = [
  {buttonId: prefix + 'waifu', buttonText: {displayText: 'Next'}, type: 1}]

const buttonMessage = {
    image: {url: `${url}`},
    caption: `${content}`,
    footer: 'Rᴀɴᴅᴏᴍ ᴡᴀɪꜰᴜ',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
