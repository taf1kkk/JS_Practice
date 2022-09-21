function result() {
    var rootA = Number(document.querySelector("#inputA").value);
    var rootB = Number(document.querySelector("#inputB").value);
    var rootC = Number(document.querySelector("#inputC").value);
    let D = 0;

    if (rootA == 0) {
        rootA = 1;
        return D = Math.pow(rootB, 2) - (4 * rootA * rootC);
    }
    else {
        return D = Math.pow(rootB, 2) - (4 * rootA * rootC);
    }

}

function check() {
    var rootA = Number(document.querySelector("#inputA").value);
    var rootB = Number(document.querySelector("#inputB").value);
    if(rootA == 0){
        rootA = 1;
    }

    let Value1 = 0;
    let Value2 = 0;
    if (result() < 0) {
        document.querySelector("#firstR").innerHTML = "Корней нет";

    }
    else if (result() === 0) {
        Value1 = (-rootB + Math.sqrt(result())) / (2 * rootA);
        let x1 = Math.round(Value1)
        document.querySelector("#firstR").innerHTML = "X1 = " + x1;
    }
    else if (result() > 0) {
        Value1 = (-rootB - Math.sqrt(result())) / 2 * rootA;
        Value2 = (-rootB + Math.sqrt(result())) / 2 * rootA;
        let x1 = Math.round(Value1)
        let x2 = Math.round(Value2)
        document.querySelector("#firstR").innerHTML = "X1 = " + x1;
        document.querySelector("#secondR").innerHTML = "X2 = " + x2;
    }
}