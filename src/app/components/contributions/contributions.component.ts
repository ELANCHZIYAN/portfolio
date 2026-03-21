import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contributions',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './contributions.component.html',
  styleUrl: './contributions.component.scss'
})
export class ContributionsComponent {
  contributions = [
    {
      title: 'Reusable Angular Libraries',
      description: 'Engineered shared UI component libraries, creating a unified design system that significantly accelerated frontend delivery across multiple projects.',
      icon: 'fa-solid fa-layer-group'
    },
    {
      title: 'Frontend Performance',
      description: 'Profiled and refactored critical Angular modules to optimize rendering techniques and DOM interactions, improving application maintainability.',
      icon: 'fa-solid fa-gauge-high'
    },
    {
      title: 'API Design Collaboration',
      description: 'Actively collaborated with backend teams to understand system architecture, improving RESTful API integrations and bridging the frontend-backend gap.',
      icon: 'fa-solid fa-handshake-angle'
    }
  ];
}
