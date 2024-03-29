const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktokwm",
    alias: ["tiktokwm","ttwm","tiktokwatermark"],
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.tiktok.com/@vernalta/video/695975110141126579",
    exec: async(dinxyz, m, { prefix, command, text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let buttons = [
            {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
            {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.video_original },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: 'Powered by https://zenzapi.xyz',
            buttons: buttons,
            headerType: 5
        }
        dinxyz.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}