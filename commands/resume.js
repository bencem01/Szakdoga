module.exports = {
    name: 'resume',
    aliases: ['resume', 'unpause'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Nincs zene a lejátszási sorban!`)
      if (queue.paused) {
        queue.resume()
        message.channel.send('Zene folytatódik...')
      } else {
        message.channel.send('Zene megállítva.')
      }
    }
  }