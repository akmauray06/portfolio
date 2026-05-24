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
  template: `
    <section id="projects" class="projects section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Portfolio</span>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">
            A selection of projects I&apos;ve worked on recently
          </p>
        </div>

        <div class="projects-grid" [@staggerAnimation]>
          @for (project of projects(); track project.id) {
            <article class="project-card" [class.featured]="project.featured">
              <div class="project-image">
                <div class="image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="m9 8 6 4-6 4Z"/>
                  </svg>
                </div>
                <div class="project-overlay">
                  <div class="project-links">
                    @if (project.liveUrl) {
                      <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer" class="link-btn" aria-label="View live demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M15 3h6v6"/>
                          <path d="M10 14 21 3"/>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        </svg>
                      </a>
                    }
                    @if (project.githubUrl) {
                      <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer" class="link-btn" aria-label="View on GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                          <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                      </a>
                    }
                  </div>
                </div>
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-technologies">
                  @for (tech of project.technologies; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <div class="projects-cta">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  `,
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
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with microservices architecture, real-time inventory management, and payment integration.',
      image: '',
      technologies: ['ASP.NET Core', 'Angular', 'Azure', 'SQL Server', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and billing integration.',
      image: '',
      technologies: ['C#', '.NET 6', 'Blazor', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard for monitoring KPIs with real-time data streaming and customizable visualizations.',
      image: '',
      technologies: ['Angular', 'SignalR', 'Azure Functions', 'CosmosDB'],
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, role-based access, and comprehensive documentation.',
      image: '',
      technologies: ['ASP.NET Core', 'Entity Framework', 'JWT', 'Swagger'],
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Financial Portfolio Tracker',
      description: 'Application for tracking investments with real-time market data, performance analytics, and reporting.',
      image: '',
      technologies: ['.NET MAUI', 'Web API', 'SQL Server', 'Azure'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'CI/CD Pipeline Generator',
      description: 'Tool that generates customized Azure DevOps pipelines based on project configuration and best practices.',
      image: '',
      technologies: ['C#', 'Azure DevOps API', 'YAML', 'PowerShell'],
      githubUrl: '#',
      featured: false
    }
  ]);
}
