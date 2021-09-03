/* const bank = owner => {
    balance = 0;
    return amount => {
        balance += amount;
        return balance;
    }
} */

const bank = owner => {
    balance = 0;
    return {
        deposit:amount => {
            balance += amount;
            return balance;
        },
        withdraw:amount => {
            balance -= amount;
            return balance;
        }
    }
}

const MofizlBank = bank('mofiz');
console.log(MofizlBank.deposit(100));
console.log(MofizlBank.deposit(300));
console.log(MofizlBank.deposit(500));
console.log(MofizlBank.balance);
console.log(MofizlBank.deposit(200));
console.log(MofizlBank.withdraw(100))
console.log(MofizlBank.withdraw(200))
