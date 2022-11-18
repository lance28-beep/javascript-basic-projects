const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  const hex = getRandomColors()
  document.body.style.backgroundColor = hex
  color.textContent = hex
})

const getRandomColors = () => {
  const random = ['letter', 'num']
  const arr = []
  for (let i = 10; i >= arr.length; i--) {
    let luckyPick = random[Math.floor(Math.random() * random.length)]
    if (luckyPick == random[0]) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F']
      arr.push(letters[Math.floor(Math.random() * letters.length)])
    }
    if (luckyPick == random[1]) {
      arr.push(Math.floor(Math.random() * 8))
    }
  }
  console.log(arr)
  return `#${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}`
}
