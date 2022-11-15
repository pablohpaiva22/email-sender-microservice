import express from "express";
import cors from 'cors'
import sendEmail from './routes/sendEmail.js'

const port = process.env.PORT || 3333;

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', sendEmail)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
  