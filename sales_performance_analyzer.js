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
