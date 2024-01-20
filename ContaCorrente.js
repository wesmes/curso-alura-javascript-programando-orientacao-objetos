export class ContaCorrente {
    agencia;
    cliente;

    #saldo = 0;

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
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Transferindo R$${valor} da conta ${this.agencia} para a conta ${conta.agencia}`);
    }
}