module.exports = {
    name: 'pause',
    aliases: ['pause', 'hold'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Nincs zene a lejátszási sorban!`)
      if (queue.paused) {
        queue.resume()
        return message.channel.send('Zene folytatódik...')
      }
      queue.pause()
      message.channel.send('Zene megállítva.')
    }
  }