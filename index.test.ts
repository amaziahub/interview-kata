import {SquadMover} from "./kata/squad.mover";


describe('Mars Rover Kata', () =>{

    // it('should throw InvalidRoverInput on empty file', () => {
    //     expect(() => new SquadMover('').move()).toThrow(InvalidRoverInput)
    // })

    it('should return steady rover position', () => {
        const output = new SquadMover('5 5\n1 2 N').move()
        expect(output).toBe('1 2 N')
    })

    it('should return turning left rover position', () => {
        const output = new SquadMover('5 5\n1 2 N\nL').move()
        expect(output).toBe('1 2 W')
    })

    it('should return turning right rover position', () => {
        const output = new SquadMover('5 5\n1 2 N\nR').move()
        expect(output).toBe('1 2 E')
    })

    it('should return turning move rover position', () => {
        const output = new SquadMover('5 5\n1 2 N\nRM').move()
        expect(output).toBe('2 2 E')
    })

    it('should return double turning move rovers position', () => {
        const output = new SquadMover('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM').move()
        expect(output).toBe('1 3 N\n5 1 E')
    })
} )