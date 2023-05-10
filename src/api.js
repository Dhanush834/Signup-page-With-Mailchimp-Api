const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");
const https = require("https");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.post("/", (req, res) => {

    const emails = req.body.email;
    const passwords = req.body.password;
    const name = req.body.Name;



    const data = {

        members: [
            {
                email_address: emails,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    PASS: passwords
                }
            }
        ]

    };


    var jsondata = JSON.stringify(data)

    const url = "https://us21.api.mailchimp.com/3.0/lists/084ee9de1d";

    const options = {
        method: "POST",
        auth: "Dhanu:fd81fd6d5039717997f55daa1c146576-us21"
    }

    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
        }
        else {
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });


    request.write(jsondata)
    request.end()
})

app.post("/failure", (req, res) => {
    res.redirect("/");
})



app.listen(process.env.PORT || 3001, () => {
    console.log("Server Started");
})
