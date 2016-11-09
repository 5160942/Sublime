function Manager() {
	Employee.call(this,name);
	this.report=[];
}
//Manager.prototype = new Employee();
Manager.prototype = Object.create(Employee.prototype);

function IndividualContributor(name) {
Employee.call(this,name);
this.active_projects = [];
}
IndividualContributor.prototype = new Employee();

function TeamLead(name) {
Manager.call(this,name);
this.dept = "Software";
this.salary = 100000;
this.teamLead = "teamLead"
}
TeamLead.prototype = new Manager();

function Engineer(name) {
TeamLead.call(this,name);
this.desktop_id = "8822" ;
this.salary = 80000;
}
Engineer.prototype = new TeamLead();


var karen = new Manager("karen");
karen.name = 'karen';
karen.report = [1,2,3];

var jason = new TeamLead("jason");
var Chris = new Engineer("Chris");


var EmployeeList = [];
EmployeeList.push(karen);
EmployeeList.push(jason);
EmployeeList.push(Chris);