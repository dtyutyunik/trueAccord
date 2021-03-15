import react from 'react';

function InvestmentsList({investmentTypes,addInvestment, listOfInvestments}){
    return(<div>
        <h1>Choose an investment</h1>
     {investmentTypes?investmentTypes.map((i)=>{
    return<div onClick={()=>addInvestment(i)}  key={i.investment_name}
    className={listOfInvestments.find(elemnt=>elemnt===i.investment_name) ?'badInvestment':'investment'}
    disabled={listOfInvestments.find(element=>element===i.investment_name) ?false:true}>
            <div>{i.investment_name}</div>
          
      </div>
  }):''}
        

          </div>)
}

export default InvestmentsList;


