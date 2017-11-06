
import { Socket } from "phoenix"

export default class Chatty {

    constructor() {
        this.channel = this.join_channel()
        this.chats = $("#chats");
        this.setupEventHandlers(this.channel);
    }

    join_channel() {
        let socket = new Socket("/socket", { logger: Chatty.my_logger });

        socket.connect();

        let channel = socket.channel("chatty:common");
        channel.join();
        return channel;

    }


    setupEventHandlers(channel) {
        $(window).on("keypress", (ev) => this.handleKeypress(ev))
        channel.on("echo", msg => { this.chats.append(msg.key) })
    }

    handleKeypress(event) {
        this.channel.push("keypress", { key: event.key })
    }

    static my_logger(kind, msg, data) {
        console.log(`Socket event: ${kind}: ${msg}`, data)
    }
}
