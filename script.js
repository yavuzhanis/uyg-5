

function milHesapla(){
        let deger =document.getElementById("uzunluk").value;
        deger = Number(deger);
        let kmToMil = 0.621*deger;
        alert(deger + "km= " + kmToMil.toFixed(2) + "mil'dir");
}
//hesaplama yapması için hesap butonunu seçiyoruz.
let hesapBtn=document.getElementById("hesapla");
//fonksiyonu olaya bağlıyoruz.
hesapBtn.onclick=milHesapla;