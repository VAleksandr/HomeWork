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
        from: '08:00',
        to: '12:00'
      },
      {
        from: '13:00',
        to: '19:00'
      },
      {
        from: '19:30',
        to: '23:30'
      }
    ],
  ]
};

const makeAnOrder = (day, time) => {
  const newDay = openingHours.dayOfWeek.findIndex(item => item === day);
  const orderTime = +time.split(':').join('');
  const arrPeriodsDay = openingHours.periods[newDay];
  const timeKitchen = 30;
  const orderStatus = [];

  if (!!(newDay != -1)) {
  
    for (let i = 0; i < arrPeriodsDay.length; i++) {
      const fromTime = +arrPeriodsDay[i].from.split(':').join('');
      const toTime = arrPeriodsDay[i].to.split(':');
      
      if (+toTime[1] <= timeKitchen) {
        toTime[1] = 60 - (timeKitchen - +toTime[1]);

        +toTime[0] === 0 ?
          toTime[0] = 24 - 1 :
          toTime[0] = +toTime[0] - 1;

        if(+toTime[1] === 60) {
          +toTime[0]++;
          toTime[1] = '00';
        }  
      }
      
      orderTime >= fromTime && orderTime < toTime.join('') ?
      orderStatus.push('true') :
      orderStatus.push('false'); 
    }

    return !!orderStatus.find(index => index === 'true');
  } else {
    return false;
  }
}

const now = moment();
const day = now.format('dddd').toUpperCase();
const time = now.format('HH:mm');

console.log(makeAnOrder(day, time));
