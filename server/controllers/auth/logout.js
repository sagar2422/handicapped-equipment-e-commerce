function logout(req,res) {
    res.clearCookie('token');
    res.status(200).json({message: 'Signed Out successfully'});
}