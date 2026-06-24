document.querySelectorAll(".menu-item").forEach(item => {

    const minus = item.querySelector(".minus");
    const plus = item.querySelector(".plus");
    const jumlah = item.querySelector(".jumlah");

    plus.addEventListener("click", () => {

        let qty = parseInt(jumlah.textContent);
        qty++;

        jumlah.textContent = qty;

        updateKeranjang(item, qty);

    });

    minus.addEventListener("click", () => {

        let qty = parseInt(jumlah.textContent);

        if(qty > 0){
            qty--;
        }

        jumlah.textContent = qty;

        updateKeranjang(item, qty);

    });

});

function updateKeranjang(item, qty){

    let keranjang =
        JSON.parse(localStorage.getItem("keranjang")) || [];

    const nama = item.dataset.nama;
    const harga = Number(item.dataset.harga);
    const gambar = item.dataset.gambar;

    const index = keranjang.findIndex(
        produk => produk.nama === nama
    );

    if(qty > 0){

        if(index !== -1){

            keranjang[index].qty = qty;

        }else{

            keranjang.push({
                nama,
                harga,
                gambar,
                qty
            });

        }

    }else{

        if(index !== -1){
            keranjang.splice(index, 1);
        }

    }

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );
}

document.getElementById("btnKeranjang")
.addEventListener("click", function(e){

    e.preventDefault();

    window.location.href = "page3.html";

});

const scrollBtn = document.getElementById("scrollBtn");

// Muncul saat discroll
window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }

});

// Klik = balik ke atas
scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
