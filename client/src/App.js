import './App.css';
import investments from './financials';
import {useState,useEffect} from 'react';
import InvestmentList from './investmentsList';
import PersonalInvestments from './personalInvestments';

function App() {
  const [investmentTypes,setInvestmentTypes]=useState([])
  const [selectedInvestments,setSelectedInvestments]=useState([]);
  
 useEffect(() => {
  setInvestmentTypes(investments)
 }, [])

 const selectInvestment=(investment)=>{
  
   let found=selectedInvestments.findIndex(element => element.investment_name===investment.investment_name);
  
    if(found===-1){
      setSelectedInvestments(prevState=> [...prevState,investment]) 
    }else{
      alert('already there')
    }

 }

 const removeInvesment=(investment)=>{
  let newInvestments=selectedInvestments.filter(item=> item.investment_name!==investment.investment_name)
  console.log('after', newInvestments)
    setSelectedInvestments(newInvestments);
 }

  return (
    <div className="App">
      
      <InvestmentList choosingInvestment={selectInvestment} investmentTypes={investmentTypes}/>
      <PersonalInvestments removeInvesment={removeInvesment} investmentTypes={selectedInvestments}/>
    </div>
  );
}

export default App;
