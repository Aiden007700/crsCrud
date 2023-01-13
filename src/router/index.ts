import express from 'express'

enum Routes {
    GET = "/get"
}

const createRouter = () => {
    const router: express.Router = express.Router();
    router.use(express.json());
    router.get(Routes.GET, (req, res) => {
        res.send('hello')
    });
    return router; 
}

export default createRouter