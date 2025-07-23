module.exports = {
  config: {
    name: "Wife",
    version: "1.0",
    author: "shanto",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {}, 

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() === "wife") {
      try {
        const videoStream = await global.utils.getStreamFromURL("https://files.catbox.moe/q0no2f.mp4");
        return message.reply({
          body: "╭─────────────╮\n" +
                " 🖤ɞ 𝐒𝐡𝐚𝐧𝐭𝐨'𝐬 𝐖𝐢𝐟𝐞𝐲 ɞ🖤\n" +
                "╰─────────────╯\n\n" +
                "✨ 𝑯𝒆𝒚! 𝑳𝒐𝒐𝒌 𝒘𝒉𝒐'𝒔 𝒉𝒆𝒓𝒆...\n" +
                "𝐒𝐚𝐧𝐭𝐨'𝐬 𝐜𝐮𝐭𝐞 𝐥𝐢𝐭𝐭𝐥𝐞 𝐩𝐫𝐢𝐧𝐜𝐞𝐬𝐬 ❀\n\n" +
                "───────⋆⋅☆⋅⋆───────\n" +
                "『 𝖘𝖍𝖆𝖓𝖙𝖔: 🕸️ SpideY 🕷️ 』",
          attachment: videoStream
        });
      } catch (error) {
        console.error("Error sending video:", error);
        return message.reply("Sorry, I couldn't send the video right now. 🥺");
      }
    }
  }
};
