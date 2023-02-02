module.exports = {
    name: 'volume',
    aliases: ['v', 'set', 'set-volume'],
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Nincs zene a lejátszási sorban!`)
      const volume = parseInt(args[0])
      if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Kérlek írj be egy számot!(0-100)`)
      queue.setVolume(volume)
      message.channel.send(`${client.emotes.success} | Hangerő szabályozva erre az értékre: \`${volume}\``)
    }
  }