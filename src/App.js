import React, { Component } from 'react';

import 'antd/dist/antd.css';
// import Table from './components/Table';


import './App.css';
import Chart from './components/Chart'




class App extends Component {
  constructor(){
    super();
    this.state={
      chartData:{}
    }
  }

  //LIFECYCLE HOOK
  componentWillMount(){
    this.getChartData();
  }

  //AJAX CALL HERE
  getChartData(){
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 31,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Jim Red',
      age: 36,
      address: 'London No. 2 Lake Park',
    }];



    //MAP VALUES HERE
    let names=data.map((personData)=>{   
      return personData.name;
    });
    
    let ages=data.map((personData)=>{
        return personData.age;
    })
    
    this.setState({
      chartData:
      {
        labels:names,
        datasets:
        [
            {
            fill:false,
            label:'AGE',
            data:ages,
            backgroundColor:
              [
              '#f759ab',
              '#2CC5DB',
              '#52c41a',
              '#722ed1',
              ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
            }
        ]
      }
    });
  }


  render() {
    return (
      <div className="App">
        {/* <Table /> */}
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
