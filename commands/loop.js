const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
<<<<<<< HEAD
  name: "repetir",
  aliases: ['l'],
  description: "Muda repetição",
=======
  name: "loop",
  aliases: ["l"],
  description: "Toggle music loop",
>>>>>>> upstream/master
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Nada estaá tocando.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
<<<<<<< HEAD
    return queue.textChannel
      .send(`Repeticão ${queue.loop ? "**ligada**" : "**desligada**"}`)
      .catch(console.error);
=======
    return queue.textChannel.send(`Loop is now ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);
>>>>>>> upstream/master
  }
};
