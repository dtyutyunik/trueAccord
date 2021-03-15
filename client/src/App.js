import './App.css';
import investments from './financials';
import {useState,useEffect} from 'react';
import InvestmentList from './investmentsList';
import PersonalInvestments from './personalInvestments';
import PieChart from './pieChart';

function App() {
  const [investmentTypes,setInvestmentTypes]=useState([])
  const [selectedInvestments,setSelectedInvestments]=useState([]);
  const [listOfInvestments, setListOfInvestments]=useState([])
  const [totalPortfolio, setTotalPortfolio]= useState({})
  
 useEffect(() => {
  setInvestmentTypes(investments)
 }, [])


 useEffect(() => {
  calculateTotal()
 }, [selectedInvestments])


 const calculateTotal=()=>{
   
    let totalItems=selectedInvestments.length;
    let totals={}
    for(let i=0;i<totalItems;i++){
      let {Domestic_Equities,International_Equities,Bonds,Cash_Other_Assets}=selectedInvestments[i].asset_holdings;
        
      totals['Domestic_Equities']=(totals['Domestic_Equities']||0)+Domestic_Equities
      totals['International_Equities']=(totals['International_Equities']||0)+International_Equities
      totals['Bonds']=(totals['Bonds']||0)+Bonds
      totals['Cash_Other_Assets']=(totals['Cash_Other_Assets']||0)+Cash_Other_Assets
    }

    for(let x in totals){
      totals[x]=Math.floor(totals[x]/totalItems*100)/100
      
    }
    
    setTotalPortfolio(totals)
    
  
}



 const addInvestment=(investment)=>{
  
    let found=selectedInvestments.findIndex(element => element.investment_name===investment.investment_name);
    
    if(found===-1){
      setSelectedInvestments(prevState=> [...prevState,investment])
      setListOfInvestments(prevState=> [...prevState,investment.investment_name])
     
    }

 }

 const removeInvesment=(investment)=>{
  let newInvestments=selectedInvestments.filter(item=> item.investment_name!==investment)
    setSelectedInvestments(newInvestments);
    setListOfInvestments(listOfInvestments.filter(item=> item!==investment))
 }

  return (
    <div className="App">
      <PieChart totalInvestments={totalPortfolio}/>
      <InvestmentList addInvestment={addInvestment} investmentTypes={investmentTypes} listOfInvestments={listOfInvestments}/>
      <PersonalInvestments removeInvesment={removeInvesment} investmentTypes={selectedInvestments}/>
    </div>
  );
}

export default App;
