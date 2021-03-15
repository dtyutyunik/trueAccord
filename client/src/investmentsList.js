import react from 'react';

function InvestmentsList({investmentTypes,addInvestment, listOfInvestments}){
    return(<div >
        <h4>Choose an investment from Below</h4>
        <div className='investmentList'>
                {investmentTypes?investmentTypes.map((i)=>{
                return<div 
                onClick={()=>addInvestment(i)}  key={i.investment_name}
                className={listOfInvestments.find(elemnt=>elemnt===i.investment_name) ?'badInvestment':'investment'}
                >
                        {i.investment_name}
                    
                </div>
            }):''}
        </div>

          </div>)
}

export default InvestmentsList;


