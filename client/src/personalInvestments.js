import react from 'react';
import BarChart from './barchart';

function PersonalInvestments({investmentTypes,removeInvesment}){


    const renderHeader = () => {
        let headerElement = ['investment_name', 'asset_class', 'ticker','asset_holdings', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return investmentTypes && investmentTypes.map(({ investment_name, asset_class, ticker,asset_holdings }) => {
            return (
                <tr key={investment_name}>
                    <td>{investment_name}</td>
                    <td>{asset_class}</td>
                    <td>{ticker}</td>
                    <td><BarChart totalInvestments={asset_holdings}/></td>

                    <td className='delete'>
                        <button className='deleteButton' onClick={() => removeInvesment(investment_name)}>X</button>
                    </td>
                </tr>
            )
        })
        
    }

    return(
    <div >
        <h1>Personal Investments</h1>
        <div className="personalInvestments">
            <table>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
      
    </div>)
        

      
}

export default PersonalInvestments;

