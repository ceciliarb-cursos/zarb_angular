export class Conta {
    protected titular: string;
    protected saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
        console.log(`Conta de ${titular} aberta com saldo inicial: ${saldo}`);
    }

    public exibeSaldo() {
        console.log(`${this.titular} seu saldo é: R$ ${this.saldo}`)
    }
    public saque(valor: number) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque efetuado no valor de R$ ${valor}`)
        } else {
            console.log(`FALHA: Saldo insuficiente. Impossível sacar ${valor}.`)
        }
    }
    public deposito(valor: number) {
        this.saldo += valor;
        console.log(`Depósito efetuado no valor de R$ ${valor}`)
    }
}