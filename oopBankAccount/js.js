class Account {
	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this.local = navigator.language;
		//private properties
		this._pin = pin;
		this._movements = [];
		
	}

	getMovements(){
		return this._movements;
	}

	deposite(val){
		this._movements.push(val);
	}

	withdraw(val){
		this.deposite(-val);
	}

	approveLoan(val){
		return true;
	}

	requestLoan(val){
		if (this.approveLoan(val)) {
            this.deposite(val);
            console.log(`Loan approved`);
		}
	}
}

const mopano = new Account("mopano", "EUR", 1111);
mopano.deposite(250);
mopano.withdraw(170);
mopano.requestLoan(1000);
mopano.getMovements();
