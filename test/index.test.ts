import { describe, it, expect } from 'vitest';
import { sleep, sleepSeconds,  sleepUntil, sleepRandom } from '../src';

describe('Sleep Library Tests', () => {
  it('sleep function', async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(1000);
    expect(elapsed).toBeLessThan(1100);
  });

  it('sleepSeconds function', async () => {
    const start = Date.now();
    await sleepSeconds(2);
    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(2000);
    expect(elapsed).toBeLessThan(2100);
  });



  it('sleepUntil function', async () => {
    const futureTimestamp = Date.now() + 2000;
    const start = Date.now();
    await sleepUntil(futureTimestamp);
    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(2000);
    expect(elapsed).toBeLessThan(2100);
  });

  it('sleepRandom function', async () => {
    const start = Date.now();
    await sleepRandom(1000, 5000);
    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(1000);
    expect(elapsed).toBeLessThan(6000);
  });
});
