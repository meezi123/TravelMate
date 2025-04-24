import dotenv from 'dotenv';
dotenv.config();  // Call dotenv before any access to process.env

import { MailtrapClient } from 'mailtrap';

const TOKEN = "58f2c41a0600a70efbc3d8d36a8c296f";



  // Check if these values are loaded correctly

export const mailtrapClient = new MailtrapClient({

  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};



