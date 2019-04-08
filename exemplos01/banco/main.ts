import { Conta } from "./conta";
import { Vip } from "./vip";

let cnt = new Conta('Cecilia', 1000000000);
cnt.exibeSaldo(); 
cnt.deposito(10000); 
cnt.exibeSaldo(); 
cnt.saque(500); 
cnt.exibeSaldo(); 

let cnt2 = new Vip('Bill Gates', 0.1);
cnt2.saque(1000);
cnt2.exibeSaldo(); 