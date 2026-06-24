document.getElementById("startBtn").addEventListener("click", function(){
    
const params = new URLSearchParams(window.location.search);

const nomorMeja = params.get("meja");

if(nomorMeja){

    document.querySelector(".meja").textContent =
        "Nomor Meja: " + nomorMeja;

    localStorage.setItem(
        "nomorMeja",
        nomorMeja
    );

}

    window.location.href = "page2.html";
});
