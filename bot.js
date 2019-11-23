bot.on('message', async(message) => {
let prefix = "$";
    if(message.author.julian || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}obc`){[  ]
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!args[1]) return;
        message.guild.members.map((m) => {
            setTimeout(() => {
                m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
            }, 550);
         
        });
         
    message.channel.send(`:ballot_box_with_check: | The BroadCast Message sended for | \`${message.guild.memberCount}\``)                       
    }
});

client.login(process.env.BOT_TOKEN);
