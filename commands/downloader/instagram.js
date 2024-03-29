const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instagram",
    alias: ["igdl","instadl"],
    desc: "Download Media From https://instagram.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.instagram.com/p/COmKbcQDmIv&",
    exec: async(dinxyz, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram2", { url:isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        for (let url of fetch.result) dinxyz.sendFile(m.from, url, "", m, { caption: `Download Media From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}