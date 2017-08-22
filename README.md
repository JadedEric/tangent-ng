# Tangent Solutions - AngularJS UI Test
Tangent Solutions has tasked me, as part of my move back into development from Project Management, to complete the standard UI test for them. The test has been constructed to test a candidate on his / her ability to architect and develop a application using ES6, with the following expected:

* The ability to architect an application using ES6
  * NPM
  * Webpack
  * Babel
  * Karma
* Ability to build a beautifully styled front-end using Twitter Bootstrap
* Ability to consume web services as described below
* Ability to build a login with authentication
* Ability to perform basic listing, filtering and viewing etc of the data using web services

Github is a requirement as part of source control.

It has been specified as well, that unit tests and responsive design would be seen as a bonus.

# Problem Statement

The task is to create an administrative interface, including a dashboard, which will be used to display a set of requirements to an authenticated user.

Users should log into the dashboard using a username and password.

On the dashboard, it is expected to see widgets showing the amount of employees in the company, a list of birthdays for the month, etc. Use of initiative to complete the task is expected.

It should also be easy to find employees.

Lastly, a logged in user should be able to view their full profile.

# Design Considerations

The original requirements was to use **webpack** to boilerplate the AngularJS application, however, I decided to scaffold the application manually by hand, in order to build the UI out the way I had been invisioning in my head.

As part of the original requirements, using ES6, I also decided to build the application out using TypeScript, a superset of JavaScript, as this is something I am extremely familiar with. It also allows for some interesting development using AngularJS.

# Unit Testing

Originally I wanted to implement Jasmine unit tests, but I ran out of time. I will continue working on the library over the next couple of days, including the Jasmine tests as I go.

# License

MIT