
const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const link = document.querySelector('#link > a');
const twitter = document.getElementById('twitt');
let authorRow = document.getElementById('author-row');
let authorP;
let quoteP;

btn.addEventListener('click', ()=>{
    console.log('clicked');
    async function getQuote() {
        try {
            // const data = await fetch('https://crossorigin.me/https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en');
            // const data = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?');
            const bulk = 40;
            let random = 0;
            const data = await fetch(`https://quotesondesign.com/wp-json/posts?&filter[orderby]=rand&filter[posts_per_page]=${bulk}`); // filter[orderby]=random 
            const resultJson = await data.json();
            console.log(resultJson);
            random = Math.floor(Math.random()*40);
            quote.innerHTML = resultJson[random].content;
            author.innerHTML = `${resultJson[random].title}`;
            if ( authorRow.childElementCount === 1 ) {
                authorRow.insertAdjacentHTML('afterbegin','<i class="fas fa-feather-alt pen"></i>');
            }
            link.innerHTML = resultJson[random].link;
            link.href = resultJson[random].link;
            quoteP = document.querySelector('#quote > p').textContent;
            authorP = author.textContent;
            
        }
        catch(error){
            console.log(error);
        }
    }
    getQuote();
  
})

twitter.addEventListener('click', ()=>{
    window.open("https://www.twitter.com/intent/tweet?hashtags=Quotes&text=" + "\"" + quoteP + "\" - " + authorP);

})    
