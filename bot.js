const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
client.user.setGame(`BroadCast`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});

  client.on('message', message => {
    if (message.content.split(' ')[0] == '=bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "=")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});


      client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("514389881653428227");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(" هلا حبي نورت سيرفرنا :heart: Royal Heroes :heart:"), 4000) 
}
});

client.login(process.env.BOT_TOKEN);
