const calculate = document.querySelector('#calculate')
const dataOutput = document.querySelector('#dataOutput')
const currentYear = new Date().getUTCFullYear()

var userData = {
    name: undefined,
    age: 0,
    year: 0
}

calculate.addEventListener( 'click', () => {
    var name = document.querySelector('#name')
    var age = document.querySelector('#age')
    var year = document.querySelector('#years')

    userData.name = name.value
    if (userData.name == '') {
        userData.name = 'Anônimo'
    }

    userData.age = Number(age.value)
    userData.year = Number(year.value)

    dataOutput.style.display = 'block'

    writeOutout()
})

function writeOutout () {
    dataOutput.innerHTML = `${userData.name}, tem ${userData.age} anos de idade em ${currentYear}, daqui a ${userData.year} anos, em ${currentYear + userData.year}, ele vai estar com ${userData.age + userData.year} anos de idade...`
}