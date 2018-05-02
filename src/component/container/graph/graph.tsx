import * as React from 'react'

import PlotlyChart from 'react-plotlyjs-ts';

import {IGraph} from './interface'

import GoChevronDown = require('react-icons/lib/go/chevron-down');


class Graph extends React.Component<IGraph, any> {
    constructor(props: any){
        super(props);
        this.state={
            laporan: "sorot",
            month: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            counter:[],
            child1: false,
            year: 2017
        }
        this.changeYear15= this.changeYear15.bind(this)
        this.changeYear16= this.changeYear16.bind(this)
        this.changeYear17= this.changeYear17.bind(this)
        this.changeYear18= this.changeYear18.bind(this)

    }

    componentDidMount(){
        this.countLaporan()
        console.log(this.props)
    }

    countLaporan(){
        let counter:any = []
        for (var i = 0; i < 12; i++) {
            counter.push(0)
        }
        let bulan
        this.props.content.map((data:any, idx:number) =>{
            bulan = new Date(data.tanggal).getMonth()
            let tahun2:number = new Date(data.tanggal).getUTCFullYear()
            if(tahun2 === this.state.year){
                counter[bulan]++
            }
        })
        this.setState({ counter })
    }

    changeYear18(){
        this.setState({ year: 2018 })
        this.countLaporan()
    }
    changeYear17(){
        this.setState({ year: 2017 })
        this.countLaporan()
    }
    changeYear16(){
        this.setState({ year: 2016 })
        this.countLaporan()
    }
    changeYear15(){
        this.setState({ year: 2015 })
        this.countLaporan()
    }
    render () {
        const data:any = [
         {
           type: 'scatter',
           x: this.state.month,
           y: this.state.counter,
           marker: {
             color: 'rgb(16, 32, 77)'
           }
         },
         {
           type: 'bar',
           x: this.state.month,
           y: this.state.counter,
           name: 'bar chart'
         }
       ];
       const layout:any = {
         title: '',
         xaxis: {
           title: 'bulan'
         },
         annotations: [
           {
             text: 'jumlah laporan',
             x: 0,
             xref: 'paper',
             y: 0,
             yref: 'paper'
           }
         ]
       };
        return (
            <div className="col-md-12 overflow-table">
                <button className="btn btn-light" onClick={this.changeYear18}>2018</button>
                <button className="btn btn-light" onClick={this.changeYear17}>2017</button>
                <button className="btn btn-light" onClick={this.changeYear16}>2016</button>
                <button className="btn btn-light" onClick={this.changeYear15}>2015</button>

                <div className="col-md-8">
                    <br/>
                    <h4>LAPORAN SOROT {this.state.year}</h4>
                    <PlotlyChart data={data} layout={layout}/>
                </div>
                <div className="col-md-4"/>
            </div>
        )
    }
}

export default Graph
