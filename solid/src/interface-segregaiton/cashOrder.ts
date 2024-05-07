import {
    ICashOrder, ICreditOrder
}
from "./order";

class CashOrder implements ICashOrder {
    processCashInvoice():void {
        throw new Error("Method not implemented.");
    }
}
