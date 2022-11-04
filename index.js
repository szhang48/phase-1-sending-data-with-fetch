function submitData(name,email){ 
    // const form = document.querySelector('#submit')
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     const name = e.target['name'].value
    //     const email = e.target['email'].value
      
       return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body : JSON.stringify({
                name,
                email,
                
            }),
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            document.body.innerHTML = json.id
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
            console.log(error.message)
        })
//    })
}
// submitData();


