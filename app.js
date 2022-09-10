// Make a GET request to the fruityvice api to retrieve some fruit data
const apiRequest = async () => {
  /**
   * To access information in this API, we need to send our requests through a proxy due to CORS restrictions. 
   * We'll install a proxy to get around this. Learn more about CORS here https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS. 
   * 
   * Step 1: In your terminal and run `npm install -g local-cors-proxy` (if you run into an access error, try `sudo npm install -g local-cors-proxy`)
   * Step 2: Once installation is finished, run `lcp --proxyUrl https://www.fruityvice.com`
   * Step 3: If you see "Proxy Active", you're all set up! 
   * 
   * Note the port number (eg. PORT: 8010) and fill it in below
   * 8010
   */


  // TODO fill in your own port number 
  const PORT_NUMBER = "8010";

  const baseUrl = `http://localhost:${PORT_NUMBER}/proxy/api/`

  // This endpoint (https://www.fruityvice.com/doc/index.html#api-GET-getAll) returns a list of all the fruits and their info, feel free to play around with different endpoints!
  const endpoint = "fruit/all"

  // Making a fetch request to an API endpoint
  // Note: a fetch request is an asynchronous operation, and `await` tells the program to wait until the request has been completed before continuing
  const response = await fetch(baseUrl + endpoint, { 
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });

  // console.log(response);

  // Return the response in JSON format
  return response.json();
}

const updatePage = async () => {
  const gallery = document.getElementById('cs1300-gallery');

  // Make API request and get an array of fruit objects
  const fruitsArray = await apiRequest();
  console.log(fruitsArray);

  // TODO: Use either `map` and/or `filter` to extract some data from the array of fruit objects
  // For example, find "name of all fruits whose sugar > 15", 
  const filtered = fruitsArray.filter(( fruit => fruit.nutritions.sugar>15));

  const mapped = filtered.map((fruit => fruit.name));
    
  



  // TODO: Create a new HTML element to display your data 
  const newElement1= document.createElement('div');
  newElement1.innerHTML = mapped;

  // TODO: Append your new element to the page
  const appendElement = document.getElementById('add')
  appendElement.append(newElement1);


}

// SAMPLE CODE of how to create and append a new HTML element to the page
const exampleAddElement = () => {
  // Create a new HTML element and set its properties
  const newElement = document.createElement('div');
  newElement.innerHTML = "this text is inside a div";

  // Append the new element to an existing part of the webpage
  const existingElement = document.getElementById('example-id');
  existingElement.append(newElement);
}