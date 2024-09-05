import {Position} from "./position";
import {Rover} from "./rover";
import {RoverParser} from "./RoverParser";

export class SquadMover{

    input: string

    constructor(input: string){
        this.input = input;
    }


    move(){
        const result: string[] = []
        const instructions = RoverParser.parseLines(this.input, '\n')

        const [xGrid, yGrid] = RoverParser.parseGrid(instructions[0])

        for(let i = 1; i < instructions.length; i+=2){

            const position = RoverParser.parseLines(instructions[i], ' ')

            const command = instructions[i + 1] || ''

            const output = new Rover([xGrid, yGrid], new Position(parseInt(position[0]), parseInt(position[1]), position[2]), command).deploy()
            result.push(output)
        }

        return result.join('\n')
    }

}