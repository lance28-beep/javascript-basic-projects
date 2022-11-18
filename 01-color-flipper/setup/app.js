const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  // get random numbers between 0 - 3 colors[3]
  // const firstNum = Math.floor(Math.random() * 254)
  // const secondNum = Math.floor(Math.random() * 254)
  // const thirdNum = Math.floor(Math.random() * 254)
  // const rgba = `rgba(${firstNum},${secondNum},${thirdNum})`
  const rgba = randomNumbers()
  document.body.style.backgroundColor = rgba
  color.textContent = rgba
})

//random numbers
const randomNumbers = () => {
  const arr = []
  for (let i = 4; i >= arr.length; i--) {
    arr.push(Math.floor(Math.random() * 254))
  }
  console.log(arr)
  return `rgba(${arr[0]},${arr[1]},${arr[2]})`
}
