 import Chart from "js/chart.js/dist/chart";
import { chartConfig, bindChartEvents } from "./utils";
import "../css/finance-support.css";

const chartSelector = "[data-results-chart]";
const chartTitleSelector = "[data-results-chart-title]";
const chartLegendSelector = "[data-results-chart-legends]";

let chartEl;
let chartTitleEl;
let chartLegendEL;
let myChart;

chartEl = document.querySelector(chartSelector);
chartTitleEl = document.querySelector(chartTitleSelector);
chartLegendEL = document.querySelector(chartLegendSelector);

const renderTitle = () => "Total value: $500.00";

const renderChart = () => {
    chartTitleEl.textContent = renderTitle();

    const dataItems = ["280.00", "80.00", "50.33", "89.67"];
    const labels = ["Principal & Interest", "Taxes ", "Insurance", "PMI"];

    const ctx = chartEl.getContext("2d");
    myChart = new Chart(ctx, chartConfig({ dataItems, labels }));
    chartLegendEL.innerHTML = myChart.generateLegend();
    bindChartEvents(myChart, document);
};

renderChart();
