const { text } = require("body-parser");
const nodemailer = require("nodemailer");
const user = process.env.EMAIL_USER
const pass = process.env.EMAIL_PASS

const sendEmail = async (firstName, lastName, phone, email, subject, description) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
            user: user,
            pass: pass,
        }
    })

    const mailOptions = {
        from: "altagracia_web@outlook.com",
        to: "altagracia_web@outlook.com",
        subject: subject,
        text: "Nuevo cliente de Altagracia, favor de leer a la brevedad y atender la solicitud",
        html: `
          <h1>Nuevo mensaje de ${firstName} ${lastName}</h1>
          <p>Con mail ${email} y teléfono ${phone}</p>
          <p>Con motivo de ${subject}: ${description}</p>
        `
    }

    //Send Email
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
        } else {
            console.log(info);
        }
    })

};

module.exports = sendEmail;