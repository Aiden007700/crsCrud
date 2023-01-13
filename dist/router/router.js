import express from 'express';
var Routes;
(function (Routes) {
    Routes["GET"] = "/get";
})(Routes || (Routes = {}));
export default function createRouter() {
    const router = express.Router();
    router.use(express.json());
    router.get(Routes.GET, (req, res) => {
        res.send('hello');
    });
    return router;
}
