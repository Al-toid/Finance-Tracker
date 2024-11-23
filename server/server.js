import  express from 'express';
import jwt from 'jsonwebtoken' ;
import bcrypt from 'bcrypt' ;
import cors from 'cors' ;
import dotenv from 'dotenv';
import sequelize from './dataBase.js';
import User from '../server/Models/User.js'
dotenv.config()

// const sequelize = new Sequelize('User',process.env.User_Name,process.env.Password,{dialect:'postgres',port:6543,host:'aws-0-us-west-1.pooler.supabase.com'});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();
app.use(cors())
const port = 3001; //changed port to 3001 to avoid conflict with React's default port 3000
const secretKey = 'classProject';



app.use(express.json()); 
// for parsing application/json
    // app.post('/signUp',(req,res)=>{
    //     res.setHeader('Set-Cookie', 'token=i am a token;');
    //     res.json({ redirectUrl: '/Fullstack/index.html' });
    // })
    // app.get('/print',(req,res)=>{
    //     console.log(req.headers);
    // })
app.post('/signUp', async (req, res) => {
    if(await checkIfContained(req.body.email)){
        let login = await login(req.body.email,req.body.password)
        
        let token = login.success? await jwtSign(login.userId) : res.status(500).json(login)
        res.status(200).json({ token: token, redirectUrl: '/home' });
    }else {
        try {
            const hashedPassword = await hashPassword(req.body.password);
            const email = req.body.email;
            const userId = await sendToDataBase(email, hashedPassword);
            let token = await jwtSign(userId)
            // console.log(token);
            res.send({ token });
            // res.redirect('/home');
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

    
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

async function sendToDataBase(email, password) {
    let user = await User.create({email:email,password:password});
    return user.id;
}
async function jwtSign(user){
    return jwt.sign({ user }, secretKey);
}
async function checkIfContained(email){
    
} 
async function login(email, password){
    try {
        let user = await User.findOne({ where: { email: email } });
        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { success: false, message: 'Incorrect password' };
        }

        return { success: true, message: 'Login successful', userId: user.id };
    } catch (err) {
        return { success: false, message: 'An error occurred', error: err };
    }
}

export default sequelize