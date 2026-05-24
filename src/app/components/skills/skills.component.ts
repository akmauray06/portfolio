import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">My Skills</span>
          <h2 class="section-title">Technologies I Work With</h2>
          <p class="section-subtitle">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div class="skills-tabs">
          @for (category of categories(); track category.name) {
            <button 
              class="tab-btn" 
              [class.active]="activeCategory() === category.name"
              (click)="setActiveCategory(category.name)"
            >
              {{ category.name }}
            </button>
          }
        </div>

        <div class="skills-grid" [@staggerAnimation]>
          @for (skill of getActiveSkills(); track skill.name) {
            <div class="skill-card">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percent">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  [style.width.%]="skill.level"
                ></div>
              </div>
            </div>
          }
        </div>

        <div class="tech-logos">
          <div class="tech-item">.NET</div>
          <div class="tech-item">C#</div>
          <div class="tech-item">Angular</div>
          <div class="tech-item">TypeScript</div>
          <div class="tech-item">Azure</div>
          <div class="tech-item">SQL</div>
          <div class="tech-item">Docker</div>
          <div class="tech-item">Git</div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(50, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent {
  categories = signal<SkillCategory[]>([
    {
      name: 'Backend',
      skills: [
        { name: 'C# / .NET Core', level: 95 },
        { name: 'ASP.NET Core Web API', level: 92 },
        { name: 'Entity Framework Core', level: 90 },
        { name: 'SQL Server', level: 88 },
        { name: 'Microservices', level: 85 },
        { name: 'Redis / Caching', level: 82 }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'HTML5 / CSS3 / SCSS', level: 88 },
        { name: 'RxJS', level: 85 },
        { name: 'NgRx State Management', level: 80 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', level: 88 },
        { name: 'Azure DevOps / CI/CD', level: 85 },
        { name: 'Docker & Kubernetes', level: 80 },
        { name: 'Azure Functions', level: 82 },
        { name: 'Azure Service Bus', level: 78 },
        { name: 'Terraform / IaC', level: 75 }
      ]
    },
    {
      name: 'Tools & Practices',
      skills: [
        { name: 'Git / Version Control', level: 95 },
        { name: 'Unit Testing / xUnit', level: 88 },
        { name: 'Agile / Scrum', level: 90 },
        { name: 'Clean Architecture', level: 85 },
        { name: 'Design Patterns', level: 88 },
        { name: 'Code Review', level: 92 }
      ]
    }
  ]);

  activeCategory = signal('Backend');

  setActiveCategory(category: string) {
    this.activeCategory.set(category);
  }

  getActiveSkills(): Skill[] {
    const category = this.categories().find(c => c.name === this.activeCategory());
    return category?.skills || [];
  }
}
