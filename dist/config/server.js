import express from "express";
const createServer = ({ router }) => {
    const app = express();
    app.use("/api", router);
    return app;
};
export default createServer;
