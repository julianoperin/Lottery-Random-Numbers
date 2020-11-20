function myFunction() {
  // check if circle element exists, and delete it if it does
  // prevent duplicate lotto number circles from popping up
  if (document.getElementsByClassName("circle").length) {
    const removeElements = (elms) => elms.forEach((el) => el.remove());
    removeElements(document.querySelectorAll(".circle"));
  }

  let arr = [];
  while (arr.length < 5) {
    let r = Math.floor(Math.random() * 70) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
    let add = true;

    // looks for duplicate numbers
    // if duplicate exists it does not add it to the array
    for (let y = 0; y < 45; y++) {
      if (arr[y] == arr) {
        add = false;
      }
    }
  }

  //   const nueva = arr[5] - 24;

  //sorts array by ascending order and adds it into new array
  const sorted = [...arr].sort((a, b) => a - b);

  // for each element of array it adds it creates an element
  // and adds the class circle to each each
  // and then appends it to the lotto element

  sorted.forEach(function (content) {
    let lotto = document.getElementById("lotto");
    let circle = document.createElement("span");
    circle.setAttribute("class", "circle m-3");
    circle.textContent = content;
    lotto.append(circle);
  });

  console.log(arr);
  powerBall();
  if (!arr === undefined || !arr.length == 0) {
    const btn = `<button class="btn btn-info btn-lg refresh" onClick="window.location.reload();">Refresh Page</button>`;
    const refreshBtn = document.getElementById("refresh");
    const text = document.createElement("div");
    refreshBtn.innerHTML = btn;
  }
  //   doSomething();
}

function powerBall() {
  let redOne = Math.floor(Math.random() * 26) + 1;

  const red = document.getElementById("red");
  let power = document.createElement("h1");

  power.setAttribute("class", "circle-red m-3");
  power.textContent = redOne;
  lotto.append(power);
}

// function doSomething () {
//     // Disable the button
//     document.getElementById("myButton").disabled = true;
