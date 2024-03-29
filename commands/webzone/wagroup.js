const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wagroup",
    alias: ["wagroup"],
    desc: "Search WhatsApp Group",
    type: "webzone",
    example: `Example : %prefix%command Mabar`,
    exec: async(dinxyz, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/wagroup", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `WA Group Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Name : ${i.nama}\n`
            caption += `⭔ Link : ${i.link}\n\n`
        }
        dinxyz.sendText(m.from, caption, m)
    },
    isQuery: true
}
