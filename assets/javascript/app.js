var questionSet = [{
    question: "How many Infinity Stones were there?",
    ans: ["Five", "Six", "Four", "Three"],
    name: "infinity",
    correct: "Six",
    divClass: ".infinity"
},
{
    question: "Where was the space stone located?",
    ans: ["In Space", "Sewer", "Tesseract", "Maveth"],
    name: "space",
    correct: "Tesseract",
    divClass: ".space"
},
{
    question: "Where did Thanos find the mind stone?",
    ans: ["Wakanda", "Russia", "Vision", "Sokovia"],
    name: "mind",
    correct: "Vision",
    divClass: ".mind"
},
{
    question: "Where was the soul stone located?",
    ans: ["Uranus", "Vormir", "Knowhere", "Jotunheim"],
    name: "soul",
    correct: "Vormir",
    divClass: ".soul"
},
{
    question: "Where was the time stone located?",
    ans: ["Tony Starks House", "Doctor Strange", "The White House", "Shield"],
    name: "time",
    correct: "Doctor Strange",
    divClass: ".time"
},
{
    question: "Where was the power stone located??",
    ans: ["Ego", "Sakaar", "Xandar", "Titan"],
    name: "power",
    correct: "Xandar",
    divClass: ".power"
},
{
    question: "Where was the reality stone located?",
    ans: ["Asgard", "Earth", "The Collector", "Morag"],
    name: "reality",
    correct: "The Collector",
    divClass: ".reality"
},
{
    question: "Where did the Infinity stones end up by the end of the war?",
    ans: ["Joe's House", "The Dirt", "Infinity Gauntlet", "Shield"],
    name: "gauntlet",
    correct: "Infinity Gauntlet",
    divClass: ".gauntlet"
}
] 

var options = ["first", "second", "third", "forth"];
// click to start then display quesions
var startTrivia = $("#startButton").on('click', function() {
$(this).parent().hide();
$('.container').show();
//set timer
countdown(15);
displayQuestions();
});

// function for displaying questions
var displayQuestions = function() {
$(".questionSet :not('#submitButton')").empty();
for (var j = 0; j < 8; j++) {
$('.questions').prepend('<div class="' + questionSet[j].name + '"></div>');
$(questionSet[j].divClass).append('<div class ="ques-title">' + questionSet[j].question + '</div>');
// loop through answers
for (var i = 0; i <= 3; i++) {
    $(questionSet[j].divClass).append('<input type="radio" name="' + questionSet[j].name + '" value="' + questionSet[j].ans[i] + '"/><label for="' + options[i] + '">' + questionSet[j].ans[i] + '</label>');
}
$('.questions').prepend('<br>');
}
}
//timer
var countdown = function(seconds) {
var timer = setInterval(function() {
seconds = seconds - 1;
$("#timeRemain").html(seconds);
if (seconds <= 0) {
    $('.container').hide();
    var rightAnswers = 0;
    var wrongAnswers = 0;
    // loop through array to check answers
    for (var i = 0; i < 8; i++) {
        if ($('input:radio[name="' + questionSet[i].name + '"]:checked').val() === questionSet[i].correct) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        };
    }
    $('#correctTimed').append(rightAnswers);
    // display wrongAnswers
    $('#wrongTimed').append(wrongAnswers);
    $('#timed').show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#submitButton').on('click', function() {
clearInterval(timer);
})
}; 

// function to check answers once submit button is clicked
var displayResults = $('#submitButton').on('click', function() {
var rightAnswers = 0;
var wrongAnswers = 0;

// loop through array to check answer
for (var i = 0; i < 8; i++) {
if ($('input:radio[name="' + questionSet[i].name + '"]:checked').val() === questionSet[i].correct) {
    rightAnswers++;
} else {
    wrongAnswers++;
};
};

// stop timer
countdown();
$('.container').hide();
// show answerScreen
$('#submitScreen').show();
// display correctAnswers
$('#correctScreen').append(rightAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);
});