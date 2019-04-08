"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var conta_1 = require("./conta");
var Vip = /** @class */ (function (_super) {
    __extends(Vip, _super);
    function Vip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vip.prototype.saque = function (valor) {
        this.saldo -= valor;
        console.log("Saque Especial efetuado no valor de R$ " + valor + ".");
    };
    return Vip;
}(conta_1.Conta));
exports.Vip = Vip;
