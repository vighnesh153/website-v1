import { WorkExperience } from '@vighnesh153-shared/models/Work/WorkExperience';

export const developmentWorkExperience: WorkExperience = {
  jobs: [
    {
      company: 'Freelance',
      role: 'Software Development Engineer',
      duration: 'Jan 2018 - Present',
      summary: 'I build end-to-end applications for fun or to solve day-to-day problems. My work includes:',
      tasks: [
        'A web-application hosted locally, for a snacks shop in my neighbourhood. ' +
        'It helped them in managing orders without any hassle. The manual work of using registers was no more needed (Tech stack: MEAN)',
        'Addition of games for a gaming cybercafe on their machine. Developed 7 different high-performance arcade games in JavaScript.'
      ]
    },
    {
      company: 'Tavisca, A cxLoyalty company',
      role: 'Full Stack Developer',
      duration: 'Jul 2019 - Jan 2020 . 7mos',
      summary: 'A Full-stack Developer (trainee for 4 months)',
      tasks: [
        'Developed the \'Timeline\' feature of a project in a tight deadline',
        'Fixed UI bugs',
        'Learnt about Agile Methodologies and Best Practices, Design principles in Software Development'
      ]
    }
  ]
};
