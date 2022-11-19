const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    btnEvent(btn.textContent)
    // console.log(e.currentTarget.classList)
  })
})

const btnEvent = (click) => {
  let x = Number(value.textContent)
  switch (click) {
    case 'decrease':
      x--
      break
    case 'reset':
      x = 0
      break
    case 'increase':
      x++
      break
    default:
      x = x
  }
  changeColor(x)
  return (value.textContent = x)
}

const changeColor = (newValue) => {
  if (newValue > 0) {
    value.style.color = 'green'
  } else if (newValue < 0) {
    value.style.color = 'red'
  } else {
    value.style.color = 'black'
  }
}
