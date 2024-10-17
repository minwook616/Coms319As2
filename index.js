fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    pageSetUp(data);
  })
  .catch(function(error) {
    console.log("error" + error);
  });

function pageSetUp(data) {
  let minwoo = data.minwoo;
  let brandon = data.brandon;
  let content = document.getElementById("content");
  let content2 = document.getElementById("content2");

  if (content) {
    for (let img in minwoo.imgs) {
      let imgTag = document.createElement("img");
      imgTag.src = minwoo.imgs[img]
      imgTag.classList.add("resized-img");

      let pTag = document.createElement("p");
      pTag.innerHTML = minwoo.text[img + "Text"];
      
      content.appendChild(imgTag); 
      content.appendChild(pTag);   
    }
  }

  if (content2) {
    for (let img in brandon.imgs) {
      let imgTag = document.createElement("img");
      imgTag.src = brandon.imgs[img];
      imgTag.classList.add("resized-img");

      let pTag = document.createElement("p");
      pTag.innerHTML = brandon.text[img + "Text"];

      content2.appendChild(imgTag);
      content2.appendChild(pTag);
    }
  }
}