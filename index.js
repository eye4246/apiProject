const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
const button = document.querySelector(".myButton");



searchFrom.addEventListener("submit", retrieve)
const apiData = {
    url: "http://shibe.online/api/shibes",
    parameter: "?count=",
    parameterval: "",
    q: "&",
    urls: "urls=true",
    httpsUrls: "httpUrls=true",
};
let apiURL = ""

console.log(input);

function retrieve(event) {
    event.preventDefault();
    if (input.value === "") {
      document.getElementById("error-handle").innerHTML =
        "Enter something into the search bar";
    } else {
      document.getElementById("error-handle").innerHTML = "";
      apiData.parameterval = `${input.value}`;
      const { url,parameter,parameterval,q,urls,httpsUrls } = apiData;
      const apiURL = `${url}${parameter}${parameterval}${q}${urls}${q}${httpsUrls}`;
      console.log("input value", input.value);
      console.log("topic ");
      myFunction(input.value, apiURL);
    }
  }
  

function myFunction(numberofShibas, apiURL){
    //document.getElementById(".myButton").innerHTML="<img src='http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true' alt='shiba' width='100%' />";
    console.log(`This is numberofShibas  ${numberofShibas}`)
    console.log(`apiData is ${apiData} and api url is this ${apiURL}`)
    const picContainer = document.querySelector(".picContainer")
    picContainer.innerHTML = ""
    console.log("This is pic container")
    fetch(apiURL)
        .then((result) => result.json())
        .then((data) => {
        data.forEach((shibalink) => {
            //console.log(Count)
            //setAttribute("href", shibalink.url)
            let i = document.createElement("img");
            i.setAttribute("src", shibalink);
            i.setAttribute("width", "60%");
            picContainer.appendChild(i)

            
            
    })
})
}