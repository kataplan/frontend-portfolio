import { functions } from "firebase/functions";"../src/firebase"
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.SECRET_PASS,
    },
});

const sendContactForm = (form) => {
    return transport
        .sendMail({
            subject: "👾🤖Nuevo mensaje de tu formulario de contacto😎",
            bcc: [process.env.MAIL_USER],
            html: `<h3>¡Tienes un nuevo mensaje!</h3>
			<p> Nombre: ${form.name} </p>
			<p> Correo: ${form.email} </p>
			<p>Mensaje: ${form.message} </p>
			`,
        })
        .then((r) => {
            console.log("Accepted => ", r.accepted)
            console.log("Rejected => ", r.rejected)
        })
        .catch((e) => console.log(e))
}

exports.contactForm = functions.https.onRequest((req, res) => {
    if (req.body.secret !== 'firebaseIsCool') return res.send('Missing secret');
    sendContactForm(req.body);
    res.send("Sending email...");
});