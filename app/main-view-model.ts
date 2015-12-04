import observable = require("data/observable");
import parseUtils = require('./parseutils");
export class LoginController extends observable.Observable {
    username : string;
    password : string;
    constructor() {
        super();

        this.username = "";
        this.password = "";
    }

    loginAction() {
        // TODO log in with Parse
    }
}
