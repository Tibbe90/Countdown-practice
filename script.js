let main = document.getElementById("root")
let display = document.createElement("div")
let header = document.createElement("h1")
header.classList.add("timer1");
main.classList.add("style");
const countdownGoal = new Date("November 5, 2025 00:00:00");

setInterval(() => {
    let currentTime = new Date();
    let timer = getTimeLeft(currentTime, countdownGoal) 
    header.textContent = timer
    console.log(timer);
}, 3000)


display.appendChild(header);
main.appendChild(header);

function getTimeLeft(timeNow, timeGoal){
    const oneDay = 1000*60*60*24
    const oneHour = 1000*60*60
    const oneMinute = 1000*60
    let daysLeft = timeGoal.getTime() - timeNow.getTime()
    let hoursLeft = daysLeft % oneDay
    let minutesLeft = hoursLeft % oneHour
    minutesLeft = Math.floor(minutesLeft / oneMinute)
    hoursLeft = Math.floor(hoursLeft / oneHour)
    daysLeft = Math.floor(daysLeft / oneDay)
    timeLeft = daysLeft + " Days, " + hoursLeft + " Hours and " + minutesLeft + " minutes until Walters birthday!!!"
    return timeLeft;
}