const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
timeNodes.map(node => node.textContent += `: ${node.dataset.time}`);


const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins, secs);

  }).reduce((total, videoSeconds) => total + videoSeconds)
  ;


console.log(seconds);
