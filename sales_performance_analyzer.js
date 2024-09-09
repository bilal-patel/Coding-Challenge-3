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


