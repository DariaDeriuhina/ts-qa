function processData(data) {
    console.log(data);
}

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error of endpoint");
            }
            return response.json();
        })
        .then(data => {
            processData(data);
        })
        .catch(error => {
            console.error(error);
        });
}

fetchData();
