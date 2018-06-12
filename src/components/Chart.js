import React, { Component } from 'react';
import {Bar,Line,Doughnut} from 'react-chartjs-2';
import { Table, Input, Button, Icon } from 'antd';


// const data = [{
//     key: '1',
//     name: 'John Brown',
//     age: 31,
//     address: 'New York No. 1 Lake Park',
//   }, {
//     key: '2',
//     name: 'Joe Black',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   }, {
//     key: '3',
//     name: 'Jim Green',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   }, {
//     key: '4',
//     name: 'Jim Red',
//     age: 36,
//     address: 'London No. 2 Lake Park',
//   }];

//   let names=data.map((personData)=>{   
//     return personData.name;
//   });

//   let ages=data.map((personData)=>{
//       return personData.age;
//   })



export default class Chart extends Component{
    constructor(props){
        super(props)
        this.state={
            chartData:props.chartData
        }
    }
    //DEFAULT VALUES
    static defaultProps={
        displayTitle:'true',
        displayLegend:'true',
        legendPosition:'right'
    }


    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={
                        { 
                        title:{
                                display:this.props.displayTitle,
                                text:'Age of Patients',
                                fontSize:25
                              },
                        scales: {
                                yAxes: [{
                                    ticks: {
                                    
                                    beginAtZero: true
                                    }
                                 }]
                                 },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition,
                            labels:{fontColor:'rgba(255,99,132,1)'}
                        },

                    }
                }
                />
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={
                        { 
                        title:{
                                display:true,
                                text:'Age of Patients',
                                fontSize:25
                              },
                        scales: {
                                yAxes: [{
                                    ticks: {
                                    
                                    beginAtZero: true
                                    }
                                 }]
                                 },
                        legend:{
                            display:false,
                            labels:{fontColor:'rgba(255,99,132,1)'}
                        },

                    }
                }
                />
                 <Doughnut
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={
                        { 
                        title:{
                                display:true,
                                text:'Age of Patients',
                                fontSize:25
                              },
                        scales: { xAxes: [{
                                    gridLines: {
                                        drawBorder: false,
                                        display:false,
                                         color: "rgba(0, 0, 0, 0)",
                                    },
                                    ticks:{
                                        display:false
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        drawBorder: false,
                                        diplay:false,
                                        color: "rgba(0, 0, 0, 0)",
                                    },
                                    ticks: {
                                    display:false,
                                    beginAtZero: true
                                    }
                                 }]
                                 },
                        legend:{
                            display:true,
                            labels:{fontColor:'rgba(255,99,132,1)'}
                        },

                    }
                }
                />
            </div>
        )
    }
}