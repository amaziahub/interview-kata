
export class Position {
    xPosition: number;
    yPosition: number;
    direction: string;

    constructor(xPosition: number, yPosition: number, direction: string) {
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.direction = direction
    }

    getPosition() {
        return `${this.xPosition} ${this.yPosition} ${this.direction}`
    }
}