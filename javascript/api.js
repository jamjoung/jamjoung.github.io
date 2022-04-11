async function getDog() {
    console.log("Button was clicked");
    try {
      const response = await fetch(endpoint);
      if(!response.ok){
        throw Error(response.statusText)
      }
      
       const json = await response.json();
      console.log(json);
      displayPhoto(json.message);

    }
  
    catch(err){
      console.log(err)
      alert('Failed');
    }
  }
  
  function displayPhoto(dogURL) {

    const pic = document.getElementById('dog-URL');
    pic.src=dogURL;
  }

  function changeText() {
    document.getElementById('dogCatHeader').textContent = "Just kidding, you get dogs (since there was no good cat api).";
    document.getElementById('catClick').textContent="";
    document.getElementById('dogNew').textContent="Get a Dog!";
    document.getElementById('note').textContent = " This dog api provides images of very cute dogs and not cats. I used the api to change the src of the img element as well as edit the text to do a sneaky trick!";
  }
  
const endpoint='https://dog.ceo/api/breeds/image/random';
const quoteButton = document.getElementById('dogNew')
quoteButton.addEventListener('click', getDog);
quoteButton.addEventListener('click', changeText);
