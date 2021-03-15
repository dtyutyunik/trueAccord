import react from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function PieChart({totalInvestments}){

  const options = {
    title: {
      text: 'Portfolio Breakdown'
    },
    chart: {
      type: 'pie'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          
        }
      }
    },
    series: [{
      colorByPoint: true,
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
          <h1>Total Investment Breakdown</h1>
          {totalInvestments['Domestic_Equities']!==undefined?<HighchartsReact
          highcharts={Highcharts}
          options={options}
        />:<h2>Select an investment to see the pie chart Breakdown</h2>}
      </div>
    )
}

export default PieChart;