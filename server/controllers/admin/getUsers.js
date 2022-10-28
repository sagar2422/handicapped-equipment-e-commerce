const {User} = require('../../models/User');

async function getUsers(req,res) {
try {
    const users = await User.find();
    res.status(200).json(users);
} catch (error) {
    console.log(error);
    res.status(404).json(error);
}
}

module.exports = getUsers;