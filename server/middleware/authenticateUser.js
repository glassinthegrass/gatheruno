module.exports = {
 checkAdmin: (req, res, next) =>{
    if (!req.session.user.admin) {
        res.status(403).send('Cool your jets, Jimmy!')
    } else {
        next();
    }
},
checkLoggedIn: (req,res,next)=> {
    if(!this.props.isLoggedIn){
        res.status(403).send(this.props.history.goBack(-1))
    console.log(req.session.user)
    }else{
        next()
    }
}
}