import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./projects.component.html`,
  styleUrl: './projects.component.scss',
  animations: [
    trigger('staggerAnimation', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {
    //  {
    //   id: 1,
    //   title: 'E-Commerce Platform',
    //   description: 'A full-featured e-commerce solution with microservices architecture, real-time inventory management, and payment integration.',
    //   image: '',
    //   technologies: ['ASP.NET Core', 'Angular', 'Azure', 'SQL Server', 'Redis'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: true
    // }
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with microservices architecture, real-time inventory management, and payment integration.',
      image: '',
      technologies: ['ASP.NET Core', 'Angular', 'Azure', 'SQL Server', 'Redis'],
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and billing integration.',
      image: '',
      technologies: ['C#', '.NET 6', 'Blazor', 'PostgreSQL', 'Docker'],
      featured: true
    },
    {
      id: 3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard for monitoring KPIs with real-time data streaming and customizable visualizations.',
      image: '',
      technologies: ['Angular', 'SignalR', 'Azure Functions', 'CosmosDB'],
      featured: false
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, role-based access, and comprehensive documentation.',
      image: '',
      technologies: ['ASP.NET Core', 'Entity Framework', 'JWT', 'Swagger'],
      featured: false
    },
    {
      id: 5,
      title: 'Financial Portfolio Tracker',
      description: 'Application for tracking investments with real-time market data, performance analytics, and reporting.',
      image: '',
      technologies: ['.NET MAUI', 'Web API', 'SQL Server', 'Azure'],
      featured: false
    },
    {
      id: 6,
      title: 'CI/CD Pipeline Generator',
      description: 'Tool that generates customized Azure DevOps pipelines based on project configuration and best practices.',
      image: '',
      technologies: ['C#', 'Azure DevOps API', 'YAML', 'PowerShell'],
      featured: false
    }
  ]);
}
