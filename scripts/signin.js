
let data = JSON.parse(localStorage.getItem("data"))

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

    let name = document.getElementById("name").value

    let mail = document.getElementById("email").value

    let pass = document.getElementById("pass").value

    let database = {
        name:name,
        email:mail,
        pass:pass
    }
    
    console.log(database);

    localStorage.setItem("data",JSON.stringify(database))

})