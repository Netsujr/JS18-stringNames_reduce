const timeNodes = Array.from(document.querySelectorAll('[data-time]'))
const total = document.getElementById('total');

timeNodes.map(node => node.textContent += ` - ${(node.dataset.time)}`);
// console.log(total);


const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    // console.log(mins, secs);

  }).reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;


// console.log(mins);
// console.log(hours, mins, secondsLeft);
// console.log(seconds);
// console.log(secondsLeft);

total.textContent += `${hours}:${mins}:${secondsLeft}`;
