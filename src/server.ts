import { http } from './http';
import "./websocket/client";
import "./websocket/admin";

const port = process.env.PORT

http.listen(port, () => console.log(`Server running on ${port}`))
