$(document).ready(function() {
    setInterval(gamePlay, 1200);
});

let score = 0;

function gamePlay() {

    let ratImage = $("<img>").attr({
        id: "ratimage",
        src: "rat.png",
        onclick: "counter()",
        class: "ratimage",
        alt: "rat image"
    });



    let c_randomNumber = Math.floor(Math.random() * 8);

    switch (c_randomNumber) {
        case 0:

            $("#gcr1").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);

            break;
        case 1:
            $("#gcr2").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 2:
            $("#gcr3").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 3:
            $("#gcr4").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 4:
            $("#gcr5").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 5:
            $("#gcr6").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 6:
            $("#gcr7").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 7:
            $("#gcr8").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        case 8:
            $("#gcr9").append(ratImage);
            setTimeout(function() {
                $("#ratimage").remove();

            }, 700);
            break;
        default:
            console.log("Game Crashed");

    }

}


function counter() {
    score += 10;
    console.log(score);
    $('#score').html(score);
    $('#scores').html(score);

}

var timeleft = 60;
var downloadTimer = setInterval(function() {

    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        $("#time").html("Finished");
        $("#result").css("display", "block");
        $("#game").css("display", "none");
        $("#scoretext").css("display", "none");

        getCookie(score);
        setCookie(score);
    } else {

        $("#time").html(timeleft + " seconds remaining");
        $('#highScores').html(document.cookie);
    }
    timeleft -= 1;
}, 1000);




function getCookie(score) {

    var highScore = document.cookie.split("=")[1];
    if (highScore == undefined) {
        highScore = 0;
    }
    if (score > highScore) {
        $("#scoretext").css("display", "block");
        $('#highScores').html(score);
        $('#scoretext').html('Congratulation You made High Score ' + score);
    }
}


function setCookie(score) {

    var highScore = document.cookie.split("=")[1];
    if (highScore == undefined) {
        highScore = 0;
    }
    console.log(highScore);
    if (score > highScore) {
        document.cookie = 'HighScore=' + score;
    }

    console.log(document.cookie);
    $('#highScores').html(document.cookie);
}