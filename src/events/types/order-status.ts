export enum OrderStatus {

    // When the orer has been created, but the ticket is trying to order has not been reserved
    Created = 'created',

    // The ticket the order is trying to reserve has already been reserved, or when the user has cancelled the order
    // The order expires before payment
    Cancelled = 'cancelled',

    // the order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // the order has reserved the ticket and the user has provided payment successfully
    Complete = 'complete'
}