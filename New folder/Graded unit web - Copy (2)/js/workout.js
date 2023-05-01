// Get a reference to the form and its input elements
const form = document.querySelector('form');
const durationInput = document.querySelector('#duration');
const caloriesInput = document.querySelector('#calories');
const weightInput = document.querySelector('#weight');
const distanceInput = document.querySelector('#distance');

// Listen for form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const durationValue = durationInput.value;
  const caloriesValue = caloriesInput.value;
  const weightValue = weightInput.value;
  const distanceValue = distanceInput.value;

  // Create an object to hold the workout stats
  const workoutStats = {
    duration: durationValue,
    calories: caloriesValue,
    weight: weightValue,
    distance: distanceValue
  };

  // Store the workout stats in localStorage
  localStorage.setItem('workoutStats', JSON.stringify(workoutStats));

  // Reset the form
  form.reset();
});

//getting the values from local storage 

const workoutStatsJSON = localStorage.getItem('workoutStats');
const workoutStats = JSON.parse(workoutStatsJSON);

// Do something with the workout stats
console.log(`Duration: ${workoutStats.duration}`);
console.log(`Calories: ${workoutStats.calories}`);
console.log(`Weight: ${workoutStats.weight}`);
console.log(`Distance: ${workoutStats.distance}`);

// Get a reference to the element where we'll display the previous workouts
const previousWorkoutsList = document.querySelector('#previousWorkoutsList');

// Function to display the previous workouts
function displayPreviousWorkouts() {
  // Clear out the previous workouts list
  previousWorkoutsList.innerHTML = '';

  // Get the workout stats from localStorage
  const workoutStatsJSON = localStorage.getItem('workoutStats');

  // If there are no previous workouts, display a message
  if (!workoutStatsJSON) {
    previousWorkoutsList.innerHTML = '<li>No previous workouts.</li>';
    return;
  }

  // Parse the JSON string to get the workout stats object
  const workoutStats = JSON.parse(workoutStatsJSON);

  // Create an array of the workout stat properties
  const workoutProperties = ['duration', 'calories', 'weight', 'distance'];

  // Loop through the workout stat properties and create list items for each one
  workoutProperties.forEach(function(property) {
    const listItem = document.createElement('li');
    listItem.textContent = `${property}: ${workoutStats[property]}`;
    previousWorkoutsList.appendChild(listItem);
  });
}

// Call the displayPreviousWorkouts function to initially display any previous workouts
displayPreviousWorkouts();