// fronted/src/ValidationFolder/LoginValidation
import passwordPolicyConfig from './config.json';

function validation(values) {
    let error = {};

    // ID validation
    if (!values.id || values.id === "") {
        error.id = "ID should not be empty";
    }

    // Name validation
    if (!values.name || values.name === "") {
        error.name = "Name should not be empty";
    }
    // Email validation
    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Uncomment if email pattern validation is needed

    if (values.email === "") {
        error.email = "Email should not be empty";
    } /* else if (!email_pattern.test(values.email)) {
        error.email = "Email not legal";
    } else {
        error.email = "";
    } */

    // Apply password policy validation
    const passwordPolicy = passwordPolicyConfig.passwordPolicy;
    const minLength = passwordPolicy.minLength;
    const requiredCharacterTypes = passwordPolicy.requiredCharacterTypes;
    const characterTypes = passwordPolicy.characterTypes;
    const passwordErrorMessage = passwordPolicy.errorMessage;

    const password_pattern = new RegExp(`^(?=.*[a-z])*(?=.*[A-Z])*(?=.*[0-9])*(?=.*[^a-zA-Z0-9])*[a-zA-Z0-9]{${minLength},}$`);

    if (!password_pattern.test(values.password)) {
        error.password = passwordErrorMessage;
    } else {
        const characterTypeCount = characterTypes.filter(type => {
            if (type === "lowercase" && /[a-z]/.test(values.password)) {
                return true;
            }
            if (type === "uppercase" && /[A-Z]/.test(values.password)) {
                return true;
            }
            if (type === "number" && /[0-9]/.test(values.password)) {
                return true;
            }
            return type === "special" && /[^a-zA-Z0-9]/.test(values.password);

        }).length;

        if (characterTypeCount < requiredCharacterTypes) {
            error.password = passwordErrorMessage;
        } else {
            error.password = "";
        }
    }

    return error;
}

export default validation;
