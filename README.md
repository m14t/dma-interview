# Disney Interview

This repository is my response to an interview for a frontend position at Disney.

## Disclaimer

The majority of my experiences (CTO at [GoFormative.com](https://goformative.com) (a 3 person (inclusive) dev team), and Directory of Technology at [UseAllFive](http://www.useallfive.com/) (several on going projects at a time, each of 2-3 devs, totally ~8 developers)) over the last 5 years have been to oversee all technology decisions, while also directly contributing on the most important pieces. I also usually owned the backend responsibilities for these projects.

As such, I feel that my architecture, organization, and vanilla JavaScript skills are very strong, but the time needed to crank out a rapid front-end-heavy proto-type is currently higher than it could be.

Most recently, at GoFormative, we were using Angular 1.4, which would not be my choice for a new project and so, decided to use Angular 2 for this project. My first hands on exposure to this was only yesterday, but given that, I feel that this is a reasonable start, and shows the speed at which I am able to pick up a completely unfamiliar technology.

## Installation
To view this demo, simply run:
```bash
npm install
npm start
```

## Outstanding Items
* [ ] Concatenate and Minify JS / CSS files
    * Currently there are many files listed in the `index.html` file that could be combined into a unified `vendors` JS file.  Then all application code should be concatenated into a separate file, with a content based filename (for easy cache busting when new versions are deployed). Using 2 files would allow for the larger `vendor` libraries to be cached across releases (assuming no vendor additions/changes).
* [ ] Create dev/prod build tasks
    * Currently some of the vendor libraries being used are the `dev` versions.  Ideally the build task would know which environment you were building for and would use the appropriate versions of these libraries.  These libraries include:
        * AngularJs Core
        * Http module
        * Router module

## Given information:

Feel free to use whatever libraries you're most comfortable with.

Please provide PRODUCTION ready CSS, HTML, JS for the following:

- Mock
- User Stories
- Data

Test will be judged base on both completion and quality. However, completion is not a requirement.

#### User Stories

1. As a user
I want to be able to search for movies by name

1. As a user
I want to be able to sort movies by name and date—ascending and descending.

1. As a user
If there are more than five results
I want to see the number of results and pagination
(e.g. 1 - 5 of 16 results)

1. As a user
If there are five or less results
I want to see the number of results without pagination
(e.g. 1 result)

1. As a user
I want to have a movie's release date formatted
(e.g. May 1, 2015)

1. As a user
I want to have run time specified in hours and minutes.
(e.g. 1hr 21 mins)

1. As a user
Assuming I am logged in
I want to be able to toggle movies in my Watchlist

1. As a user
I want to be able to navigate to a movie detail page.
