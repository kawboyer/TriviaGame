
$(document).ready(function() {

    // GLOBAL VARIABLES: 
    var timer = (".timer");
    var countDownValue = 120;
    var endGame = (".end-game-scores");

    /* // Variables to hold the number of correct, incorrect and unanswered answers.
    var answers = ["C", "B", "A", "D", "A", "C", "C", "D"],

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    */
    

    // GLOBAL FUNCTION: Set the timer to 120 second countdown. 
    function countDown() {
        if (countDownValue < 0) {
            clearInterval();
            $(".initially-hidden-block").hide();
        }
        else {
            $(".timer").html("<h2>Time Remaining: " + timeConverter(countDownValue) + "</h2>");
            countDownValue --;
        }
    };

    // When the start game button is clicked. Hide the "start" button. Show the questions. Show the timer and start it.
    $(".start-game-button").click(function () {
        $(".end-game-scores").hide();
        $(".start-game-button").hide();
        $(".initially-hidden-block").show();
        setInterval(countDown, 1000);
    });

    // Convert time from milliseconds to minutes and seconds.
    function timeConverter(t) {
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    };

    // Compare answers with the correct answer array. Display scores when the game ends.

    // When the time is up the game ends. Display scores.
    /*
    $(document.getElementsByClassName(".end-game-scores"));
        setTimeout(endGame, 1000 * 12);
    });
    */

    // When the "done" button is clicked the game ends. Display scores.

    $(".end-game-button").on("click", function() {
        $(".end-game-scores").show();
        $(".initially-hidden-block").hide();
        $(".done").append("<h2>All Done!</h2>");
        $(".correct-answers").append("<h4>Correct Answers: </h4>"); // ("<h3>Correct Answers: " + correctAnswers + "</h3>");
        $(".incorrect-answers").append("<h4>Incorrect Answers: </h4>"); //("<h3>Incorrect Answers: " + incorrectAnswers + "</h3>");
        $(".unanswered").append("<h4>Unanswered: </h4>"); //("<h3>Unanswered: " + unanswered + "</h3>");
    });  
});