enum Level { 
    EASY = 30,
    MID = 50,
    HARD = 80
}

console.log(`we have 3 Levels in this game ${Level.EASY} & ${Level.MID} & ${Level.HARD}`);


type A = {
    one: number,
    two: number,
}

type B  = A & {
    three: number
}