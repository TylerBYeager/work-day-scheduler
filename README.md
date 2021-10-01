# Work Day Scheduler
This is the fifth major project that I have worked on. Working on this project was a great opportunity to learn more about the various jquery functions and how they differ from regular javascript. Implementing moment() was actually quite fun to figure out!

## Project Details
This project features a large "jumbotron" header that that announces the title of the project as well as the current date and time as established by moment.js. Also featured is the jqueryui datepicker widget. Things that I accomplished:
---
1. Create a header that displays the current date and time.
2. Implement the jqueryui datepicker widget to be used to set projects on future dates. 
3. Created the rows and columns that represent the different time blocks during standard business hours. 
4. Use the .each() to obtain a value from the textareas input. 
---
Things that I did not accomplish:
1. I was unable to save the textarea values to local storage and pull that information from storage for future use. 
2. I was unable to add in the color styling to show which hours had passed and which were upcoming. 
3. Was unable to implement datepicker in the way that I had intended. 
---

## Code Snippets
Here are few code snippets that I enjoyed coding and what they accomplished. This first snippet used moment.js to create a live display of the current date and time. 
```
function liveTime() {
    var currentTime = moment().format("dddd, MMMM, Do, YYYY, h:mm:ss a")
    $("#today").text(currentTime)
} //function sets the current date and time. Set at an interval of a half a second. 



liveTime();


setInterval(liveTime, 500);
```

Next is the small snippet of JQueryUI that is the datepicker widget. This also required additional links and scripts to JQueryUI to properly work. All of this can be found on their website.
```
$( function() { //added date picker widget from jqueryui.com
    $( "#datepicker" ).datepicker();
} );

```

Lastly is small example of how the time-blocks were set up. I used "section" over div to improve accessibility as well as utilizing Bootstrap.js's grid structure to set correct widths. 
```
<section class="row time-block">
      <section class="col-md-1 hour">
        8AM
      </section>
      <textarea class="col-md-10 text-input" id="textinfo"></textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </section>
```

## Get a copy

To get a working copy on your machine you will need a few things such as access to Gitbash or Terminal, a working SSH key, a Github account, and a code reader like VS Code

Getting your clone:

```
Once you have a working SSH key added to your Github account, go to the work-day-scheduler repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
```

Next:

```
Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
"git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
```

Lastly: 

```
Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "work-day-scheduler". Simply type in "code ." to open it in your code editor of choice and have fun!
```

### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JQUERY](https://jquery.com/)
* [JQUERYUI](https://jqueryui.com/)
* [BOOTSTRAP.JS](https://getbootstrap.com/)
* [MOMENT.JS](https://momentjs.com/)

## Deployed Link
* [See the Live Site!](https://tylerbyeager.github.io/work-day-scheduler/)

## Authors

* **Tyler Brian Yeager**

- [Link to Repo Site](https://github.com/TylerBYeager/work-day-scheduler)
- [Link to Github](https://github.com/TylerBYeager/tylerbyeager.github.io)
- [Link to LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

## License

This project is licensed under the MIT License 

## Acknowledgments 

* Credit to the BCS Learning Assistants who helped troubleshoot numerous issues and provided me a great chance to learn and understand javascript functions.
* Hat tip to anyone else whose code, libraries, packages, or UI was used.
* Inspired by a desire to succeed at the UC Berkeley Extension Bootcamp.
* Lastly, I would like to acknowledge the rest of my fellow bootcamp students and instructors who have helped me get this far. I look forward to learning much much more. Thank you. 
