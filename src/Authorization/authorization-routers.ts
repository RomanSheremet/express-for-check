import {userService} from "./authorization-service";
import {app} from "../../index";

export const authorizationRouter = () => {
    app.post('/hs_01/api/create_user', userService.createUser)
}
