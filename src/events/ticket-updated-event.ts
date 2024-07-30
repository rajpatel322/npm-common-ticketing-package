import { Subject } from "./subjects";

export interface TicketUpdatedEvent {
    subject: Subject.TicketUpdated;
    data : {
        id: string;
        title: string;
        price: number;
        version: number;
        userId: string;
    };
}

