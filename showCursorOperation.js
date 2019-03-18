
var myEmployee = db.Employee.find( { Employeeid : { $gt:8 }});

while(myEmployee.hasNext())
{
	print(tojson(myEmployee.next()));
}