const Discord = require("discord.js");
const bot = new Discord.Client();
const dateFormat = require("dateformat"); //npm i dateformat
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const ms = require("ms");
const moment = require("moment");
const request = require("request");
const fs = require("fs");
const prefix = "b!";
const Enmap = require('enmap')
const google = require('google-it');
const db = require('quick.db');
var youtube = ("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const yt_api_key = "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8";
const nekoclient = require("nekos.life");
const neko = new nekoclient();


client.on("ready", () => {
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log("By black jack"); /////BLACK JACK
  console.log("BLACK BOT");
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
  client.user.setActivity(
    `${prefix}help | BLACK BOT IS HERE: SERVERS ${client.guilds.size}`
  ); 
  client.user.setStatus("idle"); /////by black jack
  console.log(`Logined`);
});

 




 

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///by black jack

//Best Rainbow Bot .

client.on("message", message => {
  if (message.content === prefix + "roles") {
    if (!message.channel.guild) return;
    var roles = message.guild.roles.map(roles => `${roles.name}, `).join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Roles:", `**[${roles}]**`);
    message.channel.sendEmbed(embed);
  }
});


client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});

client.on("message", message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    if (message.author.bot || message.channel.type == "dm") return;
    let mention = new Discord.RichEmbed()
      .setColor("black")
      .setDescription(
        ` ✽  **Hi I'm Black Bot **  
✽  **Support Server** [ https://discord.gg/GmSYVCQMRU ] 
✽  **Add bot ** [ https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975 ] 
✽  **Bot orders** [ • **b!help** • ]   `
      )
 
      .setImage("https://images-ext-1.discordapp.net/external/RXd_Kc0_Ji0JNg67qAZcHPUOL8o60DLt3qecFb5FuC4/https/media.discordapp.net/attachments/777510905041911819/792459601193992202/image0.gif");
    message.channel.send(mention);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("en-TN");
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField(
        " Joined Discord At : ",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        " Joined Server At : ",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setFooter(
        `${message.author.username}`,
        "https://images-ext-1.discordapp.net/external/RXd_Kc0_Ji0JNg67qAZcHPUOL8o60DLt3qecFb5FuC4/https/media.discordapp.net/attachments/777510905041911819/792459601193992202/image0.gif"
      )
      .setThumbnail(heg.avatarURL);
    message.channel.send(id);
  }
});
const pretty = require("pretty-ms");
const Canvas = require('canvas')
const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
if (args[0].toLowerCase() == `${prefix}credits` ||
args[0].toLowerCase() === `${prefix}credit` ||
args[0].toLowerCase() === `c`
 
) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**:bank: | ${mention.username}, Your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2])) return message.channel.send(`** :interrobang: | ${message.author.username}, i can't find it!**`);
      if (args[2] < 1) return message.channel.send(`** :interrobang: | ${message.author.username}, type the credit you need to transfer!**`);
      if (mention.bot) return message.channel.send(`**:thinking: | ${message.author.username}, bots do not have credits**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:interrobang: | ${message.author.username}, I can't find User **`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:thinking: | ${message.author.username}, Your balance is not enough for that!**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:interrobang: | ${message.author.username}, type the credit you need to transfer!**`);
      //let resulting = Math.floor(args[2] - args[2] * (5 / 100));
      let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 10);
      let second = Math.floor(Math.random() * 10);
      let third = Math.floor(Math.random() * 10);
      let fourth = Math.floor(Math.random() * 10);
      let num = `${ first }${ second }${ third }${ fourth }`;
      let canvas = Canvas.createCanvas(100, 50);
      let ctx = canvas.getContext("2d");
 //let tax = message.content.split(" ")[1]
let Price = message.content.split(" ")[2];
 //tax = tax.replace(/%5/g,"");
let resulting = Math.floor(Price-(Price*(5/100)));      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/365219235288317962/656362038884565014/captcha.png"
      );
      ctx.drawImage(background, 6, 3, canvas.width, canvas.height);
      ctx.font = "25px Tahoma";
          ctx.fontSize = "7px";
          ctx.fillStyle = "Yellow";
message.delete();
     //let resulting = Math.floor(Price-(Price*(5/100)));
      message.channel.send(`**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **
   type these numbers to confirm : `
).then(m => {
 
          ctx.fillText(num, canvas.width / 4.8, canvas.height / 1.5);
          message.channel.sendFile(canvas.toBuffer()).then(s => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
 
              }) 
 
              .then(collected => {
 
                if (collected.first().content === num) {
 
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, has transferred \`$${resulting}\` to ${mentionn}**`
                  );           m.delete();
s.delete();
                  mention.send(
                    `**:atm: | Transfer Receipt**\`\`\`You Have Received \$${resulting}\ From User ${message.author.username}; (ID ${    message.author.id     })\`\`\``);
  m.delete();
s.delete();
 
                  credits[author].credits += Math.floor(
                    -resulting
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                }
              });
          });
        });
    } 
  }
 
  if (args[0].toLowerCase() === `${prefix}daily` ||
 args[0].toLowerCase() === `d`
) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send( `**:rolling_eyes: | ${ message.author.username }, your daily credits refreshes in \'${pretty(times, { verbose: true })}'.\**`);
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:moneybag: ${message.author.username}, You got :dollar: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
});

let sw = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))
 
    client.on('message', message => {
const Canvas = require("canvas") // npm i canvas
const fs = require("fs") // npm i fs
 
        let mothed = ['text', 'embed', 'image'];
        let sets = message.content.split(" ").slice(1).join(" ")
        let style = message.content.split(" ").slice(2).join(" ")
        let stym = message.content.split(" ").slice(3).join(" ")
        let msz = message.content.split(" ").slice(2).join(" ")
        let ch = message.content.split(" ").slice(2).join(" ")
        let r = message.content.split(" ").slice(4).join(" ")
 
 
        if(message.content.startsWith(prefix + "setWlc")) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
            if(!sw[message.guild.id]) sw[message.guild.id] = {
                cha: "welcome",
                msz: "Welcome to server",
                styler: "text"
            };
 
            if(!sets) {
                message.channel.send(`**Usage:
            ${prefix}setWlc style <text, image, embed>
            ${prefix}setWlc msg <message>
            ${prefix}setWlc channel <channel name>**`)
            }
 
            if(!mothed) {
                message.channel.send(`**Usage: ${prefix}setWlc style <text, imgae, embed>**`)
            }
 
            if(message.content === prefix + 'setWlc style image') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                sw[message.guild.id].styler = 'image'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)
            }
 
            if(message.content === prefix + 'setWlc style embed') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                 sw[message.guild.id].styler = 'embed'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)            }
 
            if(message.content === prefix + 'setWlc style text') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                 sw[message.guild.id].styler = 'text'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)
            }
 
        }
 
        if(message.content.startsWith(prefix + "setWlc msg")) {
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You need `Manage Messages` permission**")
            if(!msz) {
                message.channel.send("Usage: <setWlc msg <message>")
            } else {
                message.channel.send(`**Your server welcome message has been changed to __${msz}__**`)
                sw[message.guild.id].msk = msz
            }
        }
 
        if(message.content.startsWith(prefix + "setWlc channel")) {
            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
            if(!ch) {
                message.channel.send("Usage: <setWlc channel <channel name>")
            }
            let chn = message.guild.channels.find("name", ch)
            if(!chn) {
                message.channel.send("**I can't find this channel**")
            }
            else {
                 sw[message.guild.id].cha = chn.name
                 message.channel.send(`**Your server welcome channel has been changed to __${chn.name}__**`)
                 }
        }
 
        fs.writeFile('./setWlc.json', JSON.stringify(sw), (err) => {
if (err) console.error(err);
})
})
 
 
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find("name", sw[member.guild.id].cha)
 
    if(sw[member.guild.id].styler === "text") {
        channel.sendMessage(`<@${member.user.id}>, ${sw[member.guild.id].msk}`)
    }
 
    if(sw[member.guild.id].styler === "embed") {
 
        const embed = new Discord.RichEmbed()
        .setTitle("Member joind.")
        .setColor("GREEN")
        .setThumbnail(member.user.avatarURL)
        .setDescription(`**${sw[member.guild.id].msk}**`)
        .addField("**Member name**", `[<@${member.user.id}>]`,true)
        .addField("**Now we are**", `[${member.guild.memberCount}]`,true)
        channel.sendMessage(`<@${member.user.id}>`)
        channel.sendEmbed(embed)
    }
 
    if(sw[member.guild.id].styler === "image") {
        if (member.user.bot) return;
const w = ['./w1.png','./w2.png','./w3.png','./w4.png','./w5.png','./w6.png','./w7.png','./w8.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
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
            ctx.drawImage(ground, 0, 0, 749, 198);
 
})
 var jimp = require('jimp')
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
ctx.font = '35px Aeland';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to " + member.guild.name , 440, 25);
 
                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 420, 100);
 
                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(sw[member.guild.id].msk, 410, 170);
 
 
                        //Avatar
                        let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(115, 100, 90, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 5, 5, 200, 200);
                                 channel.sendMessage(`<@${member.user.id}>`)
        channel.sendFile(canvas.toBuffer())
 
 
 
})
})
 
    }
 
})


                      
    
 
            

 
 
 
 
 
 

   
                  
 

 

      




              
      
 
    
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
let warnings = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
client.on("message", async message => {
  var channellog = message.guild.channels.find(
    "name",
    `${log[message.guild.id].channel}`
  );
  var user = message.mentions.users.first();
  var reason = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MUTE_MEMBERS`"
      );
    if (!channellog)
      return message.channel.send(
        "cant find log channel , to set the log channel type >setLog Aand then type the channel name"
      );
    if (!user) return message.channel.send("**Mention The Target**");
    if (!reason) return message.channel.send("** Type The Reason**");
    let warnembed = new Discord.RichEmbed()
      .setTitle(`**New  Warned  User  !**`)
      .addField("**-  Warned  User:**", `${user}  with  ID  ${user.id}`)
      .addField("**-  Warned  By:**", `${message.author.tag}`)
      .addField("**-  Reason:**", `${reason}`, true)
      .addField("**-  Warned  in:**", `${message.channel.name}`)
      .addField("**-  Time & Date:**", `${message.createdAt}`)
      .setFooter(client.user.avatarURL, client.user.username)
      .setColor("#060c37");
    message.delete();
    (warnings[message.guild.id] = {
      moderator: message.author,
      warning: message.createdAt,
      member: user
    }),
      channellog.sendEmbed(warnembed);
    message.channel.send(`**__${user} Has Been Warned __**`);
    fs.writeFile("./warnings.json", JSON.stringify(warnings), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "listwarns")) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    message.channel.send(
      `Moderator:${warnings[message.guild.id].moderator} Warned Member: ${warnings[message.guild.id].member} Time & Date:${warnings[message.guild.id].warning}`
    );
  }
});


   
  

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "anti")) {
 
 
        
      if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`❌ببورە ئەو پێرمیشنەت نییە ADMINISTRATOR`);
        if (message.content.startsWith(prefix + "anti ban")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**⇏ | Number Only**");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "anti kick")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "anti roleD")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**Numbers Only**");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
            if (!num) return message.channel.send("**⇏ | Type Number**");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only**");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
            if (!num) return message.channel.send("**⇏ | Type Number **");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].chaDelLimit}**`)
        }
      if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num)
        return message.channel.send(
          "** | Type A `Number` After Commands .**"
        ); ////////////////mrfix
      if (isNaN(num))
        return message.channel.send("**| Only Type `Number` .**");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**✔️ | Changed \`Channel Create\` To : ${config[message.guild.id].chaCrLimit}**`
      );
    } 
        if (message.content.startsWith(prefix + "anti time")) {
            if (!num) return message.channel.send("**⇏ | Type Number **");
            if (isNaN(num)) return message.channel.send("**⇏ | Numbers Only**");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | Done It's Now : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
        
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Delete Many Channels**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**❗️ | ${entry.username} Has \`Create\` Many Channels .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
    
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
}); 
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Delete Roles**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Make Many Roles**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `** | ${entry.username} Has \`Ban\` Many Members .**`
          )
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `** | ${entry.username} Has \`Kick\` Many Members .**`
          )
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}); ////////////////mrfix
var guild = []

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
 
var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    
    antibots[message.guild.id] = {
      onoff: true
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
     if (!message.member.hasPermission("ADMINISTRATOR")) return;
 
      
    antibots[message.guild.id] = {
      onoff: false
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});


    



      



var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  if (command == "autoc") {
    if (!message.channel.guild)
      return message.reply(`**this ~~command~~ __for servers only__**`);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("sorry you can't do this");
    if (!args[0] || args[1])
      return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
    var role = message.guild.roles.find(role => {
      return role.name == args[0];
    });
    if (!role)
      return message.channel.send(
        `no role with name ${definedReactionRole} found, make sure you entered correct name`
      );
    if (definedReactionRole != null || !stopReacord)
      return message.channel.send("another reaction role request is running");
    message.channel.send(
      `now go and add reaction in the message you want for role ${role.name}`
    );
    definedReactionRole = role;
    stopReacord = false;
  }
});
client.on("raw", raw => {
  if (!["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"].includes(raw.t))
    return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get(
      raw.d.emoji.id
        ? `${raw.d.emoji.name}:${raw.d.emoji.id}`
        : raw.d.emoji.name
    );
    if (raw.t === "MESSAGE_REACTION_ADD")
      return client.emit(
        "messageReactionAdd",
        reaction,
        client.users.get(raw.d.user_id)
      );
    if (raw.t === "MESSAGE_REACTION_REMOVE")
      return client.emit(
        "messageReactionRemove",
        reaction,
        client.users.get(raw.d.user_id)
      );
  });
});
client.on("messageReactionAdd", (reaction, user) => {
  if (user.id == client.user.id) return;
  if (!stopReacord) {
    var done = false;
    reactionRoles[reaction.message.id] = {
      role: definedReactionRole,
      message_id: reaction.message.id,
      emoji: reaction.emoji
    };
    stopReacord = true;
    definedReactionRole = null;
    reaction.message.react(reaction.emoji.name).catch(err => {
      done = true;
      reaction.message.channel.send(
        `sorry i can't use this emoji but the reaction role done! anyone react will get the role!`
      );
    });
    if (done) reaction.remove(user);
  } else {
    var request = reactionRoles[reaction.message.id];
    if (!request) return;
    if (request.emoji.name != reaction.emoji.name) return reaction.remove(user);
    reaction.message.guild.members.get(user.id).addRole(request.role);
  }
});

client.on("messageReactionRemove", (reaction, user) => {
  if (user.id == client.user.id) return;
  if (!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if (!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
}); //TALABANI

client.on("message", message => {
  if (message.author.bot) return; ///BLACK JACK
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.channel.guild)
      return message.reply(`**ئەم فەرمانە تایبەتە بە سێرڤەر **`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** ببورە تۆ ئەم رۆلەت نیە!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** Done , Deleted \`${msgs.size}\` messages.**`)
          .then(messages => messages.delete(5000));
      });
  }
}); ///BY BLACK JACK
let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })



        client.on('message',async message => {
          var room;
          var title;
          var duration;
          var gMembers;
          var filter = m => m.author.id === message.author.id;
          if(message.content.startsWith(prefix + "giveaway")) {
            if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **ببورە رۆلت نیە**');
            message.channel.send(`:eight_pointed_black_star:| **ناوی چەنالەکە دیاری بکە**`).then(msgg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                let room = message.guild.channels.find('name', collected.first().content);
                if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
                room = collected.first().content;
                collected.first().delete();
                msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  }).then(collected => {
                    if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
                    duration = collected.first().content * 60000;
                    collected.first().delete();
                    msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                      }).then(collected => {
                        title = collected.first().content;
                        collected.first().delete();
                        try {
                          let giveEmbed = new Discord.RichEmbed()
                          .setAuthor(message.guild.name, message.guild.iconURL)
                          .setTitle(title)
                          .setDescription(`المدة : ${duration / 60000} کات`)
                          .setFooter(message.author.username, message.author.avatarURL);
                          message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                             let re = m.react('🎉');
                             setTimeout(() => {
                               let users = m.reactions.get("🎉").users;
                               let list = users.array().filter(u => u.id !== m.author.id);
                               let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                                 if(users.size === 1) gFilter = '**لم يتم التحديد**';
                               let endEmbed = new Discord.RichEmbed()
                               .setAuthor(message.author.username, message.author.avatarURL)
                               .setTitle(title)
                               .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                               .setFooter(message.guild.name, message.guild.iconURL);
                               m.edit(endEmbed);
                             },duration);
                           });
                          msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                        } catch(e) {
                          msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                          console.log(e);
                        }
                      });
                    });
                  });
                });
              });
            });
          }
        });

///////////////

client.on("message", async function (message) {
if(message.author.bot) return;
if(!message.guild) return;
var args = message.content.split(" ");
var cmd = args[0].slice(prefix.length).toLowerCase();
if(!message.content.startsWith(prefix)) return;
switch (cmd) {
case 'mute':
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
if(!tomute) return message.reply("**❌ | Couldn't find user**");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**❌ | Can't mute them!**");
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(`**❌ | You don\'t have permission**`)
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send(`**❌ | I don\'t have permission**`)
let muterole = message.guild.roles.find(`name`, "Shutted");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "DAM DAXRAW",
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
let mutetime = args[2];
if(!mutetime) return message.reply("**❌ | Please type time**");
await(tomute.addRole(muterole.id));
message.reply(`**<@${tomute.id}> has been muted for ${ms(ms(mutetime))} **`);
setTimeout(function(){
tomute.removeRole(muterole.id);
message.channel.send(`**<@${tomute.id}> has been unmuted!**`);
}, ms(mutetime));
break;
}
});
client.on('message',async msg => {
        if(msg.channel.type === "dm") return;
     if(msg.author.bot) return;
     if(msg.content.startsWith(prefix + "setstats")) {
     if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ MANAGE CHANNELSرۆڵت نییە');
     if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ MANAGE CHANNELS ڕۆلت نییە');
     var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
 
              var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(b => {
                   var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(bl => {
                      var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(bla => {
 
          b.setParent(kk);
          bl.setParent(kk);
          bla.setParent(kk);
 
        b.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
        bl.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
        bla.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });//////by black jack
          b.setName(`All member : ${msg.guild.memberCount}`);
         bl.setName(`Member :${msg.guild.members.size}`);
           bla.setName(`Bot : ${msg.guild.members.filter(m => m.user.bot).size}`);
    },1000);
                     
       
       
                        
                      })
 
                   })
     })
              }
          
     
});



 

const weather = require('weather-js');
 client.on('message', message => {
     if(message.content.startsWith(prefix + "weather")) {
         var args = message.content.split(" ").slice(1);
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Please enter a location!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Timezone',`UTC${location.timezone}`, true)
          .addField('Degree Type',location.degreetype, true)
          .addField('Temperature',`${current.temperature} Degrees`, true)
          .addField('Feels Like', `${current.feelslike} Degrees`, true)
          .addField('Winds',current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
 });
   client.on("message", message => {
  if (message.content.startsWith(prefix + "sug")) {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**❌ This Commands Just In Server**").then(v => {
        v.react("❌");
      });
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return message.reply("Type You Suggestion").then(c => {
        c.delete(5000);
      });
    let Room = message.guild.channels.find(`name`, "sug");
    if (!Room)
      return message.channel
        .send("Can't find suggestions channel.")
        .then(d => d.react("❌"));
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `Vote on ${message.author.username}'s suggestion`,
        message.author.avatarURL
      )
      .addField("**Suggestion**", `${args}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`ID: ${message.author.id}`);
    Room.sendEmbed(embed)
      .then(c => {
        c.react("✅").then(() => c.react("❌"));
      })
      .catch(e => console.error(e));
  }
});

client.on("message", message => {
  if (message.content === prefix + "help") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 

help1 => moderation command
help2 => general command
help3 =>security command
help4 => funny command
help5 => music command

`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + "help1") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
      **MODERATION**
 b!mute,b!unmute
 b!move,moveall
 b!ban
 b!unban all
 b!unban
 b!ccolor
 b!c text
 b!c vc  
 b!kick
 b!clear <number>
 b!lock
 b!autoc <name role react>
 b!uvb
 b!vb
 b!role <role name>
 b!role bots <role name>
 b!role humans <role name>
 b!role all <role name>
 b!seticon
 b!setname
 b!warn,b!listwarns
 b!bc
 b!mutevoice
 b!undeafen
 b!deafen
 b!unmute voice
 b!hide,b!unhide
 b!setstats
 b!nick,help nick
 b!banslist
 b!unlock
 b!setWlc channel <channel name>
 b!setWlc msg <message>
 b!setWlc style <text, image, embed>
 b!setCount
 b!setDate
 b!autorole <role name>
 b!setTime
 b!setbotv
 b!setmember
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help2") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
       **GENERAL COMMAND**
 b!count
 b!roles
 b!rooms
 b!botinfo
 b!server
 b!support
 b!emojilist
 b!invites
 b!date
 b!daily,d
 b!credits,b!credit,c
 b!profile
 b!premium
 b!slots
 b!weather <location name>
 b!stone
 b!guild
 b!avatar
 b!quran
 b!report
 b!paper
 b!scissors
 b!servers
 b!say,embed
 b!about
 b!invite
 b!user
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help3") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
      **SECURITY COMMAND**
b!anti ban[number]
b!anti kick [number]
b!anti roleC [number]
b!anti roleD [number]
b!anti channelD [number]
b!anti channelC [number]
b!anti time [number]
b!antibots off/on 
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help4") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
       **FUNNY COMAND**
 b!slap
 b!hug
 b!tickle
 b!feed
 b!pat
 b!cat
 b!dog
 b!poke
 b!cuddle   
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help5") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
**MUSIC COMMAND**
b!play 
b!skip
b!volume
b!pause
b!resume
b!leave
b!repeat
b!np
b!join 
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
    .setImage("")
    .setDescription(`  **Thank You for Adding  Bot To Your Server**  
    **Support Server** [ • https://discord.gg/YtF35CVvQR • ]   `); //تعديل مهم رابط سيرفرك
  guild.owner.send(embed);
});
 
client.on('message', message => {
        if(message.content.startsWith(prefix + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**کەسەکە دیاری بکە**❌').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('ناتوانم میوتی بکەم**❌').catch(console.error);
      }
 
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **دیفێند کرا**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ببورە ئەو رۆلەت نیە DEAFEN_MEMBER**❌ ").then(m => m.delete(5000));
      };
 
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
 
    });


client.on('message', async message =>{
      if(message.content.startsWith(prefix + 'undeafen')) {
 
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**تکایە کەسەکە تاگ بکە**❌').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**ناتوانم دیفەیندی بکەم**❌ ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ناتوانی ئەو کارە بکەی**❌ ").then(m => m.delete(5000));
    }
 
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
 
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });
 
 
 
 
 
 
 
	client.on('message', message => {
      
      if(message.content.startsWith(prefix + 'unmute voice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**MUTE MEMBER ببورە ئەو رۆلەت نیە**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**من ئەو پێرمیشنەم نیە `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
 
      if(message.mentions.users.size === 0) {
        return message.reply("کەسەکە تاگ بکە");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("دووبارە");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("بەسەرکەوتوی میوت لادرا");
      }
    }
  });
 
 
 
 
 
	client.on('message', message => {
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
 
        if(message.mentions.users.size === 0) {
          return message.reply("کەسەکە تاگ بکە");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("دووبارە");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("بە سەرکەوتوی میوت کرا");
        }
      }
    });
 client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'vb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
 
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه
client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'uvb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
 
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 
 
  client.on('message', message => {
    if (message.content === prefix + "rooms") {
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
 
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("BLACK BOT")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "role")) {
    let params = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    if (!params[0])
      return msg.channel.send(
        `**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`
      );
    if (params[0] === "all") {
      if (!params[1])
        return msg.channel.send(
          `**ڕۆڵەکەی یان ناوەکەی تاگ بکە \n syntax: ${prefix}role all <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**ئەم ڕۆڵە نە دۆزرایەوە**`);
      msg.guild.members.forEach(m => {
        if (m.roles.some(r => r.id == role.id)) return;
        m.addRole(role);
      });
      msg.channel.send(`**done give all role @${role.name}**`);
    } else if (params[0] === "bots") {
      if (!params[1])
        return msg.channel.send(
          `**ڕۆڵەکەی یان ناوەکەی تاگ بکە \n syntax: ${prefix}role bots <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**ناتوانیت ئەم ڕۆڵە بدۆزیتەوە**`);
      let bots = msg.guild.members.filter(m => m.user.bot);
      bots.forEach(bot => {
        if (bot.roles.some(r => r.id == role.id)) return;
        bot.addRole(role);
      });
      msg.channel.send(`**done give all bots role @${role.name}**`);
    } else if (params[0] === "humans") {
      if (!params[1])
        return msg.channel.send(
          `**ڕۆڵەکەی یان ناوەکەی تاگ بکە \n syntax: ${prefix}role humans <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**ناتوانیت ئەم ڕۆڵە بدۆزیتەوە**`);
      let humans = msg.guild.members.filter(m => !m.user.bot);
      humans.forEach(h => {
        if (h.roles.some(r => r.id == role.id)) return;
        h.addRole(role);
      });
      msg.channel.send(`**done give all humans role @${role.name}**`);
    } else {
      if (!params[1])
        return msg.channel.send(
          `**ڕۆڵەکەی یان ناوەکەی تاگ بکە \n syntax: ${prefix}role @user <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`** ناتوانیت ئەم ڕۆڵە بدۆزیتەوە**`);
      let userID = params[0].slice(2, -1);
      let user = msg.guild.members.get(userID);
      if (!user) return;
      user.addRole(role);
      msg.channel.send(`**Done give ${user} @${role.name}**`);
    }
  }
});
const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
   if(!rWlc[message.guild.id]) rWlc[message.guild.id] = {
    role: "member"
  }
const channel = rWlc[message.guild.id].role
  if (message.content.startsWith(prefix + "autorole")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newrole = message.content.split(' ').slice(1).join(" ")
    if(!newrole) return message.reply(`**${prefix}autorole <role name>**`)
    rWlc[message.guild.id].role = newrole
    message.channel.send(`**${message.guild.name}'s role has been changed to ${newrole}**`);
  }
fs.writeFile("./AutoRole.json", JSON.stringify(rWlc), function(e){
    if (e) throw e;
})
});
client.on("guildMemberAdd", member => {
      if(!rWlc[member.guild.id]) rWlc[member.guild.id] = {
    role: "member"
  }
    const sRole = rWlc[member.guild.id].role
    let Rrole = member.guild.roles.find('name', sRole);
  member.addRole(Rrole);
 
 
 
      });
 
 

client.on('message', message => {
if(message.content.startsWith(prefix + "stone")) {
let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if(message.content.startsWith(prefix + "scissors")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if(message.content.startsWith(prefix + "paper")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

////by black jack


client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "online","dnd","idle").size
      }\` : ** ژمارەی ۆنلاینەکان** `
    );
    message.delete();
  }
});
 

client.on("message", message => {
  if (message.content.startsWith(prefix + "moveall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      })
      .setTitle(`✽ **Black bot**`)
      .setImage("");
 
    message.channel.send(
      `**:white_check_mark: Success Moved All To Your Channel**`
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "avatar")) {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`BLACK BOT`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`Error`));
  } // 
}); // 
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "settime")) {
    if (!msg.guild.member(msg.author).hasPermission("MANAGE_CHANNELS"))
      return msg.reply("❌ **go play minecraft**");
    if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS"]))
      return msg.reply("❌ **بۆتەکە ئەو کردارەی بە دەست نییە**");
    var ggg = msg.guild.createChannel("SERVER STATS", "category").then(kk => {
      var ccc = msg.guild.createChannel("SERVER STATS", "voice").then(al => {
        var aa = msg.guild.createChannel("SERVER STATS", "voice").then(alp => {
          var aaa = msg.guild
            .createChannel("SERVER STATS", "voice")
            .then(alph => {
              al.setParent(kk);
              alp.setParent(kk);
              alph.setParent(kk);
 
              al.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alp.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alph.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              setInterval(() => {
                var currentTime = new Date(),
                  hours = currentTime.getHours() + 3,
                  minutes = currentTime.getMinutes(),
                  Seconds = currentTime.getSeconds(),
                  Year = currentTime.getFullYear(),
                  Month = currentTime.getMonth() + 1,
                  Dat = currentTime.getDate();
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
                al.setName(
                  `Voice Online :[ ${
                    msg.guild.members.filter(m => m.voiceChannel).size
                  } ]`
                );
                alp.setName(
                  `Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`
                );
                alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
              }, 1000);
            });
        });
      });
    });
  }
});
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();
 
    if (!user) return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "about") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        "**Bot Ping** : ",
        `» ${Date.now() - message.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@670647563627659306>`, true) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(bot);
  }
});

client.on("guildCreate", guild => {
        client.users.get('670647563627659306').send('  BOT  Join To [ ' + `${guild.name}` + ' ]  ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]')
        });
 
        client.on("guildDelete", guild => {
        client.users.get('670647563627659306').send('   BOT  Leave From  [ ' + `${guild.name}` + ' ]   ,    Owner    ' + ' [ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]')
      });
 ////by black jack
client.on("message", Black => {
  if (Black.content.startsWith(prefix + "c text")) {
    if (!Black.member.hasPermission("MANAGE_CHANNELS"))
      return Black.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = Black.content.split(" ").slice(1);
    Black.guild.createChannel(args.join(" "), "text");
    Black.channel.sendMessage("Created text channel✅");
  }
});



client.on("message", Black => {
  if (Black.content.startsWith(prefix + "c vc")) {
    if (!Black.member.hasPermission("MANAGE_CHANNELS"))
      return Black.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = Black.content.split(" ").slice(1);
    Black.guild.createChannel(args.join(" "), "voice");
    Black.channel.sendMessage("Created voice✅");
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "banslist")) {
    if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `BAN_MEMBERS`"
      );
    message.guild.fetchBans().then(bans => {
      let b = bans.size;
      let bb = bans.map(a => `${a}`).join(" - ");
      message.channel.send(`**\`${b}\` | ${bb}**`);
    });
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cat')) {
  if (message.content.includes("cattext")) return undefined;
  const GIF = await neko.sfw.meow();
  const embed = new Discord.RichEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random cat image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Dog
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'dog')) {
  const GIF = await neko.sfw.woof();
  const embed = new Discord.RichEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random dog image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "botinfo")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO  BLACK BOT`` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ b! ]`, true)
        .addField("``My Language``", `[ JavaScript ]`, true)
        .addField("``Bot Version``", `[ v12 ]`, true)
        .setFooter("By | <@670647563627659306>")
    });
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
client.on("message", message => {
  //Black jack
  if (!message.channel.guild) return;
  if (message.content == prefix + "count")
    //Black jack
    var Black = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("🌍| زانیاری سێرڤەر ", `__${message.guild.name}__`)
      .addBlankField(true) //Black jack
      .addField("ژمارەی بۆتەکان",`__${message.guild.members.filter(m => m.user.bot).size}__`)
      .addField("ژمارەی میبەرەکان", `__${message.guild.memberCount}__`);
  message.channel.send(Black);
});
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "pat")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.pat();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} patted themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.pat();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} patted ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Slap
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "slap")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.slap();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} slapped themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.slap();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} slapped ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Tickle
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "tickle")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.tickle();
      const embed = new Discord.MessageEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} tickled themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.tickle();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} tickled ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Poke
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "poke")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.poke();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} poked themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.poke();
    const embed = new Discord.MessageEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} poked ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Cuddle
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "cuddle")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.cuddle();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} cuddled themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.cuddle();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} cuddled ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Feed
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "feed")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.feed();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} feeded themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.feed();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} feeded ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "hug")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.hug();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} hugged themselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.hug();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} hugged ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

client.on("message", m => {
  if (m.content === prefix + "invite") {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter("BLACK BOT")
      .addField(
        "click here",
        `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`
      );
    m.channel.send({ embed });
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "setbotv")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("**بداخۆ پێرمیشنەمەت MANAGE CHANNEL نیە**");
    message.channel.send("✅| **بە سەرکەوتوی دروست بوو**");
    message.guild
      .createChannel(
        `Online : [ ${message.guild.members.filter(m => m.user.bot).size} `,
        "voice"
      )
      .then(c => {
        console.log(`Done make room in: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Bots:  ${message.guild.members.filter(m => m.user.bot).size} `
          );
        }, 1000);
      });
  }
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'my perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var black = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

          message.channel.send(black)

    }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("ببورە ئەم پێرمیشنەت نییە MOVE MEMBERS");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("ببورە ئەم پێرمیشنەت نییە MOVE MEMBERS");
    if (!message.member.voice.channel)
      return message.channel.send("تکایە برۆ ڤۆیس ");
    if (!user)
      return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** موڤ کرا✅ **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
}); ////black jack
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**Showing Details Of** ${msg.guild.name}`)
      .addField('`Server Region`',`[${msg.guild.region}]`,true)
      .addField('`Roles Count`',`[${msg.guild.roles.size}]`,true)
      .addField('`Members Count`',`[${msg.guild.memberCount}]`,true)
      .addField('`Online Members`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`Text Channels`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`Voice Channels`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`Server Owner`',`**${msg.guild.owner}**`,true)
      .addField('`Server Id`',`**${msg.guild.id}**`,true)
      .addField('`Server was created in`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});

let xp = require('./xp.json'); // {} و ضع به xp.json اصنع ملف باسم
 
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
 
 
    let Addxp = Math.floor(Math.random() * 6) + 8;
 
    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
 
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 1000;
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
       
        let errorup = new Discord.RichEmbed()
        .setTitle('Level Up!')
        .setColor('RANDOM')
        .setDescription(`New Level: `+curlvl)
        .setTimestamp()
        .setFooter(message.author.username+'#'+message.author.discriminator);
        message.channel.send(errorup )
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });
 
 
});
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
 
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 200;
    let difference = nextlvlxp - curxp
 
    if(message.content == prefix+"profile"){
 
        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1,
            }
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        });
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .setTitle('Your Profile.')
        .addField('XP: ', curxp, true)
        .addField('Level: ', curlvl, true)
        .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
        message.channel.send(embed);
 
    }
});

////////2

////black jack

client.on("message", message => {
  if (message.content.startsWith(prefix + "servers")) {
    message.channel.send({
      embed: new Discord.RichEmbed()

        .setColor("BLACK")
        .addField("``Servers``", [client.guilds.size], true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
    });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setmember")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌ **بداخۆ ئەو رۆلەو نییە**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ **بداخۆ ئەو رۆلەو نیە**");
    message.channel.send("✅| **ژورەکە دروست بوو**");
    message.guild
      .createChannel(`Members [${message.guild.members.size}]`, "voice")
      .then(c => {
        console.log(`Done make room in: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(`Members [${message.guild.members.size}]`);
        }, 1000);
      });
  }
});


client.on("message", message => {
  if (message.content === prefix + "support") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#9B59B6")
      .setImage("https://images-ext-1.discordapp.net/external/RXd_Kc0_Ji0JNg67qAZcHPUOL8o60DLt3qecFb5FuC4/https/media.discordapp.net/attachments/777510905041911819/792459601193992202/image0.gif")
      .addField(" ** CLICK HERE **", "  **https://discord.gg/tgcrhfT3dY*");
 
    message.channel.sendEmbed(embed);
  }
});



client.on("guildDelete", guild => {
  let joinedbot = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle(" | جۆینی سێرڤەر کرا")
    .setFooter("CREATED BY BLACK JACK").setDescription(`
  Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`);
  client.channels.get("792426159367127061").send(joinedbot);
}); ////BY BLACK JACK

client.on("guildDelete", guild => {
  let kickedbot = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle("| دەرکرا لە سێرڤەر ")
    .setFooter("CREATED BY BLACK JACK").setDescription(`
  Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`);
  client.channels.get("792426159367127061").send(kickedbot);
}); ////BY BLACK JACK

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "members")
    var black = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("🙆| INFO MEMBER")
      .addBlankField(true)
      .addField(
        "🐸| ONLINE MEMBER",
        `${
          message.guild.members.filter(m => m.presence.status == "online").size
        }`
      )
      .addField(
        "😡| DND",
        `${message.guild.members.filter(m => m.presence.status == "dnd").size}`
      )
      .addField(
        "🐨| IDLE",
        `${message.guild.members.filter(m => m.presence.status == "idle").size}`
      )
      .addField(
        "😴| OFFLINE",
        `${
          message.guild.members.filter(m => m.presence.status == "offline").size
        }`
      )
      .addField("👨‍👨‍👧‍👧| ALL MEMBERS", `${message.guild.memberCount}`);
  message.channel.send(black);
});


 


client.on("message", message => {
  if (message.author.bot) return;
  if (message.content == prefix + "uptime") {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }

      if (uptime < 1000) notCompleted = false;
    }

    message.channel.send(
      "`" +
        `${days} days, ${hours} hrs, $p{minutes} , ${seconds} sec` +
        "`**🎛 **"
    );
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "hide") {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      });
    });
    msg.channel.send(".");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "unhide") {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });
    });
    msg.channel.send(".");
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "allbots") {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + "ping") {
    const embed = new Discord.RichEmbed()

      .setColor("#FF0000")
      .addField(
        "``خێرای خەتت`` ",
        `${Date.now() - message.createdTimestamp}` + " ms`"
      )
      .setFooter(
        ` BLACK BOT
 .`,
        "https://aladdintravel.com/wp-content/uploads/2014/11/pinterest-logo-2-1074x1067.png"
      );

    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === prefix + "unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** پێرمیشن نییە 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** ڕۆڵی میوتت نییە 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** ئەبێت سەرەتا ناوی کەسەکە تاگ بکەی**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("بەکارھێنان:", " بێدەنگ بە/قسەبکو")
      .addField(
        "میوتەکە کرایەوە لە:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "لە ڕێگەی:",
        `${message.author.username}#${message.author.discriminator}`
      );
 
    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** پێرمیشنت نییە Manage Roles **")
        .catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. میوتەکە لابرا لەسەر کەسەکە **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. میوتەکە لابرا لەسەر کەسەکە **")
            .catch(console.error);
        });
    }
  }
});
 



client.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === prefix + "banslist") {
    message.delete(5000);
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message
        .reply("Error : ` I Dont Have ADMINISTRATOR Permission`")
        .then(message => message.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!message.channel.guild) return;
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(`\`${bans.size}\` ***: ژمارەی باند بوەکان ***`)
      )
      .then(message => message.delete(5000))

      .catch(console.error);
  }
});



client.on("message", msg => {
  if (msg.content == prefix + "guild") {
    let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆", msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp();
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
    if (!message.channel.guild) {
      return;
    }
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

client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "pussywank")) {
    const GIF = await neko.nsfw.pussyWankGif();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} here's a random pussy wank gif`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "slots")) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍅", "🍆", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Win!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  // -say
  if (command === "say") {
    message.delete();
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }

  if (command == "embed") {
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setVoice")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("BBWRA ROLET NYA");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("BBWRA ROLET NYA");
    message.channel.send("ZHWRAKA DRWST BW");
    message.guild
      .createChannel(
        `Voice Online : [ ${
          message.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(
          `Voice online channel setup for guild: \n ${message.guild.name}`
        );
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(
            `Voice Online : [ ${
              message.guild.members.filter(m => m.voiceChannel).size
            } ]`
          );
        }, 1000);
      });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setCount")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("BBWRA AW ROLAT NYA");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("BBWRA AW ROLAT NYA");
    message.channel.send("ZHWRAKA DRWST BW");
    message.guild
      .createChannel(
        `Members Count : [ ${message.guild.members.size} ]`,
        "voice"
      )
      .then(c => {
        console.log(
          `Count Members channel setup for guild: \n ${message.guild.name}`
        );
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`Members Count :  ${message.guild.memberCount} `);
        }, 1000);
      });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setTime")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.reply("BBWRA ROLET NYA");
    if (
      !message.guild
        .member(client.user)
        .hasPermission(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("BBWRA ROLET NYA");
    message.channel.send("ZHWRAKA DRWST BW");
    message.guild.createChannel("?? - Time  00", "voice").then(c => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        var currentTime = new Date(),
          hours = currentTime.getHours() + 3,
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

        c.setName("?? - Time   ?" + hours + ":" + minutes + " " + suffix + "?");
      }, 1000);
    });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setDate")) {
    var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("? **ليس لديك الصلاحيات الكافية**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("? **ليس معي الصلاحيات الكافية**");
    message.channel.send("?| **تم عمل الروم بنجاح**");
    message.guild
      .createChannel(
        "?? - Date " + "?" + day + "-" + month + "-" + years + "?",
        "voice"
      )
      .then(c => {
        console.log(`Date channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName("?? - Date " + "?" + day + "-" + month + "-" + years + "?");
        }, 1000);
      });
  }
});
client.on('message', message => {
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『TIME AND DATE』")
                .setColor('RANDOM')
                .setFooter("BLACK BOT")
                .setFooter(message.author.username, message.author.avatarURL)
                 .addField('Time',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
              
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });
client.on("message", async message => {
  var moment = require("moment");
  if (message.content.startsWith(prefix + "setDays")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("ببورە ئەو رۆلەت نیە");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("? **ليس معي الصلاحيات الكافية**");
    message.channel.send("?| **تم عمل الروم بنجاح**");
    message.guild
      .createChannel(`Day : ${moment().format("dddd")}`, "voice")
      .then(c => {
        console.log(`Day channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`?? - Day : ?${moment().format("dddd")}?`);
        }, 1000);
      });
  }
});

client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'ofline') {
 
          ch.send(`${user}(:    خۆت ۆنلاین کەوە ساقیت`)    
          .then(msg => {
              msg.delete(10000)
          })
      }
  })

client.on("message", message => {
  if (message.content === prefix + "premium") {
    var start = moment()[(2019, 8, 6)];
    var end = moment([2019, 9, 6]);
    let embed = new Discord.RichEmbed().setColor("BLACK")
      .setDescription(`Today is: \`${moment().format("dddd, MMMM Do YYYY")}\`
School Date: \`2021/1/7\`
Time left: \`${moment("20190901", "YYYYMMDD", true).fromNow()}\``);
    message.channel.send(embed);
  }
});
client.on("message", async message => {
  if (
    message.content.includes(
      "@everyone",
      "@here",
   
    )
  ) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : type meniton everyone**`
      )
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});


client.on("message", async message => {
  if (
    message.content.includes(
      "ker",
      "Kerm",
      "kerm",
      "maza",
      "qn",
      "qwn",
      "daykt",
      "dakt",
      "daikt",
      "bgem",
      "دایکت"
    )
  ) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : Using  bad word**`
      )
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

client.on('message', message => {
  if(message.guild) {
if(message.content.startsWith(prefix + "kick")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Kicked From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
    mention.kick().then((member) => {
            // Successmessage
            message.channel.sendEmbed(edward);
        }).catch(error => {
             
      let errora = new Discord.RichEmbed()
  .setColor('#000000').setColor('#36393e')
      .setDescription(`**I Cant Kick ${mention} Its `+"``"+`${error}`+"``"+`**`)
            message.channel.sendEmbed(errora)
    })
}
}});



client.on('message', message => {
  
if(message.content.startsWith(prefix + "ban")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Banned From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
   mention.ban().then((member) => {
            // Successmessage
            message.channel.sendEmbed(edward);
        }).catch(error => {
             
      let errora = new Discord.RichEmbed()
  .setColor('#000000').setColor('#36393e')
      .setDescription(`**I Cant Ban ${mention} Its `+"``"+`${error}`+"``"+`**`)
            message.channel.sendEmbed(errora)
    })
}});
client.on('message', message => {
	if(message.content.startsWith(prefix + 'quran')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**بچۆ ڤۆیسێک**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("صدقه جاريه للجميع", 'https://cdn.discordapp.com/avatars/474687430872793089/692c2796377c84d4edee0dcd1b59d7a9.jpg?size=128')
      .setDescription(`
     🕋 اوامر بوت القرآن الكريم 🕋
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)

	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });

// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});
let queue = [];
let songsQueue = [];
let isPlaying = false;
let dispatcher = null;
let voiceChannel = null;
let skipRequest = 0;
let skippers = [];
let ytResultList = [];
let ytResultAdd = [];
let re = /^(?:[1-5]|0[1-5]|10)$/;
let regVol = /^(?:([1][0-9][0-9])|200|([1-9][0-9])|([0-9]))$/;
let youtubeSearched = false;
let selectUser;



			
var servers = {};
client.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
    var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "play":
    var voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
        var permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
        }
        if (!permissions.has('SPEAK')) {
            return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            var playlist = await youtube.getPlaylist(url);
            var videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    var index = 0;
                    message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
                    `);
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return message.channel.send('No or invalid value entered, cancelling video selection.');
                    }
                    var videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return message.channel.send('🆘 I could not obtain any search results.');
                }
            }
            return handleVideo(video, message, voiceChannel);
        }
        break;
      case "skip":
        if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
        if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
        serverQueue.connection.dispatcher.end('Skip command has been used!');
        return undefined;
        break;
      case "stop":
        if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
        if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
break;
      case "volume":
        if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return message.channel.send(`I set the volume to: **${args[1]}**`);
break;
      case "np":
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
break;
      case "queue":
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
        `);
break;
      case "pause":
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send('⏸ Paused the music for you!');
        }
        return message.channel.send('There is nothing playing.');
break;
      case "resume":
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('▶ Resumed the music for you!');
        }
        return message.channel.send('There is nothing playing.');
    
 
    return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
    var serverQueue = queue.get(message.guild.id);
    console.log(video);
    var song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        var queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(message.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
    }
    return undefined;
}
  function play(guild, song) {
    var serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
      message.channel.send('``The queue of song is end.``');
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
});
 
client.on('ready', () => {
    console.log('music ready'); 
 });


const converter = require('number-to-words');

var nowplaying = []


 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
 
 

 

 


      
  
 
    

       
 
client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('HATM');
        })
        .catch(console.log);
    } else {
      message.reply('BEMA KWE');
    }
  }
});
 
 
 

 
            
 
   

/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/


/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/




client.login(process.env.BOT_TOKEN);
