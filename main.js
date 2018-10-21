var stepNum = 3;
var res = '';
var partRowCode = 'switch ('+ stepNum +') {';
var endRowCode= '}';

for (var i = 1; i <= stepNum; i++) {
        res += ('case ' + i + ': break;');
    }

var switchCode = partRowCode + res +endRowCode;

console.time('TimeSwitch');
var forSwitch = new Function ('stepNum', switchCode);
forSwitch(stepNum);
console.timeEnd('TimeSwitch');

// block  if
var ifCode = '';

for (var k = 1; k <= stepNum; k++){
    if (k<stepNum) {
        ifCode += ('if (' + k + ') {;} else ');
    } else if (k === stepNum) {
        ifCode += ('if (' + k + ') {;} ');
    }
}
console.time('TimeIf');
var forIf = new Function ('stepNum', ifCode);
forIf(stepNum);
console.timeEnd('TimeIf');


