// fronted/src/api/server.js
// { someFunction } from './api/server.js';  // הוסף את הסיומת .js


import axios from "axios";

export const Login = (values) => {
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

export const Changepass = (values) => {
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

export const Signup = (values) => {
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

export const Continuresett = (values) => {
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

export const ShowUsers2 = (values) => {
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
