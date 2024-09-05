import {Position} from "./position";

export class Rover {
    static readonly DIRECTION: string[] = ['N', 'E', 'S', 'W']
    grid: [number, number];
    position: Position;
    command: string;

    constructor(grid: [number, number], position: Position, command: string) {
        this.grid = grid
        this.position = position
        this.command = command
    }

    turnLeft(){
        const currentIndex = Rover.DIRECTION.indexOf(this.position.direction)
        const newIndex = (currentIndex + 3) % 4
        this.position.direction =Rover.DIRECTION[newIndex]
    }

    turnRight(){
        const currentIndex = Rover.DIRECTION.indexOf(this.position.direction)
        const newIndex = (currentIndex + 1) % 4
        this.position.direction =Rover.DIRECTION[newIndex]
    }

    move(){
        const {xPosition, yPosition, direction} = this.position;

        if(direction === 'N' && yPosition < this.grid[1]){
            this.position.yPosition = yPosition + 1
        } else if (direction === 'E' && xPosition < this.grid[0]){
            this.position.xPosition = xPosition + 1
        } else if (direction === 'S' && yPosition > 0){
            this.position.yPosition = yPosition - 1
        } else if (direction === 'W' && xPosition > 0){
            this.position.xPosition = xPosition -1
        }
    }

    deploy(){
        for(const command of this.command) {
            if(command === 'L') {
                this.turnLeft()
            } else if (command === 'R'){
                this.turnRight()
            } else if (command === 'M'){
                this.move()
            }
        }
        return this.position.getPosition()
    }
}