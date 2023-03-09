import express, { Request, Response } from 'express'; 

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("hello CI/CD Success !!");
});

app.get(`/${process.env.APP_NAME}`, (req: Request, res: Response) => {
    res.status(200).send(`${process.env.APP_NAME} running successfully !!`);
});

app.listen(8000, () => {
    console.log("App started on port 8000");
})