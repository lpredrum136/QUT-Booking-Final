const moment = require('moment-business-days');

/*findDays = (now, minLead, maxLead, interval) => {
  let days = [];

  const start = moment(now);

  let newstart = start.clone().add(minLead, 'hours');

  // If already passed the last slot
  if (newstart.hours() * 60 + newstart.minutes() > 17 * 60 - interval) {
    newstart = newstart.add(1, 'day');
    //console.log(newstart.format('LL'));
    for (let i = 0; i < maxLead; i++) {
      let day = newstart.clone().add(i, 'days');
      days.push(day.format('LL'));
    }
    console.log(days);
  } else {
    //console.log(newstart.format('LL'));
    for (let i = 0; i < maxLead; i++) {
      let day = newstart.clone().add(i, 'days');
      days.push(day.format('LL'));
    }
    console.log(days);
  }
};

findDays('2019-10-10T16:30', 24, 10, 60);*/

/*moment.fn.roundNext15Min = function() {
  let intervals = Math.floor(this.minutes() / 15);
  if (this.minutes() % 15 != 0) intervals++;
  if (intervals == 4) {
    this.add('hours', 1);
    intervals = 0;
  }
  this.minutes(intervals * 15);
  this.seconds(0);
  return this;
};

const availabilityView = '0002222222200002220000000';

const slots_required = 2;
const userStart = moment('2019-10-08T11:07:59+10:00').roundNext15Min();
const bizEnd = moment('2019-10-08T17:30:00');
const available_slots = [];

console.log(userStart);

let slots_taken = 0;
let current = null;

for (let i = 0; i < availabilityView.length; i++) {
  if (availabilityView[i] == 0) {
    slots_taken++;
    if (current == null) {
      current = userStart.clone().add(i * 15, 'm');
    }
    if (slots_taken == slots_required) {
      available_slots.push(current);
      current = userStart.clone().add((i + 1) * 15, 'm');
      slots_taken = 0;
    }
  } else {
    slots_taken = 0; // get broken
    current = null;
  }
}

console.log(available_slots);*/

/*console.log(
  moment()
    .roundNext15Min()
    .format('YYYY-MM-DDTHH:mm:ss')
);

const day = '2019-10-23T00:00:00+10:00';
const startTime = '08:00';
console.log(`${moment(day).format('YYYY-MM-DD')}T${startTime}:00`);*/

/*const day = '2019-10-17T00:00:00+10:00';

const start = '07:30';
const end = '15:00';
const new_start = moment(start, 'HH:mm');
const new_end = moment(end, 'HH:mm');
console.log(new_start);

const new_start_rounded = new_start.clone().startOf('hour');

const ranges = [];

while (true) {
  let time_to_add = new_start_rounded.clone();
  if (!new_start_rounded.isSameOrAfter(new_end)) {
    ranges.push(time_to_add.format('HH:mm:ss'));
    new_start_rounded.add(1, 'h');
  } else {
    break;
  }
}

console.log(ranges);

const new_ranges = ranges.map(
  range => `${moment(day).format('YYYY-MM-DD')}T${range}`
);

console.log(new_ranges);

const defh = 1;
const defm = 15;

console.log(moment('2019-10-17T07:45:00+10:00').format('YYYY-MM-DDTHH:mm:ss'));

console.log(
  moment('2019-10-17T07:45:00+10:00')
    .clone()
    .add(defh * 60 + defm, 'm')
    .format('YYYY-MM-DDTHH:mm:ss')
);*/

// Your moment
var mmt = moment(`${moment().format('YYYY-MM-DD')}T15:30`);

// Your moment at midnight
var mmtMidnight = mmt.clone().startOf('day');

// Difference in minutes
var diffMinutes = mmt.diff(mmtMidnight, 'minutes');

console.log(mmt);

console.log(diffMinutes);
