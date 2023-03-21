  //Email

  

  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_sjb3ijs";
    const templateID = "template_hvtp12x";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));

      var templateParams = {
        name: 'Akshaj',
        notes: 'Check this out!'
    };
     
    emailjs.send('service_sjb3ijs', 'template_hvtp12x', templateParams)
        .then(function(response) {
           alert('SUCCESS!', response.status, response.text);
        }, function(error) {
           alert('FAILED...', error);
        });
  }

