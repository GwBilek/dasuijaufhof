const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wamods",
    alias: ["wamod"],
    desc: "Search WhatsApp Mod Apk",
    type: "webzone",
    example: `Example : %prefix%command gbwa`,
    exec: async(dinxyz, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/wamods", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Wamods Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Apk Name : ${i.apk_name}\n`
            caption += `⭔ Apk Url : ${i.apk_url}\n`
            caption += `⭔ Apk Desc : ${i.apk_desc}\n\n`
        }
        dinxyz.sendFile(m.from, fetch.result[0].apk_image, "", m, { caption })
    },
    isQuery: true
}
