// fronted/src/ValidationFolder/Resetvalidation
function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ID validation
    if (!values.id || values.id === "") {
        error.id = "ID should not be empty";
    }

    // Email validation
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email not legal";
    } else {
        error.email = "";
    }

    return error;
}

export default validation;
