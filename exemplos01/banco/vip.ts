import { Conta } from './conta'

export class Vip extends Conta {
    public saque(valor: number) {
        this.saldo -= valor;
        console.log(`Saque Especial efetuado no valor de R$ ${valor}.`)
    }
}