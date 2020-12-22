const Discord = require('discord.js');
const bot = new Discord.Client();
const dateFormat = require('dateformat');//npm i dateformat
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const ms = require("ms");
const moment = require('moment');
const request = require('request');
const fs = require("fs");
const prefix = '!'
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";



client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('By black jack');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | CREATED BY BLACK JACK ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
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

            
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "create logs")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "Tanha bo owner ship~"
      );
      message.guild.id.createChannel("Logs.", "category").then(catg =>{
      message.guild.id.createChannel("log-pic", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-message", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-ban", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-join", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-leave", "text").then(chat => { chat.setParent(catg.id) })
  message.channel.sendMessage(':white_check_mark: **Done Create.**')
      })
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
    message.reply(" what do you need ?");
    }
});



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
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)    
         .setimage('')
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



client.on("message", message => {
  var addserver = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`;
    var SUPPORT = `https://discord.gg/6ASrSeG`;
  if (message.content === prefix + "help") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setURL("")
      .settitle("")
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("RANDOM").setDescription(` 
**MODERTION**
 b!mute
 
 b!unmute
 
 b!move,moveall
 
 b!ban
 
 b!unban
 
 b!kick
 
 b!clear <number>
 
 b!lock
 
 b!unlock
 
 **GENERAL COMMAND**
 
 b!count
 
 b!roles
 
 b!server
 
 b!say
 
 b!botinfo
 
 b!about
 
 b!invite
 
 b!user
 **FUNNY COMAND**
 
** Created by ==> [<@670647563627659306>] **
`);
    message.channel.sendEmbed(embed);
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
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter()
      .addField('click here',`                          `)
  message.author.send({embed});

 }
}); 



client.on("message", message => {
 if (message.content === prefix + "support"){
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
  if (cmd === `mute`){
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
      if(message.content ==prefix + 'members')
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
if (message.content.startsWith(prefix + "uptime")) {
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
                if(message.content.startsWith(prefix + 'allbots')) {

    
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
     if (message.content === "-ping") {
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
    if (command === "banlist") {
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
    if(msg.content.startsWith(prefix + 'info guild')){
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
//BJ





















client.on('message', ra3d => {

                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` YOU NEED PERMISSON**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
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




  


client.on('message', async message => {
    if(message.content.includes('@everyone','@here')){ 
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
    .addField(`**  You Have Been Muted **` , `**Reason : type here and everyone**`)
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
