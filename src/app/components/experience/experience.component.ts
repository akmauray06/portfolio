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
      title: 'Senior .NET Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading the development of enterprise-grade microservices architecture for a major fintech platform.',
      achievements: [
        'Architected microservices handling 1M+ daily transactions',
        'Reduced API response time by 60% through optimization',
        'Mentored team of 5 junior developers'
      ],
      technologies: ['ASP.NET Core', 'Azure', 'Kubernetes', 'Angular']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateTech Inc.',
      location: 'Seattle, WA',
      period: '2019 - 2022',
      description: 'Developed and maintained multiple client-facing web applications using .NET and Angular.',
      achievements: [
        'Built real-time dashboard serving 50K+ active users',
        'Implemented CI/CD pipeline reducing deployment time by 75%',
        'Led migration from .NET Framework to .NET Core'
      ],
      technologies: ['C#', 'Angular', 'SQL Server', 'Azure DevOps']
    },
    {
      id: 3,
      title: '.NET Developer',
      company: 'Digital Dynamics',
      location: 'Austin, TX',
      period: '2016 - 2019',
      description: 'Contributed to the development of healthcare management systems with focus on security and compliance.',
      achievements: [
        'Developed HIPAA-compliant data processing modules',
        'Improved database query performance by 40%',
        'Created reusable component library used across 3 projects'
      ],
      technologies: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'jQuery']
    }
  ]);
}
