import express from "express";
import transporter from "../nodemailer/config.js";

const router = express.Router();

router.post("/sendemail", (req, res) => {
  const email = {
    to: "pablohpaiva22@gmail.com",
    subject: "Nova mensagem em pablopaiva-dev",
    text: `
      Nova Mensagem de: ${req.body.name}
      E-mail: ${req.body.email}

      ${req.body.message}
    `,
  };

  transporter.sendMail(email, (err) => {
    if (err) {
      console.log(err);
      res.send({ message: err });
      return false;
    }

    res.send({ message: "Email enviado com sucesso" });
  });
});

export default router;
