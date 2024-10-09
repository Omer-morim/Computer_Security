// fronted/src/ValidationFolder/ChangepassValidation
import passwordPolicyConfig from './config.json';

function validation(values){
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if(values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email not legal";
    } else {
        error.email = "";
    }

    // Apply password policy validation for password1
    const passwordPolicy = passwordPolicyConfig.passwordPolicy;
    const minLength = passwordPolicy.minLength;
    const requiredCharacterTypes = passwordPolicy.requiredCharacterTypes;
    const characterTypes = passwordPolicy.characterTypes;
    const passwordErrorMessage = passwordPolicy.errorMessage;
    const commonPasswords = passwordPolicy.commonPasswords;

    const password_pattern = new RegExp(`^(?=.*[a-z])*(?=.*[A-Z])*(?=.*[0-9])*(?=.*[^a-zA-Z0-9])*[a-zA-Z0-9]{${minLength},}$`);

    if (commonPasswords.includes(values.password1)) {
        error.password1 = "Password is too weak";
    } else if (!password_pattern.test(values.password1)) {
        error.password1 = passwordErrorMessage;
    } else {
        const characterTypeCount = characterTypes.filter(type => {
            if (type === "lowercase" && /[a-z]/.test(values.password1)) {
                return true;
            }
            if (type === "uppercase" && /[A-Z]/.test(values.password1)) {
                return true;
            }
            if (type === "number" && /[0-9]/.test(values.password1)) {
                return true;
            }
            if (type === "special" && /[^a-zA-Z0-9]/.test(values.password1)) {
                return true;
            }
            return false;
        }).length;

        if (characterTypeCount < requiredCharacterTypes) {
            error.password1 = passwordErrorMessage;
        } else {
            error.password1 = "";
        }
    }

    // Apply password policy validation for password2
    const passwordPolicy2 = passwordPolicyConfig.passwordPolicy;
    const minLength2 = passwordPolicy2.minLength;
    const requiredCharacterTypes2 = passwordPolicy2.requiredCharacterTypes;
    const characterTypes2 = passwordPolicy2.characterTypes;
    const passwordErrorMessage2 = passwordPolicy2.errorMessage;
    const commonPasswords2 = passwordPolicy2.commonPasswords;

    const password_pattern2 = new RegExp(`^(?=.*[a-z])*(?=.*[A-Z])*(?=.*[0-9])*(?=.*[^a-zA-Z0-9])*[a-zA-Z0-9]{${minLength2},}$`);

    if (commonPasswords2.includes(values.password2)) {
        error.password2 = "Password is too weak";
    } else if (!password_pattern2.test(values.password2)) {
        error.password2 = passwordErrorMessage2;
    } else {
        const characterTypeCount2 = characterTypes2.filter(type => {
            if (type === "lowercase" && /[a-z]/.test(values.password2)) {
                return true;
            }
            if (type === "uppercase" && /[A-Z]/.test(values.password2)) {
                return true;
            }
            if (type === "number" && /[0-9]/.test(values.password2)) {
                return true;
            }
            if (type === "special" && /[^a-zA-Z0-9]/.test(values.password2)) {
                return true;
            }
            return false;
        }).length;

        if (characterTypeCount2 < requiredCharacterTypes2) {
            error.password2 = passwordErrorMessage2;
        } else {
            error.password2 = "";
        }
    }

    // Adding id validation (if needed in your logic)
    if (!values.id) {
        error.id = "ID is required";  // Example check if `id` is required
    }

    return error;
}

export default validation;
