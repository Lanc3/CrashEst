export const constraints = {
    emailAddress: {
      presence: {
        allowEmpty: false,
        message: "^Please enter an email address"
      },
      email: {
        message: "^Please enter a valid email address"
      }
    },
    userName:{
        presence:{
            allowEmpty:false,
            message:"^Please enter Your Name"
        }
    }
  };
  
  export default constraints;