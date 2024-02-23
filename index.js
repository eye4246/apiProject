const apiData = {
    url: "http://shibe.online/api/shibes",
    slash: "%2F",
    parameter: "?count",
    q: "&",
};
const { url, slash, parameter, q } = apiData;
const apiUrl = `${url}${slash}${parameter}${q}`;

function myFunction(id){
    const apiData1 = {
        url: "http://shibe.online/api/shibes",
        slash: "%2F",
        parameter: "?count",
        q: "&",
    };
    const { url, slash, parameter, q } = apiData1;
    const apiUrl1 = `${url}${slash}${parameter}${q}`}

    document.addEventListener('DOMContentLoaded', function() {
        const generateButton = document.getElementById('generateButton');
        const generatedImage = document.getElementById('generatedImage');
    
        generateButton.addEventListener('click', function() {
        
            const imageUrl = 'https://cdn.shibe.online/shibes/d725228f095cce75073baedcebb84c52f127abcd.jpg'; 
            generatedImage.src = imageUrl;
        });
    });