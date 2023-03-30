function submitData(name, email) {
    const userData = { name, email };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }