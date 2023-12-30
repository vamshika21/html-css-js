let display = document.querySelector('#displaySomething');
let displayPhone = document.querySelector('#disPhone');
let showPhoneError = document.querySelector('#phoneError');
console.log(display.textContent);
console.log(displayPhone.textContent);
let gettag = document.querySelector('#disPhone');
console.log(gettag.outerHTML);
let data = document.querySelector("#pudhar");
data.style.color = 'yellow';
data.style.backgroundColor = 'red';
let getClass = document.getElementsByClassName('hi');
console.log(getClass.outerHTML)
for (const iterator of getClass) {
    console.log(iterator.outerHTML)
}

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <style>
//     h4 {
//         color: green;
//     }
// </style>

// <body>
//     <!-- <h1 class="" id="">Hello My Name is Something</h1>-->
//     <!-- <h2 id="hello">H2 tag</h2> -->

//     <!-- <h3 class="hi">upper hi <span style="display: none;">hello</span>
//     </h3>  -->
//     <!-- <h3 class="hi">lower hi class</h3> -->

//     <!-- <h4> this is h4 tAG</h4>-->
//     <!-- <h4 id="ladoo">something </h4>  -->

//     <style>
//         span {
//             font-size: 10px;
//             font-style: italic;
//             color: red
//         }
//     </style>
//     <form>

//         <input type="text" placeholder="enter name" id="pudhar" value="naqhi">
//         <input type="number" placeholder="enter phone" id="phone" value="1234568890">
//         <span id="phoneError"></span>
//     </form>

//     <div id="displaySomething"></div>
//     <div id="disPhone"></div>
//     <!-- display the values:
//     <p id="getName">name</p>
//     <p id="getPhone">phone</p> -->
//     <script src="script.js"></script>

// </body>

// </html>