//run this is dev console when you are trying to do a file cleanup
//in google drive, only lets you download 100 at a time and you can't
//click+drag...

const checkboxes = document.querySelectorAll("input[type='checkbox']");
let i = 1;

function clickNext() {
  if (i >= 101 || i >= checkboxes.length) return;
  checkboxes[i].click();
  i++;
  setTimeout(clickNext, 20); // adjust delay (ms) as needed
}

clickNext();