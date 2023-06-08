

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let product = (data) => {
  let price = 0
  for (let i=0;i<cart.length;i++){
    price += cart[i].price * cart[i].qty * 10 
  }

  document.getElementById("cart").innerHTML= `Total : -  $ ${price}`

  data.map((ele) => {

    let main = document.createElement("div")
    main.setAttribute("id","main")




      let dmain = document.createElement("div")
      dmain.setAttribute("id","data")



          let idiv = document.createElement("div")
          idiv.setAttribute("id","image-div")


              let imag = document.createElement("div")
              imag.setAttribute("id","img")

                  let img = document.createElement("img")
                  img.src=ele.images[1]

              imag.append(img)


              let name = document.createElement("div")
              name.setAttribute("id","name")

                  let title = document.createElement("h1")
                  title.innerHTML=ele.title

              name.append(title)


          idiv.append(imag,name)





          let pdiv = document.createElement("div")
          pdiv.setAttribute("id","price-div")



              let qdiv = document.createElement("div")
              qdiv.setAttribute("id","qty")
              
                  let sdiv1 = document.createElement("div")

                      let a1 = document.createElement("a")
                      a1.innerHTML="-"

                      

                  sdiv1.append(a1)


                  let sdiv2 = document.createElement("div")

                      let a2 = document.createElement("p")
                      a2.innerHTML=ele.qty

                  sdiv2.append(a2)


                  let sdiv3 = document.createElement("div")

                      let a3 = document.createElement("a")
                      a3.innerHTML="+"

                      a3.addEventListener("click", () => {
                  
                        cart.map((item, pro) => {
                            cart[pro].qty -= 1;
                        });

                      });

                  sdiv3.append(a3)

              qdiv.append(sdiv1,sdiv2,sdiv3)

          pdiv.append(qdiv)




          let pmain = document.createElement("div")
          pmain.setAttribute("id","price")

              let price = document.createElement("h1")
              price.innerHTML=ele.price
              
          pmain.append(price)


        dmain.append(idiv,pdiv,pmain)


      main.append(dmain)



    document.getElementById("product").append(main)

  })
} 

product(cart)

