const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tikporn",
    alias: ["tikporn"],
    desc: "Download Media From tikporn",
    type: "downloader",
    example: "Example : %prefix%command",
    exec: async(dinxyz, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/tikporn", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Desc : ${fetch.result.desc}\n⭔ Upload : ${fetch.result.upload}\n⭔ Like : ${fetch.result.like}\n⭔ Dislike : ${fetch.result.dislike}\n⭔ Views : ${fetch.result.views}`
        dinxyz.sendFile(m.from, fetch.result.video, "", m, { caption: teks })
    },
}