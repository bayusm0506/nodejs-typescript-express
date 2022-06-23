import express, { Application, Request, Response, NextFunction } from "express";

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({data: 'Hello World!'})
});

// Start server
app.listen(port, () => console.log(`server is listening on port ${port}`))