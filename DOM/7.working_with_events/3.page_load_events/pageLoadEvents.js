// -----------------------------------------------------
//            Loading when you access a page
// -----------------------------------------------------
// When you open a page, the following events occur in sequence:

// DOMContentLoaded – the browser fully loaded HTML and completed building the 
//DOM tree. However, it hasn’t loaded external resources like stylesheets and 
//images. In this event, you can start selecting DOM nodes or initialize the 
//interface.

// load – the browser fully loaded the HTML and also external resources like 
//images and stylesheets.

// -----------------------------------------------------
//            Loading when you leave a page
// -----------------------------------------------------
// When you leave the page, the following events fire in sequence:

// beforeunload – fires before the page and resources are unloaded. You can use 
//this event to show a confirmation dialog to confirm if you really want to leave
//the page. By doing this, you can prevent data loss in case you are filling out a 
//form and accidentally click a link to navigate to another page.

// unload – fires when the page has completely unloaded. You can use this event to
//send the analytic data or to clean up resources.

// -----------------------------------------------------
//            Handling load events on pages
// -----------------------------------------------------
// To handle the page events, you can call the addEventListener() method on the 
//document object:

document.addEventListener('DOMContentLoaded',() => {
  console.log('Loaded HTML, but not CSS or images on the website')
});

document.addEventListener('load',() => {
  console.log('Loaded the CSS or images on the website')
});
