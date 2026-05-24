import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled()" [@headerAnimation]>
      <div class="header-container">
        <a href="#home" class="logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">JD</span>
          <span class="logo-bracket">/&gt;</span>
        </a>
        
        <nav class="desktop-nav">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link cta">Contact</a>
        </nav>

        <button 
          class="mobile-toggle" 
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="isMobileMenuOpen()"
          aria-label="Toggle navigation menu"
        >
          <span class="bar" [class.open]="isMobileMenuOpen()"></span>
          <span class="bar" [class.open]="isMobileMenuOpen()"></span>
          <span class="bar" [class.open]="isMobileMenuOpen()"></span>
        </button>
      </div>

      @if (isMobileMenuOpen()) {
        <nav class="mobile-nav" [@mobileMenuAnimation]>
          <a href="#home" class="nav-link" (click)="closeMobileMenu()">Home</a>
          <a href="#about" class="nav-link" (click)="closeMobileMenu()">About</a>
          <a href="#skills" class="nav-link" (click)="closeMobileMenu()">Skills</a>
          <a href="#experience" class="nav-link" (click)="closeMobileMenu()">Experience</a>
          <a href="#projects" class="nav-link" (click)="closeMobileMenu()">Projects</a>
          <a href="#contact" class="nav-link cta" (click)="closeMobileMenu()">Contact</a>
        </nav>
      }
    </header>
  `,
  styleUrl: './header.component.scss',
  animations: [
    trigger('headerAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('mobileMenuAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
