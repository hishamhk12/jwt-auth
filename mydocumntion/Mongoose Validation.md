# first step
## we want to get our error message from the user model
### if we try to signup we will get this error so i consol log it to know how to get the error message i want.
### i can see the Error have errors and the errors have two error inseid it for email and password
### so i want to get insied it 
 ```js
Error: user validation failed: email: please enter a valid email, password: Minimum password length is 6 charcters
    at ValidationError.inspect (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\error\validation.js:48:26)
    at formatValue (node:internal/util/inspect:806:19)
    at inspect (node:internal/util/inspect:365:10)
    at formatWithOptionsInternal (node:internal/util/inspect:2273:40)
    at formatWithOptions (node:internal/util/inspect:2135:10)
    at console.value (node:internal/console/constructor:340:14)
    at console.log (node:internal/console/constructor:377:61)
    at handleErrors (E:\backend\JWT\node-express-jwt-auth\controllers\authController.js:4:13)
    at module.exports.signup_post (E:\backend\JWT\node-express-jwt-auth\controllers\authController.js:31:23)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  errors: {
    email: ValidatorError: please enter a valid email
        at validate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1210:13)
        at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1193:7
        at Array.forEach (<anonymous>)
        at SchemaType.doValidate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1138:14)
        at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\document.js:2388:18
        at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
      properties: [Object],
      kind: 'user defined',
      path: 'email',
      value: 'hishsa',
      reason: undefined,
      [Symbol(mongoose:validatorError)]: true
    },
    password: ValidatorError: Minimum password length is 6 charcters
        at validate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1210:13)
        at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1193:7
        at Array.forEach (<anonymous>)
        at SchemaType.doValidate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1138:14)
        at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\document.js:2388:18
        at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
      properties: [Object],
      kind: 'minlength',
      path: 'password',
      value: 't123',
      reason: undefined,
      [Symbol(mongoose:validatorError)]: true
    }
  },
  _message: 'user validation failed'

 ```

# secound step
### i want to get insied my err to get my message
###  so i  console.log(err.errors)
## in that way i get my err.errors
```js
{
  email: ValidatorError: please enter a valid email
      at validate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1210:13)
      at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1193:7
      at Array.forEach (<anonymous>)
      at SchemaType.doValidate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1138:14)
      at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\document.js:2388:18
      at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
    properties: {
      message: 'please enter a valid email',
      type: 'user defined',
      validator: [Function],
      path: 'email',
      value: 'hishsa'
    },
    kind: 'user defined',
    path: 'email',
    value: 'hishsa',
    reason: undefined,
    [Symbol(mongoose:validatorError)]: true
  },
  password: ValidatorError: Minimum password length is 6 charcters
      at validate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1210:13)
      at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1193:7
      at Array.forEach (<anonymous>)
      at SchemaType.doValidate (E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\schematype.js:1138:14)
      at E:\backend\JWT\node-express-jwt-auth\node_modules\mongoose\lib\document.js:2388:18
      at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
    properties: {
      validator: [Function (anonymous)],
      message: 'Minimum password length is 6 charcters',
      type: 'minlength',
      minlength: 6,
      path: 'password',
      value: 't123'
    },
    kind: 'minlength',
    path: 'password',
    value: 't123',
    reason: undefined,
    [Symbol(mongoose:validatorError)]: true
  }
}
```
# 3rd step i want the value of theses errors (message)
### in authcontrolles.js we create funtion

```js
const handleErrors = (err)=>{
    console.log(err.message, err.code);
    let errors = {email:'',password:''};
    //errors validation 
       if(err.message.includes('user validation failed')){ // includes is javascript method will see if we have this message "user valdiation" in err.message
     Object.values(err.errors).forEach(({properties})=>{ // we will watch all properties in err.erros object
          
         errors[properties.path]= properties.message // this code  used to set the email and password properties of the errors object to the error messages that were found in properties.path
        })
       }
            return errors;
   }
```