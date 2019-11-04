
seeCustomers.onshow=function(){
hamMenu1.clear()
  hamMenu1.addItem("See Customers")
  hamMenu1.addItem("Edit Customers")
  hamMenu1.addItem("Add Customers")
drpCompanies.clear()
  let query = "SELECT name FROM customer" 
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
    if (req1.status == 200) { //transit worked.
            nameTable = JSON.parse(req1.responseText)
            for (i = 0; i < nameTable.length; i++)
            drpCompanies.addItem(nameTable[i])
            
    }
}



drpCompanies.onclick=function(s){
  if (typeof(s) == "object")
return
else {
  drpCompanies.value = s
let query1 = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + drpCompanies.selection + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query1)
    if (req1.status = 200) {
        results = JSON.parse(req1.responseText)
          txtResults.value = results + "\n"
            }
  }
}


hamMenu1.onclick=function(s){
     if (typeof(s) == "object") {
       return
    }
    switch(s) {
      case "See Customers":
          ChangeForm(seeCustomers)
          break;
       case "Edit Customers":
          ChangeForm(deleteUpdateCustomer)
          break;
      case "Add Customers":
          ChangeForm(addCustomer)
          break;
     }
}
