//Before we begin..im just going to brefily mention that we are using bootstrap in this example so if you take a look at the html its all bootstrap classes..nothing to complicated....so as were jjust focusing on the javascript lets head over there &&&& Firstly we are going to need to make an empty array which is going to house our superhero and a variable of index which we will use abit later
const superhero = [];
let index;

// So now we have those lets create our first function which is simply going to add a superhero to our list and then well create a function which will display that superhero we created in the UI of 
const addSuperhero = () => {
    
    let newHero = {
      name: document.getElementById("hero-name").value,
      power: document.getElementById("hero-power").value,
      powerRating: document.getElementById("hero-power-rating").value
    }

    superhero.push(newHero)
    displaySuperheroes()

}

const displaySuperheroes = () => {

    document.getElementById("form-list-superhero-body").innerHTML = "";

    for (i = 0; i < superhero.length;i++) {

      let tableRow = document.createElement("tr");

      for(a in superhero[i]) {

        let dataCell = document.createElement("td");

        dataCell.innerHTML = superhero[i][a];

        tableRow.appendChild(dataCell);

      }

      let actionDataCell = document.createElement("td");

      // Edit Button
      let editBtn = document.createElement("button");
      editBtn.innerHTML="Edit";
      editBtn.setAttribute("class" , "btn btn-sm btn-primary");
      editBtn.setAttribute("onclick" , "editSuperhero(" + i + ")");

      // Delete Button
      let deletebtn = document.createElement("button");
      deletebtn.innerHTML = "Delete";
      deletebtn.setAttribute("class" , "btn btn-sm btn-danger");
      deletebtn.setAttribute("onclick" , "deleteSuperhero(" + i + ")");

      actionDataCell.appendChild(editBtn)
      actionDataCell.appendChild(deletebtn)
      tableRow.appendChild(actionDataCell)
      document.getElementById("form-list-superhero-body").appendChild(tableRow)
      }

      document.getElementById("hero-name").value = ""; 
      document.getElementById("hero-power").value = "";
      document.getElementById("hero-power-rating").value = "";
  }

  //Editing Superhero
const editSuperhero = (i) => {
    console.log(superhero[i])

    index = i;

    // Update Button
    let updatebtn = document.createElement("button");
    updatebtn.innerHTML= "Update";
    updatebtn.setAttribute("class", "btn btn-sm btn-success");
    updatebtn.setAttribute("onclick","updateSuperhero()");

    // Selectors
    document.getElementById("saveupdate").innerHTML="";
    document.getElementById("saveupdate").appendChild(updatebtn);
    document.getElementById("hero-name").value = superhero[i].name;
    document.getElementById("hero-power").value = superhero[i].power;
    document.getElementById("hero-power-rating").value = superhero[i].powerRating;
  }

  //Updating Superhero
const updateSuperhero = () => {

    let updatedSuperhero = {
      name: document.getElementById("hero-name").value,
      power: document.getElementById("hero-power").value,
      powerRating: document.getElementById("hero-power-rating").value
    }

    superhero[index] = updatedSuperhero; 

    let createButton = document.createElement("button");
    createButton.innerHTML="Save";
    createButton.setAttribute("onclick","addSuperhero()");
    createButton.setAttribute("class","btn btn-sm btn-success");
    document.getElementById("saveupdate").innerHTML = "";
    
    document.getElementById("saveupdate").appendChild(createButton);
    
    displaySuperheroes()
}

  //deleting client
const deleteSuperhero = (i) => {
  superhero.splice(i,1)
  displaySuperheroes()
}