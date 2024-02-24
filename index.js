const button = document.querySelector(".myButton");
console.log("This is the query selector",button)
button.addEventListener("click", myFunction)
const apiData = {
    url: "http://shibe.online/api/shibes",
    parameter: "?count=1",
    q: "&",
    urls: "urls=true",
    httpsUrls: "httpsUrls=true",
};
//http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true
const { url, parameter, q, urls , httpsUrls } = apiData;
const apiURL = `${url}${parameter}${q}${urls}${q}${httpsUrls}`;
//console.log("This the api url", apiURL)


function myFunction(){
    //document.getElementById(".myButton").innerHTML="<img src='http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true' alt='shiba' width='100%' />";
    console.log("I am in my function")
    fetch(apiURL)
        .then((result) => result.json())
        .then((data) => {
        data.forEach((shiba) => {
            //console.log(Count)
            //setAttribute("href", shiba.url)
            let i = document.createElement("img");;
            i.setAttribute("src", shiba);
                i.setAttribute("width", "100%");
                document.body.appendChild(i);
    })
})
}