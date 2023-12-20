const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(){
    const response = await fetch(apiUrl);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    // console.log(data);
    // console.log(data.content);
}
getquote();
function tweet(){
    const baseUrl = "https://twitter.com/intent/tweet?text=";
    // window.open("https://twitter.com/intent/tweet?text=Hello%20world");
    let str = quote.innerHTML;
    let newstr = "";
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            newstr += "%20";
        }else{
            newstr += str[i];
        }
    }
    let newUrl = baseUrl + newstr;
    window.open(newUrl);
}



