# Recipe-Sharing-Platform
The simple recipe sharing platform is a web application where users can view and share recipes. It doesn't involve user accounts, registration, or server-side storage. All data will be stored locally in the user's browser using JavaScript classes.

## Key Features:
* Recipe Listing: Display a list of recipes, including their names and brief descriptions.
* Recipe Details: Allow users to view its details, including ingredients and instructions.
* Recipe Submission: Provide a form for users to submit new recipes, including a name, ingredients, and instructions.

## Implementation:
* Front-End (Client-Side):
Create a user interface with HTML and SCSS to display recipes and forms.
Use JavaScript to handle user interactions, display recipe details, and manage recipe data.
* JavaScript Classes:
Create a JavaScript class to represent a recipe. Each recipe object should have properties for its name, ingredients, and instructions. Use an array to store and manage the list of recipes.
* Display:
Display a list of recipes on the web page, including their names and brief descriptions.
* Forms:
Implement a form that allows users to submit new recipes with fields for recipe name, ingredients, instructions e.t.c.
* User Interactions:
Use event listeners to handle user interactions, such as submitting a new recipe.
Error Handling:
* Use try-catch-finally statements to handle errors, such as invalid input in the recipe submission form.

## Install Bootstrap
* Install bootstrap to the project directory

## Simple User Flow:
User visits the website.
User sees a list of available recipes on the homepage(which is only 4).
User can submit a new recipe using a form on the website.
The new recipe is added to the list of available recipes.


# Step by Step Creating a Mini Recipe Sharing Platform with JavaScript

## Introduction:
We'll go over how I built this simple recipe platform by developing a recipe submission form in JavaScript. In this project, we used classes to represent recipes, the switch statement to provide more dynamic content, and try-catch-finally statements to implement effective form validation.

## Creating a Recipe Class
First and foremost, I chose the name recipe for a javascript class since it is simple to understand and remember. This class is in charge of encapsulating the attributes and methods associated with a recipe. It has properties for the picture source, the recipe title and description, the chef image source, the chef name and title, and some instructions. Created the createRecipeHTML method. This method returns an HTML template string that will be used to generate the HTML version of a recipe. The HTML representation here is simply the food container at the front end, which we can all see where the images, their names, and titles are all displayed.


## Displaying Recipes Dynamically
To display recipes dynamically, we create an array of Recipe instances and add them to the frontend. This is achieved using the addRecipe function, which creates a new div element for each recipe and appends it to the recipe menu container.

## Handling User Interaction with Switch Statements
To handle user interactions, dynamically setting chef titles, we utilize switch statements. For instance, when a user selects a chef title from a dropdown, the switch statement updates the chef's title accordingly.

## Implementing Form Validation
Form validation is crucial for ensuring that the data submitted through the form meets specific criteria. In our example, we incorporate try-catch-finally statements to validate various form fields.I utilized the try-catch-finally expression to implement form validation. I made certain that the statement ran through all of the input to ensure that the user only entered what was required. The try method checks form fields, catch handles validation errors, and finally clears the error.

## Detailed Validation Rules

* Name Validation:I ensure that the "Name" input contains only Alphabets and no numeric. This is done within the validateName function.
* Recipe Name:I validate that the recipe name does not exceed 20 characters and consists of only alphabets.
* Description: The description of the food should not exceed 53 characters.
* Ingredients: The ingredients should not exceed 53 characters.
* Instructions: The instructions for preparing the food should not exceed 60 characters.

## Ensuring Image Selection
In the try-catch-finally block,i also ensure that an image is selected before submitting the form. This prevents submission when no image is provided.

# Conclusion
Creating a recipe sharing platform involves a combination of JavaScript features such as classes, switch statements, and try-catch-finally blocks. With this my project, you can build a robust form that not only collects recipe data but also ensures that the data is valid and displays dynamic content based on user interactions.


