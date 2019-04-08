"use strict";
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
        console.log("Conta de " + titular + " aberta com saldo inicial: " + saldo);
    }
    Conta.prototype.exibeSaldo = function () {
        console.log(this.titular + " seu saldo \u00E9: R$ " + this.saldo);
    };
    Conta.prototype.saque = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log("Saque efetuado no valor de R$ " + valor);
        }
        else {
            console.log("FALHA: Saldo insuficiente. Imposs\u00EDvel sacar " + valor + ".");
        }
    };
    Conta.prototype.deposito = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito efetuado no valor de R$ " + valor);
    };
    return Conta;
}());
exports.Conta = Conta;
