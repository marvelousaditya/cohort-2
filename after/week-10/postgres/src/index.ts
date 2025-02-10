import { Client } from "pg";
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "7even",
});

async function createUsersTable() {
  try {
    await client.connect();
    const res = await client.query(`CREATE TABLE USERS(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            
    );`);
    console.log(res);
  } catch (e) {
    console.log("some error occured , ", e);
  } finally {
    await client.end();
  }
}

// createUsersTable();

async function insertUsersTable() {
  try {
    await client.connect();
    /**
     *  const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
     *  we can do this too , but we don't as attackers can inject malicious sql codes and sql executes them thinking it is sql code
     * but the second method prevents as it treats the values as string
     */
    const insertQuery = `INSERT INTO users(username,email,password) VALUES ($1,$2,$3);`;
    const values = ["aditya", "a@gmail.com", "12345"];
    const res = await client.query(insertQuery, values);
    console.log(res);
  } catch (e) {
    console.log("some error occured , ", e);
  } finally {
    await client.end();
  }
}

// insertUsersTable();

async function getUser(username: string) {
  try {
    await client.connect();
    const getQuery = `SELECT * from users WHERE username = $1`;
    const values = [username];
    const res = await client.query(getQuery, values);
    if (res.rows.length > 0) {
      console.log("User found:", res.rows[0]);
      return res.rows[0];
    } else {
      console.log("No user found with the given email.");
      return null;
    }
  } catch (e) {
    throw e;
  } finally {
    await client.end();
  }
}

// getUser("aditya").catch(console.error);

async function createAddressTable() {
  try {
    await client.connect();
    const res = await client.query(`CREATE TABLE addresses(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
        )`);
    console.log(res);
  } catch (err) {
    throw err;
  } finally {
    await client.end();
  }
}

// createAddressTable().catch(console.error);

async function insertAddressTable() {
  try {
    await client.connect();
    const insertQuery = `INSERT INTO addresses (user_id,city,country,street,pincode) VALUES ($1,$2,$3,$4,$5)`;
    const values = [1, "delhi", "india", "nh-1", "27"];
    const resp = await client.query(insertQuery, values);
    console.log(resp);
  } catch (err) {
    throw err;
  } finally {
    await client.end();
  }
}

// insertAddressTable().catch(console.error);

async function getAddresses(userId: number) {
  try {
    await client.connect();
    const getQuery = `SELECT * FROM addresses WHERE user_id = $1`;
    const values = [userId];
    const res = await client.query(getQuery, values);
    if (res.rows.length > 0) {
      console.log(res.rows[0]);
      return res.rows[0];
    } else {
      console.log("no user with that user id");
      return null;
    }
  } catch (err) {
    throw err;
  } finally {
    await client.end();
  }
}

// getAddresses(1).catch(console.error);

async function insertUserAndAddress() {
  try {
    await client.connect();

    await client.query("BEGIN");
    const insertUser = `INSERT INTO users(username,email,password) VALUES ($1,$2,$3) RETURNING id;`;
    const userValue = ["kaddu", "kaddu@gmail.com", "12345"];
    const res = await client.query(insertUser, userValue);
    console.log(res.rows[0].id);
    const insertAddress = `INSERT INTO addresses (user_id,city,country,street,pincode) VALUES ($1,$2,$3,$4,$5)`;
    const address = [res.rows[0].id, "delhi", "india", "nh-1", "27"];

    await client.query(insertAddress, address);
    await client.query("COMMIT");
    console.log("transaction completed");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    if (client) {
      await client.end();
      console.log("connection closed");
    }
  }
}

// insertUserAndAddress().catch(console.error);

async function getUsersAndAddress() {
  try {
    await client.connect();
    const res =
      await client.query(`SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
        ;`);

    res.rows.forEach((data) => console.log(data));
  } catch (err) {
    throw err;
  } finally {
    await client.end();
    console.log("connection closed");
  }
}

// getUsersAndAddress().catch(console.error);
