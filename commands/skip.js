module.exports = {
    name: 'skip',
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Nincs zene a lejátszási sorban!`)
      try {
        const song = await queue.skip()
        message.channel.send(`${client.emotes.success} | Skippelve! Most megy:\n${song.name}`)
      } catch (e) {
        message.channel.send(`${client.emotes.error} | ${e}`)
      }
    }
  }