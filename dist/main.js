async function $149c1bd638913645$export$e772c8ff12451969(milliseconds) {
    return new Promise((resolve)=>setTimeout(resolve, milliseconds));
}
async function $149c1bd638913645$export$e7f891a4444ce391(seconds) {
    const milliseconds = seconds * 1000;
    return $149c1bd638913645$export$e772c8ff12451969(milliseconds);
}
async function $149c1bd638913645$export$ffd7f359fdc5f167(minutes) {
    const milliseconds = minutes * 60000;
    return $149c1bd638913645$export$e772c8ff12451969(milliseconds);
}
async function $149c1bd638913645$export$6b3b1b1c5de19a7a(timestamp) {
    const currentTime = Date.now();
    const timeToWait = Math.max(0, timestamp - currentTime);
    return $149c1bd638913645$export$e772c8ff12451969(timeToWait);
}
async function $149c1bd638913645$export$7b373b3faf1d5ba9(min, max) {
    const randomMilliseconds = Math.floor(Math.random() * (max - min + 1)) + min;
    return $149c1bd638913645$export$e772c8ff12451969(randomMilliseconds);
}


export {$149c1bd638913645$export$e772c8ff12451969 as sleep, $149c1bd638913645$export$e7f891a4444ce391 as sleepSeconds, $149c1bd638913645$export$ffd7f359fdc5f167 as sleepMinutes, $149c1bd638913645$export$6b3b1b1c5de19a7a as sleepUntil, $149c1bd638913645$export$7b373b3faf1d5ba9 as sleepRandom};
//# sourceMappingURL=main.js.map
