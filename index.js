#!/usr/bin/env node
const fetch = require('node-fetch');

const config = require('./.env.js');

let city, time;
if (process.argv.length > 2) {
  city = process.argv[2];
}
if (process.argv.length > 3) {
  time = process.argv[3];
}

async function getLocalTimeForLocation(city, time) {
  const query = city;
  const response = await fetch(`https://dev.virtualearth.net/REST/v1/TimeZone/?query=${query}&key=${config.bingMapsApiKey}`);
  const json = await response.json();
  const timeZone = json.resourceSets[0].resources[0].timeZoneAtLocation[0].timeZone[0];

  if (!time) {
    console.log(new Date(timeZone.convertedTime.localTime).toLocaleString(config.lang));
    return;
  }

  const date = new Date();
  const timeChunks = time.split(':');
  date.setHours(parseInt(timeChunks[0]));
  if (timeChunks.length > 1) {
    date.setMinutes(parseInt(timeChunks[1]));
  }
  else {
    date.setMinutes(0);
  }
  if (timeChunks.length > 2) {
    date.setSeconds(parseInt(timeChunks[2]));
  }
  else {
    date.setSeconds(0);
  }
  console.log(date.toLocaleString(config.lang, { timeZone: timeZone.ianaTimeZoneId }));
}

getLocalTimeForLocation(city, time);
