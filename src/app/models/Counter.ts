export class Counter {
    /**
     *
     */
    constructor() {
        this.acount = 0;
    }
    public acount: number;
    public increase(): void {
        this.acount++;
    }

    public decrease(): void {
        this.acount--;
    }
}