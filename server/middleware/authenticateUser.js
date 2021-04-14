module.exports = {
 checkAdmin: (req, res, next) =>{
    if (!req.session.user.admin) {
        res.status(403).send('Cool your jets, Jimmy!')
    } else {
        next();
    }
},
checkLoggedIn: (req,res,next)=> {
    if(!req.session.user.isLoggedIn){
        const back = this.props.history.goBack(-1)
        res.status(403).send(back)
    console.log(req.session.user)
    }else{
        next()
    }
}
}