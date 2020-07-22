const board = (totalWidth, rows, cols) => {

    let myBoard = [];
    let boxSize = totalWidth/cols;
    let direction = 1;

    let currentRowWidth = 0;
    let currentColHeight = boxSize * (rows - 1);

    for(let i=1; i<= rows*cols; i++){

        let Box = {
            width: `${boxSize}%`,
            height: `${boxSize}%`, 
            posX: currentRowWidth,
            posY: currentColHeight,
            boxId: i,
            color: (i+1)%2 === 0 ? '#ff6f6f' : '#ffe5e5'
        }
        myBoard.push(Box);

        currentRowWidth = currentRowWidth + boxSize * direction;

        if(currentRowWidth >= totalWidth || currentRowWidth <= -boxSize){
            direction *= -1;
            currentRowWidth += boxSize * direction;
            currentColHeight -= boxSize; 
        }
    }

    return myBoard;
}

export default board;