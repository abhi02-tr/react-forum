const router = require('express').Router();

const users = [];

const generateId = () => { return Math.random().toString(36).substring(2,10) };

router.route('/user')
.post(async (req, res) => {
    const { username, email, password } = req.body.data;
    const id = generateId();
    // console.log({id,username,email, password});
    const result = users.filter((user) => {
        return user.email === email && user.password === password
    });

    if(result === 0) {
        users.push({
            id, email, password, username
        });

        res.json({message: 'User created successfully.'})
    }
    else{
        res.json({error: 'user already existed.'})
    }
})

module.exports = router;