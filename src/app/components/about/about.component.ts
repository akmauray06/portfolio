import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <div class="image-wrapper">
              <div class="image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M20 21a8 8 0 0 0-16 0"/>
                </svg>
              </div>
              <div class="image-decoration"></div>
            </div>
          </div>

          <div class="about-content">
            <span class="section-label">About Me</span>
            <h2 class="section-title">Crafting Digital Experiences</h2>
            <p class="about-text">
              I&apos;m a passionate Full Stack .NET Developer with over 8 years of experience 
              building enterprise-grade web applications. My expertise spans the entire 
              development lifecycle, from architecture design to deployment.
            </p>
            <p class="about-text">
              Currently focused on building scalable microservices with ASP.NET Core, 
              creating responsive frontends with Angular, and leveraging Azure cloud 
              services for robust infrastructure.
            </p>
            <p class="about-text">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge through 
              technical blog posts.
            </p>

            <div class="about-highlights">
              <div class="highlight">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  </svg>
                </div>
                <div class="highlight-content">
                  <h4>Clean Architecture</h4>
                  <p>Building maintainable, testable code</p>
                </div>
              </div>
              <div class="highlight">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div class="highlight-content">
                  <h4>Best Practices</h4>
                  <p>Following industry standards</p>
                </div>
              </div>
              <div class="highlight">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div class="highlight-content">
                  <h4>Performance First</h4>
                  <p>Optimized for speed &amp; scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {}
