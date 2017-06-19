var linkQuoteApi = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var tweetUrl="https://twitter.com/home?status=";

function getQuote() {
	var test="init";
  $.getJSON(linkQuoteApi, function(data) { 
    $("#quote-text").html("\""+data.quoteText+"\"");
    $("#author").html("-"+data.quoteAuthor);
    tweetUrl="https://twitter.com/home?status="+data.quoteText;
    $("#tweet-button").attr("href",tweetUrl+" - "+data.quoteAuthor);
  
  });
}

getQuote();