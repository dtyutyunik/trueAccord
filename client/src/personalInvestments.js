import react from 'react';

function PersonalInvestments({investmentTypes,removeInvesment}){
    return(<div >
        <h1>Personal Investments</h1>

        {investmentTypes?investmentTypes.map((i)=>{
            return<div className='personalInvestents' key={i.investment_name}>
                    {i.investment_name}
                    <button onClick={()=>removeInvesment(i)}> X </button>
              </div>
          }):''}
          </div>)
}

export default PersonalInvestments;