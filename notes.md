# Final Notes
* Port 443 - HTTPS
* Port 80 - HTTP
* Port 22 - SSH
* status 403 - forbidden / 404 - not found / 502 - bad gateway / 500 - other
* content-type - format of what is being sent
* Secure - encrypted
* HttpOnly - can't be accessed by JavaScript
* SameSite - only on origin site
* ws created for asynchronous communication with several devices
* JSX - JavaScript XML
* JS - JavaScript
* AWS - Amazon Web services
* NPM - Node Package Manager
* NVM - Node Version Manager
* state hooks remember information
* context hooks receive information from parents without passing in as props
* ref hooks hold info not used for rendering
* effect hooks coordinate with external systems
* performance hooks avoid re-rendering work
* package.json - metadata and packages for Node.js proj
* fetch - makes http requests, returns promise
* Node.js - runs js outside the browser for backend server
* pm2 - process manager for node
* vite - build tool

# Midterm Review
## Console Commands
* chmod - change permissions for files
* pwd - print working directory
* cd - Change directory
* ls - List files
  * -la all files long output
* vim - open vim editor
* nano - open nano editor
* mkdir - Make directory
* mv - Move file(s)
* rm - Remove file(s)
* man - Look up a command in the manual
* **ssh - Create a secure shell on a remote computer**
* ps - process status
* wget - download file from web
* sudo - Execute a command as a super user (admin)

## HTML
* HTML link element to connect style sheet:
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
* div tag divides subcontent
* image with hyperlink = ```<img>``` tag inside ```<a>``` tag
*  paragraph ```<p>```, ordered list```<ol>```, unordered list```<ul>```, second level heading```<h2>```, first level heading```<h1>```, third level heading```<h3>```
* document type:
```html
<!DOCTYPE html>
```
* tag for including javascript:
```html
<head>
  <script src="javascript.js"></script>
</head>
```


## CSS
* #title = id selector // .grid = class selector
* padding = size of element // margin = space around element
* flex
  * flex-direction = column/row
  * display = none or flex
* padding - top right bottom left
* default span element display property value: inline
* div elements backgorund red
```css
div {
    background-color: red;
}
```
* In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
  * Content → Padding → Border → Margin
* set text to green, leave other unaffected
```css
.class {
    color: green;
}
```

## JavaScript
* arrow syntax (args) => ret val;
* array = ordered sequence, map = key-value pairs
* DOM
  * represented as document
  * represented in a tree, everything is a node
  * createELement, removeChild, innerHTML
  * addEventListener -> type of event, function call
* for loop
```javascript
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```
* in, names/indexes / of: values
* select id "byu" change text to green
```javascript
document.getElementById("byu").style.color = "green";
```
* creating object = name-value pairs
```javascript
const obj = {a:3, b:'fish'}
```
* new properties for objects? yes
* promises
``` javascript
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed

```
* JSON
  * string, number, boolean, array, object, null
  * JSON.parse -> get object from json
  * JSON.stringify -> to json

## etc
* banana.fruit.bozo.click,
  * top level domain - .click
  * subdomain - banana.fruit
  * root domain - bozo.click
* Is a web certificate is necessary to use HTTPS? Yes
* Can a DNS A record can point to an IP address of another A record? no
* Port 443 - HTTPS
* Port 80 - HTTP
* Port 22 - SSH


