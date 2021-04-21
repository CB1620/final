let albums = [
    { name: "Album 1", price: 12.99, addedToCart: false },
    { name: "Album 2", price: 14.99, addedToCart: false},
    { name: "Album 3", price: 9.99, addedToCart: false },
    { name: "Album 4", price: 19.99, addedToCart: false }
];

const theme = document.querySelector("#bar")

function checkout(footer)
{
    let li = document.createElement('span');
    let note = document.createTextNode(footer);
    li.appendChild(footer);
    document.getElementById("footer").appendChild(span);

}

img.addEventListener("click", checkout);