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
  template: `
    <section id="experience" class="experience section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Career Path</span>
          <h2 class="section-title">Work Experience</h2>
          <p class="section-subtitle">
            Building innovative solutions across various industries
          </p>
        </div>

        <div class="timeline">
          @for (exp of experiences(); track exp.id; let i = $index) {
            <div class="timeline-item" [class.right]="i % 2 !== 0">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
              </div>
              <div class="timeline-content">
                <div class="exp-header">
                  <span class="exp-period">{{ exp.period }}</span>
                  <span class="exp-location">{{ exp.location }}</span>
                </div>
                <h3 class="exp-title">{{ exp.title }}</h3>
                <h4 class="exp-company">{{ exp.company }}</h4>
                <p class="exp-description">{{ exp.description }}</p>
                <ul class="exp-achievements">
                  @for (achievement of exp.achievements; track achievement) {
                    <li>{{ achievement }}</li>
                  }
                </ul>
                <div class="exp-technologies">
                  @for (tech of exp.technologies; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
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
