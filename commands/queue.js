module.exports = {
    name: 'queue',
    aliases: ['q'],
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | Nincs zene a lejátszási sorban!`)
      const q = queue.songs
        .map((song, i) => `${i === 0 ? 'Most megy' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join('\n')
      message.channel.send(`${client.emotes.queue} | **Lejátszási lista**\n${q}`)
    }
  }