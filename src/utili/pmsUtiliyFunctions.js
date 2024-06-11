export const CalculatePmsLiters=(closingPms,openingPms)=>{

       const closingPmsToString=closingPms.toString()
       if(closingPmsToString.length === 10){
            const unroundedLiters=closingPms-openingPms;
            const roundedLiters=unroundedLiters.toFixed(2)
            const liters=Number.parseFloat(roundedLiters)
            return liters;
       }else{
          return null;
       }
    
}