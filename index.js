const picture = document.querySelector(".testing");
picture.addEventListener("submit", myFunction)
const apiData = {
    url: "http://shibe.online/api/shibes",
    slash: "%2F",
    parameter: "?count",
    q: "&",
};
const { url, slash, parameter, q } = apiData;
const apiUrl = `${url}${slash}${parameter}${q}`;

function myFunction(){
    fetch("http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true")
        .then((result) => console.log("",result.json()));
        
        apiData.q = "";
    //console log
    }
function buttonHandler() {
      document.getElementById(".testing").innerHTML =
        "<img src= 'http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true' alt='Shiba' width='100%' />";
        console.log("http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true");
        picture.innerHTML = "";
    };