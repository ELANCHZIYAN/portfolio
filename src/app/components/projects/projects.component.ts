import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CCSES System',
      category: 'Professional (Frontend)',
      role: 'Angular Developer',
      description: 'Arkansas Healthcare project focusing on frontend architecture and performance. Built scalable frontend modules, reusable components, responsive UI, custom validations, and dynamic event handling.',
      technologies: ['Angular 19', 'TypeScript', 'PrimeNG', 'SCSS'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'NVKids Portal',
      category: 'Professional (Frontend)',
      role: 'Angular Developer',
      description: 'Nevada Child Support System featuring a Customer Portal, Employer Portal, and Dashboard. Developed reusable UI components and delivered an enterprise-grade UI experience.',
      technologies: ['Angular 7', 'TypeScript', 'PrimeNG', 'Swagger API'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Employee Mgmt API',
      category: 'Learning (Backend)',
      role: 'Aspiring Full Stack Developer',
      description: 'Developed a robust RESTful API using controller, service, and repository layers to perform basic CRUD operations. Implemented straightforward business logic and data persistence.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Postman'],
      liveLink: '#',
      codeLink: '#'
    }
  ];
}
