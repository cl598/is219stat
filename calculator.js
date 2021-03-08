const statistics = require("./statistics");

class calculator extends statistics{

    static randomNumber = statistics.randomNumber();
    static randomSelected = statistics.randomSelect();
    static randomSubset = [];
}

class calculations{

    static getResults(){
        return this.result;
    }
}
document.writeln(calculations.getResults());
module.exports = calculator;
module.exports = calculations;