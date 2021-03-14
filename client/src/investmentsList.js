import react from 'react';

function InvestmentsList({investmentTypes,choosingInvestment}){
    return(<div>
        <h1>Avaialbe List of Investments</h1>
        {investmentTypes?investmentTypes.map((i)=>{
            return<div onClick={()=>choosingInvestment(i)} key={i.investment_name}>
                
                <p >
                  {i.investment_name}
                </p>
              </div>
          }):''}
          </div>)
}

export default InvestmentsList;