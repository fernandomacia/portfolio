import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    private userID = 'ytv4jsjf2pvF8rWt7'; // Reemplaza con tu User ID
    private serviceID = 'service_lkoo3lj'; // Reemplaza con tu Service ID
    private templateID = 'template_uzfbooq'; // Reemplaza con tu Template ID

    constructor() { }

    sendEmail(formData: { name: string; email: string; message: string }): Promise<EmailJSResponseStatus> {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        // Llamada a emailjs.send con los parámetros correctos
        return emailjs.send(this.serviceID, this.templateID, templateParams, {
            publicKey: this.userID,
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            return response;
        })
        .catch((err) => {
            console.error('FAILED...', err);
            throw err;
        });
    }
}
