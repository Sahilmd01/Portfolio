
const scriptURL = 'https://script.google.com/macros/s/AKfycbwOQ0Az2D3Bubf4tefLvdgUtRBxLdE_PKXsSvUc5fwdYfyzE3Kce6P-pJHrji2zvyJ0/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
