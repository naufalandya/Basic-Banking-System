//1. name controller

let yourname;

const isiNama = () => {
    let namatag = document.getElementById("nama-anda");
    namatag.classList.remove("hidden");
    namatag.textContent = yourname;
}

const masukanNama = () => {
    yourname = prompt(" Masukkan Nama Anda ? (Max : 8) ");
    if (yourname === null) {
        window.alert("Masukin namanya dulu ya")
        masukanNama();
    }
    else if (yourname.length > 8) {
        window.alert("Namanya Kepanjangan")
        masukanNama();
    } else if (yourname === undefined || yourname === ""){
        window.alert("Masukin namanya dulu ya")
        masukanNama();
    } else if ( yourname == null) {
        window.alert("Masukin namanya dulu ya")
        masukanNama();
    }
    else {
        isiNama();
    }
}

//2. DOM trigger

document.addEventListener("DOMContentLoaded", function(){
    masukanNama();
});

//3. Saldo pop-up Tambah Controller 

let tombolSaldoMasuk = document.getElementById("masuk-saldo");

let saldokuMauDitambah = document.getElementById("saldoku-sekarang-tambah");

const popuptambah = document.getElementById("pop-up-tambah");

let saldokuSekarang = document.getElementById("saldo-now");


tombolSaldoMasuk.addEventListener("click", function(){
    popuptambah.classList.remove("hidden"); 

    const nilaiSaldokuSekarang = Number(saldokuSekarang.innerText);

    saldokuMauDitambah.innerText = nilaiSaldokuSekarang;
   
});


let tambah = 0;

let tombolTambahTerus = document.getElementById("masuk-value-tambah");

let valueakumulasi = document.getElementById("ditambah");

let masukKeSaldo = Number(saldokuMauDitambah.textContent);

tombolTambahTerus.addEventListener("click", function(){

    tombolTambahTerus.disabled = true;

    setTimeout(function() {
        tombolTambahTerus.disabled = false;
      }, 1000);

    let yangditambah = Number(document.getElementById("tambah-value").value);

    if (yangditambah < 0){
        window.alert("Nilai Tidak Valid !")
        yangditambah = 0;
    } else if (yangditambah > 1000000) {
        let konfirmasi = prompt("Nilai melebihi 100000, konfirmasi Ya/Tidak ?");
        konfirmasi = konfirmasi.toLowerCase();
        switch (konfirmasi) {
            case "ya":
                break;
            case "tidak":
                yangditambah = 0;
                break;
            default:
                window.alert("Input tidak valid")
                yangditambah = 0;
                break;
        }
    }

    tambah = tambah + yangditambah;

    valueakumulasi.textContent = tambah;

    console.log(valueakumulasi)
    console.log(masukKeSaldo)
    console.log(saldokuMauDitambah)
        
    masukKeSaldo = masukKeSaldo + yangditambah;

    saldokuMauDitambah.textContent = masukKeSaldo;

});

const reset = () => {
    valueakumulasi.textContent = 0;
    tambah = 0;
    masukKeSaldo = Number(saldokuSekarang.textContent);
    popupTambahIlang();
}

let tombolbatal = document.getElementById("simpan-batal-tambah");

tombolbatal.addEventListener("click", function(){
    let konfirmasi = prompt("Apakah anda ingin menyimpan perubahan ? Ya/Tidak");
    konfirmasi = konfirmasi.toLowerCase();
    switch (konfirmasi){
        case "ya":
            saldokuSekarang.textContent = masukKeSaldo;
            reset();
            break;
        case "tidak":
            popupTambahIlang();
            reset();
            break
        default:
            window.alert("Input tidak valid silahkan ulang !")
            break;
    }

});


function popupTambahIlang(){
    popuptambah.classList.add("hidden")
}




/*

let tombolkeluarsaldo = document.getElementById("keluar-saldo");
let popupkurang = document.getElementById("pop-up-kurang");
let saldokuSekarang1 = document.getElementById("saldo-sekarang");
let saldoterkiniInginDikurang = document.getElementById("saldo-sekarang-kurang");

tombolkeluarsaldo.addEventListener("click", function () {
    let nilaiSaldokuSekarang = Number(saldokuSekarang1.textContent);
    saldoterkiniInginDikurang.textContent = nilaiSaldokuSekarang;
    popupkurang.classList.remove("hidden");
});

let tombolngurangin = document.getElementById("masuk-terus-kurangin");
let jumlahngurangin = document.getElementById("value-kurang");
let akumulasingurangin = document.getElementById("dikurang");
let tertotalsaldongurang = document.getElementById("saldo-sekarang-kurang");

let kurang = 0;

tombolngurangin.addEventListener("click", function () {
    let ambilValueYangMauDikurang = Number(jumlahngurangin.value);
    let nilaisaldosekarangkurang = Number(saldoterkiniInginDikurang.textContent);

    kurang = nilaisaldosekarangkurang - ambilValueYangMauDikurang;

    akumulasingurangin.textContent = ambilValueYangMauDikurang;
    tertotalsaldongurang.textContent = kurang;

    tombolngurangin.disabled = true;

    setTimeout(function () {
        tombolngurangin.disabled = false;
    }, 1000);
});

let tombolbatalkurang = document.getElementById("batal-kurang");

tombolbatalkurang.addEventListener("click", function () {
    let konfirmasi = prompt("Apakah anda ingin menyimpan perubahan ? Ya/Tidak");
    konfirmasi = konfirmasi.toLowerCase();
    switch (konfirmasi) {
        case "ya":
            saldokuSekarang1.textContent = tertotalsaldongurang.textContent;
            resetkurang();
            break;
        case "tidak":
            resetkurang();
            break;
        default:
            window.alert("Input tidak valid silahkan ulang !");
            break;
    }
});

function resetkurang() {
    kurang = 0;
    jumlahngurangin.value = 0;
    popupkurang.classList.add("hidden");
}


*/


//4. Saldo Kurang Controller

//nilai sekarang view
let saldosekarangkurang = document.getElementById("saldo-sekarang-kurang");

let integersaldosekarangkurang = Number(saldosekarangkurang.textContent);

//akumulasi ngurangin view
let dikurang = document.getElementById("dikurang");

//popup
let popupkurang = document.getElementById("pop-up-kurang");

//tombol kurangin terus
let masukteruskurangin = document.getElementById("masuk-terus-kurangin");

//input data
let inputkurang = document.getElementById("value-kurang");

//batal 
let batalkurang = document.getElementById("batal-kurang");

//aktivin popup ngurang
let tombolkeluarsaldo = document.getElementById("keluar-saldo");

//counter-kurang
let kurang = 0;

//nilai view ingin dikurang
let nilaiviewkurang = Number(saldosekarangkurang.textContent);

tombolkeluarsaldo.addEventListener("click", function (){
    popupkurang.classList.remove("hidden");
    saldosekarangkurang.textContent = Number(saldokuSekarang.textContent);    
});

//masukKeSaldo adalah nilai global

//fungsingurangterus

masukteruskurangin.addEventListener("click", function(){
    kurang = kurang - inputkurang.value;
    dikurang.textContent = kurang;

    saldosekarangkurang.textContent = Number(saldokuSekarang.textContent) + kurang;

    
});

function popupKurangIlang(){
    popupkurang.classList.add("hidden");
}


batalkurang.addEventListener("click", function(){
    let konfirmasi = prompt("Apakah anda ingin menyimpan? Ya/Tidak");
    konfirmasi = konfirmasi.toLowerCase();
    switch(konfirmasi){
        case "ya":
            saldokuSekarang.textContent = saldosekarangkurang.textContent;
            resetkurang();
            popupKurangIlang();
            break;
        case "tidak":
            resetkurang();
            popupKurangIlang();
            break;
        default:
            window.alert("Input tidak valid !");
            break;
    }
});

function resetkurang(){
    dikurang.textContent = 0;
    kurang = 0;
}
