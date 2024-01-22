import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    agencia;
    #cliente;
    #saldo = 0;


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }


    constructor(Clientes, agencia) {
        this.agencia = agencia;
        this.cliente = Clientes;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log(`Sacado R$${valor} da conta ${this.agencia} - Saldo: R$${this.#saldo}`	);
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this.#saldo += valor;
        console.log(`Depositado R$${valor} na conta ${this.agencia} - Saldo: R$${this.#saldo}`);
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Transferindo R$${valor} da conta ${this.agencia} para a conta ${conta.agencia}`);
    }
}