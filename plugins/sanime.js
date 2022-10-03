const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'sanime ?(.*)', fromMe: isPublic, desc: 'random anime status videos', type: 'anime'}, async (m, text, client) => {
let { result} = await getJson ('https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/AnimeVideos.json')
let mask = result[Math.floor(Math.random()*result.length)]
const buttons = [
  {buttonId: prefix + 'sanime', buttonText: {displayText: 'next'}, type: 1}]

const buttonMessage = {
    video: {url: mask},
    caption: "*Random anime videos*",
    footer: 'abd-khadher',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
