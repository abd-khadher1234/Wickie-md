// © WCKIE-MD KHADHER
/*Function({pattern: 'sticker ?(.*)', fromMe: true, desc: 'auto sticker manager', type: 'sticker'}, async (m, text, client) => {return});*/
/*Function({pattern: 'setsticker ?(.*)', fromMe: true, desc: 'auto sticker manager', type: 'user'}, async (m, text, client) => {return});*/
/*Function({pattern: 'delsticker ?(.*)', fromMe: true, desc: 'auto sticker manager', type: 'user'}, async (m, text, client) => {return});*/
/*Function({pattern: 'getsticker ?(.*)', fromMe: true, desc: 'auto sticker manager', type: 'user'}, async (m, text, client) => {return});*/
const _0x4c9fbf=_0x4d23;(function(_0x2954bc,_0x2fe0df){const _0x5da23f=_0x4d23,_0x10add8=_0x2954bc();while(!![]){try{const _0x490a0e=parseInt(_0x5da23f(0x1e3))/0x1*(parseInt(_0x5da23f(0x1cf))/0x2)+parseInt(_0x5da23f(0x1c4))/0x3*(parseInt(_0x5da23f(0x1f6))/0x4)+-parseInt(_0x5da23f(0x1c0))/0x5+-parseInt(_0x5da23f(0x1f2))/0x6*(-parseInt(_0x5da23f(0x1d6))/0x7)+parseInt(_0x5da23f(0x1cb))/0x8+-parseInt(_0x5da23f(0x1ca))/0x9+-parseInt(_0x5da23f(0x1e5))/0xa;if(_0x490a0e===_0x2fe0df)break;else _0x10add8['push'](_0x10add8['shift']());}catch(_0x18059b){_0x10add8['push'](_0x10add8['shift']());}}}(_0x2c38,0x4ab21));const {Function,uploadtoimgbb,toAudio,getBuffer,setDB,prefix,Fancy,deleteFromuploadtoimgbb,getJson,addAudioMetaData}=require(_0x4c9fbf(0x1ec));var vipdb={},stickerDATABASE={};const loadsticker=async()=>{const _0x26a82a=_0x4c9fbf;if(!stickerDATABASE['db']){const _0x557227=await getJson(_0x26a82a(0x1df));stickerDATABASE[_0x26a82a(0x1fa)]=_0x557227;}!db[_0x26a82a(0x1d2)][_0x26a82a(0x1d7)]&&(db[_0x26a82a(0x1d2)][_0x26a82a(0x1d7)]=[],await setDB());},loadvip=async()=>{const _0x37f481=_0x4c9fbf;if(!vipdb['db']){const _0x148ecc=await getJson(_0x37f481(0x1dd));vipdb=_0x148ecc;}};!vipdb['data']&&loadvip();!stickerDATABASE[_0x4c9fbf(0x1fa)]&&loadsticker();const makedel=async()=>{const _0x1d6587=_0x4c9fbf;!db['database'][_0x1d6587(0x1d9)]&&(db[_0x1d6587(0x1d2)][_0x1d6587(0x1d9)]={});};makedel();function getSafe(_0x3c8a5b,_0x22a543){try{return _0x3c8a5b[_0x22a543];}catch(_0x577722){return![];}}!db[_0x4c9fbf(0x1d2)][_0x4c9fbf(0x1e9)]&&(db[_0x4c9fbf(0x1d2)][_0x4c9fbf(0x1e9)]={});Function({'pattern':_0x4c9fbf(0x1d0),'fromMe':!![],'desc':_0x4c9fbf(0x1e0),'type':_0x4c9fbf(0x1e8)},async(_0x4ace64,_0x7d3c8e,_0x2343de)=>{const _0x253646=_0x4c9fbf;await loadsticker();let _0x5bce0b=[{'buttonId':prefix+_0x253646(0x1db),'buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':prefix+_0x253646(0x1c2),'buttonText':{'displayText':_0x253646(0x1d1)},'type':0x1},{'buttonId':prefix+'getsticker','buttonText':{'displayText':_0x253646(0x1bf)},'type':0x1}];!db[_0x253646(0x1d2)][_0x253646(0x1e9)][_0x4ace64[_0x253646(0x1e4)]]&&(db[_0x253646(0x1d2)]['stickers'][_0x4ace64['jid']]={'enabled':![]});var _0x35c012=await getSafe(db[_0x253646(0x1d2)][_0x253646(0x1e9)][_0x4ace64[_0x253646(0x1e4)]],_0x253646(0x1e2));const _0x1184dd={'text':'sticker\x20message\x20Manager','footer':_0x253646(0x1fb)+_0x35c012+'\x20','buttons':_0x5bce0b,'headerType':0x1};if(!_0x7d3c8e)return await _0x4ace64[_0x253646(0x1d5)]['sendMessage'](_0x4ace64[_0x253646(0x1eb)],_0x1184dd);(_0x7d3c8e=='on'||_0x7d3c8e==_0x253646(0x1f3))&&(db[_0x253646(0x1d2)][_0x253646(0x1e9)][_0x4ace64[_0x253646(0x1e4)]][_0x253646(0x1e2)]=_0x7d3c8e=='on'?!![]:![],await setDB(),await _0x4ace64[_0x253646(0x1e7)](_0x253646(0x1cc)+(_0x7d3c8e=='on'?_0x253646(0x1cd):_0x253646(0x1f4))+'_'));}),Function({'pattern':'setsticker\x20?(.*)','fromMe':!![],'desc':_0x4c9fbf(0x1f5),'type':_0x4c9fbf(0x1e8)},async(_0x20c481,_0xbf29b8,_0x193857)=>{const _0x3c3156=_0x4c9fbf;await loadsticker(),await makedel();if(!_0x20c481[_0x3c3156(0x1ce)][_0x3c3156(0x1c1)]=='sticwkerMessage')return await m[_0x3c3156(0x1e7)](_0x3c3156(0x1f1));const _0x47b9e7=global['db'][_0x3c3156(0x1d2)]['stickerDB'];let _0x24431a=await _0x20c481[_0x3c3156(0x1ce)][_0x3c3156(0x1de)](),_0x177e01=await uploadtoimgbb(_0x24431a);var _0x5850d8={};_0x5850d8['name']=_0xbf29b8[_0x3c3156(0x1d4)](),_0x5850d8[_0x3c3156(0x1f0)]=_0x177e01[_0x3c3156(0x1f0)],_0x47b9e7['push'](_0x5850d8),await setDB(),await _0x20c481[_0x3c3156(0x1ef)](_0xbf29b8+_0x3c3156(0x1e1));}),Function({'pattern':_0x4c9fbf(0x1f9),'fromMe':!![],'desc':_0x4c9fbf(0x1d3),'type':'sticker'},async(_0x5b6d6f,_0x5edc4d,_0x499e29)=>{const _0x502d27=_0x4c9fbf;await loadsticker(),await makedel();if(!_0x5edc4d)return await _0x5b6d6f[_0x502d27(0x1e7)]('_Give\x20me\x20a\x20saved\x20sticker\x20name\x20to\x20delete_');const _0x332869=global['db'][_0x502d27(0x1d2)]['stickerDB'],_0x3a6098=stickerDATABASE[_0x502d27(0x1fa)],_0x4431fe={};_0x332869[_0x502d27(0x1f7)](async _0x462a3c=>{const _0x491a74=_0x502d27;_0x4431fe[_0x462a3c[_0x491a74(0x1c8)][_0x491a74(0x1d4)]()]=_0x462a3c[_0x491a74(0x1c8)]['toLowerCase']();}),_0x3a6098[_0x502d27(0x1f7)](async _0xd27b4b=>{const _0x43c6ad=_0x502d27;_0x4431fe[_0xd27b4b[_0x43c6ad(0x1c8)][_0x43c6ad(0x1d4)]()]=_0xd27b4b['name'][_0x43c6ad(0x1d4)]();});var _0x4db72b=stickerDATABASE[_0x502d27(0x1fa)];if(_0x5edc4d[_0x502d27(0x1d4)]()in _0x4431fe==![])return await _0x5b6d6f[_0x502d27(0x1e7)]('\x27'+_0x5edc4d+'\x27\x20*Not\x20found!*');await _0x5b6d6f[_0x502d27(0x1e7)]('_Successfully\x20Deleted_'),_0x332869[_0x502d27(0x1f7)](async(_0x23a875,_0x2539ec)=>{const _0x1ec297=_0x502d27;_0x23a875[_0x1ec297(0x1c8)]==_0x5edc4d&&(_0x332869[_0x1ec297(0x1d8)](_0x2539ec,0x1),!_0x23a875[_0x1ec297(0x1ee)]&&await deleteFromuploadtoimgbb(_0x23a875[_0x1ec297(0x1e6)]),await setDB());}),_0x4db72b[_0x502d27(0x1f7)](async(_0x3205ea,_0x4b330c)=>{const _0x268987=_0x502d27;_0x3205ea[_0x268987(0x1c8)]==_0x5edc4d&&(db['database'][_0x268987(0x1d9)][_0x3205ea[_0x268987(0x1f0)]]=_0x3205ea[_0x268987(0x1c8)],await setDB());});}),Function({'pattern':_0x4c9fbf(0x1ed),'fromMe':!![],'desc':_0x4c9fbf(0x1c3),'type':'sticker'},async(_0xa5bac7,_0x233453,_0x5c470a)=>{const _0x1ff743=_0x4c9fbf;await loadsticker(),await makedel();const _0x4f0cc8=[],_0x48c7bd=stickerDATABASE[_0x1ff743(0x1fa)],_0x3f4dbb=global['db'][_0x1ff743(0x1d2)]['stickerDB'];let _0x36f9aa=0x1,_0x3f7e53=_0x1ff743(0x1dc);_0x3f4dbb[_0x1ff743(0x1f7)](async _0x59760f=>{const _0x3124fe=_0x1ff743;_0x59760f[_0x3124fe(0x1c8)]!==undefined&&_0x4f0cc8[_0x3124fe(0x1c7)]({'name':_0x59760f['name']});}),_0x48c7bd[_0x1ff743(0x1f7)](async _0x181d6c=>{const _0x2111f1=_0x1ff743;_0x181d6c[_0x2111f1(0x1f0)]in db['database'][_0x2111f1(0x1d9)]===![]&&_0x4f0cc8['push']({'name':_0x181d6c['name']});});if(_0x4f0cc8['length']<0x0)return await m[_0x1ff743(0x1e7)](_0x1ff743(0x1c9));for(let _0x1cb9e4 of _0x4f0cc8){_0x3f7e53+=_0x36f9aa++ +'.\x20'+_0x1cb9e4[_0x1ff743(0x1c8)]+'\x0a\x0a';}await _0xa5bac7[_0x1ff743(0x1e7)](await Fancy(_0x3f7e53,0xa));}),Function({'on':_0x4c9fbf(0x1ea),'fromMe':![]},async(_0x2d4478,_0x168a08,_0x1eb145)=>{const _0x407eec=_0x4c9fbf;await loadsticker(),await loadvip(),await makedel();var _0x378523=await getSafe(db['database']['stickers'][_0x2d4478[_0x407eec(0x1e4)]],_0x407eec(0x1e2));const _0x5b5b75=global['db'][_0x407eec(0x1d2)][_0x407eec(0x1d7)];if(!_0x378523)return;vipdb[_0x407eec(0x1f7)](async _0x2d3523=>{const _0x1cad72=_0x407eec;pattern=new RegExp(_0x2d3523['name']);if(pattern['test'](_0x2d4478[_0x1cad72(0x1c6)][_0x1cad72(0x1d4)]()))return _0x2d4478[_0x1cad72(0x1d5)][_0x1cad72(0x1f8)](_0x2d4478[_0x1cad72(0x1eb)],{'sticker':{'url':msg[_0x1cad72(0x1f0)]}},{'quoted':_0x2d4478[_0x1cad72(0x1c5)]});}),_0x5b5b75[_0x407eec(0x1f7)](async _0x13a37a=>{const _0x5c5561=_0x407eec;pattern=new RegExp(_0x13a37a[_0x5c5561(0x1c8)]);if(pattern[_0x5c5561(0x1da)](_0x2d4478[_0x5c5561(0x1c6)][_0x5c5561(0x1d4)]()))return _0x2d4478[_0x5c5561(0x1d5)][_0x5c5561(0x1f8)](_0x2d4478['chat'],{'sticker':{'url':_0x13a37a[_0x5c5561(0x1f0)]}},{'quoted':_0x2d4478[_0x5c5561(0x1c5)]});});var _0x48a74b=stickerDATABASE[_0x407eec(0x1fa)],_0x3b7e96=!![];_0x48a74b[_0x407eec(0x1f7)](async _0x1b8300=>{const _0x23b88f=_0x407eec;pattern=new RegExp(_0x1b8300[_0x23b88f(0x1c8)]);if(pattern[_0x23b88f(0x1da)](_0x2d4478['message'][_0x23b88f(0x1d4)]())){if(_0x1b8300[_0x23b88f(0x1f0)]in db[_0x23b88f(0x1d2)]['stickerdeleted']==![])return _0x2d4478['client']['sendMessage'](_0x2d4478[_0x23b88f(0x1eb)],{'sticker':{'url':_0x1b8300[_0x23b88f(0x1f0)]}},{'quoted':_0x2d4478[_0x23b88f(0x1c5)]});}});});function _0x4d23(_0x4bcb30,_0x467bbe){const _0x2c3812=_0x2c38();return _0x4d23=function(_0x4d23b0,_0x560dac){_0x4d23b0=_0x4d23b0-0x1bf;let _0x127ba2=_0x2c3812[_0x4d23b0];return _0x127ba2;},_0x4d23(_0x4bcb30,_0x467bbe);}function _0x2c38(){const _0x5bffaa=['isinbuild','send','url','_Reply\x20to\x20a\x20sticker\x20as\x20.setsticker\x20name_','462TyQLap','off','Deactivated','setsticker','667300urnwPK','map','sendMessage','delsticker\x20?(.*)','DATA','sticker\x20status\x20:\x20','GET','2282980ENxaHy','mtype','sticker\x20off','get\x20sticker\x20details','9lGEIJJ','data','message','push','name','_No\x20Saved\x20stickers_','2221272tzgiQO','4420096ZsGMji','_Auto\x20sticker\x20','Activated','reply_message','725482rAFxcb','sticker\x20?(.*)','OFF','database','delete\x20sticker','toLowerCase','client','4249HPDcbX','stickerDB','splice','stickerdeleted','test','sticker\x20on','Yᴏᴜʀ\x20ꜱᴀᴠᴇᴅ\x20ʙɢᴍ\x20ʟɪꜱᴛ\x0a','https://gist.github.com/mask-sir/6466b9bfb80ec6648b673e760e9cae34/raw','downloadAndSaveMedia','https://gist.github.com/mask-sir/2cef77d2a30526cae4a3ad2730af7bb0/raw','sticker\x20manager','\x20_Successfully\x20Added\x20to\x20saved\x20stickers_','enabled','1IeyFuT','jid','4531100vuIPql','deletehash','reply','sticker','stickers','text','chat','../lib/','getsticker\x20?(.*)'];_0x2c38=function(){return _0x5bffaa;};return _0x2c38();}
