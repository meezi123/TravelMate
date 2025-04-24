import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapClient ,sender} from "./mailtrap.config.js";


export const sendVarificationEmail = async (email, verificationToken) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
      category: "Email Verification"
    })
    console.log("email sent successfully ", response);
    
  } catch (error) {
    console.log("Error sending email verification", error)
    throw new Error(`Error sending email verification email : ${error}`);
    
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
       template_uuid: "8b1bfef8-0551-4a67-ae30-883180b1bc68",
    template_variables: {
      "company_info_name": "Rameez Company",
      "name": name
    }
    })
    console.log("Welcome !! ", response);
  } catch (error) {
    console.log("error welcoming ", error);
    throw new Error("Error Welcoming", error);
    
  }
  
}