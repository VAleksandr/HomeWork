const BUSINESS_ENITITY_STATUSES = [
  {
    title: 'Not Validated',
    value: 'not_validated'
  },
  {
    title: 'Validated',
    value: 'validated'
  },
  {
    title: 'Validation Failed KYC',
    value: 'validation_failed_kyc'
  },
  {
    title: 'Validation Failed OFAC',
    value: 'validation_failed_ofac'
  },
  {
    title: 'Validation Failed Credit',
    value: 'validation_failed_credit'
  },
  {
    title: 'Validation Failed KYC Credit',
    value: 'validation_failed_kyc_credit'
  }
];
const PAYMENT_PLAN = [
  {
    id: 'gdh5h5151515h2t',
    planeName: 'Standart'
  },
  {
    id: 'sth31srth5h11trsh',
    planeName: 'Low'
  },
  {
    id: '5f515v1515f5',
    planeName: 'Max'
  }
];
const businessEntities = [
  {
    city: 'Edmonton',
    createdAt: '2022-03-28T13:41:06Z',
    id: '51se5eg15ser153515es3rg',
    merchantId: '',
    name: 'Alex Inc',
    planId: 'gdh5h5151515h2t',
    state: 'US-AK',
    status: 'not_validated'
  },
  {
    city: 'Camptown',
    createdAt: '2022-03-28T13:41:06Z',
    id: 'srt3b881srt618618srt618t',
    merchantId: '',
    name: 'Alex Inc 2',
    planId: 'gdh5h5151515h2t',
    state: 'US-AK',
    status: 'validated'
  },
  {
    city: 'Chicago',
    createdAt: '2022-03-28T13:41:06Z',
    id: 'srth351srth15trh13',
    merchantId: '',
    name: 'Mego Inc',
    planId: '5f515v1515f5',
    state: 'US-AK',
    status: 'validation_failed_ofac'
  },
  {
    city: 'California',
    createdAt: '2022-03-28T13:41:06Z',
    id: 'srth7htsr1trsh424212strh',
    merchantId: '',
    name: 'Nick Inc',
    planId: '5f515v1515f5',
    state: 'US-AK',
    status: 'validated'
  }
];

const outputDataTable = data => {
  
  data.forEach(({name, city, id, planId, status}) => { 
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');

    tbody.append(tr);
    planId = PAYMENT_PLAN.find(element => element.id === planId).planeName;
    status = BUSINESS_ENITITY_STATUSES.find(element => element.value === status).title;
    Object.values(({name, city, id, planId, status})).forEach(element => {
      const td = document.createElement('td');

      td.innerText = `${element}`;  
      tr.append(td);
    });
  });
}

outputDataTable(businessEntities);
