const data = JSON.parse(localStorage.getItem("keranjang")) || [];

const listKeranjang = document.getElementById("listKeranjang");

let subtotal = 0;

if (data.length > 0) {

    data.forEach(item => {

        const harga = Number(item.harga) || 0;
        const qty = Number(item.qty) || 0;
        const totalItem = harga * qty;

        subtotal += totalItem;

        listKeranjang.innerHTML += `
            <div class="item">

                <img src="${item.gambar}" class="menu-img">

                <div class="menu-info">
                    <h3>${item.nama}</h3>
                    <p>
                        Rp ${harga.toLocaleString("id-ID")}
                        x ${qty}
                    </p>
                    <p>
                        Rp ${totalItem.toLocaleString("id-ID")}
                    </p>
                </div>

            </div>
        `;
    });

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    localStorage.setItem("totalBayar", total);

    document.getElementById("subtotal").textContent =
        "Rp " + subtotal.toLocaleString("id-ID");

    document.getElementById("tax").textContent =
        "Rp " + tax.toLocaleString("id-ID");

    document.getElementById("total").textContent =
        "Rp " + total.toLocaleString("id-ID");

} else {

    listKeranjang.innerHTML =
        "<p>Keranjang masih kosong</p>";

    document.getElementById("subtotal").textContent = "Rp 0";
    document.getElementById("tax").textContent = "Rp 0";
    document.getElementById("total").textContent = "Rp 0";
}
