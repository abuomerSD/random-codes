export interface IOrder {
    processCashInvoice(): void;
    processCreditInvoice(): void;
}

export interface ICashOrder {
    processCashInvoice(): void;
}

export interface ICreditOrder {
    processCreditInvoice(): void;
}
