# Website to Add FlashCards

## Tech Stack
```
Frontend: Reactjs|CSS
Backend: Nodejs|Express|Mysql
```

## Features
* we can add new words and their vocabulary for quick access. 
It also has option to add the picture for better visualization

* We can edit the FlashCards with new meaning and even edit it with more meaningful picture for a given vocabulary


# How to install and run the website 

## Installation
>The repositorty can be cloned from the terminal using git clone  
>A Codespace can be created on the github for the repository

## Running the website
* ### FrontEnd
  >install the packages using  `npm install `

  >To run the app in web browser run the following command:
  > `npm start`

* ### BackEnd

    >backend is in the server folder of the repository  
    >To run the server run `cd server` then `node server.js`


    MySQl
    >The server is connected to mysql client and changes are made on the table:
    ```
       user:root
       database:cards
       table:flashcard
    ```

# User Interface
>The site already contains 3 dummy flashcards for easier understanding   
>when clicked on a card changes can be made to that card by clicking on **Edit** button  

>A new Flashcard Can be added to the website by Clicking **Add** button at the bottom of the page 
 
>if the server is on then the data will be stored in the database and on reloading the data wont be lost
