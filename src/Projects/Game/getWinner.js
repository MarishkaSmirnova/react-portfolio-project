import {
    ROCK,
    PAPER,
    SCISSORS,
    PLAYER,
    TIE,
    COMPUTER,
} from './constants'

export default function(playerResult, compResult) {
    if (playerResult === compResult) {
        return TIE;
    }

    if (playerResult === ROCK) {
        if (compResult === PAPER) {
            return COMPUTER;
        }
        return PLAYER;
    } 

    if (playerResult === PAPER) {
        if (compResult === SCISSORS) {
            return COMPUTER;
        }
        return PLAYER;
    }

    if (playerResult === SCISSORS) {
        if(compResult === ROCK) {
            return COMPUTER;
        }
        return PLAYER;
    }
}