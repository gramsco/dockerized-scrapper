let zebutton = document.getElementById('zebutton')
zebutton.onclick = fetchbaby

function fetchbaby() {
    let answers = document.getElementById('zeanswer')
    answers.innerHTML = "loading..."
    let query = document.getElementById('query')
    let site = document.getElementById('site')
    let body = { query:query.value, site:site.value}
    console.log(body)
    axios
        .post('http://localhost:5000', body)
        .then(res => {
            console.log("hmmm")
            answers.innerHTML = ""
            answers.innerHTML = JSON.stringify(res.data)
        })
        .catch(err => {
            answers.innerHTML = "An error occured :("
            console.log(err)
        })
}