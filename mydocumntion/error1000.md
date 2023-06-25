## in our schema in model we specified unique that mean we can not duplicate same email or name
### if we try to use same email twise we will get error call 1100

```js
// so i write this function if we see 11000 in error message i will display this message
 if (err.code === 11000){
        errors.email = 'that email is already registered';
        return errors;
    }

```