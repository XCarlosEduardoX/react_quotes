import {useState} from 'react';
import  quotes from './../quotes.json';

function Lists(){

 let number  = Math.floor ( Math.random() * quotes.quotes.length);
 
 let [quotesValue, setQuotes]  = useState(quotes.quotes[number].quote);
 let [authorValue,setAuthor]  = useState(quotes.quotes[number].author);

  function changeQuotesAndAuthor (){
    let number  = Math.floor ( Math.random() * quotes.quotes.length);
    setQuotes(quotes.quotes[number].quote);
    setAuthor(quotes.quotes[number].author);
  }
    
let link_quote=`https://twitter.com/intent/tweet?&text=`+'"'+quotesValue+'"'+`%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20`+'-'+authorValue

    return(
        <div className="container">
            <div className="box">
                <div className="quotes">
                     <p className="quote">"{quotesValue}"</p>
                     <div className="author-box">
                        <p className="author">-{authorValue}</p>
                     </div>
                </div>
                <div className="buttons-box"> 
                    <a className="twitter buttons" href={link_quote} target="_blank" >Share in twitter</a>
                    <button  className="next buttons" onClick = {changeQuotesAndAuthor }>New Quote</button>
                </div>  
            </div>
        </div>
    )
}
export default Lists;
