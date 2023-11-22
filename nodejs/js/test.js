const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`\n你叫什么名字?\n`, name => {
  console.log(`你好 ${name}!`)
  readline.close()
})



const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?2222"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`你好 ${answers['name']}!`)
})

const args = require('minimist')(process.argv.slice(2))
console.log(args['name'])