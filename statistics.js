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
    static simpleRandomSample(data){
        let sample = [];
        let x = sample[Math.floor(Math.random() * sample.length)];

        for(let i = 0; i < data.length+1; i++){
            if(i === 0){

            }if(i % x === 0){
                sample.concat(x);
            }
        }
        return sample;
    }

// Systematic Sampling

// Confidence Interval for a Sample
    static sampleCI(data){
        let pos = 0;
        let neg = 0;
        let result = [];
        let mean = this.mean(data);
        let sdPop = this.standardDeviation(data);
        let zscores = this.zscore(data);

        for(let i = 0; i < zscores.length+1; i++){
            pos = mean + i * sdPop/Math.sqrt(data.length);
            neg = mean - i * sdPop/Math.sqrt(data.length);
            result.concat([pos,neg]);
        }
        return result;
    }

// Margin of Error
    static marginOfError(data){
        let sdPop = this.standardDeviation(data);
        let scores = this.zscore(data);
        let result = [];

        for(let i = 0; i < scores.length+1; i++){
            let moeNum = i * sdPop / Math.sqrt(data.length);
            result.concat(moeNum);
        }
        return result;
    }

// How to find a Confidence Interval function
    static confidenceInterval(data) {
        let x = statistics.mean() + statistics.zscore() * (statistics.standardDeviation() / Math.sqrt(data.length))
        let y = statistics.mean() - statistics.zscore() * (statistics.standardDeviation() / Math.sqrt(data.length))

        document.writeln(y + " is the lower confidence interval and " +
            x + " is the upper confidence interval");
    }

// Cochran's Sample Size Formula
    static cochSample(data){
        let moe = this.marginOfError(data);
        let scores = this.zscore(data);
        let result = [];

        for(let i = 0; i < data.length+1; i++){
            result.concat(scores);
        }
    }

// How to Find a Sample Size Given a Confidence Interval and Width
// (unknown population standard deviation)

// How to Find a Sample Size Given a Confidence Interval and Width
// (known population standard deviation)

/** Random Generator Function **/

// Generate a random number without a seed between a range of two numbers - Both Integer and Decimal
    static randNoSeed(){

    }

// Generate a random number with a seed between a range of two numbers - Both Integer and Decimal
    static randSeed(){

    }

// Generate a list of N random numbers with a seed and between a range of numbers - Both Integer and Decimal
    static randNSeed(){

    }


// Select a random item from a list

// Set a seed and randomly.select the same value from a list

// Select N number of items from a list without a seed

// Select N number of items from a list with a seed
}

module.exports = statistics;