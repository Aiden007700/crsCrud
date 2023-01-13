import dotenv from "dotenv";
dotenv.config();
import container from "./config/container.js";
const app = container.cradle.expressServer();
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
