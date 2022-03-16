/* Activity - Employee Rewards - Starter Code */
/* Construct conditional statements that meet the requirements: */
/* ================================== */

/*1. If the employee has 1 year with the company, 1 new checking account: Output: 'Ship 50.00 Amazon Gift Card'
Otherwise output:'Incentives not met'

/*2. If the employee has 2 years with the company, 3+ new checking accounts:  Output: 'Ship 50.00 Amazon Gift Card'
Otherwise output:'Ship $100.00 Visa Gift Card'

/*3. If the employee has 3 years with the company, 2+ new checking accounts:  Output: 'Ship 700.00 Visa Gift Card'
Otherwise output:'Ship $350.00 Visa Gift Card'

/*4. If the employee has 5+ years with the company, 1+ new checking accounts:  Output: 'Ship 3500.00 Visa Gift Card'
Otherwise output:'Ship set of knives'
*/


// variable declaration
let associateBanker = [56123, 5, 4]; //employeeId, checking, years

let seniorBanker = [77227, 1, 2]
let juniorBanker = [66225, 5, 3]
let temporaryBanker = [56677, 5, 3]
let midBanker = [22151, 2, 6]


  /* 
let empId = associateBanker[0]       //employee Id number
let empChecking = associateBanker[1] //number of new checking 
let empYears = associateBanker[2];   //years employed

//continue same pattern/naming convention for each banker
//leaving only one variable declaration section uncommented each 'Run'

*/
let empId = seniorBanker[0]       
let empChecking = seniorBanker[1]
let empYears = seniorBanker[2];  
/*
let empId = juniorBanker[0]       
let empChecking = juniorBanker[1]
let empYears = juniorBanker[2];  

let empId = temporaryBanker[0]       
let empChecking = temporaryBanker[1]
let empYears = temporaryBanker[2];  

let empId = midBanker[0]       
let empChecking = midBanker[1]
let empYears = midBanker[2];  

*/


//<--Your code goes here-->

if(empYears == 1){
  if (empChecking >= 1) {
      console.log('Ship $50.00 Amazon Gift Card')
    }else{
      console.log('Incentives not met')
    }
}
if(empYears == 2){
  if (empChecking >= 3 ){
      console.log('Ship $400.00 Amazon Gift Card')
      }else{
      console.log('Ship $100.00 Visa Gift Card')
    }
  }
if(empYears == 3){
  if (empChecking >= 2 ){
      console.log('Ship $700.00 Visa Gift Card')
      }else{
      console.log('Ship $350.00 Visa Gift Card')
    }
  }
if(empYears >= 5){
  if (empChecking >= 1 ){
      console.log('Ship $3500.00 Visa Gift Card')
      }else{
      console.log('Ship set of knives')
    }
  }
//to output when activity is complete
console.log(empId + " : Processed")

    
   