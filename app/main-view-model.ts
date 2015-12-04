import observable = require("data/observable");
import parseUtils = require("./parseutils");
export class LoginController extends observable.Observable {
    username : string;
    password : string;
    constructor() {
        super();

        this.username = "";
        this.password = "";
        this.set("message", "waiting for login");
    }

    loginAction() {
        parseUtils.login(this.username, this.password).then(success => {
            this.set("message", "Login success!");
        }).catch(failure => {
            this.set("message", "Login failed!");
        });
    }
}
