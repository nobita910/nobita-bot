module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Shawon Sheikh",
	description: "Admin and Bot info.",
	commandCategory: "Owner",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["",
"",
" "];
var callback = () => api.sendMessage({body:`𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ❤🪽

✰𝗕𝗢𝗧 𝗡𝗔𝗠𝗘✰: ${global.config.BOTNAME}

✿︎𝗕𝗼𝘁 𝗔𝗗𝗠𝗜𝗡✿︎ ☞︎︎︎ NISAN EDITZ

༆ 𝐁𝐎𝐓 𝐎𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐃 𝐋𝐢𝐧𝐤 :\n➪ https://www.facebook.com/nisan.editz2005 

💗 𝙁𝙊𝙍 𝘼𝙉𝙔 𝙆𝙄𝙉𝘿 𝙊𝙁 𝙃𝙀𝙇𝙋  𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙊𝙉 𝙁𝘽 :\n➪ ✨NISAN ✨

✧━━━━━━━━━━━━━━━❤🪽

🔍 𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫❀: ➪ [ ${global.config.PREFIX} ] 


🕐𝗨𝗣𝗧𝗜𝗠𝗘🕙 𝟚𝟜/𝟟

✰𝗧𝗢𝗗𝗔𝗬 𝗜𝗦✰\n\n${juswa} 

᯾𝗕𝗢𝗧 𝗜𝗦 𝗥𝘂𝗻𝗻𝗶𝗻𝗴᯾ [ ${hours}:${minutes}:${seconds} ]

💟𝐓𝐡𝐚𝐧𝐤 𝐘𝐨𝐮 𝐅𝐨𝐫 𝐔𝐬𝐞𝐢𝐧𝐠  ${global.config.BOTNAME} 

☞︎︎︎☕︎ 𝗛𝗔𝗣𝗣𝗬 𝗕𝗢𝗧 𝗨𝗦𝗘𝗥𝗦 🥳


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
