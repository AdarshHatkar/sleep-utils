# sleep-utils

sleep-utils is a utility package for handling asynchronous sleep operations in both JavaScript (JS) and TypeScript (TS) environments. It provides functions to pause the execution of code for a specified amount of time, making it useful in scenarios where you need to introduce delays or pauses in your applications.

## Installation

You can install sleep-utils using npm:

```bash
$ npm install sleep-utils
```

## Usage

```javascript
import { sleep, sleepSeconds, sleepMinutes, sleepUntil, sleepRandom } from 'sleep-utils';

async function exampleUsage() {
  await sleep(1000); // sleeps for 1 second
  await sleepSeconds(2); // sleeps for 2 seconds
  await sleepMinutes(5); // sleeps for 5 minutes

  const futureTimestamp = Date.now() + 5000; // 5 seconds from now
  await sleepUntil(futureTimestamp);

  await sleepRandom(1000, 5000); // sleeps for a random time between 1 and 5 seconds
}

exampleUsage();

```
## API
### sleep(milliseconds: number): Promise<void>
Delays the execution of the code for the specified number of milliseconds.

### sleepSeconds(seconds: number): Promise<void>
Delays the execution of the code for the specified number of seconds.

### sleepMinutes(minutes: number): Promise<void>
Delays the execution of the code for the specified number of minutes.

### sleepUntil(timestamp: number): Promise<void>
Delays the execution of the code until the specified timestamp (in milliseconds since the Unix epoch).

### sleepRandom(min: number, max: number): Promise<void>
Delays the execution of the code for a random amount of time within the specified range.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)