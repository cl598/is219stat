class statistics {

/** Descriptive Statistics Functions **/
// Random number
    static randomNumber(data) {
        return data[Math.floor(Math.random() * data.length)];
    }

// Select a random value from the list
    static randomSelect(min, data) {
        return Math.random() * (data.length - min) + min;
    }

// Mean
    static mean(data) {
        return jStat.mean(data);
    }

// Median
    static median(data) {
        return jStat.median(data);

    }

// Mode
    static mode(data) {
        return jStat.mode(data);
    }

// Population Variance
    static variance(data) {
        return jStat.variance(data);
    }

// Standard Deviation
    static standardDeviation(data) {
        return jStat.stdev(data);
    }

// Quartiles
    static quartiles(data) {
        return jStat.quartiles(data);
    }

// Skewness
    static skewness(data) {
        return jStat.skewness(data);
    }

// Sample Correlation

// Population Correlation

// Z-Score
    static zscore(value, mean, sd) {
        return jStat.zscore(value, mean, sd);
    }

// Mean Deviation / Mean Absolute Deviation
    static meandev(data) {
        return jStat.meandev(data);
    }

/** Population Sampling Functions **/
// Simple Random Sampling

// Systematic Sampling

// Confidence Interval for a Sample

// Margin of Error

// How to find a Confidence Interval function
    static confidenceInterval(data) {
        let x = statistics.mean() + statistics.zscore() * (statistics.standardDeviation() / Math.sqrt(data.length))
        let y = statistics.mean() - statistics.zscore() * (statistics.standardDeviation() / Math.sqrt(data.length))

        document.writeln(y + " is the lower confidence interval and " +
            x + " is the upper confidence interval");
    }

// Cochran's Sample Size Formula

// How to Find a Sample Size Given a Confidence Interval and Width
// (unknown population standard deviation)

// How to Find a Sample Size Given a Confidence Interval and Width
// (known population standard deviation)

/** Random Generator Function **/

// Generate a random number without a seed between a range of two numbers - Both Integer and Decimal

// Generate a random number with a seed between a range of two numbers - Both Integer and Decimal

// Generate a list of N random numbers with a seed and between a range of numbers - Both Integer and Decimal

// Select a random item from a list

// Set a seed and randomly.select the same value from a list

// Select N number of items from a list without a seed

// Select N number of items from a list with a seed
}

module.exports = statistics;