const SignUp = require('../models/auth');

exports.postSignUp = (req,res,next) => {
    const obj = JSON.parse(JSON.stringify(req.body));
    const name = obj.name;
    const rollno = obj.roll;
    const dept = obj.dept;
    const enroll = obj.enroll;
    const passout = obj.passout;
    const email = obj.Auth;
    const password = obj.Password;
    const user = new SignUp({
        name: name,
        email: email,
        department: dept,
        rollno: rollno,
        enroll: enroll,
        passout: passout,
        password: password
    })
    user.save()
        .then(result =>{
            console.log('SignedUp !');
            res.redirect('/');
        })
        .catch(err =>{
            console.log(err);
        })
}

exports.getSignUp = (req,res,next) =>{
    res.send(
        '<form action="/authenticate"method="POST"><input type="text" name="name" placeholder="Name"><br/><input type="email" name="Auth" placeholder="email"><br/><input type="text" name="roll" placeholder="RollNo"><br/><input type="text" name="dept" placeholder="department"><br/><input type="text" name="enroll" placeholder="enrollment"><br/><input type="text" name="passout" placeholder="passout"><br/><input type="password" name="Password"><br/><button type="submit">submit</submit> </form>')
}