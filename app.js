let name1 = document.getElementById('name')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')

let registracia = document.getElementById('registracia')


let warnErorName = document.getElementById('warnErorName')
let warnErorSurname = document.getElementById('warnErorSurname')
let warnErorEmail = document.getElementById('warnErorEmail')
let warnErorPassword = document.getElementById('warnErorPassword')




let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

let lastNameRegex = /^[$A-Z_][0-9A-Z_$]*$/i

let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/

let nameRe = /^[a-zA-Z-' ]{2,}$/;


let warnErorFoo = (warnErorText2, text) => {
    warnErorText2.innerText = text
}






lastName.addEventListener('keyup', (surNameEvent) => {
    let lastnameVal = surNameEvent.target.value


    registracia.addEventListener('click', () => {
        if (!lastNameRegex.test(lastnameVal)) {
            warnErorFoo(warnErorSurname, 'Azganuny sxal e poxeq azganuny:')
        }
        else if (lastnameVal == '') {
            warnErorFoo(warnErorSurname, ('Last name-y lracvac che:'))
        }
        else {
            warnErorSurname.innerText = ''
        }
    })
})

name1.addEventListener('keyup', (nameEvent) => {
    let nameVal = nameEvent.target.value
    registracia.addEventListener('click', () => {
        if (!nameRe.test(nameVal)) {
            warnErorFoo(warnErorName, 'Anuny sxal e poxeq anuny:')
        }
        else if (nameVal == '') {
            warnErorFoo(warnErorName, 'Name-y lracvac che:')
        }
        else {
            warnErorName.innerText = ''
        }
    })
})

email.addEventListener('keyup', (emailEvent) => {
    let emailVal = emailEvent.target.value

    registracia.addEventListener('click', () => {
        if (!emailRegex.test(emailVal)) {
            warnErorFoo(warnErorEmail, 'E-maily sxal poxeq E-maily:')
        }
        else if (emailVal == '') {
            warnErorFoo(warnErorEmail, 'E-mail-y lracvac che:')
        }
        else {
            warnErorEmail.innerText = ''
        }
    })
})

password.addEventListener('keyup', (passwordEvent) => {
    let passwordVal = passwordEvent.target.value

    registracia.addEventListener('click', () => {
        if (!passwordRegex.test(passwordVal)) {
            warnErorFoo(warnErorPassword, 'passwordi kod sxal e porceq urish password:')
        }
        else if (passwordVal == '') {
            warnErorFoo(warnErorPassword, 'Password-y lracvac che:')
        }
        else {
            warnErorPassword.innerText = ''
        }
    })
})