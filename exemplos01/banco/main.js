"use strict";
exports.__esModule = true;
var conta_1 = require("./conta");
var vip_1 = require("./vip");
var cnt = new conta_1.Conta('Cecilia', 1000000000);
cnt.exibeSaldo();
cnt.deposito(10000);
cnt.exibeSaldo();
cnt.saque(500);
cnt.exibeSaldo();
var cnt2 = new vip_1.Vip('Bill Gates', 0.1);
cnt2.saque(1000);
cnt2.exibeSaldo();