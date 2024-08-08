class Account {

   

    constructor(bank, id, name, balance){
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(money){
        this.balance += money;
    }

    
    withdraw(money){
        this.balance -= money;
    }

    show(){
        document.write('<p>');
        document.write('은행: ' +this.bank + '<br>');
        document.write('아이디: ' +this.id + '<br>');
        document.write('이름: ' +this.name + '<br>');
        document.write('잔액: ' +this.balance + '<br>');
    }
}