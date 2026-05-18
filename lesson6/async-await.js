// async-await.js

function processData(data) {
    console.log("Data:", data);
}

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error("Error of endoint");
        }

        const data = await response.json();

        processData(data);

    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();
