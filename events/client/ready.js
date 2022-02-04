const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async client => {
    console.log(`${client.user.username} ready`)
    var activities = [ `${client.guilds.cache.size} servers`, `${client.users.cache.size} users!` ], i = 0;
    setInterval(() => client.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)
    
};
