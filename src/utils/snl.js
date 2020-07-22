export const snakes = {
    snakeHead: [40, 50, 67, 81, 98],
    snakeTail: [18, 12, 27, 62, 77]
}

export const ladders = {
    ladderFoot: [17, 28, 37, 63, 69],
    ladderTop: [35, 71, 59, 83, 94]
}

// export const isSnakeOrLadder = (currentPlayer, players) => {

//     const CPP = players[currentPlayer-1].currentPosition;

//     console.log(CPP, snakes.snakeHead.includes(CPP), ladders.ladderFoot.includes(CPP), currentPlayer);


//     if(snakes.snakeHead.includes(CPP)){
        
//         return true
    
//     } else if (ladders.ladderFoot.includes(CPP)){
        
//         return true
//     }

//     return false
// }
export const wait = async (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export const isSnakeOrLadder = (value) => {
    
    if(snakes.snakeHead.includes(value)){
    
        return true
    
    } else if (ladders.ladderFoot.includes(value)){
        
        return true
    }

    return false
}

export const movePlayersSNL = (currentPlayer, players) => {

    const {snakeHead, snakeTail} = snakes;
    const {ladderFoot, ladderTop} = ladders;

    const realCPV = currentPlayer-1;
    const CPP = players[realCPV].currentPosition;

    const newPlayers = [...players];

    if(snakeHead.includes(CPP)){

        newPlayers[realCPV].currentPosition = snakeTail[snakeHead.indexOf(CPP)]

        return newPlayers;
    
    } else if (ladderFoot.includes(CPP)){
        
        newPlayers[realCPV].currentPosition = ladderTop[ladderFoot.indexOf(CPP)]

        return newPlayers;
    }
    console.log('NO SNL', CPP);
    return players;
}