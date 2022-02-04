const Pick = {
    'rock': {
        id: 1,
        img: 'http://clipart-library.com/data_images/301711.png'
    },
    'paper': {
        id: 2,
        img: 'http://clipart-library.com/new_gallery/paper-clip-art-3.jpg'
    },
    'scissors': {
        id: 3,
        img: 'http://clipart-library.com/images/ATbKBx55c.png'
    }
};
const GameResult = {
    'tie': {
        resultId: 0,
        message: 'Tie!'
    },
    'player1Wins': {
        resultId: 1,
        message: 'You win!'
    },
    'player2Wins': {
        resultId: 2,
        message: 'CPU wins!'
    }
}

const cpuChoiceContainer = document.getElementById('container-2');
const resultContainer = document.getElementById('container-3');

const cpuChoiceDiv = document.getElementById('cpuchoice');
const h3ElementCPUPick = document.getElementById('cpuchoice-header');
const resultDiv = document.getElementById('result');
const h3ElementResult = document.getElementById('result-header');

function imgRockPaperScissorsClick(params, pickValue) {
    // Cleaning previous game result
    cleanPreviousGame();

    // alert(pickValue); //params.outerHTML, params.id
    const userPick = pickValue;
    console.log(`your choice: ${JSON.stringify(userPick)}`);
    const cpuPick = this.cpuChoosesRockPaperScissors();
    console.log(`cpu choice: ${JSON.stringify(cpuPick)}`);

    //game logic
    const gameResult = resolveRockPaperScissors(userPick.id, cpuPick.id);
    // alert(gameResult.message);


    //battle:
    cpuChoiceContainer.classList.add('container');
    h3ElementCPUPick.innerHTML = 'Battle';
    cpuChoiceDiv.classList.add('flex-box-container');

    //show player pick
    const imgElementPlayerPick = createPickElement(userPick.img, 'blue');
    cpuChoiceDiv.appendChild(imgElementPlayerPick);

    //show 'VS'
    versusText = document.createElement('h3');
    versusText.innerHTML='VS';
    versusText.style = 'align-self: center';
    cpuChoiceDiv.appendChild(versusText);

    //show cpu pick
    const imgElementCPUPick = createPickElement(cpuPick.img, 'red');
    cpuChoiceDiv.appendChild(imgElementCPUPick);

    //show game result
    resultContainer.classList.add('container');
    h3ElementResult.innerHTML = 'Resultado';
    const pElementResult = document.createElement('p');
    pElementResult.innerHTML = gameResult.message;
    resultDiv.appendChild(pElementResult);
    resultDiv.classList.add('flex-box-container');
}

function createPickElement(img, color='blue'){
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.style = 'box-shadow: 0px 5px 25px ' + color;
    return imgElement;
}

function cpuChoosesRockPaperScissors() {
    const randomNum = Math.floor(Math.random() * (4 - 1)) + 1; //range [1,3]
    const cpuPick = Object.keys(Pick).find((choice) => {
        if (Pick[choice].id === randomNum) {
            return true;
        }
        return false;
    })
    return Pick[cpuPick];
    // switch (randomNum) {
    //     case 1:
    //         //rock
    //         alert('cpu uses rock');
    //         break;
    //     case 2:
    //         //paper
    //         break;
    //     case 3:
    //         //scissors
    //         break;
    //     default:
    //         break;
    // }
}

function resolveRockPaperScissors(num1, num2) {
    numDiff = num1 - num2;
    if ((numDiff === 1) || (numDiff === -2)) {
        return GameResult.player1Wins;
    }
    if ((numDiff === -1) || (numDiff === 2)) {
        return GameResult.player2Wins;
    }
    return GameResult.tie;
}

function cleanPreviousGame() {
    cpuChoiceDiv.replaceChildren();
    resultDiv.replaceChildren();
}