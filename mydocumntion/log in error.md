# i want to handel error in login

```js
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password'); //here i set my error massage 
  } // and we will catch it controllers
  throw Error('incorrect email'); // and here 
};
```

# now 

```js
 const handelError{ // i call this function in login to handel error
if (err.message == 'incorrect email'){
    errors.email = 'that email is not registered'
  }
   // incorrect password

   if (err.message == 'incorrect password'){
    errors.password = 'that password is incorrect'
   }
 }
```

```js

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id)
      res.cookie('jwt',token,{httpOnly:true, maxAge:maxAge * 1000})
    res.status(200).json({ user: user._id });
  } catch (err) { // here i will catch the error from my User.login schema theat i create 
    const errors = handleErrors(err); // and i put the err in handelErrors and call it if we have error
    res.status(400).json({errors});
  }

}


```