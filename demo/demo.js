document.documentElement.setAttribute("lang", "en")
document.title = "Document"
const meta1 = document.createElement("meta")
const meta2 = document.createElement("meta")
meta1.setAttribute("http-equiv", "X-UA-Compatible")
meta1.setAttribute("content", "IE=Edge")
meta2.setAttribute("name", "viewport")
meta2.setAttribute("content", "width=device-width initial-scale=1.0")
document.head.append(meta1, meta2)

const inputInteger = require("..")

const opts1 = {min: 1, max: 150}
const opts2 = {min: 1872, max: 2023}


const input1 = inputInteger(opts1)
const input2 = inputInteger(opts2)

const title = 'My demo form'
const subtitle = 'Please fill out the form'

const page = document.createElement('div')
page.innerHTML= `
<h1>${title}</h1>
<h2>${subtitle}</h2>
<h3>Enter your age</h3>
<x></x>
<h3>Enter your year of birth</h3>
<y></y>
`
page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)

document.body.append(page)
