
import { IHasOutput } from "../interfaces/IHasOutput.js"

export class Invoice implements IHasOutput {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    output(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    } 
}

