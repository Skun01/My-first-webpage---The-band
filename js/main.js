/**DOM
 * 1.Element
 * 2.Attribute
 * 3.text
 */

/**1. Elements: Id, class, tag, css selector,
 * HTML collection
 * 
 */

var homePage = document.getElementById("home");
console.log(homePage);
var nameCity = document.querySelector(".slider h3");
console.log(nameCity);
console.log(homePage.querySelector('h3'));
var theBand = document.getElementById("the-band");
// muốn sử dụng các element con trong the-band:
console.log(theBand.querySelectorAll("img"));
document.write("hello world");
