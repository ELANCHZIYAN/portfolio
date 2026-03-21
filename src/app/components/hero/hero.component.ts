import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  phrases = ["Angular Developer", "Frontend Specialist", "Aspiring Full Stack Engineer"];
  currentPhraseIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  
  ngOnInit() {
    this.typeEffect();
  }
  
  typeEffect() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const typeSpeed = this.isDeleting ? 50 : 100;
    
    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      setTimeout(() => { this.isDeleting = true; this.typeEffect(); }, 2000);
      return;
    }
    
    if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.typeEffect(), 500);
      return;
    }
    
    const typingSpan = document.querySelector('.typing-text');
    if (typingSpan) {
        typingSpan.textContent = currentPhrase.substring(0, this.currentCharIndex + (this.isDeleting ? -1 : 1));
    }
    this.currentCharIndex += this.isDeleting ? -1 : 1;
    
    setTimeout(() => this.typeEffect(), typeSpeed);
  }
}
