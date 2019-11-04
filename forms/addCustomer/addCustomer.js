var compResults = []

addCustomer.onshow=function(){
hamMenu3.clear()
  hamMenu3.addItem("See Customers")
  hamMenu3.addItem("Edit Customers")
  hamMenu3.addItem("Add Customers")
  let query = "SELECT  name  FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
if (req1.status = 200) {
  compResults = JSON.parse(req1.responseText)
  
  if (compResults == 0) {
} else {

  for (i = 0; i <= compResults.length - 1; i++) {
    lstNames.addItem(compResults[i][0])
    }
    }
    }
}



btnAdd.onclick=function(){
 let name = inpName.value
 let street = inpStreet.value
 let zipcode = inpZipcode.value
 let city = inpCity.value
 let state = inpState.value

let query1 = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('"+name+"', '"+street+"', '"+city+"','"+ state+"'," +zipcode+")"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query1)
  
  if (req2.status == 200) {
  
  if (req2.responseText == 500) {
  
NSB.MsgBox("You have successfully added the customer")
 let query4 = "SELECT name FROM customer"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query4)
 
 if (req2.status == 200) {
 lstNames.clear()
 compResults = JSON.parse(req2.responseText)
 if (compResults == 0) {
} else {
  for (i = 0; i <= compResults.length - 1; i++) {
    lstNames.addItem(compResults[i][0])
    }
  }
}
}
}
}


hamMenu3.onclick=function(s){
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
