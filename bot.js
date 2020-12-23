const Discord = require('discord.js');
const bot = new Discord.Client();
const dateFormat = require('dateformat');//npm i dateformat
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const ms = require("ms");
const moment = require('moment');
const request = require('request');
const fs = require("fs");
const prefix = 'b!'
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const nekoclient = require('nekos.life');
const neko = new nekoclient();



client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('By black jack');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ")
  client.user.setActivity(`${prefix}help | DASTKARE DAKRE CHAWARE BN ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("idle")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})




client.on('message', message => {
  if(message.author.bot) return undefined;
let args = message.content.split(" ");
let msg = args.slice(1)
if(args.slice(0) == prefix + 'bc') {
  if(!msg) return message.channel.send('⚠️ | Please Type The Message To Send The BC')
client.users.forEach(m => {
m.send(msg)
})
message.channel.send('Done chek brodcast ✅');
}//////by black jack
});

client["on"]("message", message => {
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "kick")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}kick \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).kick(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Kicked <@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});
 
client["on"]("message", message => {
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "ban")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}ban \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).ban(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Banned <@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});
 
 client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});
 
///by black jack
      
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "clog")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "Tanha bo owner ship~"
      );
      message.guild.createChannel("Logs", "category").then(catg =>{
      message.guild.createChannel("log-unban", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.createChannel("log-message", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.createChannel("log-ban", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.createChannel("log-join", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.createChannel("log-leave", "text").then(chat => { chat.setParent(catg.id) })
  message.channel.sendMessage(':white_check_mark: **Done Create.**')
      })
  }
  });

 client.on('message', message => {
  if(message.content === prefix + "user"){
    var embed = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setFooter("CREATED BY BLACK JACK")
    .setTitle(message.author.tag, message.author.avatarURL)
    .addField(`User`, message.author.username)
    .addField(`Ping` , `${Date.now() - message.createdTimestamp}` + ' ms`')
    .addField(`tag`,`#`+ message.author.discriminator)
    .addField(`Role`, message.member.colorRole)
    .addField(`Status`,message.author.presence.status)
    .setColor("RANDOM")
    message.channel.send(embed);
  }
});


client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`THANKS FOR INVITE YOU SERVER`)
        guild.channel.send(embed)
  });
 client.on('guildDelete', guild => {
    var embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`THANKS FOR KICKED YOU SERVER`)
        guild.owner.send(embed)
  });
 //////black jack new code v12```



client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("MY PREFIX b!");
    }
});

const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {

        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| اكتب اسم الروم الان... :pencil2: **').then(msg => {
      
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
        
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   } 
            )
        })
    })
})
    })
}})
    
client.on('message', message => {
           if (!message.channel.guild) return;

    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setWelcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Welcome Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off',
leave: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
    }})
    

            client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleLeave")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
            onoff: 'Off',
          leave: 'Off'
        }
          if(welcome[message.guild.id].leave === 'Off') return [message.channel.send(`**The Leave Msg Is __𝐎𝐍__ !**`), welcome[message.guild.id].leave = 'On']
          if(welcome[message.guild.id].leave === 'On') return [message.channel.send(`**The Leave Msg Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].leave = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })
client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleWelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          onoff: 'Off'
        }
          if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`**The Welcome Is __𝐎𝐍__ !**`), welcome[message.guild.id].onoff = 'On']
          if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].onoff = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })
        

        
        client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleDmwelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          dm: 'Off'
        }
          if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`), welcome[message.guild.id].dm = 'On']
          if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].dm = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })

        client.on('message', message => {
  
            if(message.content.startsWith(prefix + "toggleInvitedby")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                if(!welcome[message.guild.id]) welcome[message.guild.id] = {
                  by: 'Off'
                }
                  if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`**The Invited By Is __𝐎𝐍__ !**`), welcome[message.guild.id].by = 'On']
                  if(welcome[message.guild.id].by === 'On') return [message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].by = 'Off']
                  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                    if (err) console.error(err)
                    .catch(err => {
                      console.error(err);
                  });
                    })
                  }
                  
                })
      client.on("guildMemberRemove", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off',
          leave: 'Off'
        }
        
        if(welcome[member.guild.id].onoff === 'Off') return;
                if(welcome[member.guild.id].leave === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].leavechannel}`)
    if(!welcomer) return;
     welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
      })          

client.on("guildMemberAdd", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
        if(welcome[member.guild.id].onoff === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(' | name : ', `${member}`)
        
        .addField('| Your are the member', `${member.guild.memberCount}`)
        
        .addField(': Joined discord',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
        .addField(': Joined server',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)    
        .setimage('https://media.discordapp.net/attachments/778541949900423189/791213512876752906/image0.gif')
        .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
     fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
        if (err) console.error(err)
        .catch(err => {
          console.error(err);
      });
        })
      }})



client.on('guildMemberAdd',async member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
    if(welcome[member.guild.id].onoff === 'Off') return;
    var Canvas = require('canvas');
    const jimp = require('jimp');
    const w = ['./welcome_4.png'];
          let Image = Canvas.Image,
              canvas = new Canvas.createCanvas(800, 300),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
   
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 800, 300);
   
  })
   
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                   if (err) return console.log(err);
   
            ctx.font = '36px Arial';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(member.user.username, 545, 177);
           
            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(`Your The Member ${member.guild.memberCount}`, 580, 200);
           
            let Avatar = Canvas.Image;
            let ava = new Avatar;
            ava.src = buf;
            ctx.beginPath();
            ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 36, 21, 260, 260);
             
            let c = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
            if(!c) return;
            c.sendFile(canvas.toBuffer());
            fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                if (err) console.error(err)
                .catch(err => {
                  console.error(err);
              });
                })
   
  });
  });
  });

  const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  by: 'Off'
                }
    if(welcome[member.guild.id].by === 'Off') return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
    if(!logChannel) return;
      setTimeout(() => {
    logChannel.send(`Invited By: <@${inviter.id}>`);
  },2000)
  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
    .catch(err => {
      console.error(err);
  });
    });
  });
});

client.on("guildMemberAdd", member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  dm: 'Off'
                }
        if(welcome[member.guild.id].dm === 'Off') return;
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
    .catch(err => {
      console.error(err);
  });
    })
})

const sWlc = {}
client.on('message', message => {
var prefix = "-";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});

client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
       .addField(' | name : ', `${member}`)
        .addField('| Your are the member', `${member.guild.memberCount}`)
        .addField(': Joined discord',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': Joined server',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)    
         .setimage('https://media.discordapp.net/attachments/778541949900423189/791213512876752906/image0.gif')
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
     const w = ['swlc.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To Server`, 245, 80);
    
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });

const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
 
client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;
 
  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);
 
  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldMessage.content.startsWith("https://")) return;
let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);
 
  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);
 
    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);
 
    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);
 
      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
   let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);
 
      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);
 
    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);
 
    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);
 
      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
   .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);
 
      logChannel.send(newTopic);
    }
  });
});
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (userID === client.user.id) return;
 
    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);
 
    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (userID === client.user.id) return;
 
    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);
 
    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;
 
  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;
 
    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }
 
      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);
 
 logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
 
if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);
 
    logChannel.send(newOwner);
  }
});
 
client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;
 
  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverUnmutev);
 
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverUndeafv);
    }
  });
 
if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);
 
    logChannel.send(voiceLeave);
  }
});

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedReactionRole} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})
 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
}); //TALABANI

client.on('message', message => {  
    if (message.author.bot) return; ///BLACK JACK
    if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(`**ئەم فەرمانە تایبەتە بە سێرڤەر **`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** ببورە تۆ ئەم رۆلەت نیە!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`** Done , Deleted \`${msgs.size}\` messages.**`).then(messages => messages.delete(5000));
    })
  }
});  ///BY BLACK JACK



  

    


    
        



client.on("message", m => {
  if (m.content === prefix + "help") {
    let Dashboard = `
anti ban [number]
anti kick [number]
anti channelD [number]
anti channelC [number]
anti roleD [number]
anti roleC [number]
anti time [number]
antibots [on / off]
settings

**MODERATION**
 b!mute,b!unmute
 b!move,moveall
 b!ban
 b!unban
 b!c text
 b!c vc  
 b!kick
 b!clear <number>
 b!lock
 b!unlock
 **GENERAL COMMAND**
 b!count
 b!roles
 b!server
 b!say,embed
 b!botinfo
 b!about
 b!invite
 b!user
 **FUNNY COMAND**
coming soon....

Best Discord __AntiSpam__
Best Discord __AntiShare Everyone & Here & Link .__`;
    var addserver = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`;
    var SUPPORT = `https://discord.gg/6ASrSeG`;
    let embed = new Discord.RichEmbed()
      .setTitle(`${m.author.username}`)
      .setDescription(
        `**${Dashboard}**
  **[Add To Your Server ](${addserver})** | **[ Server Support](${SUPPORT})**`
      )
      .setImage("");
    m.channel.send(embed);
  }
});
client.on("message", (Black) => {
if (Black.content.startsWith(prefix + "c text")) {
            if (!Black.member.hasPermission('MANAGE_CHANNELS')) return Black.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = Black.content.split(" ").slice(1);
    Black.guild.createChannel(args.join(' '), 'text');
Black.channel.sendMessage('Created text channel✅')
 
}
});
client.on("message", (Black) => {
if (Black.content.startsWith(prefix + "c vc")) {
            if (!Black.member.hasPermission('MANAGE_CHANNELS')) return Black.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = Black.content.split(" ").slice(1);
    Black.guild.createChannel(args.join(' '), 'voice');
    Black.channel.sendMessage('Created voice✅')
 
}
});
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("Ownership")) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**➕ | The antibots is \`ON\`.**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("Ownership")) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**➖ | The antibots is \`OFF\`.**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "on"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
client.on("message", message => {
  if (message.content === prefix + "settings") {
    if (!message.member.hasPermission("Ownership"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const black = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL).setDescription(`AntiBan
Enabled:🟢 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled:🟢 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled:🟢 
Maximum Time : ${config[message.guild.id].time}
`);

    message.channel.sendEmbed(black);
  }
});
client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
 
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**🔒 Locked chat**");
      });
  }
  //BLACK JACK
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
 
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you donst have permisssion");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**🔓 Unlock chat**");
      });
  }
});
 client.on('message', message => { //Black jack
    if (!message.channel.guild) return;
if(message.content == prefix + 'count') //Black jack
var Black = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle('🌍| زانیاری سێرڤەر ',`__${message.guild.name}__`)
.addBlankField(true) //Black jack
.addField('ژمارەی میبەرەکان',`__${message.guild.memberCount}__`)
message.channel.send(Black);
}); 
 

client.on("message", message => {
 if (message.content === prefix + 'invite') {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('BLACK BOT')
      .addField('click here',`                          `)
  message.author.send({embed});

 }
}); 



client.on("message", message => {
 if (message.content === prefix + 'support'){
  const embed = new Discord.RichEmbed()
      .setTitle('Click HERE')
      .setURL(' JOIN SERVER ')
      .setColor("RANDOM")
      .setFooter('BLACK BOT')  
      .addField('SERVER', ` https://discord.gg/ZnPDHaA  `)
  message.author.send({embed});

 }
});
  
client.on("message", async message => {
 if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (cmd === `b!mute`){
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("**Could't Find User**");
    if(tomute.permissions.has("MUTE_MEMBERS")) return message.channel.send("**Can't Mute Him**");
    let muterole = message.guild.roles.cache.some(hama => hama.neme === "muted");
    if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("**Type Time!**")
    await(tomute.roles.add(muterole.id));
    message.channel.send(`**<@${tomute.id}> has been muted for ${ms(ms(mutetime))}**`);
     setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  }
});
  

  

client.on('guildDelete', guild => {
  let joinedbot = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(' | جۆینی سێرڤەر کرا')
  .setFooter('CREATED BY BLACK JACK')
  .setDescription(`
  Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  client.channels.get("499657112041947136").send(joinedbot);
});////BY BLACK JACK
 
client.on('guildDelete', guild => {
  let kickedbot = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle('| دەرکرا لە سێرڤەر ')
  .setFooter('CREATED BY BLACK JACK')
  .setDescription(`
  Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  client.channels.get("499657112041947136").send(kickedbot);
});////BY BLACK JACK


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content == prefix + 'members')
      var black = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🙆| INFO MEMBER')
      .addBlankField(true)
      .addField('🐸| ONLINE MEMBER',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('😡| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('🐨| IDLE',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('😴| OFFLINE',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('👨‍👨‍👧‍👧| ALL MEMBERS',`${message.guild.memberCount}`)
      message.channel.send(black);
    
    });









client.on('message', message => {
     if (message.author.bot) return;
if (message.content == prefix + 'uptime') {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`**🎛 **");

}
});



client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbots') {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
     if (message.content === prefix + "ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``خێرای خەتت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` BLACK BOT
 .`, 'https://aladdintravel.com/wp-content/uploads/2014/11/pinterest-logo-2-1074x1067.png')

  message.channel.sendEmbed(embed);
    }
});







  
        







   

var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg?cs=srgb&dl=adorable-animal-animal-photography-1022158.jpg&fm=jpg",
"https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?cs=srgb&dl=adorable-animal-animal-photography-248280.jpg&fm=jpg",
"https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?cs=srgb&dl=adorable-animal-cat-156934.jpg&fm=jpg",
"https://images.pexels.com/photos/385960/pexels-photo-385960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=adorable-animal-animal-photography-735423.jpg&fm=jpg",
"https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
















client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === prefix + 'list ban') {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` ***: ژمارەی باند بوەکان ***`)).then(message => message.delete(5000))

  .catch(console.error);
}
});

client.on("message", msg => {
    if(msg.content == prefix + 'guild'){
      let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆",msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp()
      msg.channel.send(embed);
    }
  });
//BJ<BLACK/JACK>


client.on("message", message => {
if (!message.channel.guild) return;
  if (message.content === prefix + "ccolor") {
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      message.delete(1000);
      message.channel.send("50 colors were created | ✅").then(message => {
        message.delete(5100);
      });
    } else {
      message.channel.send("ببورە ئەم پێرمیشنەت نییەMANAGE ROLES |❌");
    }
  }
});
 
client.on("message", message => {
  if (message.content === prefix + "ccolor") {
    if (!message.channel.guild){return;}
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      let count = 0;
      let ecount = 0;
      for (let x = 1; x < 51; x++) {
        message.guild.createRole({ name: x, color: "RANDOM" });
      }
    }
  }
});
//by black jack

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'pussywank')) {
  const GIF = await neko.nsfw.pussyWankGif();
  const embed = new Discord.RichEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random pussy wank gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});


  client.on('message', message => {
if(message.content.startsWith(prefix + "slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



client.on('message', async message => {
    if(message.content.includes('discord.gg')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})

client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('BBWRA ROLET NYA');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('BBWRA ROLET NYA');
    message.channel.send('ZHWRAKA DRWST BW');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });
 
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('BBWRA AW ROLAT NYA');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('BBWRA AW ROLAT NYA');
    message.channel.send('ZHWRAKA DRWST BW');
    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Members Count :  ${message.guild.memberCount} `)
      },1000);
    });
    }
  });
 
 
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('BBWRA ROLET NYA');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('BBWRA ROLET NYA');
    message.channel.send('ZHWRAKA DRWST BW');
    message.guild.createChannel("?? - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {
 
        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();
 
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }
 
        c.setName("?? - Time   ?" + hours + ":" + minutes  +" " + suffix + "?");
      },1000);
    });
    }
  });
 
 
 
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **ليس معي الصلاحيات الكافية**');
    message.channel.send('?| **تم عمل الروم بنجاح**');
    message.guild.createChannel("?? - Date " + "?" + day + "-" + month + "-" + years + "?" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("?? - Date " + "?" + day + "-" + month + "-" + years + "?")
      },1000);
    });
    }
  });
 
  client.on('message',async message => {
    var moment = require('moment');
      if(message.content.startsWith(prefix + "setDays")) {
      if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('ببورە ئەو رۆلەت نیە');
      if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **ليس معي الصلاحيات الكافية**');
      message.channel.send('?| **تم عمل الروم بنجاح**');
      message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
        console.log(`Day channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`?? - Day : ?${moment().format('dddd')}?`);
        },1000);
      });
      }
    });

client.on('message', message => { 
if(message.content === prefix + "premium") { 
  var start = moment()[2019, 8, 6];
var end   = moment([2019, 9, 6]);
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setDescription(`Today is: \`${moment().format("dddd, MMMM Do YYYY")}\`
School Date: \`2019/9/1\`
Time left: \`${moment("20190901", "YYYYMMDD", true).fromNow()}\``)
  message.channel.send(embed)
}
});
  


client.on('message', async message => {
    if(message.content.includes('@everyone','@here','maza','qn','qwn','daykt','dakt','daikt','bgem','دایکت')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : type meniton everyone or bad word**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})







  
    
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/





	
client.login(process.env.BOT_TOKEN);
