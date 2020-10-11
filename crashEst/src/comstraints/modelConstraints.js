export const modelConstraints = {
    Model:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Model Number"
        }
    },
    Manufacturer:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the Manufacturer"
        }
    },
    selectedYear:{
        presence:{
            allowEmpty:false,
            message:"^Please enter the year of the vehicle"
        }
    }
  };
  
  export default modelConstraints;