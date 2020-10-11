export const paymentConstraints = {
    CardHolderName:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Card holder name"
        }
    },
    CardNumber:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Card Number"
        }
    },
    CardExpireDate:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Expiry date"
        }
    },
    CVC:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the CVC"
        }
    },
    Country:{
        presence:{
            allowEmpty:false,
            message:"^Please enter your country"
        }
    },
    ZIP:{
        presence:{
            allowEmpty:false,
            message:"^Please enter ZIP code"
        }
    }
  };
  
  export default paymentConstraints;