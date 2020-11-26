const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ajuda",
  aliases: ["h"],
  description: "Mostra todos os comandos e suas descrições",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
<<<<<<< HEAD
      .setTitle("Ajuda LoSDJ")
      .setDescription("Lista de comandos")
=======
      .setTitle(`${message.client.user.username} Help`)
      .setDescription("List of all commands")
>>>>>>> upstream/master
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
