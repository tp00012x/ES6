promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('I was also ran!!!'))
    .catch(() => console.log('uh oh!'));

//Fetch

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

fetch(url)
    .then(response => console.log(response))
    .then(error => console.log(error));