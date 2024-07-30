import { Subject } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCancelledEvent {
    subject : Subject.OrderCancelled;
    data : {
        id: string;
        version: number;
        ticket: {
            id: string,
        };
    };
}