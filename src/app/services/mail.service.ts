import { Injectable } from '@angular/core';
import { getMaxListeners } from 'node:process';
import * as nodeMailer from 'nodemailer';



const nodemailer = require("nodemailer");

@Injectable({
  providedIn: 'root',
})
export class MailService {
  testTransport = nodeMailer.createTransport({
        host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "aboubakarfaouzi@gmail.com", // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },

  });
  constructor() {}
  sendMail(String message , String author) {
    this.testTransport.sendMail({
      from : author,
      to: 'servoocmr@gmail.com',
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
    })
  }
}
