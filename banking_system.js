
class nasabah {
   
    jumlahSaldo = 0;
  

    ubahUInilaiSaldo(){
        if(this.jumlahSaldo < 0) {
            throw new Error("Saldo kurang dari 0, tidak bisa")
        }
        textNilaiSaldo.textContent = this.jumlahSaldo;
    }
    

}

class hitungSaldo extends nasabah {
    //simpen ke bank
  deposit(deposit){
    this.jumlahSaldo = this.jumlahSaldo + deposit;
  }
    //ambildaribank
  withdrawal(withdraw){
    this.jumlahSaldo = this.jumlahSaldo - withdraw
  }
}


class inputValidator extends hitungSaldo {

    validateDeposite(deposit){
        if (deposit === null){
            throw new Error("Input jangan kosong");
        } else if (typeof deposit !== "number"){
            throw new Error("Input anda bukan angka");
        } else if (deposit <= 0){
            throw new Error("Input anda tidak valid");
        } else {
            this.deposit(deposit)
            this.ubahUInilaiSaldo()
            console.log(this.getJumlahSaldo())
        }
    }

    validateWithdraw(withdraw){
        if (withdraw === null){
            throw new Error("Input jangan kosong");
        } else if (typeof withdraw !== "number"){
            throw new Error("Input anda bukan angka");
        } else if (withdraw <= 0){
            throw new Error(`Input anda tidak valid ${withdraw}`);
        } else {
            this.withdrawal(withdraw)
            this.ubahUInilaiSaldo()
            console.log(this.getJumlahSaldo())
        }
    }
}

//DOM Area

const textNilaiSaldo = document.getElementById("saldosaya");

const inputDeposit = document.getElementById("nilai-deposit");
const tombolDeposit = document.getElementById("klik-deposit");

const inputWithdraw = document.getElementById("nilai-withdraw");
const tombolWithdraw = document.getElementById("klik-withdraw");


let nilaiDeposit = 0;
let nilaiWithdraw = 0;

//const nasabah1 = new nasabah()
const eksekusi = new inputValidator()

tombolDeposit.addEventListener("click", function(){
    nilaiDeposit = Number(inputDeposit.value);
    tombolDeposit.disabled = true;

    try {
        eksekusi.validateDeposite(nilaiDeposit)
    } 
    catch(error) {
        alert(error)
    }
    setTimeout(function() {
        tombolDeposit.disabled = false;
    }, 2000);
});


tombolWithdraw.addEventListener("click", function(){
    nilaiWithdraw = Number(inputWithdraw.value);
    tombolWithdraw.disabled = true;


    try {
        eksekusi.validateWithdraw(nilaiWithdraw)
    } catch (error) {
        alert(error)
    }

    setTimeout(function() {
        tombolWithdraw.disabled = false;
    }, 2000);
});



