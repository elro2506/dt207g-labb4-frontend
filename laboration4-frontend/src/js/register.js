const form = document.getElementById("register");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(
            "https://dt207-labb4-backend.onrender.com/api/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data = await response.json();
        console.log(data);

        if(response.ok) {
        alert("Användare skapad!");
        

    } else {
        alert(data.error);
    }
} catch {
    console.log(error);
}
});