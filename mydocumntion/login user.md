## i want to send what i type in input to request the server to log in
## first we make our view 
```js
 const emailError = document.querySelector('.email.error');
  const passwordError = document.querySelector('.password.error')

  form.addEventListener   ('submit', async (e) => {
    e.preventDefault(); // every time we submit page empty the input bar
       emailError.textContent = '';  
       passwordError.textContent = '';
    
    // get values
    const email = form.email.value; //get value from the user
    const password = form.password.value;
      
      try{
           const res = await fetch('/login',{
            method: 'POST',        // we will take post requst from the body 
            // that mean if i write in input 
            body: JSON.stringify({email, password}), //we will take the value that user write above
            // and make it josn file 
             headers: {'Content-Type': 'application/json'}
            }) 
            const data = await res.json(); //take the response and store it in data const
            console.log(data);  
            if (data.errors){ // if the data = 
              emailError.textContent = data.errors.email;
// we will put the errors value insied emailError that will go to div in view
 //<div class="email error"></div>
 // <div class="password error"></div>
// the textContent will replace the message in the div
              passwordError.textContent = data.errors.password;
            }    
             if (data.user){
              location.assign('/');
             }

      }catch(err){
           console.log(err);
      }})

```

## second i create static method call login that find user if user existe user model
```js
userSchema.static.login = async function(email,password){
   const user = await this.findOne({email});
   if (user){ //if user existe  we will compare or password
     const auth =  await bcrypt.compare(password, user.password)    
               if (auth) { //if we have match then we will return user
                return user;
   } 
   throw Error('incorrect password')

   } 
   throw Error('incorrect email')
} 

```

## last step  we compare what user write in input  with what we stored in database

```js
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).json({});
  }

}


```