import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
    contactForm!: FormGroup;

    private fb = inject( FormBuilder );
    private router = inject( Router );
    private _emailService = inject( EmailService );
    private snackBar = inject( MatSnackBar );

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email] ],
            message: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            this._emailService.sendEmail(this.contactForm.value).then(
                response => {
                    this.contactForm.reset();
                    this.showSnackbar();
                    this.router.navigate(['/inicio']);
                },
                error => {
                    console.error('Error al enviar el correo', error);
                }
            );
        }
    }

    showSnackbar() {
        this.snackBar.open('El mensaje se ha enviado correctamente', 'Cerrar', {
          duration: 0,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }

}
