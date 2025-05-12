// DOG API

let selectEle = document.querySelector("select");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then(data => {
    let breedList = Object.keys(data.message);
    console.log(breedList);
    breedList.forEach((breed) => {
      let option = document.createElement("option");
      option.innerHTML = breed;
      option.setAttribute("value", breed);
      selectEle.append(option);
    });
  })
  .catch((err) => console.log(err));

  document.querySelector("button").addEventListener("click", () => {
    let breedName = selectEle.value;
    console.log(breedName);

    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
      .then((res) => res.json())
      .then((data) => {
          console.log("data =>",data.message);
          let dogImg = data.message;
          dogImg.forEach((dogImg) => {
            let img = document.createElement("img");
            img.setAttribute("src", dogImg);
            img.setAttribute("height", "200px");
            img.setAttribute("width", "200px");
            img.style.border = "2px solid black";
            img.style.borderRadius = "10px";
            img.style.margin = "10px";
            document.querySelector("#imagediv").append(img);
          });
      })

        .catch((err) => console.log(err));
  }); 