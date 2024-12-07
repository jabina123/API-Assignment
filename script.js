function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json());
}

// Function to create the promise
function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Generated Random Number: ${randomNumber}`);
        if (randomNumber < 2) {
            resolve("Operation Success");
        } else {
            reject("Operation Failed");
        }
    });
}

// Handle promise with .then/catch
document.getElementById('fetchButton').addEventListener('click', () => {
    fetchData()
        .then(data => {
            console.log("Fetched Data:", data);
            return createRandomPromise();
        })
        .then(result => {
            document.getElementById('output').innerText = result;
        })
        .catch(error => {
            document.getElementById('output').innerText = error;
        });
});

// Handle promise with async/await
document.getElementById('asyncButton').addEventListener('click', async () => {
    try {
        const data = await fetchData();
        console.log("Fetched Data:", data);
        const result = await createRandomPromise();
        document.getElementById('output').innerText = result;
    } catch (error) {
        document.getElementById('output').innerText = error;
    }
});
