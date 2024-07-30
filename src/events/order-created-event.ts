import { Subject } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreateEvent {
    subject : Subject.OrderCreated;
    data : {
        id: string;
        userId:  string;
        status: OrderStatus;
        expiresAt: string;
        version: number;
        ticket: {
            id: string,
            price: number
        };
    }
}