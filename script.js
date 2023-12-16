function createNewInput() {
    // Get the selected option value
    var selectedOption = document.getElementById("Process Scheduling algorithms").value;

    // Clear the previous dynamic input (if any)
    var dynamicInputContainer = document.getElementById("dynamicInputContainer");
    dynamicInputContainer.innerHTML = '';

    // Check if the selected option requires a dynamic input
    if (selectedOption === "Non Preemptive Priority" || selectedOption === "Preemptive Priority") {


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
