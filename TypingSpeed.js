function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const setOfWords = ["Music can be as powerful a motivator as motivational quotes. Each morning when you wake up, play a few pump up songs before you start your day to get you going. You can listen to playlists with motivational songs on Spotify to help you get going. By getting your mind in the right mindset, you can inch closer to motivating yourself. When I want to get in the zone, I listen to “Time” by Hans Zimmer, which has no lyrics but has an intensity which helps me focus. If I’m feeling like I’m in a rut, motivational songs like “You’re a Superstar” by Love Inc. picks me up.",
    "When you think of your BIG goal, sometimes you start feeling overwhelmed. Why? Because big goals don’t get achieved right away. Instead, you need to create mini goals to help excite you along the way. This way you can be more goal-orientated and build a habit of being more effective. Celebrating your small wins will help you stay motivated through your journey. Plus, celebrating is always super fun. Maybe you break your goal down to 10 small-sized goals with tasks that get you on track to achieve them. For each of the 10 goals you can add a small celebration. Maybe a glass of champagne for one or a dessert with a sparkler on top for another. Don’t forget to check out some of our motivational quotes about success in a later section.",
    "This goes back to the positive environment point: You need to be around with others who are just ambitious as you. American entrepreneur John Rohn once said, “You’re the average of the five people you spend the most time with it.” And whether or not that’s true is debatable, the reality is being around the right kind of people can only help you grow. If you’re surrounded by those who love your ambition, you’ll be more ambitious and achieve more. If you’re surrounded by loved ones who tell you your goals are stupid and tell you to change them, you need to avoid them. Be around those who help you feel comfortable being the ambitious, go-getter you are, so you can become the successful person you’re meant to be."
];

const quout = ["Your limitation—it's only your imagination",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never.",
    "Great things never come from comfort zones.",
    "Wake up with determination. Go to bed with satisfaction",
    "Success doesn't just find you",
    "The harder you work for something, the greater you'll feel when you achieve it",
    "Don’t stop when you’re tired. Stop when you’re done."];


randomQuotes = () => {
    let randomQuotes = Math.floor(Math.random() * quout.length);
    quotes.innerHTML = quout[randomQuotes];

}
const msg = document.getElementById('message');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
const reset = document.getElementById('btnReset')
var counter_Time = document.getElementById('counter_Time');
let startTime, endTime;
let valcl = 0;
var countTry = document.getElementById('countTry');
const quotes = document.getElementById('quout');
var clicks = 0;
var returnValue = true;
var newCountertime = new Date();
var sec = 0, min = 0, hour;
var time_started = document.getElementById('time_started');

var defaultSettings = (valcl) => {
    typeWords.disabled = true;


}
playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    time_started.innerHTML = "Please start writing your time is started now";

}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    //console.log(totalTime);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = " You typed total at " + speed + " words per minutes. ";
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;

}


const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach((items, index) => {
        if (items == words2[index]) {
            cnt++;
        }

    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    //console.log(response);
    return response;
}
const resetAll = () => {
    typeWords.value = "";
}

const trycount = () => {
    clicks++;
    countTry.value = innerText = `Your Total attempt: ${clicks}`;
}


btn.addEventListener('click', function () {

    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();


    }

    else if (this.innerText == 'Done') {
        var typeWordCount = document.getElementById('mywords').value;
        if (typeWordCount.length == 0) {
            printError("error", " * Please write the above mention message ");
            setTimeout("document.getElementById('error').innerHTML=''", 2000);
            returnValue = false;

        }
        else if (typeWordCount.length !== 0) {
            typeWords.disabled = true;
            btn.innerText = "Start";
            endPlay();
            resetAll();
            trycount();
            randomQuotes();
        }


    }

})
