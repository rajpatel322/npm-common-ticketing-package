import { Stan } from "node-nats-streaming";
import { Subject } from "./subjects";

interface Event {
    subject: Subject;
    data: any;
}

export abstract class Publisher<T extends Event>{
    abstract subject: T['subject'];
    protected server: Stan;

    constructor(server: Stan) {
        this.server = server;
    }

    publish(data: T['data']): Promise<void>{

        return new Promise((resolve, rejects) => {
            this.server.publish(this.subject, JSON.stringify(data), (err) => {
                if(err) {
                    return rejects(err);
                }
                console.log('Event published to subject', this.subject);
                resolve();
            });
        });
        
    }
};