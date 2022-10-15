let isCounting = true;

document.addEventListener("DOMContentLoaded", function() {
    let counter = document.querySelector("#counter");
    setInterval(function() {
        if (isCounting === true) {
            let currentCount = parseInt(counter.innerHTML, 10);
            counter.textContent = currentCount + 1;
        }
    }, 1000);
});

function minus() {
    let currentCount = parseInt(counter.innerHTML, 10);
    counter.textContent = currentCount - 1;
}

function plus() {
    let currentCount = parseInt(counter.innerHTML, 10);
    counter.textContent = currentCount + 1;
}
document.querySelector("#minus").addEventListener("click", function() {
    minus();
});
document.querySelector("#plus").addEventListener("click", function() {
    plus();
});

const heartLikes = {};

function addLikes() {
    let currentCount = parseInt(counter.innerHTML, 10);
    let countTimes;
    let exist = document.getElementById(`${currentCount}count`);
    if (exist) {
        heartLikes.currentCount += 1;
        likesPhrase(exist, currentCount, heartLikes.currentCount);
    } else {
        countTimes = 0;
        let ul = document.querySelector(".likes");
        let li = document.createElement("li");
        li.className = "likeLog";
        li.id = `${currentCount}count`;
        countTimes += 1;
        heartLikes.currentCount = countTimes;
        console.log(heartLikes.currentCount);
        likePhrase(li, currentCount, heartLikes.currentCount);
        ul.append(li);
    }
}

function likePhrase(name, currentCount, countTimes) {
    name.textContent = `${currentCount} has been liked ${countTimes} time`;
}

function likesPhrase(name, currentCount, countTimes) {
    name.textContent = `${currentCount} has been liked ${countTimes} times`;
}
document.querySelector("#heart").addEventListener("click", function() {
    addLikes();
});

function pauseCount() {
    isCounting = !isCounting;

    if (isCounting === false) {
        disableBtns();
        document.getElementById("pause").textContent = "resume";
    } else {
        enableBtns();
        document.getElementById("pause").textContent = "pause";
    }
}

function disableBtns() {
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
}

function enableBtns() {
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
}
document.querySelector("#pause").addEventListener("click", function() {
    pauseCount();
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let comment = e.target.comment.value;
    let logComment = document.createElement("p");
    logComment.textContent = comment;
    document.querySelector("#list").appendChild(logComment);
});