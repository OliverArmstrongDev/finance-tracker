
import { IHasOutput } from "../interfaces/IHasOutput.js"

export class Payment implements IHasOutput {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    output(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}

