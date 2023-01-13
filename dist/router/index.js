import express from 'express';
var Routes;
(function (Routes) {
    Routes["GET"] = "/get";
})(Routes || (Routes = {}));
const createRouter = () => {
    const router = express.Router();
    router.use(express.json());
    router.get(Routes.GET, (req, res) => {
        res.send('hello');
    });
    return router;
};
export default createRouter;
