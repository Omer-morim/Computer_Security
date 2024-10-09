// backend/src/api/mysql
//conect the backend to mysql

const mysql = require("mysql2");

// Create the connection using mysql2
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", // My MySQL username
  password: "root", // My MySQL password
  database: "loginmanager" // My database name
});

const connectDb = () => {
  return new Promise((resolve, reject) => {
    db.connect(function (err) {
      if (err) {
        console.error("Connection error: " + err.stack);
        return reject(err);
      }
      console.log("Connected as id " + db.threadId);
      resolve(db.threadId);
    });
  });
};

// Example usage of connectDb
connectDb().then((id) => {
  console.log('Database connection successful with id:', id);
}).catch((err) => {
  console.error('Database connection failed:', err);
});


const sendQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, results) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const sendQueryCommit = (query, ...values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, function (error, results, fields) {
      if (error) {
        return db.rollback(function () {
          return reject(error);
        });
      }
      db.commit(function (err) {
        if (err) {
          return db.rollback(function () {
            return reject(err);
          });
        }
        return resolve(results);
      });
    });
  });
};


const sendQueryCommit2 = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, function (error, results, fields) {
      if (error) {
        return db.rollback(function () {
          return reject(error);
        });
      }
      db.commit(function (err) {
        if (err) {
          return db.rollback(function () {
            return reject(error);
          });
        }
        return resolve(results);
      });
    });
  });
};





module.exports = {sendQueryCommit, sendQuery, connectDb, sendQueryCommit2};
