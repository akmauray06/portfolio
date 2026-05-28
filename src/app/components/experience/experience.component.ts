import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./experience.component.html`,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = signal<Experience[]>([
    {
      id: 1,
      title: '.NET Developer',
      company: 'SourceMash Technology',
      location: 'Mohali Punjab, India',
      period: '2023 - Present',
      description: 'Full Stack .NET Developer SourceMash Technologies Built scalable web applications using C#, ASP.NET Core, Angular and SQL Server. Responsible for REST API development, frontend implementation, database optimization, bug fixing and supporting application deployment in an Agile environment.',
      achievements: [
        'Developed and maintained scalable web applications using C#, ASP.NET Core, Angular, and SQL Server.',
        'Improved application performance by optimizing SQL queries and API response times.',
        'Mentored team of 5 junior developersDesigned and integrated secure REST APIs for seamless frontend and backend communication.',
        'Built responsive and user-friendly UI components in Angular, enhancing overall user experience.',
        'Collaborated with cross-functional teams in Agile development to deliver projects on time with high code quality.'
      ],
      technologies: ['ASP.NET Core', 'REST Apis','MVC','Angular','TypeScript','JavaScript','HTML','CSS','MSSQL','PostgreSql']
    }
  ]);
}
