const users = [{ email: "myemail@mail.com", password: "securePassword" }];

const MAX_LOGIN_ATTEMPTS = 3; 
const BLOCK_DURATION_MINUTES = 5;

const login = (userCredentials) => {
    let isUserRegistered = false;
    let userIndex = -1;

    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[i].email) {
            isUserRegistered = true;
            userIndex = i;
            break;
        }
    }

    if (!isUserRegistered) {
        return "Usuario no registrado";
    }

    const user = users[userIndex];

    if (user.blockedUntil && user.blockedUntil > new Date()) {
        return `La cuenta está bloqueada. Inténtalo de nuevo después de ${BLOCK_DURATION_MINUTES} minutos.`;
    }

    if (userCredentials.password === user.password) {
        
        user.loginAttempts = 0;
        return "Bienvenido al sistema";
    } else {
        user.loginAttempts++;

        if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            user.blockedUntil = new Date(Date.now() + BLOCK_DURATION_MINUTES * 60 * 1000);
            return `Demasiados intentos fallidos. La cuenta está bloqueada durante ${BLOCK_DURATION_MINUTES} minutos.`;
        } else {
            return "Contraseña incorrecta";
        }
    }
};

const getToken = (userCredentials) => {

    const user = users.find(u => u.email === userCredentials.email);

    if (user && user.loginAttempts < MAX_LOGIN_ATTEMPTS && user.blockedUntil && user.blockedUntil <= new Date()) {
        return "un_token_generado"; 
    } else {
        return null; 
    }
};

module.exports = { login, getToken };