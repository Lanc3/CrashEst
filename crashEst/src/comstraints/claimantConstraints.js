export const claimantConstraints = {
    ClaimantName:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Claimant Name"
        }
    },
    ClaimantAddress:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Claimant Address"
        }
    },
    ClaimantPhone:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Claimant Phone Number"
        }
    }
  };
  
  export default claimantConstraints;