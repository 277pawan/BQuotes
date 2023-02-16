console.log("jellook");
function generate()
{
var quotes={
"- Albert Einstein" : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
"― Mae West" : '“You only live once, but if you do it right, once is enough.”',
"― Mahatma Gandhi" : '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
"― Andre Gide, Autumn Leaves" : '“It is better to be hated for what you are than to be loved for what you are not.”',
"—Theodore Roosevelt" : '“It is hard to fail but it is worse never to have tried to succeed.”',
" —Friedrich Nietzsche" : '“That which does not kill us makes us stronger.”',
" —Thomas A. Edison" : '“I have not failed. I’ve just found 10,000 ways that won’t work.”',
"—Wayne Dyer" : '“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.”',
"—Eleanor Roosevelt" : '“The future belongs to those who believe in the beauty of their dreams.”',
" —Anthony Robbins" : '“I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.”',
"—Michelangelo" : '“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.”',
" —Helen Keller" : '“Never bend your head. Always hold it high. Look the world straight in the eye.”',
" —Maya Angelou" : '“My mission in life is not merely to survive, but to thrive.”',
}
var authors=Object.keys(quotes);
var author=authors[Math.floor(Math.random()*authors.length)]
var quote=quotes[author];
document.getElementById("quote").innerHTML=quote;
document.getElementById("author").innerHTML=author;

}
setInterval(generate,4000);