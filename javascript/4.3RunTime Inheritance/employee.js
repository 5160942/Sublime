function Employee() {
this.dept = 'None';
this.salary = 0.00;
}
Employee.prototype.name = '';
function Manager() {
this.reports = [];
}
Manager.prototype = new Employee();
var sandy = new Manager();
var karen = new Manager();
Employee.prototype.name = "Junk";
console.log(sandy.name);
console.log(karen.name);