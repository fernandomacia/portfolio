import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    private userID = environment.userID
    private serviceID = environment.serviceID
    private templateID = environment.templateID

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
