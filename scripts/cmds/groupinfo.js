const fs = require("fs-extra");
const request = require("request");

module.exports = {
config: {
    name: "groupinfo",
    aliases: ['boxinfo'],
    version: "1.0",
    author: "xemon",
    countDown: 5,
    role: 0,
    shortDescription: "See Box info",
    longDescription: "",
    category: "box chat",
    guide: {
      en: "{p} [groupinfo|boxinfo]",
    }
  },

 onStart: async function ({ api, event, args }) {
  let threadInfo = await api.getThreadInfo(event.threadID);
  var memLength = threadInfo.participantIDs.length;
  let threadMem = threadInfo.participantIDs.length;
  var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
  var nam = gendernam.length;
    var nu = gendernu.length;
   var listad = '';
   var qtv2 = threadInfo.adminIDs;
  let qtv = threadInfo.adminIDs.length;
  let sl = threadInfo.messageCount;
  let u = threadInfo.nicknames;
  let icon = threadInfo.emoji;
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
   for (let i = 0; i < qtv2.length; i++) {
const infu = (await api.getUserInfo(qtv2[i].id));
const name = infu[qtv2[i].id].name;
    listad += '•' + name + '\n';
  }
  let sex = threadInfo.approvalMode;
      var pd = sex == false ? 'Turned off' : sex == true ? 'Turned on' : 'Kh';
      var callback = () =>
        api.sendMessage(
          {
            body: `♻️「 𝗚𝗖 𝗡𝗔𝗠𝗘 」:${threadName}\n♻️「 𝗚𝗥𝗢𝗨𝗣 𝗜𝗗 」: ${id}\n♻️「 𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 」: ${pd}\n♻️「 𝗘𝗠𝗢𝗝𝗜 」: ${icon}\n♻️「 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 」: 𝗜𝗡𝗖𝗟𝗨𝗗𝗜𝗡𝗚 ${threadMem} 𝗠𝗘𝗠𝗕𝗘𝗥𝗦\n♻️「 𝗡𝗨𝗠𝗕𝗘𝗥 𝗢𝗙 𝗠𝗔𝗟𝗘𝗦 」: ${nam}\n♻️「 𝗡𝗨𝗠𝗕𝗘𝗥 𝗢𝗙 𝗙𝗘𝗠𝗔𝗟𝗘𝗦 」:  ${nu}\n♻️「 𝗧𝗢𝗧𝗔𝗟 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗧𝗢𝗥𝗦 」: ${qtv} \n「 𝗜𝗡𝗖𝗜𝗨𝗗𝗘 」:\n${listad}\n♻️「 𝗧𝗢𝗧𝗔𝗟 𝗡𝗨𝗠𝗕𝗘𝗥 𝗢𝗙 𝗠𝗘𝗦𝗦𝗔𝗚𝗘𝗦 」: ${sl} msgs.\n\n𝗠𝗔𝗗𝗘 𝗪𝗜𝗧𝗛 ❤️ 𝗕𝗬: TERAA BAPPP `,
            attachment: fs.createReadStream(__dirname + '/cache/1.png')
          },
          event.threadID,
          () => fs.unlinkSync(__dirname + '/cache/1.png'),
          event.messageID
        );
      return request(encodeURI(`${threadInfo.imageSrc}`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
 }
};
