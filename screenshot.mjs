import puppeteer from 'puppeteer';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const dir = './temporary screenshots';

if (!existsSync(dir)) mkdirSync(dir);

const files = existsSync(dir)
  ? (await import('fs')).readdirSync(dir).filter(f => f.startsWith('screenshot-'))
  : [];
const nums = files.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
const n = nums.length ? Math.max(...nums) + 1 : 1;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });

const path = join(dir, `screenshot-${n}${label}.png`);
await page.screenshot({ path, fullPage: false });
await browser.close();

console.log(`Saved: ${path}`);
