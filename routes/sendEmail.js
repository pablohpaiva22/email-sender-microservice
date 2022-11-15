import express from "express";
import transporter from '../nodemailer/config.js'

const router = express.Router();

router.post("/sendemail", (req, res) => {

  const email = {
    to: "pablohpaiva22@gmail.com",
    subject: 'Nova mensagem em pablopaiva-dev',
    text: `
      Nova Mensagem de: ${req.body.name}
      E-mail: ${req.body.email}

      ${req.body.message}
    `
  }

  transporter.sendMail(email, (err) => {
    if (err) {
      console.log(err)
      res.send(err)
      return false
    }

    res.send("E-mail enviado com sucesso");
  })
});

export default router;
