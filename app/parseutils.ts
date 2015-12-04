declare var com;

import app = require("application");
import details = require("./details");

var parsePackage = com.parse;
var Parse = parsePackage.Parse;
var ParseUser = parsePackage.ParseUser
var LogInCallback = parsePackage.LogInCallback;

export function initialize() {
    Parse.initialize(app.android, details.ParseID(), details.ParseClient());
};

export function login(username, password) {
    return new Promise<any>(function(resolve, reject) {
        ParseUser.logInInBackground(username, password, LogInCallback({
            done: function(user, e) {
                if (user != null) {
                    resolve(user);
                } else {
                    reject(e);
                }
            }
        }));
    });
};
