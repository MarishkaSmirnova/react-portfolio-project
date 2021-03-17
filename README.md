This repository is a React application that uses the [React Router library](https://reactrouter.com) to showcase multiple projects built with React.js .
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installing and Launching
* npm install
* npm start

### Running the Tests
* npm test

### Building
* npm run build

## Component Hierarchy

- Projects
    -  BooksData
        - BooksData.js
    - CarList
        - Form
            - Form.js
        - Data
            - CarList.js
            - index.js
    - CountriesList
        - CountriesList.js
    - Came
        - Game.js
        - PlayerChoice.js
        - Task.js
        - constants.js
        - getWinner.js
    - ShoppingList
        - ShoppingList.js
        - Task.js
    - StopWatch
    - UserList
        - Profile
            - Profile.js
            - Tasks.js
        - Login.js
- Components 
    - AboutPage
        - About.js
    - TaskButton
        - TaskButton.js
    - Images
    - Home.js

### Projects description

| Project Name |	Description |
| --- | --- |
| `BooksData(Library)` |	Book search App that uses [Google Books Search API](https://www.googleapis.com/books/v1/volumes?q=) for books search. Accessing data using [Axios](https://www.npmjs.com/package/axios). Displaying input, search button and a list of books with picture, name and description. Displaying “Loading” message while the data is loading and “No books found” message if there’s no books found. |
| `CarList(Cars)` |	Car list component has multiple car items specified inputs, that allows users to add new items to the end of the Car list. |
| `CountriesList(Countries)` |	This component displays an input and search button. Upon filling the input with country name and pushing ‘Search’ button, it’s requesting with [Axios](https://www.npmjs.com/package/axios) library to get from [Countries API](https://restcountries.eu/rest/v2/all) a JSON format list with countries capital and continent. |
| `Game` |	This component is Rock Paper Scissors Game, where you click on one of 3 pictures and the App randomly picks one of 3 choices as well. It  displays the score of player and computer and their choices. Once somebody reaches 5 points, the App informs who is the winner. The game can be reseted by clicking the “Reset” button. |
| `Shopping List` | 	This is a simple App that creates an ordered list of products to buy. You can add products in a list by filling the input and clicking “Add” button. And there’s also a “Delete” button near each added item. |
| `StopWatch(Timer)` |	It’s a “mm:ss” format Timer App that starts automatically when it loads. It has “Pause” and “Reset” buttons. After the reset the timer shows 0:0 ,“Pause” button got relabeled to “Start” button and the “Reset” button is disabled. |
| `UserList(Users)` |	First page of this App is Login page where you need to enter any Name and Password and push “Log In” button. App uses [Randon User API](randomuser.me) and displace a table with users information, such as photo, name, gender favicon, flag of the country he/she was born, email and “delete” button.|

### How it looks 

![React-presentation](https://user-images.githubusercontent.com/44715508/111551759-2a293d80-873e-11eb-9ae1-54ec775203bd.gif)


[LINK](https://msmirnova.ca/projects/reactCourse/) to view an App online 
