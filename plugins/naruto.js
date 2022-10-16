const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'naruto ?(.*)', fromMe: isPublic, desc: 'random naruto status videos', type: 'anime'}, async (m, text, client) => {
let { result} = await getJson ('https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json')
let mask = result[Math.floor(Math.random()*result.length)]
const buttons = [
  {buttonId: prefix + 'naruto', buttonText: {displayText: 'next'}, type: 1}]

const buttonMessage = {
    video: {url: mask},
    caption: "*Naruto uzumaki*",
    footer: 'abd-khadher',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
