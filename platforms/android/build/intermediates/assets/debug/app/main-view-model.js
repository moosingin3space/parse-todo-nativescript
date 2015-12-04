var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable = require("data/observable");
var parseUtils = require("./parseutils");
var LoginController = (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        _super.call(this);
        this.username = "";
        this.password = "";
        this.set("message", "waiting for login");
    }
    LoginController.prototype.loginAction = function () {
        var _this = this;
        parseUtils.login(this.username, this.password).then(function (success) {
            _this.set("message", "Login success!");
        }).catch(function (failure) {
            _this.set("message", "Login failed!");
        });
    };
    return LoginController;
})(observable.Observable);
exports.LoginController = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbIkxvZ2luQ29udHJvbGxlciIsIkxvZ2luQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIkxvZ2luQ29udHJvbGxlci5sb2dpbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFPLFVBQVUsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBQy9DLElBQU8sVUFBVSxXQUFXLGNBQWMsQ0FBQyxDQUFDO0FBQzVDO0lBQXFDQSxtQ0FBcUJBO0lBR3REQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ25CQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFFQSxtQkFBbUJBLENBQUNBLENBQUNBO0lBQzdDQSxDQUFDQTtJQUVERCxxQ0FBV0EsR0FBWEE7UUFBQUUsaUJBTUNBO1FBTEdBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLE9BQU9BO1lBQ3ZEQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFFQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBQzFDQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFBQSxPQUFPQTtZQUNaQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUN6Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDTEYsc0JBQUNBO0FBQURBLENBQUNBLEFBbEJELEVBQXFDLFVBQVUsQ0FBQyxVQUFVLEVBa0J6RDtBQWxCWSx1QkFBZSxrQkFrQjNCLENBQUEifQ==