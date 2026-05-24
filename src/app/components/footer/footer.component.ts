import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <a href="#home" class="logo">
              <span class="logo-bracket">&lt;</span>
              <span class="logo-text">JD</span>
              <span class="logo-bracket">/&gt;</span>
            </a>
            <p class="footer-tagline">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <nav class="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} John Doe. All rights reserved.
          </p>
          <p class="built-with">
            Built with <span class="heart">♥</span> using Angular &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
