```js
// fire a function after doc saved to db
userSchema.post('save', function (doc,next){ //The doc variable is a variable that contains the document that was saved to the database.  
  //The next() function is used to continue the execution of the code.
   console.log('new user created',doc);
   next();
})

// that is used to listen for the pre event on the userSchema object. The pre event is fired before a document is saved to the database.
//this keyword refers to the current document that is about to be saved
 userSchema.pre('save',function  (next){
           console.log('user about to be created ',this)
        next()
 })

```