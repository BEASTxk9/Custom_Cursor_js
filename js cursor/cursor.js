// check if file is linked
console.log("...Cursor Running...");

// define variables
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

// add even listener to activate function
document.addEventListener("mousemove", moveCursor);

// create function
function moveCursor(e){
    // define variables that reads the cursors movement between the x and y axis
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x, y);

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

// select all links in the page
let links = Array.from(document.querySelectorAll("a"));
 console.log(links);

// create for each function
// Add 'grow' class to innerCursor when hovering over a link
links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      innerCursor.classList.add("grow");
    });
    
    // Remove 'grow' class from innerCursor when leaving the link
    link.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow");
    });
  });