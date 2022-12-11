const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

export function validation (userData) {
    let errors = {};

    if(!regexEmail.test(userData.username)) errors.username = 'El usario debe ser un email'
    else if(!userData.username) errors.username = 'El usuario no puede estar vacio'
    else if (userData.username.length > 35) errors.username = 'El nombre de usuario no puede ser mayor a 35 caracteres'
    if(!regexPassword.test(userData.password)) errors.password = 'La password debe tener al menos un numero'
    else if(userData.password.length < 6 && userData.password.length < 10 ) errors.password = 'La password debe tener cmo minimo 6 y como maximo 10 caracteres'
    return errors;
}