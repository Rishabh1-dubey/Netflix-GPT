export const checkValidData=(email,password,fullname)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isFullname =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname);

    
//   ye jbhi kr rha to value undefined dikha rha tha to fullname.current.value remove kiya then 
// krne ke baad authticationi wla show kr rha haii
    if(!isEmailValid) return "Bhai Dhang se E-mail daal";
    if(!isPasswordValid) return "Bhai kya kr rha hai ?";
    
    return null;
}