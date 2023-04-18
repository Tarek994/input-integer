module.exports = inputInteger

const sheet = new CSSStyleSheet
const theme = get_theme()
sheet.replaceSync(theme)


function inputInteger() {
  const el = document.createElement("div")
  const shadow = el.attachShadow({ mode: "closed" })
  
  const input = document.createElement('input')
  input.type = 'number'
  input.min = 0
  input.max = 150
  input.onkeyup = (e) => handle_onkeyup(e, input)

  shadow.append(input)

  shadow.adoptedStyleSheets = [sheet]
  return el
}

function get_theme(){
  return`
   input {
    padding: 4px 0px;
    background-color: #123123;
    border-radius: 8px;
   }
   input:focus{
    background-color:#fff;
   }
   `
}