import {
    ICreditOrder
}
from "./order";

class CreditOrder implements ICreditOrder {
    processCreditInvoice():void {
        throw new Error("Method not implemented.");
    }
}
