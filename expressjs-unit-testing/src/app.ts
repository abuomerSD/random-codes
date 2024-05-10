import express from "express";
import { router as bookRouter } from "./routes/book";
const app = express();
const port = 3000;

app.use("/books", bookRouter);
app.listen(port, () => {
  console.log(`server is listening for requests at port ${port}`);
});
