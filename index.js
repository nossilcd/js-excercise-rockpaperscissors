const Pick = {
    'rock': {
        id: 1,
        img: './assets/rock.png'
    },
    'paper': {
        id: 2,
        img: 'data:image/jpeg;base64,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'
    },
    'scissors': {
        id: 3,
        img: 'data:image/jpeg;base64,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'
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

const cpuChoiceDiv = document.getElementById('cpuchoice-3');
const h3ElementCPUPick = document.getElementById('cpuchoice-3-header');
const resultDiv = document.getElementById('result-3');
const h3ElementResult = document.getElementById('result-3-header');

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
    alert(gameResult.message);


    //show cpu pick
    cpuChoiceContainer.classList.add('container');
    h3ElementCPUPick.innerHTML = 'CPU Choice';
    const imgElementCPUPick = document.createElement('img');
    imgElementCPUPick.src = cpuPick.img;
    cpuChoiceDiv.appendChild(imgElementCPUPick);
    cpuChoiceDiv.classList.add('flex-box-container');

    //show game result
    resultContainer.classList.add('container');
    h3ElementResult.innerHTML = 'Resultado';
    const pElementResult = document.createElement('p');
    pElementResult.innerHTML = gameResult.message;
    resultDiv.appendChild(pElementResult);
    resultDiv.classList.add('flex-box-container');
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