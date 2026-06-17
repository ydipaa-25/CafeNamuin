// Tombol + dan -
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("plus")) {

        const item = e.target.closest(".menu-item");
        const jumlahEl = item.querySelector(".jumlah");

        let jumlah = parseInt(jumlahEl.textContent) || 0;
        jumlah++;

        jumlahEl.textContent = jumlah;
    }

    if (e.target.classList.contains("minus")) {

        const item = e.target.closest(".menu-item");
        const jumlahEl = item.querySelector(".jumlah");

        let jumlah = parseInt(jumlahEl.textContent) || 0;

        if (jumlah > 0) {
            jumlah--;
        }

        jumlahEl.textContent = jumlah;
    }
});


// Simpan ke keranjang
document.getElementById("btnKeranjang").addEventListener("click", function (e) {

    e.preventDefault();

    let keranjang = [];

    document.querySelectorAll(".menu-item").forEach(item => {

        const namaEl = item.querySelector("h3");
        const qtyEl = item.querySelector(".jumlah");
        const imgEl = item.querySelector("img");

        const nama = namaEl ? namaEl.textContent.trim() : "";
        const qty = qtyEl ? parseInt(qtyEl.textContent) || 0 : 0;
        const harga = parseInt(item.getAttribute("data-harga")) || 0;
        const gambar = imgEl ? imgEl.src : "";

        if (qty > 0) {

            keranjang.push({
                nama: nama,
                harga: harga,
                qty: qty,
                gambar: gambar
            });

        }

    });

    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    window.location.href = "page3.html";

});
