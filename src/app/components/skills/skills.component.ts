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
  templateUrl: `./skills.component.html`,
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
        { name: 'REST APIs', level: 92 },
        { name: 'Entity Framework Core', level: 90 },
        { name: 'ASP.NET MVC', level: 88 },
        { name: 'ADO.NET', level: 85 },
        { name: 'Dapper', level: 82 }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'HTML5 / CSS3 / SCSS', level: 88 },
        { name: 'RxJS', level: 85 },
        { name: 'Angular Material', level: 80 },
        { name: 'Bootstrap', level: 90 }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MSSQL', level: 90 },
        { name: 'PostgreSQL', level: 90}
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git and Bitbucket / Version Control', level: 95 },
        { name: 'Post Man', level: 88 },
        { name: 'DBever', level: 90 },
        // { name: '', level: 85 },
        // { name: 'Design Patterns', level: 88 },
        // { name: 'Code Review', level: 92 }
      ]
    }
  ]);
HighLightSkills : string []=["C#",".Net",'.Net Core','REST Apis','MVC','Angular','TypeScript','JavaScript','HTML','CSS','MSSQL','PostgreSQL'];
  activeCategory = signal('Backend');

  setActiveCategory(category: string) {
    this.activeCategory.set(category);
  }

  getActiveSkills(): Skill[] {
    const category = this.categories().find(c => c.name === this.activeCategory());
    return category?.skills || [];
  }
}
