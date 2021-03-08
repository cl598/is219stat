const statistics = require("./statistics");

class calculator extends statistics{

    static randomNumber = statistics.randomNumber();
    static randomSelected = statistics.randomSelect();

    static randomSubset = [];
    static data = [];

    static getResults(){
        return this.result;
    }

    static setResults(){
        this.result = "result";
    }
}

document.writeln()
module.exports = calculator;