const openingHours = {
  dayOfWeek: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
  periods: [
    [
      {
        from: '10:00',
        to: '14:00'
      },
      {
        from: '15:00',
        to: '18:00'
      },
      {
        from: '18:30',
        to: '22:00'
      }
    ],
    [
      {
        from: '10:00',
        to: '14:00'
      },
      {
        from: '15:00',
        to: '18:00'
      },
      {
        from: '18:30',
        to: '22:00'
      }
    ],
    [
      {
        from: '10:00',
        to: '14:00'
      },
      {
        from: '15:00',
        to: '18:00'
      },
      {
        from: '18:30',
        to: '22:00'
      }
    ],
    [
      {
        from: '10:15',
        to: '14:00'
      },
      {
        from: '15:00',
        to: '18:00'
      },
      {
        from: '18:30',
        to: '22:00'  
      }
    ],
    [
      {
        from: '08:20',
        to: '12:10'
      },
      {
        from: '13:00',
        to: '19:00'
      }, 
      {
        from: '19:30',
        to: '23:45'
      }
    ],
  ]
};

const makeAnOrder = (day, time) => {
  const newDay = openingHours.dayOfWeek.findIndex(item => item === 'FRIDAY');
  const arrPeriodsDay = openingHours.periods[newDay];
  const orderTime = time.split(':');
  const timeKitchen = 30;
  const orderStatus = [];
  const workStatus = [];

  
  if (!!(newDay != -1)) {
    const timeStart = +arrPeriodsDay[0].from.split(':').join('');
    const timeEnd = +arrPeriodsDay[2].to.split(':').join('');  

    if (orderTime.join('') < timeStart || orderTime.join('') >= timeEnd) {
      return 'CLOSED';
    } 
  } else {
    return `We don't work on ${day} `;
  }

  for (let i = 0; i < arrPeriodsDay.length; i++) {
    const fromTime = +arrPeriodsDay[i].from.split(':').join('');
    const toTime = arrPeriodsDay[i].to.split(':');

    orderTime.join('') >= fromTime && orderTime.join('') < +toTime.join('') ?
      workStatus.push('true') :
      workStatus.push('false');
    
    toTime[1] = toTime[1] - timeKitchen;
    
    if (toTime[1] < 0) {
      toTime[1] = 60 + toTime[1];

      +toTime[0] === 0 ? toTime[0] = 24 - 1 : toTime[0] = toTime[0] - 1;

      if(+toTime[1] === 60) {
        toTime[0]++;
        toTime[1] = '00';
      }  
    }     
    
    orderTime.join('') >= fromTime && orderTime.join('') < +toTime.join('') ? 
    orderStatus.push('true') :
    orderStatus.push('false'); 
  }

  if (!!orderStatus.find(index => index === 'true')) {
    return 'Order is accepted.'
  } else {
    if (!!workStatus.find(index => index === 'true')) {
      return 'Kitchen not working.'
    } else {
      const timePeriodsFrom = arrPeriodsDay.map(item => item = item.from.split(':'));
      const timeEndBreak = timePeriodsFrom.find(index => +orderTime.join('') < +index.join(''))
      let minutesBeforeEndBreak = +timeEndBreak[1] - +orderTime[1];
      let hourBeforeEndBreak = +timeEndBreak[0] - +orderTime[0];

      if (hourBeforeEndBreak != 0) {
        hourBeforeEndBreak--;
      }

      if (minutesBeforeEndBreak < 0) {
        minutesBeforeEndBreak = 60 + minutesBeforeEndBreak;
      }

      if (minutesBeforeEndBreak < 10) {
        minutesBeforeEndBreak = `0${minutesBeforeEndBreak}`;
      }

      return `Break now. Order in ${hourBeforeEndBreak}:${minutesBeforeEndBreak} minutes.`
    }
  }
}

const now = moment();
const day = now.format('dddd').toUpperCase();
const time = now.format('HH:mm');

console.log(makeAnOrder(day, time));
