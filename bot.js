const Discord = require("discord.js");
  const kboosh = new Discord.Client();
      kboosh.on('ready', () => {
        kboosh.user.setGame(`100 Soon`,'https://www.twitch.tv/TEST-Broadcast');
          console.log('Im Ready!');
  
        });

  kboosh.on('message', message => {
    if (message.content.split(' ')[0] == '-bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   kboosh.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "-")) {
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

      kboosh.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("ايدي الروم");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(":heart: Royal Heroes :heart:  هلا حبي نورت سيرفرنا"), 4000) 
}
});

kboosh.login(process.env.TOKEN_BOT);
