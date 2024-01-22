import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 102;
conta2.cliente = new Cliente("Alice", 88822233309);

contaCorrenteRicardo.transferir(200, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(conta2.saldo);