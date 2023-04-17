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

const x = inputInteger()

document.body.append(x)
