const socket = io();
const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

let data = [];

socket.on("sensorData", (incomingData) => {
  data.push(incomingData);

  if (data.length > 20) data.shift(); // garder les 20 dernières

  updateChart();
});

function updateChart() {
  svg.selectAll("*").remove();

  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => new Date(d.timestamp)))
    .range([50, width - 50]);

  const yScale = d3.scaleLinear()
    .domain([0, 50])
    .range([height - 50, 50]);

  const line = d3.line()
    .x(d => xScale(new Date(d.timestamp)))
    .y(d => yScale(d.temperature));

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height - 50})`) 
    .call(d3.axisBottom(xScale).ticks(5));

  svg.append("g")
    .attr("transform", `translate(50,0)`)
    .call(d3.axisLeft(yScale));
}
