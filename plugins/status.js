const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'status ?(.*)', fromMe: isPublic, desc: 'random malayalam status videos', type: 'random'}, async (m, text, client) => {
let { result} = await getJson ('https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Sts.json')
let mask = result[Math.floor(Math.random()*result.length)]
const buttons = [
  {buttonId: prefix + 'status', buttonText: {displayText: 'NEXT➡️'} type: 1},
  {buttonId: prefix + 'alive', buttonText: {displayText: 'ALIVE💐'} type: 1},
  {buttonId: prefix + 'menu', buttonText: {displayText: 'MENU👅'} type: 1}]

const buttonMessage = {
    video: {url: mask},
    caption: "*Random Malayalam Status*",
    footer: 'abd_khadher👅❤️',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
