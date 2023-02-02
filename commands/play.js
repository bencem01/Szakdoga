module.exports = {
    name: 'play',
    aliases: ['p'],
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const string = args.join(' ')
      if (!string) return message.channel.send(`${client.emotes.error} | Kérlek adj meg egy kulcsszót vagy linket a zene lejátszásához!`)
      client.distube.play(message.member.voice.channel, string, {
        member: message.member,
        textChannel: message.channel,
        message
      })
    }
  }
  