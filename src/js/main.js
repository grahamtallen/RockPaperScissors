var score1 = $('#score1');
var score2 = $('#score2');
var score3 = $('#score3');
var score4 = $('#score4');
var score5 = $('#score5');
var roundwin;
var roundloss;
var aiResult;
var round;


var currentRound = 1;
var choice;

var draw = function() {
    $('.message').html("Draw!");
    $('.messageDiv').attr('style', 'display: inherit');
    $('.whole').attr('style', 'display: none');
    round.removeClass("btn-link");
    round.addClass("btn-default");
};
var gameOverDraw = function () {
    $('.whole').attr('style', 'display: none');
    round.removeClass("btn-link");
    round.addClass("btn-default");
    gameOver();
};


var battle = function() {
    thinking();

    getRound();

    function doBattle() {
        switch (choice) {
            case "Rock":
                if (aiResult === "Scissors") {
                    roundwin();
                } else if (aiResult === "Paper") {
                    roundloss();
                } else {
                    if (currentRound === 5) {
                        gameOverDraw();
                    } else {
                        draw();
                    }
                }
                break;
            case "Paper":
                if (aiResult === "Scissors") {
                    roundloss();
                } else if (aiResult === "Paper") {
                    if (currentRound === 5) {
                        gameOverDraw();
                    } else {
                        draw();
                    }
                } else {
                    roundwin();
                }
                break;
            case "Scissors":
                if (aiResult === "Scissors") {
                    if (currentRound === 5) {
                        gameOverDraw();
                    } else {
                        draw();
                    }
                } else if (aiResult === "Paper") {
                    roundwin();
                } else {
                    roundloss();
                }
                break;
        }
    }
    setTimeout(compChoose, 2000);
    setTimeout(loading, 2000);
    setTimeout(doBattle, 4000);



};

var gameOver = function() {
    $('.gameOverDiv').attr('style', 'display: inherit');
    $('.whole').attr('style', 'display: none');

};

var newGame = function () {
    $('.gameOverDiv').attr('style', 'display: none');
    score1.attr('class', '');
    score1.addClass("btn btn-link");
    score2.attr('class', '');
    score2.addClass("btn btn-link");
    score3.attr('class', '');
    score3.addClass("btn btn-link");
    score4.attr('class', '');
    score4.addClass("btn btn-link");
    score5.attr('class', '');
    score5.addClass("btn btn-link");
    nextRound();
    currentRound = 1;
};


var chooseRock = function () {
    $('#youImg').attr('src', '../img/Rockleft.png');
    $('#yourChoice').attr('style', 'visibility: inherit');
    choice = "Rock"
};

var choosePaper = function () {
    $('#youImg').attr('src', '../img/Paperleft.png');
    $('#yourChoice').attr('style', 'visibility: inherit');
    choice = "Paper"
};

var chooseScissors = function () {
    $('#youImg').attr('src', '../img/Scissorsleft.png');
    $('#yourChoice').attr('style', 'visibility: inherit');
    choice = "Scissors"
};

var thinking = function() {
   $('#thinking').attr('style', 'display: inherit');
};

var compChoose = function() {
    $('#thinking').attr('style', 'display: none');
    var aiChoose = Math.floor(Math.random() * 6) + 1;
    switch (aiChoose) {
        case 1:
            aiResult = "Rock";
            $('#aiImg').attr('src', '../img/Rockright.png');
            break;
        case 2:
            aiResult = "Rock";
            $('#aiImg').attr('src', '../img/Rockright.png');
            break;
        case 3:
            aiResult = "Paper";
            $('#aiImg').attr('src', '../img/Paperright.png');
            break;
        case 4:
            aiResult = "Paper";
            $('#aiImg').attr('src', '../img/Paperright.png');
            break;
        case 5:
            aiResult = "Scissors";
            $('#aiImg').attr('src', '../img/Scissorsright.png');
            break;
        case 6:
            aiResult = "Scissors";
            $('#aiImg').attr('src', '../img/Scissorsright.png');
            break;
    }
};

var getRound = function() {
    if (currentRound === 1) {
        roundwin = score1Win;
        roundloss = score1Lose;
        round = score1
    } else if (currentRound === 2) {
        roundwin = score2Win;
        roundloss = score2Lose;
        round = score2
    } else if (currentRound === 3) {
        roundwin = score3Win;
        roundloss = score3Lose;
        round = score3
    } else if (currentRound === 4) {
        roundwin = score4Win;
        roundloss = score4Lose;
        round = score4
    } else if (currentRound === 5) {
        roundwin = score5Win;
        roundloss = score5Lose;
        round = score5
    }
};

var win = function () {
    $('.message').html("You Won");
    $('.messageDiv').attr('style', 'display: inherit');
    $('.whole').attr('style', 'display: none');
};

var lose = function () {
    $('.message').html("You Lost");
    $('.messageDiv').attr('style', 'display: inherit');
    $('.whole').attr('style', 'display: none');
};

var nextRound = function () {
    $('.whole').attr('style', 'display: inherit');
    $('.messageDiv').attr('style', 'display: none');
    $('#spinner').attr('style', 'display: none');

    currentRound = currentRound + 1;
    $('#youImg').attr('src', '../img/Rockleft.png');
    $('#yourChoice').attr('style', 'visibility: hidden');
    $('#aiImg').attr('src', '');
};


var loading = function() {
    $('#spinner').attr('style', 'display: inherit')
};

var score1Win = function () {
    score1.removeClass("btn-link");
    score1.addClass("btn-success");
    win();
};
var score1Lose = function () {
    score1.removeClass("btn-link");
    score1.addClass("btn-danger");
    loading();
    lose();
};
var score2Win = function () {
    score2.removeClass("btn-link");
    score2.addClass("btn-success");
    loading();
    win();
};
var score2Lose = function () {
    score2.removeClass("btn-link");
    score2.addClass("btn-danger");
        loading();
    lose();
};
var score3Win = function () {
    score3.removeClass("btn-link");
    score3.addClass("btn-success");
    loading();
    win();
};
var score3Lose = function () {
    score3.removeClass("btn-link");
    score3.addClass("btn-danger");
        loading();
    lose();
};
var score4Win = function () {
    score4.removeClass("btn-link");
    score4.addClass("btn-success");
    loading();
    win();
};
var score4Lose = function () {
    score4.removeClass("btn-link");
    score4.addClass("btn-danger");
        loading();
    lose();
};
var score5Win = function () {
    score5.removeClass("btn-link");
    score5.addClass("btn-success");
    loading();
    gameOver();
};
var score5Lose = function () {
    score5.removeClass("btn-link");
    score5.addClass("btn-danger");
        loading();
    gameOver();
};




