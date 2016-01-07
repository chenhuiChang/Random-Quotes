var database = [[0,"Don't cry because it's over, smile because it happened.","Dr. Seuss"],
 [1,"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Monroe"],
 [2,"Be yourself; everyone else is already taken.","Oscar Wilde"],
 [3,"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
 [4,"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
 [5,"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.","William W. Purkey"],
 [6,"You know you're in love when you can't fall asleep because reality is finally better than your dreams.","Dr. Seuss"],
 [7,"A room without books is like a body without a soul.","Marcus Tullius Cicero"],
 [8,"So many books, so little time.","Frank Zappa"],
 [9,"You only live once, but if you do it right, once is enough.","Mae West"],
 [10,"Be the change that you wish to see in the world.","Mahatma Gandhi"],
 [11,"In three words I can sum up everything I've learned about life: it goes on.","Robert Frost"]];

function getRandomInt(min, max, pre) {
  var newInt = Math.floor(Math.random() * (max - min + 1)) + min;
  while (pre==newInt)
  {
      newInt = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return newInt;
}
var i = getRandomInt(0,database.length-1,0);
function getQuote()
{
  return database[i][1];
}
function getOwner()
{
  return database[i][2];
}

function newQuote(){
  i = getRandomInt(0,database.length-1,i);
  //document.getElementById("quote-area").innerHTML=getQuote();
  //document.getElementById("owner-area").innerHTML=getOwner();
  $("#quote-area").html(getQuote());
  $("#owner-area").html(getOwner());
  shapeBox();
}

function shapeBox(){
  //console.log(getQuote().length+getOwner().length);
  var line = (getQuote().length)/37 + 2;
  //$("#show-area").css("height",String(line*40));
  $(".sized-region").css("height",String(line*40));
  //console.log(getQuote().length+getOwner().length);
}

newQuote();

//twitter code
function TweetBtn() {
  var pathname = window.location;
  var tweeturl = 'http://twitter.com/share?url=' + encodeURI(pathname)+ '&text='+getQuote()+' - '+getOwner();
  $("#mycustomtwitterbutton").attr("href",tweeturl);
}
//twitter