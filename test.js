//let prices = [7,1,5,3,6,4]
// output 5
function maxProfit(prices) {
    let minPrice = Infinity; // Track the minimum price encountered so far
    let maxProfit = 0; // Track the maximum profit

    for (let price of prices) {
        // Update the minimum price if a lower price is found
        if (price < minPrice) {
            minPrice = price;
        }
        // Calculate the potential profit and update maxProfit if it's greater
        else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5