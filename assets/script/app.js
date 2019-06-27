var number = 30;
var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// Questions array
var questions = [{
     
    question: "What is the diameter of Earth?",
    answerList: ["4,000", "6,000", "9,000", "8,000"],
    answer: 3
},{
    question: "\"What is the capital of Canada?",
    answerList: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    answer: 1
},{
    question: "In computing history, who were the Dirty Dozen?",
    answerList: ["Shockley engineers", "I don't know", "The Internet's first infamous hacking group", "Engineers who created the first IBM PC"],
    answer: 3
},{
    question: "Before being known as PayPal, the company went by what name?",
    answerList: ["Confinity", "The X-Change", "MoneyMate", "iCash.com"],
    answer: 0
},{
    question: "Which of these companies invented Ethernet?",
    answerList: ["Cisco", "Xerox", "AT&T", "Packard Bell"],
    answer: 1
},{
    question: "What was the Mac's first web browser?",
    answerList: ["Cello", "Mosaic", "Samba", "ViolaWWW"],
    answer: 2
},{
    question: "Who launched the very first website?",
    answerList: ["CERN", "Stanford", "Xerox", "MIT"],
    answer: 0
}];

$("#start").on("click", function() {
    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

      // Hide Start button
      $(this).hide();

    // Start timer countdown
    run();
   
    // Display questions
    
   