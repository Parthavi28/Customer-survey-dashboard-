const express = require("express")
const bodyParser = require("body-parser")
const surveyRoute = require("./routes/user.route")
const {syncDatabase}=require("./model/survey")
const app = express()
const cors = require("cors")
const port = 5000
app.use(cors())
app.use(bodyParser.json())

app.use("/survey", surveyRoute)

syncDatabase().then(() => {
    app.listen(port, () => {
        console.log("server is listening on port: "+port)
    })
}).catch((error) => {
    console.error("Error syncing sequelize: "+error)
})

