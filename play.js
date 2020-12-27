const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    const db = require('quick.db');

    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "";


let queue = args.join(" ");
if (!queue) return message.channel.send(`<a:CD:736010713088262144> ▸ Digite uma musica para pesquisar!`)
if(!message.member.voice.channel) return message.channel.send(`<a:Errado:736009566856413325> ▸ ${message.author}, você precisa estar conectado em um canal de voz para usar esse comando.`)


let playing = client.player.isPlaying(message.guild.id);

if(playing){

    let song = await client.player.addToQueue(message.guild.id, queue, message.member.user.tag);
    const embedh = new Discord.RichEmbed()

    .setThumbnail(song.thumbnail)
    .setAuthor(`Hydra Music | Musica Adicionada na Fila..`, "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
    .addField(`🔉 ▸ NAME MUSIC:`, `[${song.name}](${song.url})`)
    .addField(`🎤 ▸ AUTHOR MUSIC:`, `${song.author}`)
    .addField("<:users:748316564964769846> ▸ Pedido por:", `${song.requestedBy}`)
    .setTimestamp()
    .setFooter("Hydra Music • © Todos os direitos reservados.", "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
    .setColor('RANDOM')
    message.channel.send(embedh)

} else {

    let song = await client.player.play(message.member.voice.channel, queue, message.member.user.tag);
    const embedg = new Discord.RichEmbed()

    .setThumbnail(song.thumbnail)
    .setAuthor(`Hydra Music | ${message.author.tag}`, "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
    .addField(`🔉 ▸ NAME MUSIC:`, `[${song.name}](${song.url})`)
    .addField(`🎤 ▸ Author Music:`, `${song.author}`)
    .addField("<:users:748316564964769846> ▸ Pedido por:", `${song.requestedBy}`)
    .setTimestamp()
    .setFooter("Hydra Music • © Todos os direitos reservados.", "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
    .setColor('RANDOM')
    message.channel.send(`🎧 ▸ Me conectei ao canal de voz \`${message.member.voice.channel.name}\``)
    message.channel.send(embedg)
    song.queue.on('end', () => {
    message.channel.send(`<a:sonicDefaultDance:748296473300434964> ▸ MUSIC HAS BEEN END :(`)
    });

    song.queue.on('songChanged', (oldSong, newSong, skipped, repeatMode) => {
        if(repeatMode){
            const embedr = new Discord.RichEmbed()

            .setThumbnail(oldSong.thumbnail)
            .setAuthor(`Hydra Music | ${message.author.tag}`, "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
            .addField(`🔉 ▸ Nome da Musica:`, `[${oldSong.name}](${oldSong.url})`)
            .addField(`🎤 ▸ Author da Musica:`, `${oldSong.author}`)
            .addField("<:users:748316564964769846> ▸ Pedido por:", `${oldSong.requestedBy}`)
            .setTimestamp()
            .setFooter("Hydra Music • © Todos os direitos reservados.", "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
            .setColor('RANDOM')
            message.channel.send(embedr)
        } else {
            const embed = new Discord.RichEmbed()

            .setThumbnail(newSong.thumbnail)
            .setAuthor(`Hydra Music | ${message.author.tag}`, "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
            .addField(`🔉 ▸ NAME  Music:`, `[${newSong.name}](${newSong.url})`)
            .addField(`🎤 ▸ Author  Music:`, `${newSong.author}`)
            .addField("<:users:748316564964769846> ▸ Pedido por:", `${newSong.requestedBy}`)
            .setTimestamp()
            .setFooter("Hydra Music • © Todos os direitos reservados.", "https://cdn.discordapp.com/avatars/748191519638552576/7814a84656d63cfc8c4a8c82c0215ed8.png?size=1024")      
            .setColor('RANDOM')
            message.channel.send(embed)

        }
    });
}
}
  
module.exports.config = {
  name: "play",
  aliases: ['p', 'tocar']
}