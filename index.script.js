document.getElementById("startBtn").addEventListener("click", function(){

    let email = document.getElementById("email").value.trim();

    if(email === ""){
        alert("Email tidak boleh kosong!");
        return;
    }

    if(!email.includes("@")){
        alert("Email harus ada @");
        return;
    }

    window.location.href = "page2.html";
});
