module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Nincs zene a lejátszási sorban!`)
      const song = queue.songs[0]
      message.channel.send(`${client.emotes.play} | Most megy: **\`${song.name}\`**, by ${song.user}`)
    }
  }
  