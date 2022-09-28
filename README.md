This README will function as a note taking document for the moment before transitioning to a properly formatted readme as functionality develops.
The complete sequence of business logic tests can be found [here](/tests.md).
Initial construction will go as follows:

# Mr. Roboger's Neighborhood

## Authored by: 
Quin Asselin, (2022)

***

## Table of Contents
1. [Repository Description](#description)
2. [Technologies Used](#tech)
3. [Setup Instructions](#setup)
4. [Example Tests](#tests)
5. [Known Bugs](#bugs)
6. [License Information](#license)
7. [Photo Licensure](#photo)

*** 

### Repository Description: {#description}
This application requests the user input an integer. This input will be used to generate a sequence of numbers in which the integers containing certain numerals (1, 2, and 3) will have their values replaced with strings pretaining to a certain neighborly sweater-wearing automaton.

This project was built in tandem with a programming class taught by Epicodus. It contains use of JavaScript, HTML and formatting from both custom CSS and Bootstrap. 

***

### Technologies Used: {#tech}
- Javascript
- HTML5
- CSS3
- Markdown Text
- Bootstrap 4.6.2
- Git
- Github

***

### Setup Instructions: {#setup}
This webpage can be access by following the Github Pages linked [above](#pages)

Alternatively, the project can be opened via cloning/downloading repository:
1. Download this repository from its Github Repository located [here.]()
2. Locate the download destination folder on your local machine.
3. Unzip the downloaded folder if necessary.
4. Enter the decompressed folder and open "index.html" in your prefered web browser.
***

### Example Tests: {#tests}
Testing information including TDD for functions of business logic can be found in tests.md within this directory. Tests are written in plain English and run manually rather than employing automated testing technologies.

Tests are organized by function and range from expected complexity of implementation (least to most).

The complete sequence of business logic tests can be found [here](/tests.md).
***

### Known Bugs: {#bugs}
This function has not been refactored for time efficiency scaling optimally with input size. As such, if a significantly large digit is selected to generate a sequence the end user will notice hangtime. In the event of a sufficiently large number the browser tab may run out of memory during the process of building the array. Thank you for your patience as future refactors may hopefully be capable for addressing this issue to a degree.

If you experience this issue, please message the producer of your current repository and include any relevant form/page information. Thank you for your patience as I work on any issues!
***

### License Information {#license}
*Quin Asselin, 2022. Available for distribution, modification, inspection, and application under [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)*