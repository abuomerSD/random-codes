import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server is listening for requests at port ${port}`);
});
