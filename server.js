const express = require("express");
const app = express();

const {checkUser} = require('./middlewares/authMiddleware')
const {checkPermission} = require('./middlewares/permitionMiddleware')

const {productRouter} = require('./routes/productRouter');
const {userRouter} = require('./routes/userRouter');
const {authRouter} = require("./routes/authRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products',checkUser,checkPermission('seller'),productRouter)
app.use('/api/user',checkUser,checkPermission('admin'),userRouter)
app.use('/auth', authRouter)

app.listen(3000, () => console.log("Server is running"));
