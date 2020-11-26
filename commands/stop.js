const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "stop",
  description: "Para a música",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
<<<<<<< HEAD
    
    if (!queue) return message.reply("Não tem nada tocando.").catch(console.error);
=======

    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
>>>>>>> upstream/master
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ parou a música!`).catch(console.error);
  }
};
