
deleteUpdateCustomer.onshow=function(){
hamMenu2.clear()
  hamMenu2.addItem("See Customers")
  hamMenu2.addItem("Edit Customers")
  hamMenu2.addItem("Add Customers")
  drpComp.clear()
  let query = "SELECT name FROM customer" 
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
    if (req1.status == 200) { //transit worked.
            compTable = JSON.parse(req1.responseText)
            for (i = 0; i < compTable.length; i++)
            drpComp.addItem(compTable[i])
}
}



btnSubmit.onclick=function(s){
let nameDel = drpComp.selection

if (typeof(s) == "object") {
} else {
  
  
  //radio options
if (rdoComp.value == 0) {  //option 1 of radio

 let match = false
    for (i = 0; i <= compTable.length - 1; i++) {
        if (drpComp.selection == compTable[i][0])
            match = true
    }
    if (match == false) 
       NSB.MsgBox("Not in the database.")
    else if (match == true) {
      let query = "DELETE FROM customer WHERE name = " + '"' + nameDel + '"'
 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
      if (req1.status == 200) { //transit worked
        if (req1.responseText == 500) {    // means the insert succeeded
            NSB.MsgBox("You have successfully deleted the customer named " + nameDel)
            

 let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
    if (req1.status == 200) { //transit worked.
            totalNames = JSON.parse(req1.responseText)
                    if (totalNames == 0) {
} else {
drpComp.clear()
  for (i = 0; i <= compTable.length - 1; i++) {
    drpComp.addItem(compTable[i][0]) 
    }
    
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
    
    
     } else {
            NSB.MsgBox("There was a problem deleting " + nameDel + " from the database.")
            }
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } // count if








} else { //option 2
   
let newName = inptName.value

   var query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + nameDel + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
if (req1.status == 200) {
      if (req1.responseText == 500) {
      NSB.MsgBox("The name has been updated.")
  
  
  //updates current list
       let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=zon68891&pass=Ryan#19976633&database=zon68891&query=" + query)
    if (req1.status == 200) { //transit worked.
            totalNames = JSON.parse(req1.responseText)
                    if (compTable == 0) {
} else {
  drpComp.clear()
  for (i = 0; i <= compTable.length - 1; i++) {
    drpComp.addItem(compTable[i][0]) 
    }
  
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
      
      
      
    } else {
      
      }

} else {
  }
  }
  }
}


hamMenu2.onclick=function(s){
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
