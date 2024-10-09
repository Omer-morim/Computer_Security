// fronted/src/api/server
import axios from "axios";

export const login = (values) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/login", values)
            .then((result) => {
                return resolve(result.data);
            })
            .catch((error) => {
                return reject(error);
            });
    });
};

export const changepass = (values) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/Changepass", values)
            .then((result) => {
                return resolve(result.data);
            })
            .catch((error) => {
                return reject(error);
            });
    });
};

export const signup = (values) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/Signup", values)
            .then((result) => {
                return resolve(result.data);
            })
            .catch((error) => {
                return reject(error);
            });
    });
};

export const continuresett = (values) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/continu-reset", values)
            .then((result) => {
                return resolve(result.data);
            })
            .catch((error) => {
                return reject(error);
            });
    });
};

export const showusers2 = (values) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/ShowUsers2", values)
            .then((result) => {
                return resolve(result.data);
            })
            .catch((error) => {
                return reject(error);
            });
    });
};
