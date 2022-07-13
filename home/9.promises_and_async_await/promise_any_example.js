// In practice, you use the Promise.any() to return the first fulfilled promise. Once a promise is
//fulfilled, the Promise.any() method does not wait for other promises to be completed. In other
//words, the Promise.any() short-circuits after a promise is fulfilled

// For Example, you have a resource served by two or more content delivery networks (CDN). To 
//dynamically load the first available resource, you can use the Promise.any() method.

// The following example uses the Promise.any() method to fetch two images and displays the first 
//available image

function getImageBlob(url) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`HTTP status: ${response.status}`)
    }

    return response.blob()
  })
}

let cat =  getImageBlob('https://upload.wikimedia.org/wikipedia/commons/4/43/Siberian_black_tabby_blotched_cat_03.jpg)

let dog = getImageBlob('https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg')

Promise.any([cat, dog])
  .then(data => {
    let objectURL = URL.createObjectURL(data)
    let image = document.createElement('img')

    image.src= objectURL
    document.body.appendChild(image)
  })
  .catch(e => console.log(e.message))
