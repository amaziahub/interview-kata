
export class RoverParser {

    static parseLines(input: string, seperator: string){
        return input.trim().split(seperator).map(line => line.trim());
    }

    static parseGrid(input: string) {
        return input.split(' ').map(Number);
    }
}