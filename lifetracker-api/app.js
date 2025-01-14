const express = require("express")
const {BadRequestError, NotFoundError} = require("./utils/errors")
const security=require("./middleware/security")
const authRoutes = require("./routes/auth")
const nutritRoutes = require("./routes/nutrition")
const exercisRoutes = require("./routes/exercise")
const sleepRoutes = require("./routes/sleep")
//hey

const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(morgan("tiny"))
app.use(express.json())

app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
app.use("/nutrition", nutritRoutes)
app.use("/exercise", exercisRoutes)
app.use("/sleep", sleepRoutes)

app.get("/",(req, res, next) => {
    res.status(200).json({"ping":"pong"})
})

app.use((req, res, next) => {
    next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: { message, status },
    })
})


module.exports=app