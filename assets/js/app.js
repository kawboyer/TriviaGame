
$(document).ready(function () {

    var timer = (".timer");
    var countDownValue = 10;

    // GLOBAL FUNCTION: Set the timer to a 2 minute countdown.
    function countDown() {
        if (countDownValue < 0) {
            clearInterval();
            $(".initially-hidden-block").hide();
        }
        else {
            $(".timer").html("<h3>Time Remaining: " + timeConverter(countDownValue) + "</h3>");
            countDownValue --;
        }
    };

    // Hide the "start" button when clicked. Show the questions. Show the timer and start it.
    $(".start-game-button").click(function () {
        $(".end-game-score").hide();
        $(".start-playing-button").hide();
        $(".initially-hidden-block").show();
        setInterval(countDown, 1000);
    });

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
    /*
    function quizQuestion(question, choices, correctAnswer) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }

    var allQuestions: [
        new quizQuestion("What is Bill Clinton’s middle name?", ["Washington", "Franklin", "Jefferson", "Adams"])
    ]
    */
});