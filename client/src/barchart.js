import react from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function BarChart({totalInvestments}){

    const options = {
      title: {
        text: ''
      },
      chart: {
        type: 'column'
      },
     
    xAxis: {
        categories: ['Domestic_Equities', 'International_Equities', 'Bonds', 'Cash_Other_Assets']
      },
      series: [{
        name: 'Invested',
        data: [
                {name:'Domestic_Equities', y:totalInvestments['Domestic_Equities'],
                },
                {name:'International_Equities', y:totalInvestments['International_Equities']},
                {name:'Bonds', y:totalInvestments['Bonds']},
                {name:'Cash_Other_Assets', y:totalInvestments['Cash_Other_Assets']}
              ]
      }]
    }
  
      return(
        
      <div>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      )
  }
  
  export default BarChart;
