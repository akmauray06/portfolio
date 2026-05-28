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
  title: 'E-Commerce API Development',
  description: 'Developed REST APIs for Magento e-commerce integration, including real-time order processing, inventory synchronization, and product price updates. Integrated Magento with Salesforce to enable seamless data flow and automated business operations.',
  image: '',
  technologies: ['C#', 'ASP.NET Core Web API', 'SQL Server', 'AS400 DB', 'Magento', 'Salesforce'],
  featured: true
},
{
  id: 2,
  title: 'Custom Order System (COS)',
  description: 'Built a web-based custom furniture ordering system with dynamic product configuration, pricing calculation, contract management, and order processing features. Improved order accuracy and automated business workflows.',
  image: '',
  technologies: ['C#', 'ASP.NET Core Web API', 'Angular', 'SQL Server', 'PostgreSQL', 'AS400 DB'],
  featured: true
},
{
  id: 3,
  title: 'Order Management System (OMS)',
  description: 'Developed and maintained an Order Management System for furniture sales operations, including cart management, quote handling, checkout, inventory tracking, and customer management functionalities.',
  image: '',
  technologies: ['C#', 'ASP.NET Core Web API', 'Angular', 'SQL Server', 'PostgreSQL', 'AS400 DB'],
  featured: true
},
{
  id: 4,
  title: 'HR Portal Application',
  description: 'Developed an HR Portal for employee profile and account management with Azure Active Directory integration for secure authentication and centralized employee operations.',
  image: '',
  technologies: ['ASP.NET Core', 'Angular', 'Azure Active Directory', 'REST APIs'],
  featured: false
},
{
  id: 5,
  title: 'Background Services & Console Applications',
  description: 'Created multiple console applications and background services for business process automation, including inventory processing, catalog generation, scheduling, and server monitoring.',
  image: '',
  technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Background Services'],
  featured: false
}
  ]);
}
