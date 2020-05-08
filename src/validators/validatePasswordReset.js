export default function validatePasswordReset(values){
    let errors={}
    /*//validate names
    if(!values.name){
        errors.name="A username is required";
    }
    */
    //validate emails
    if(!values.email){
        errors.email="Please provide email";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email("Invalid email")
    }
    /*
    //validate password
    if(!values.password){
        errors.password="password not provided";
    }
    else if(values.password.length<6){
        errors.password="plese provide password of length greater than 5";
    }*/
    return errors;
}