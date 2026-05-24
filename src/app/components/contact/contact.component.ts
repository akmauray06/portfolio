import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import emailjs from '@emailjs/browser';
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./contact.component.html`,
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  onSubmit() {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);
    this.sendEmail();
    // Simulate API call
    // setTimeout(() => {
    //   this.isSubmitting.set(false);
    //   this.isSubmitted.set(true);

    //   // Reset form
    //   this.form = { name: '', email: '', subject: '', message: '' };
    // }, 1500);
  }

  sendEmail(){
    debugger;
      if (
    !this.form.name.trim() ||
    !this.form.email.trim() ||
    !this.form.subject.trim() ||
    !this.form.message.trim()
  ) {
    alert('Please fill all fields');
    this.isSubmitting.set(false);
    return;
  }
     const templateParams = {
      name: this.form.name.trim(),
      email: this.form.email.trim(),
      message: this.form.message.trim(),
      title:this.form.subject.trim()
    };
    emailjs.send(
      'service_rqnscgg',
      'template_uxxizdk',
      templateParams,
      '8Q_tRL1Hj3_V329Kq'
    ).then(
      (response) => {

        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
        this.form = { name: '', email: '', subject: '', message: '' };

      },
      (error) => {

        alert('Failed To Send Email');
        this.isSubmitting.set(false);
      }
    );
  }
}
