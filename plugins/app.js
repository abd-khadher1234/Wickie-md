const { Function, getJson, isPublic } = require('../lib');
Function({pattern: 'app ?(.*)', fromMe: isPublic, desc: 'Sends list button', type: 'search'}, async (message, match) => {
if (!match) return await message.send('_*need app name*_' );
const { status, result } = await getJson(`https://api-mask-ser.herokuapp.com/api/search/playstore?text=${match}`);
const res = [];
for (var index = 0; index < result.length; index++) {
res.push({title: `${result[index].name}`, rowId: `${result[index].url}`});
};
const listMessage = {
  text: result[0].name,
  title: " _*🔍 Search Result Found*_",
  buttonText: " *SELECT APK*",
sections: [{title: 'Playstore Search Result here, select your app', rows: res}]
};
await message.client.sendMessage(message.chat, listMessage)
})
Function({on: 'button', fromMe: isPublic}, async (message, match) => {
if (message.button_msg.includes('play.google.com')) {
await message.client.sendMessage(message.jid, {image: {url: `${apiUrl}api/ssweb?url=${message.button_msg}`}, caption: message.button_msg})
}
})
