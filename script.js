function createNewInput() {
    // Get the selected option value
    var selectedOption = document.getElementById("Process Scheduling algorithms").value;

    // Clear the previous dynamic input (if any)
    var dynamicInputContainer = document.getElementById("dynamicInputContainer");
    dynamicInputContainer.innerHTML = '';

    // Check if the selected option requires a dynamic input
    if (selectedOption === "Non Preemptive Priority" || selectedOption === "Preemptive Priority" || selectedOption == "Round Robin with Quantum 3") {


        var newLabel = document.createElement("label");
        newLabel.textContent = "Priority";



        // Create a new input element
        var newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "dynamicInput";
        newInput.placeholder = "Enter value for " + selectedOption;

        // Append the new input to the container
        dynamicInputContainer.appendChild(newLabel);
        dynamicInputContainer.appendChild(newInput);
        
    }
}


var groupCount = 1;
var previousBoxendNumber;

function processButton(){
 

      // Create a new box element
      var newBox = document.createElement("div");
      newBox.className = "box";
      newBox.textContent = "P" + groupCount;

      // Create a new box number element
      var boxNumber = document.createElement("div");
      boxNumber.className = "box-number";
      boxNumber.textContent = groupCount;

      // Remove the previous boxendNumber if exists
      if (previousBoxendNumber && previousBoxendNumber.parentNode) {
          previousBoxendNumber.parentNode.removeChild(previousBoxendNumber);
      }

      // Create a new boxendNumber element
      var boxendNumber = document.createElement("div");
      boxendNumber.className = "box_endnumber";
      boxendNumber.textContent = groupCount + 1;

      // Set the current boxendNumber as the previous for the next iteration
      previousBoxendNumber = boxendNumber;

      // Increment the groupCount for the next group
      groupCount++;

      // Create a new container for the box and its number
      var boxContainer = document.createElement("div");
      boxContainer.appendChild(newBox);
      boxContainer.appendChild(boxNumber);
      boxContainer.appendChild(boxendNumber);

      // Append the new container to the main container
      document.getElementById("container2").appendChild(boxContainer);
  }