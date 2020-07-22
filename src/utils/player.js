export const getPlayers = (value) => {

    let players = [];

    let color=['#3abcee', '#13cd89', '#666bff', '#c145d8']

    for( let i=1; i<= value ; i++){

        let Player = {
            playerId: i,
            playerColor: color[i-1],
            currentPosition: 0,
            playerName: 'Player' + 1
        }

        players.push(Player)
    }
    
    return players;
}

export const movePlayers = (currentPlayer, players, diceValue) => {

    const newPlayersValues = [...players];

    newPlayersValues[currentPlayer-1].currentPosition += diceValue;

    return newPlayersValues;   
}

export const nextPosition = (currentPlayer, players, diceValue) => {

    return diceValue + players[currentPlayer-1].currentPosition;
}

export default getPlayers;
