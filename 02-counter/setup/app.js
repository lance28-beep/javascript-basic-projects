const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    btnEvent(btn.textContent)
  })
})

const btnEvent = (click) => {
  let x = Number(value.textContent)
  switch (click) {
    case 'decrease':
      --x
      break
    case 'reset':
      x = 0
      break
    case 'increase':
      ++x
      break
    default:
      x = x
  }
  return (value.textContent = x)
}
