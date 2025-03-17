// json: JavaScript Object Notation

let obj = {
    name : "Ankush",
    surname : "deshwal"
}

// fetch API: modern way for making HTTP requests

let data = 'ankush'

fetch('https://example.com', {
    method : 'POST',
    headers : {
        "content-type" : "application/json",
    },
    body : JSON.parse(data)
});