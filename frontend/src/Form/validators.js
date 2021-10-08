
const usernamePath = ''
const emailPath = ''

const usernameLength = username => ( username.length()  > 5 )

//ESTO SE PUEDE MOVER A UNA CARPETA LLAMADA API Y HACER MAS PERSONALIZABLE LA FUNCION
const getUsernameFromServer = username => (
    fetch('ruta del server json', { method : 'POST' })
        .then(response => response.json())
)

const getDataFromServer = (...options) => (true)

const usernameUnique = username => (
    !!getDataFromServer(username, usernamePath)
)

const passwordLength = password => ( password.length() > 10 )

const passwordWords = password => ( true )

const emailUnique = email => (
    !!getDataFromServer(email, emailPath)
)

const passwordCompareWithConfirm = (password, confirm) => (password === confirm)

const defaultValidatorsRegister = [
    usernameLength,
    passwordLength,
    usernameUnique,
    passwordWords,
    emailUnique,
    passwordCompareWithConfirm
]
export {
    usernameLength,
    usernameUnique,
    passwordLength,
    passwordWords,
    emailUnique,
    passwordCompareWithConfirm,
    defaultValidatorsRegister
}