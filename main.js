var myarray = []
var name
var phone
var street
var str = ""
var check = window.confirm("See something say something \n turn your neighbors in here?");
var namesheet
var pho
var stre
while (check == true) {
	 name = prompt("Name" , 'Billy Joe')
	 phone = prompt("Phone Number" , '303-303-3333')
	 street = prompt("Address" , 'Drewery Lane')
	
		myobject = {
		names: name, 
		phones: phone,
		streets: street, 
	}

	myarray.push(myobject);
		
	check = window.confirm("Do you have more victims?");

}
for (var i = 0; i < myarray.length; i++) {

namesheet = myarray[i].names;
pho = myarray[i].phones;
stre = myarray [i].streets;

str += "victim \n" + "\n" + namesheet + pho + stre;
}

alert(str);