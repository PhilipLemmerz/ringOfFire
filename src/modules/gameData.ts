

export class Game {

    players: string[] = [];
    stack: string[] = [];
    playedCards: string[] = [];
    currentPlayer: number = 0;

    constructor() {
        
        for (let i = 1; i <= 13; i++) {


            this.stack.push('heart_' + i);
            this.stack.push('cross_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }

        this.shuffleStack(this.stack);

    }


    shuffleStack(array: any) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
        
    

}