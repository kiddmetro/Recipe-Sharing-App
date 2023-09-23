class Recipe {
    constructor(imageSrc, title, description, chefImageSrc, chefName, chefTitle, instructions, ingredients) {
        this.imageSrc = imageSrc;
        this.title = title;
        this.description = description;
        this.chefImageSrc = chefImageSrc;
        this.chefName = chefName;
        this.chefTitle = chefTitle;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }

    createRecipeHTML() {
        return `
            <div class="food-recipe-container">
                <img src="${this.imageSrc}" class="recipe-image" alt="recipe image">
                <div class="recipe-info">
                    <h5 class="recipe-title text-primary fw-bold">${this.title}</h5>
                    <p class="recipe-description">${this.description}</p>

                </div>
                <div class="chef-info">
                    <img src="${this.chefImageSrc}" alt="Chef Image">
                    <div class="chef-profile">
                        <p class="chef-name fw-bold">${this.chefName}</p>
                        <p class="chef-title">${this.chefTitle}</p>
                        <p class="chef-in" ><strong>Ingredients: </strong>${this.ingredients}</p>
                        <p class="chef-in" ><strong>Instructions: </strong>${this.instructions}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

const recipeMenu = document.getElementById('recipeMenu');

// Create an array to store manually added recipes
const manualRecipes = [];

// Function to add a recipe to the front end
function addRecipe(recipe) {
    // Create a new div for the recipe
    const recipeDiv = document.createElement('div');
    recipeDiv.innerHTML = recipe.createRecipeHTML();

    // Append the recipe div to the recipe menu container
    recipeMenu.appendChild(recipeDiv);
}

// Add recipe
const recipe1 = new Recipe(
    'images/food/food2.jpeg',
    'Chinese Noodles',
    'This is a chinese noodles blended with great noodles.',
    'images/chefs/chef1.jpeg',
    'Wang Shou',
    'Star Chef',
    'Just add ingredients cook for Ten mins.',
    'Noodles, Vegetables, Chicken'
);

const recipe2 = new Recipe(
    'images/food/food1.jpeg',
    'Chicken',
    'Spicy chicken made for your delicious taste and very tasty.',
    'images/chefs/chef1.jpeg',
    'Gabby April',
    'Junior Chef',
    'Fry chicken with ingredients for Fifteen mins.',
    'Chicken, Sauce'
);

const recipe3 = new Recipe(
    'images/food/food3.jpeg',
    'Pizza',
    'Pizza of many flavours for you to leave planet earth',
    'images/chefs/chef1.jpeg',
    'Apoll Rud',
    'Star Chef',
    'Put already made pizza flour in the oven,leave for Twenty mins.',
    'Flour, Pepper, Vegetable, Pepper sauce'
);
const recipe4 = new Recipe(
    'images/food/food4.jpeg',
    'Eba and Soup',
    'Vey Delicious Eba made for your daily enjoyment.',
    'images/chefs/chef1.jpeg',
    'Kidd Metro',
    'The Best Chef in Za world',
    'Pound Yam very well make sure there is enough water.',
    'Yam, Onions, Pepper, Tomatoes'
);
addRecipe(recipe1);
addRecipe(recipe2);
addRecipe(recipe3);
addRecipe(recipe4);

// Function to display a success message
function displaySuccessMessage() {
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Recipe added successfully!';
    successMessage.style.color = 'green'; 
    const recipeForm = document.getElementById('foodForm'); 
    recipeForm.insertAdjacentElement('afterend', successMessage);
    setTimeout(() => {
        successMessage.style.display = 'none'; 
    }, 3000);
}


const foodForm = document.getElementById('foodForm');

foodForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let errorMessage = null; // Initialize error message

    try {
        // Get input values from the form
        const name = document.getElementById('name').value;
        const chefTitle = document.getElementById('chef-title').value;
        const recipeName = document.getElementById('recipe-name').value;
        const description = document.getElementById('description').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Get the uploaded image file
        const imageInput = document.getElementById('food-image');
        const imageFile = imageInput.files[0]; 

        // Check if an image is selected
        if (!imageFile) {
            throw new Error('Select an image.'); // Display "Select an image" error message
        }

        // Validation functions
        function validateName(name) {
            // Validate name (only alphabets, no numbers)
            if (!/^[A-Za-z\s]+$/.test(name)) {
                throw new Error('Your Name should contain only alphabets.');
            }
        }

        function validateRecipeName(recipeName) {
            // Validate recipe name (only alphabets, no numbers, max 10 characters)
            if (!/^[A-Za-z\s]{1,20}$/.test(recipeName)) {
                throw new Error('Recipe name should contain only alphabets and be max 20 characters.');
            }
        }

        function validateDescription(description) {
            // Validate description (only alphabets, no numbers, max 53 characters)
            if (!/^[A-Za-z\s]{1,53}$/.test(description)) {
                throw new Error('Description  should contain only alphabets and be max 53 characters.');
            }
        }


        function validateIngredients(ingredients) {
            // Validate ingredients (only alphabets, no numbers, max 10 characters)
            if (!/^[A-Za-z\s]{1,53}$/.test(ingredients)) {
                throw new Error('Ingredients should contain only alphabets and be max 53 characters.');
            }
        }
        
        function validateInstructions(instructions) {
            // Validate instructions (only alphabets, no numbers, max 10 characters)
            if (!/^[A-Za-z\s]{1,60}$/.test(instructions)) {
                throw new Error('Instructions should contain only alphabets and be max 60 characters.');
            }
        }
        

        // Validate input values
        validateName(name);
        validateRecipeName(recipeName);
        validateDescription(description);
        validateIngredients(ingredients);
        validateInstructions(instructions);

        // Create a new FileReader to read the image file
        const reader = new FileReader();

        // Define a function to handle the image file read
        reader.onload = function () {
            // Get the data URL of the uploaded image
            const imageSrc = reader.result;

            // Create a new recipe instance based on the chef title and uploaded image
            let newRecipe;
            switch (chefTitle) {
                case 'pricing':
                    newRecipe = new Recipe(
                        imageSrc,
                        recipeName,
                        description,
                        'images/chefs/chef1.jpeg',
                        name,
                        'Star Chef',
                        instructions,
                        ingredients
                    );
                    break;
                case 'content':
                    newRecipe = new Recipe(
                        imageSrc,
                        recipeName,
                        description,
                        'images/chefs/chef1.jpeg',
                        name,
                        'Senior Chef',
                        instructions,
                        ingredients
                    );
                    break;
                case 'other':
                    newRecipe = new Recipe(
                        imageSrc,
                        recipeName,
                        description,
                        'images/chefs/chef1.jpeg',
                        name,
                        'Junior Chef',
                        instructions,
                        ingredients
                    );
                    break;
                default:
                    newRecipe = new Recipe(
                        imageSrc,
                        recipeName,
                        description,
                        'images/chefs/chef1.jpeg',
                        name,
                        'Unknown',
                        instructions,
                        ingredients
                    );
            }

            // Add the new recipe to the front end and the manualRecipes array
            addRecipe(newRecipe);
            manualRecipes.push(newRecipe);

            
            // Display success message
            displaySuccessMessage();

            // Reset the form
            foodForm.reset();
        };

        // Read the uploaded image file as a data URL
        reader.readAsDataURL(imageFile);
    } catch (error) {
        // Handle validation errors
        errorMessage = error.message;
        alert(errorMessage);
    } finally {
        // Clear any error messages
        if (errorMessage) {
            // Display the error message on the page (e.g., in a specific div)
            const errorDisplay = document.getElementById('error-display');
            errorDisplay.textContent = errorMessage;
        } else {
            // Clear the error message display
            const errorDisplay = document.getElementById('error-display');
            errorDisplay.textContent = '';
        }
    }
});

