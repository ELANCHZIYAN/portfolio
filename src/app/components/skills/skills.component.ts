import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend (Primary Expertise)',
      icon: 'fa-solid fa-laptop-code',
      badge: 'Expert',
      skills: [
        { name: 'Angular (v7–19)', level: 95, exp: 'Expert' },
        { name: 'TypeScript & JavaScript', level: 90, exp: 'Expert' },
        { name: 'HTML5 & CSS3', level: 90, exp: 'Expert' },
        { name: 'PrimeNG / Bootstrap', level: 95, exp: 'Expert' },
        { name: 'Reusable Components & Perf. Opt.', level: 85, exp: 'Advanced' }
      ]
    },
    {
      title: 'Backend (Learning)',
      icon: 'fa-solid fa-server',
      badge: 'Growing',
      skills: [
        { name: 'Java', level: 60, exp: 'Intermediate' },
        { name: 'Spring Boot (REST, CRUD)', level: 65, exp: 'Intermediate' },
        { name: 'MongoDB (Basic Schema & Queries)', level: 60, exp: 'Learning' }
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: 'fa-solid fa-toolbox',
      badge: 'Proficient',
      skills: [
        { name: 'Git, TFS, SVN', level: 85, exp: 'Advanced' },
        { name: 'VS Code', level: 95, exp: 'Expert' },
        { name: 'Agile/Scrum', level: 90, exp: 'Advanced' }
      ]
    }
  ];
}
