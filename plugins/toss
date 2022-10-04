const {Function,isPublic,prefix} = require("../lib/");
Function({pattern: 'toss ?(.*)', fromMe: isPublic, desc: 'head or tail', type: 'fun'}, async (m, text, client) => {
let tosses = ["https://i.imgur.com/G2UM8Aj.jpeg","https://i.imgur.com/2MhBDgV.jpeg"]
let image = tosses[Math.floor(Math.random()*tosses.length)]

const buttons = [
  {buttonId: prefix + 'toss', buttonText: {displayText: 'toss again'}, type: 1}]

const buttonMessage = {
    image: {url: image},
    caption: '*Head or Tail*',
    footer: '©abd_khadher___',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
