export const lineChartData= {
    //x axis
    labels: [
        "January",
        "February",
        "March",
        "April",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    //y axis
    datasets: [
        {
            label: "Balance",
            data: [2000,5000,10000,6000,8000,2000,5000,4500,6000,8000,7000,9000],
            borderColor: "blue"   
        },
        {
            label: "Income",
            data: [5000,5000,5000,5000,5000,5000,5000,5000,5000,6000,6000],
            borderColor: "green"
        },
        {
            label: "Spent",
            data: [3000,2000,0,9000,3000,11000,2000,5500,4000,3000,6000],
            borderColor: "red"
        },
    ],
};