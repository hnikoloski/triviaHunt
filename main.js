$.fn.extend({
    qcss: function(css) {
        return $(this).queue(function(next) {
            $(this).css(css);
            next();
        });
    }tit
});

var question = [{
        title: "The name of the popular online battle royale game PUBG, is short for what?",
        answers: ['PLAYERUNKNOWN\'S BATTLEGROUNDS', 'Public Undefeated Best Game', 'PLAYERS UNKNOWN BATTLEFIELD GAME', 'PLAYERUNKNOWN\'S BATTLELOG'],
        correctAnswer: 0
    },
    {
        title: "Whats 20 devided by 4?",
        answers: ['20', '5', '4', '10'],
        correctAnswer: 1
    }, {
        title: "What temperature does the water boil at? In Celcius.",
        answers: ['0 degrees', '50 degrees', '100 degrees', '25 degrees'],
        correctAnswer: 2
    },
    {
        title: "Which country is home to the kangaroo?",
        answers: ['United States', 'Australia', 'South Africa', 'Germany'],
        correctAnswer: 1
    }, {
        title: "What is the top colour in a rainbow?",
        answers: ['Blue', 'Yellow', 'Red', 'Purple'],
        correctAnswer: 2
    },
    {
        title: "What is the name of the famous big clock in London?",
        answers: ['Big John', 'Big Pete', 'Big Ben', 'Big Tim'],
        correctAnswer: 2
    }, {
        title: "How many milligrams make a gram?",
        answers: ['100', '1.000', '10.000', '100.000'],
        correctAnswer: 1
    },
    {
        title: "What is the capital of Thailand?",
        answers: ['Bangkok', 'Shanghai', 'Hong Kong', 'Singapore'],
        correctAnswer: 0
    }, {
        title: "Actor Arnold Schwarzenegger was once governor of which American State?",
        answers: ['Texas', 'Arizona', 'California', 'Florida'],
        correctAnswer: 2
    },
    {
        title: "What is the best site on the Market? It\'s probably Number 3!",
        answers: ['Treasure.gg', 'Treasure.gg', 'Treasure.gg', 'Treasure.gg'],
        correctAnswer: 2
    }, {
        title: "The Pope is guarded by a small force of soldiers from which country?",
        answers: ['Italy', 'Vatican City', 'Germany', 'Switzerland'],
        correctAnswer: 3
    },
    {
        title: "Legend has it that Marilyn Monroe wore nothing but what to bed?",
        answers: ['Pyjamas', 'Channel No5', 'Channel No10', 'Nothing'],
        correctAnswer: 1
    }, {
        title: "In what ocean did the Titanic sink?",
        answers: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        correctAnswer: 1
    },
    {
        title: "Created in 2009, what was the first decentralized cryptocurrency?",
        answers: ['Litecoin', 'Ethereum', 'Bitcoin', 'Doge Coin'],
        correctAnswer: 2
    }, {
        title: "At the time of his assassination, what play was Abraham Lincoln watching?",
        answers: ['Family Guy', 'Our American Cousin', 'Fox News', 'CNN News'],
        correctAnswer: 1
    },
    {
        title: "What is the world\'s most popular spectator sport?",
        answers: ['Football/Soccer', 'Golf', 'Tennis', 'BasketBall'],
        correctAnswer: 0
    }, {
        title: "In which city is the cathedral of Notre Dame?",
        answers: ['Paris', 'London', 'Berlin', 'Amsterdam'],
        correctAnswer: 0
    },
    {
        title: "In which country is the Great Barrier Reef?",
        answers: ['Germany', 'Spain', 'China', 'Australia'],
        correctAnswer: 3
    }, {
        title: "What colour is a Panda?",
        answers: ['Black and Yellow', 'Puprle and Green', 'Black and White', 'Blue and White'],
        correctAnswer: 2
    },
    {
        title: "Which Italian city is famous for its leaning tower?",
        answers: ['Pisa', 'Rome', 'Milano', 'Naples'],
        correctAnswer: 0
    }
];
var guess;
var score = 0;
var currentQuestion = 0;
var i;

$(function() {


    //clicking on the start quiz button hides the start page and shows the quiz page while firing the showQuestion() function


    //when you click the li in the quiz answers it adds a class that highlights the answer and removes the class from whatever has the .selected class
    $(".quiz ul").on('click', 'li', function() {
        $('.selected').removeClass('selected')
        $(this).addClass('selected');
    });

    //gives a click function to the submit button on the quiz. and makes sure an answer is being selected
    $('.quiz a').click(function(e) {
        e.preventDefault();
        if ($('li.selected').length) {
            let guess = Number($('li.selected').attr('id'));
            setTimeout(function() {
                checkAnswer(guess);
            }, 500);
            $("#timleft").val("20")
        } else {
            alert('Please select an answer');
        }
    });

    //
    $('.summary a').click(function(e) {
        e.preventDefault();
        //restartQuiz();
        location.reload();
    });
});

//This function changes the header to the current question's title, gets rid of the html in the <ul> and replaces it with the 
//answers in the question array with what is in the variable
function showQuestion() {
    current = question[currentQuestion];
    $(".quiz h2").text(current.title);
    $(".quiz ul").html("");
    for (i = 0; i < current.answers.length; i++) {
        $(".quiz ul").append(`<li id="${i}">${current.answers[i]}</li>`);
    }
}

//checks if the answer is correct if it is correct it will add an increment to the score variable, if it is not, nothing happens.
function checkAnswer(guess) {
    // question = question[currentQuestion];
    if (current.correctAnswer === guess) {

        score += 10;

    }

    //goes to next question by incrementing the number of the var currentQuestion
    currentQuestion++;
    if (currentQuestion == 1) {
        $("#step4").delay(500 * 1).qcss({ fill: "#00b72d" });

        $("#step5").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step6").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 2) {
        $("#step7").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step8").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step9").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step10").delay(500 * 4).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 3) {
        $("#step11").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step12").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step13").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step14").delay(500 * 4).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 4) {
        $("#step15").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step16").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step17").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step18").delay(500 * 4).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 5) {
        $("#step19").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step20").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step21").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 6) {
        $("#step23").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step23v2").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step24").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step25").delay(500 * 4).qcss({ fill: "#00b72d" });
        $("#step26").delay(500 * 5).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 7) {
        $("#step27").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step28").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step29").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step30").delay(500 * 4).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 8) {
        $("#step31").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step32").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step33").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step34").delay(500 * 4).qcss({ fill: "#00b72d" });
        $("#step35").delay(500 * 5).qcss({ fill: "#00b72d" });
        $("#step36").delay(500 * 6).qcss({ fill: "#00b72d" });
        $("#step37").delay(500 * 7).qcss({ fill: "#00b72d" });
        $("#step38").delay(500 * 8).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 9) {
        $("#step39").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step40").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step41").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 10) {
        $("#step42").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step43").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step44").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 11) {
        $("#step45").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step46").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step47").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step48").delay(500 * 4).qcss({ fill: "#00b72d" });
        $("#step49").delay(500 * 5).qcss({ fill: "#00b72d" });
        $("#step50").delay(500 * 6).qcss({ fill: "#00b72d" });
        $("#step51").delay(500 * 7).qcss({ fill: "#00b72d" });
        $("#step52").delay(500 * 8).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 12) {
        $("#step53").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step54").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step55").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 13) {
        $("#step56").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step57").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step58").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step59").delay(500 * 4).qcss({ fill: "#00b72d" });
        $("#step60").delay(500 * 5).qcss({ fill: "#00b72d" });
        $("#step61").delay(500 * 6).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 14) {
        $("#step62").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step63").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step64").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 15) {
        $("#step65").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step66").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step67").delay(500 * 3).qcss({ fill: "#00b72d" });
        $("#step68").delay(500 * 4).qcss({ fill: "#00b72d" });
        $("#step69").delay(500 * 5).qcss({ fill: "#00b72d" });

    }
    if (currentQuestion == 16) {
        $("#step70").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step71").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step72").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 17) {
        $("#step73").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step74").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step75").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 18) {
        $("#step76").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step77").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step78").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 19) {
        $("#step79").delay(500 * 1).qcss({ fill: "#00b72d" });
        $("#step80").delay(500 * 2).qcss({ fill: "#00b72d" });
        $("#step81").delay(500 * 3).qcss({ fill: "#00b72d" });
    }
    if (currentQuestion == 20) {
        $("#Ebene_32 .cls-6").css("fill", "green");
        var minimum = 10;
        var maximum = 100;
        var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        score += randomnumber;
    }

    if (current.correctAnswer === guess) {
        $("#cross" + currentQuestion + " path").css("fill", "green");
    } else {
        $("#cross" + currentQuestion + " path").css("fill", "red");
    }
    if (current.correctAnswer != guess) {
        $.ajax({
            url: "ajax.php",
            type: 'POST',
            data: {
                scre: score
            },
            success: function(data) {
                $('.summary').append(data);
            }
        });
        showSummary();
    }
    if (currentQuestion >= question.length) {
        if (score == "20") {
            $.ajax({
                url: "ajax.php",
                type: 'POST',
                data: {
                    scre: score
                },
                success: function(data) {
                    $('.summary').append(data);
                }
            });
        }
        showSummary();

    } else {
        //calls the showQuestion function to show the next question after it checks the answer
        showQuestion();
    };
};


$(".goBtn").on("click", function(e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    $(".map").show();
    $("#step1").css("fill", "green");
    $("#step2").css("fill", "green");
    $("#step3").css("fill", "green");
    var timeleft = parseInt($("#timleft").val());
    var downloadTimer = setInterval(function() {
        var timeleft = parseInt($("#timleft").val());
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        $("#timleft").val(timeleft);
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $.ajax({
                url: "ajax.php",
                type: 'POST',
                data: {
                    scre: score
                },
                success: function(data) {
                    $('.summary').append(data);
                }
            });
            showSummary();
        }
    }, 1000);
    showQuestion();
});

//hides the quiz page and shows the summary page while injecting the congratulations text into the summary page
function showSummary() {
    $(".quiz").hide();
    $(".summary").show();
    if (score > 40) {
        $(".summary p").text('Congrats! You scored ' + score)

    } else {
        $(".summary p").text('Too bad! You scored ' + score )

    }
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    $('.summary').hide();
    $('.quiz').show();
    $('.cls-5').css("fill", "none");
    $('.cls-6').css("fill", "none");
    $('.cls-7').css("fill", "none");
    $("#step1").css("fill", "green");
    $("#step2").css("fill", "green");
    $("#step3").css("fill", "green");
    $("table").html("");
    showQuestion();
}