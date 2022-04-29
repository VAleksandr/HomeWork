//---1---------------------------------
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}.`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const course = new Date().getFullYear() - this.year;
    return course > 0 && course <= 5 ? `He is a student ${course} course .` : 'He does not study.';
  }
}

const pasha = new Student('Pasha', 'Pavlov', 2019);

console.log(pasha.getFullName(), pasha.getCourse());

//---2---------------------------------
const getInfoClients = {
  getFullName() {
    console.log(`FullName: ${this.firstname} ${this.lastname}`);
  },
  getFullJob() {
    console.log(`Job: ${this.job.company} (${this.job.position})`);
  },
  getBySalary() {
    console.log(`Salary: ${this.salary} BYN`);
  }
};

const clients = [
  {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    salary: 1000,
    job: {
     company: 'Company Java',
     position: 'Java Developer'
    } 
  },
  {
    firstname: 'Pasha',
    lastname: 'Sidorov',
    salary: 2000,
    job: {
     company: 'Company Frontend',
     position: 'Frontend Developer'
    } 
  },
  {
    firstname: 'Ira',
    lastname: 'Petrova',
    salary: 1500,
    job: {
     company: 'Company Python',
     position: 'Python Developer'
    } 
  }
];

clients.forEach(clients => {
  getInfoClients.getFullName.bind(clients)();
  getInfoClients.getFullJob.apply(clients);
  getInfoClients.getBySalary.call(clients);
});
