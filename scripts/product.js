
let output = (product) => {
    product.map((ele) => {

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src=ele.images[1]

        let title = document.createElement("h1")
        title.innerHTML=ele.title

        let price = document.createElement("h2")
        price.innerHTML=ele.price

        let rating = document.createElement("h3")
        rating.innerHTML=ele.rating

        let discount = document.createElement("h3")
        discount.innerHTML=ele.discountPercentage

        div.append(img,title,price,rating,discount)

        document.getElementById("product").append(div)

    })
}


fetch ("https://dummyjson.com/products")
.then((value) => value.json())
.then((value) => output(value.products))
// .then((value) => console.log(value.products))
