# Project 1 - Full Stack JavaScript Techdegree
## Project instructions

- [x] Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.

- [x] Each quote object in the quotes array should have the following properties:
    - A quote property which contains a string: the text of the quote that will be displayed on the page.
    - A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
    - An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
    - An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
- [x] Create a function named getRandomQuote which:
    - selects a random quote object from the quotes array
    - returns the randomly selected quote object

- [x] Create a function named printQuote which follows these rules:
    - printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    - printQuote constructs a string containing the different properties of the quote object using the following HTML template:

```html

<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>

```
- (list continued)
    - printQuote doesn't add a for a missing citation or a if the year property is missing
    - printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML

- [x] Add comments to your code.

- [ ] Check off all items on the Student Project Submission Checklist

## Extra Credit

- [x] Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
- [x] When the quote changes, randomly change the background color of the page.
- [x] Don't display a random quote more than once until ALL quotes from the array have been displayed. To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, log the quote to the console each time the “Show Another Quote” button is clicked.
- [x] Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).
