const button = document.querySelector(".myButton");
console.log("This is the query selector",button)
button.addEventListener("click", myFunction)
const apiData = {
    url: "http://shibe.online/api/shibes",
    parameter: "?count=2",
    q: "&",
    urls: "urls=true",
    httpsUrls: "httpsUrls=true",
};
//http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true
const { url, parameter, q, urls , httpsUrls } = apiData;
const apiURL = `${url}${parameter}${q}${urls}${q}${httpsUrls}`;
console.log("This the api url", apiURL)
function myFunction(){
    console.log("I am in my function")
    fetch(apiURL)
        .then((result) => console.log("",result.json()));
    }
