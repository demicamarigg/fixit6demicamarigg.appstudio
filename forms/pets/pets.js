let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'] 
alert(petNames)

let withMarmaduke = [petNames, 'Marmaduke']
alert(withMarmaduke)

let first = petNames.shift()
alert(petNames)

let addPet = petNames.unshift('Nancy')
alert(petNames)

alert("The action taken was: add Nancy")

alert("The remaining array data are " + petNames)