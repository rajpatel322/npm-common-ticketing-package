import { Subject } from "./subjects"

export interface PaymentCreatedEvent {
    subject: Subject.PaymentCreated;
    data: {
        id: string,
        orderId: String;
        stripId: string;
        version: number;
    }
}