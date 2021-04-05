var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Hi",
assets : {
large_image : "lavaboydev",
large_text : "Hi" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Add Rayong to your" , url : "https://www.youtube.com"},{label : "test",url : "https://www.youtube.com"}]
}
})
})
client.login({ clientId : "828581140192690187" }).catch(console.error);