import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart as ChartJs, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

LineGraph.propTypes = {
    option: PropTypes.object,
    years: PropTypes.number,
    monthlyInvestment: PropTypes.number,
    rate: PropTypes.number
};

function LineGraph(props) {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Generate data for the graph
    let regularSavings = [];
    let years = [];
    let growthRate = 1 + (props.rate / 100);

    for (let i = 0; i < props.years; i++) {
        years[i] = 2025 + i;
        if (i === 0) {
            regularSavings[i] = props.monthlyInvestment * 12;
        } else {
            regularSavings[i] = regularSavings[i - 1] + props.monthlyInvestment * 12;
        }
    }

    let investmentSavings = [];
    for (let i = 0; i < props.years; i++) {
        if (i === 0) {
            investmentSavings[i] = (props.monthlyInvestment * 12) * growthRate;
        } else {
            investmentSavings[i] = (investmentSavings[i - 1] + props.monthlyInvestment * 12) * growthRate;
        }
    }

    // Define the graph data with conditional styling for dark mode
    let investmentData = {
        labels: years,
        datasets: [
            {
                label: "Potential",
                data: investmentSavings,
                borderColor: isDarkMode ? "#81C784" : "#4CAF50",
                backgroundColor: isDarkMode ? "rgba(129, 199, 132, 0.2)" : "rgba(76, 175, 80, 0.2)",
                fill: true
            },
            {
                label: "Regular Saving",
                data: regularSavings,
                borderColor: isDarkMode ? "#CFD8DC" : "#B0BEC5",
                backgroundColor: isDarkMode ? "rgba(207, 216, 220, 0.2)" : "rgba(176, 190, 197, 0.2)",
                fill: true
            },
        ],
    };

    // Merge options with dynamic axis and grid styling
    const dynamicOptions = {
        ...props.option,
        interaction: {
            mode: 'index', // Ensure the tooltip works across datasets
            intersect: false, // Display tooltips even if not directly over a point
          },
        plugins: {
            ...props.option.plugins,
            legend: {
                labels: {
                    color: isDarkMode ? "#FFFFFF" : "#000000", // Adjust legend text color
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: isDarkMode ? "#FFFFFF" : "#000000", // Adjust x-axis tick color
                },
                grid: {
                    color: isDarkMode ? "#4A5568" : "#E2E8F0", // Grid lines for x-axis
                },
            },
            y: {
                ticks: {
                    color: isDarkMode ? "black" : "#000000", // Adjust y-axis tick color
                },
                grid: {
                    color: isDarkMode ? "#4A5568" : "#E2E8F0", // Grid lines for y-axis
                },
            },
        },
    };

    return (
        <Line options={dynamicOptions} data={investmentData} className="bg-gray-300 dark:bg-gray-600" />
    );
}

export default LineGraph;
