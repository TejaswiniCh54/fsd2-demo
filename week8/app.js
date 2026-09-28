const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: "week8secret",
    resave: false,
    saveUninitialized: false
}));

app.get("/", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "Teja" && password === "1234") {
        req.session.username = username;
        res.redirect("/dashboard");
    } else {
        res.send("Invalid username or password");
    }
});

app.get("/dashboard", (req, res) => {
    if (!req.session.username) {
        return res.redirect("/");
    }

    res.render("dashboard", {
        username: req.session.username
    });
});

app.get("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.send("Unable to logout");
        }

        res.redirect("/");
    });
});

app.get("/set-cookie", (req, res) => {
    res.cookie("username", "Rahul");
    res.send("Cookie created");
});

app.get("/get-cookie", (req, res) => {
    const username = req.cookies.username;
    res.send(`Username: ${username}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});