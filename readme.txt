Performance Best Practices:
---------------------------

About The App:
--------------
The Spacex Web App is a Fully Responaive mobile first web app which
shows results of latest Spacex Launch Programs to it's users on the 
basis of "LAUNCH YEARS", "SUCCESSFUL LAUNCHES", "SUCCESSFUL LANDING".

Technologies Used:
------------------
The Major Markup and Programing Languages which are used to create
this app are: 
1: HTML 5
2: CSS 3
3: BOOTSTRAP 3
4: Jquery

Responsiveness:
---------------
The app is fully responsive, On Mobile screen Only 1 coloumn will be
there in a row. On Tablets Only 2 Columns will be there in a row, and 
On Desktop Screens, there will be 4 columns in a row and the app will 
be scaled after with grater then 1400px and whole layout will be visible
in the center.

Bootstarp and media query is used to make the web app responsive.

Setup:
------
The setup of the application followed the below points:
1: Creation of index.html file for markup of app.
2: Creation and connection of style.css and mobile.css file for styling the app as per the design requirements.
3: Creation of spacex.js file for all the frontend and Data functionality.

[index.html] => This file consists of all the markup of the web app and 
the markup is written keeping in mind about the SEO best practices and accessibility best practices.
This file has all the important meta tags, keywords and proper title for the app seo.

Accessibility:
--------------
The web app is accessible with NVDA screen reader (only able to test on this SR). 
Tested on Google Crome and FireFox With NVDA screen reader and on mobile browers, Tested with talkback.

No aXe issue found while running it for testing the accessibility.
Focus indicators are given on interactive elements.

Focus in set on non interective elements by using tabindex values.

User Experience:
----------------
Initaially a loder will be shown to the user so that he can able to understand that
currently results are loading.

As soon as results appers, One popup message appers on the top of the page with number of
results found. 

For screen reader users, focus immediately moves to the appeared message on the top of the
page and SR announces the results.

Hence this way Screen Reader Users able to know how many results are appearing.


====================================================================================================================================================================
The web app is full responsive, accessible and SEO friendly.
