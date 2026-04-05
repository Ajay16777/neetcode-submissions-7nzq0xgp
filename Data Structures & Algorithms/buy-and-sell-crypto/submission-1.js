class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let sell = prices[0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (buy > prices[i]) {
                buy = prices[i];
                sell = prices[i];
            }
            // buy = Math.min(buy, prices[i]);
            sell = Math.max(sell, prices[i]);
            
            maxProfit = Math.max(maxProfit, sell-buy);
        }

        return maxProfit;
    }
}
