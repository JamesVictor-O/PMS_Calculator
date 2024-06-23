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

export const formatToCurrency=(amount)=>{
    const formater= new Intl.NumberFormat(`en-NG`,{
      style: 'currency',
      currency: "NGN"
    });

    return formater.format(amount)
}