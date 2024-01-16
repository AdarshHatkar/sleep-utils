export async function sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  
  export async function sleepSeconds(seconds: number): Promise<void> {
    const milliseconds = seconds * 1000;
    return sleep(milliseconds);
  }
  
  export async function sleepMinutes(minutes: number): Promise<void> {
    const milliseconds = minutes * 60 * 1000;
    return sleep(milliseconds);
  }
  
  

  export async function sleepUntil(timestamp: number): Promise<void> {
    const currentTime = Date.now();
    const timeToWait = Math.max(0, timestamp - currentTime);
    return sleep(timeToWait);
  }
  
  export async function sleepRandom(min: number, max: number): Promise<void> {
    const randomMilliseconds = Math.floor(Math.random() * (max - min + 1)) + min;
    return sleep(randomMilliseconds);
  }
  