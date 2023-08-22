import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server runing on port ${process.env.PORT}`);
});
