// Task 1 - Calculate Average Sales

function calculateAverageSales (salesArray) {
if (salesArray.length === 0) {
    return 0;
}

const totalSales = salesArray.reduce((sum, value) => sum + value, 0);

const averageSales = totalSales / salesArray.length;

return averageSales;
}

let sales = [450, 300, 500, 500]
console.log(calculateAverageSales(sales));

// Task 2 - Create a Function to Determine Performance Rating

function determinePerformanceRating (averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000 && averageSales <= 10000) {
        return "Good";
    } else if (averageSales >= 4000 && averageSales < 7000) {
        return "Satisfactory";
    } else if (averageSales < 4000) {
        return "Needs Improvement";
    }
}
let averageSales = 3000
console.log(determinePerformanceRating(averageSales))

// Task 3 - Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers (salesArray) {
    if (salesArray.length === 0) {
        return {topPerformer: null, bottomPerformer: null };
    }

    let topPerformer = salesArray[0];
    let bottomPerformer = salesArray [0];

for (let i = 1; i < salesArray.length; i++) {
    let current = salesArray[i];

    if (current.sales > topPerformer.sales) {
        topPerformer = current;
    }
    if (current.sales < bottomPerformer.sales) {
            bottomPerformer = current;
    }
}

    return {topPerformer: topPerformer, bottomPerformer: bottomPerformer}
}
let salesData = [
{name: "Bilal", sales: 300},
{name: "John", sales: 290},
{name: "Coal", sales: 200},
];
console.log(findTopAndBottomPerformers(salesData));

// Task 4 - Combine Functions to Generate a Performance Report

function generatePerformanceReport (data) {
    const report = data.map((salesGuy) => ({
        name: salesGuy.name,
        avgSales: calculateAverageSales(salesGuy.sales),
        rating: determinePerformanceRating(calculateAverageSales(salesGuy.sales)),
    }));

    const topPerformer = findTopAndBottomPerformers(data).topPerformer.name;
    const bottomPerformer = findTopAndBottomPerformers(data).bottomPerformer.name;

    return {report, topPerformer, bottomPerformer};
}
    // Task 5 - Test Your Functions with Sample Data
    const salesDataTest = [
      { name: 'Alice', sales: [12000, 15000, 13000] },
      { name: 'Bob', sales: [7000, 6000, 7500] },
      { name: 'Charlie', sales: [3000, 4000, 3500] },
      { name: 'Diana', sales: [9000, 8500, 9200] },
    ];
console.log((generatePerformanceReport(salesDataTest)));