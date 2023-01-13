import express from "express";

interface ExpressServerDependencies {
    router: express.Router;
}

const createServer = ({ router }: ExpressServerDependencies) => {

    const app = express();

    app.use("/api", router);

    return app;
}


export default createServer