import React, {useEffect, useRef} from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import Chart from 'chart.js/auto';

function HomePage() {
    const chartRef = useRef(null);
    function Chart_create (data){
            
        // var data = await fetchData();
        if(chartRef.current) {
            d3.select(chartRef.current).select('svg').remove();
        }
        console.log(data);
        var width = 325;
        var height = 325;
        var radius = Math.min(width, height) / 2;

       
        var svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    
        var color = d3.scaleOrdinal()
            .range(["#ffcd56", "#0000ff", "#daa520", "#fd6b19", "#808080",  "#006400",'#dc143c', "#85D16D", "#00ced1"]);

        var pie = d3.pie()
            .value(function(d) { return d.budget; });

        var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        var arcs = svg.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", function(d) { return color(d.data.title); });

        arcs.append("text")
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("text-anchor", "middle")
            .text(function(d) { return d.data.title; });
    }

useEffect(() =>{

        let data_p= {
            data: [],
            backgroundColor: [
                '#808080',
                '#dc143c',
                "#800080",
                '#ff0000',
                "#00fa9a", 
                "#006400", 
                '#fd6b19',
                "#a52a2a",
                "#ffcd56"
            ],
            labels: []
        };
function createChart() {
    var myChart = document.getElementById('myChart');
    const existingChart = Chart.getChart(myChart);
    if(existingChart){
        existingChart.destroy();
    }
  new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: data_p.labels,
        datasets: [
        {
            label: "Language Popularity",
            data: data_p.data,
        },
        ],
    }
    })
}


function getBudget() {
    axios.get('http://localhost:2000/budget')
    .then((res) => {
        console.log(res.data.myBudget.length);
        for(var i = 0; i < res.data.myBudget.length; i++ ){
            data_p.data.push(res.data.myBudget[i].budget);
            data_p.labels.push(res.data.myBudget[i].title);
        }
        console.log(res.data.myBudget[0].budget);
        createChart();
        Chart_create(res.data.myBudget);
    })
};
getBudget();
    })
  return (
    
       <div className="container center">

<div className="page-area">

    <div className="text-box">
        <h1>Stay on right track</h1>
        <p>
            Do you know how are you spending your money? If you really stop to track it down,
            you would get amazed! Budget management will help you to be on track, and this
            app will help you with that!
        </p>
    </div>

    <div className="text-box">
        <h1>Alerts</h1>
        <p>
            What if your expenses budget ended? You will get a notification. The aim is to never go over the budget.
        </p>
    </div>

    <div className="text-box">
        <h1>Results</h1>
        <p>
            People who stick to a budget plan, live happy... since they expend without any fear... 
            because they know it is all good and accounted for.
        </p>
    </div>

    <div className="text-box">
        <h1>Free</h1>
        <p>
            This app is for free! And you are the only one who is holding your data!
        </p>
    </div>

    <div className="text-box">
        <h1>Stay on right track</h1>
        <p>
            Do you know how are you spending your money? If you really stop to track it down,
            you would get amazed! Budget management will help you to be on track, and this
            app will help you with that!
        </p>
    </div>

    <div className="text-box">
        <h1>Alerts</h1>
        <p>
            What if your expenses budget ended? You will get a notification. The aim is to never go over the budget.
        </p>
    </div>
    
    <div className="text-box">
        <h1>Results</h1>
        <p>
            People who stick to a budget plan, live happy... since they expend without any fear... 
            because they know it is all good and accounted for.
        </p>
    </div>

    <div className="text-box">
        <h1>Free</h1>
        <p>
            This app is for free! And you are the only one who is holding your data!
        </p>
    </div>

    <div className="graphs_container">
        
        <canvas id="myChart" width="400" height="400"></canvas>
    
    </div>
    <div id="chart" ref={chartRef}></div> 
</div>

</div>
    
  );
}

export default HomePage;