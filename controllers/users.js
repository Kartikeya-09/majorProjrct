
const User=require("../models/user");

module.exports.renderSignUpform=(req,res)=>{
    res.render("Users/signup.ejs");
};

module.exports.signUp=async(req,res)=>{
    try{
      let{username, email, password}=req.body;
      const newUser=  new User({email, username});
     let registeredUser= await User.register(newUser,password);//regiter to new user with given password.
      req.login(registeredUser,(err)=>{
        if(err){
          return next(err);
        }
        req.flash("success","Welcome to Wandelust ");
        res.redirect("/listings");
      });
  
    }catch(e){
      req.flash("error",e.message);
      res.redirect("/signup");
    }
  };

  module.exports.renderloginForm=(req,res)=>{
    res.render("users/login.ejs");
  };

  module.exports.login = async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  };

  module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
      if(err){
      return next(err);
      }
      req.flash("success","You are logged out");
      res.redirect("/listings");
    });
  };