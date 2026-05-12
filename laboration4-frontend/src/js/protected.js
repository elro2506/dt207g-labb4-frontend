"use strict";

const token = sessionStorage.getItem("website_token");

async function getProtected() {
    try {
        const respone = await fetch("https://dt207-labb4-backend.onrender.com/api/protected",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log(data);

        document.getElementById("protected-data").innerHTML = data.message;
    } catch (error) {
        console.log(error);
    }

}

getProtected();