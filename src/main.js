let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown',()=>{
  const inputValue = searchInput.value;
  search(inputValue);
});

// searchButton.addEventListener('click', () => {
//   // const inputValue = searchInput.value;
//   // search(inputValue);
// });

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});


const lis = httpGet('http://localhost:3000/trees');
const data = JSON.parse(lis);
console.log(data)
      var iy = 0;
      for (var i = iy;i<data.length;i++){
           
       if(i == 12 ){
           break;
       }
       const ele = data[iy];
   
       const node = document.createElement("li");
       const subnode = document.createElement("div");
       subnode.className = 'card';
       subnode.id="idCard";
       const img= document.createElement('img');
       img.src = ele["imageUri"];
       subnode.appendChild(img);
       const text = document.createElement('h2');
       
       const pText = document.createElement('p');
       text.textContent = ele["name"];
       pText.textContent = ele["scientificName"];
       const div = document.createElement('div');
       div.className = "ellipse";
       const imgsrc = document.createElement('img');
       imgsrc.src = '../assets/images/cardlogo.png'  
       div.appendChild(imgsrc);
       subnode.appendChild(div);
       subnode.appendChild(pText);
       subnode.appendChild(text)
       node.appendChild(subnode);
       document.getElementById("available").appendChild(node);
       iy++;
      }
   


  function search(param){

    
      deleteChild();
      

      for(var i=0;i<data.length;i++){
         const ele = data[i];
         let name = ele["name"];
         if(name.toLowerCase().includes(param.toLowerCase())){
            const node = document.createElement("li");
            const subnode = document.createElement("div");
            subnode.className = 'card';
            subnode.id="idCard";
            const img= document.createElement('img');
            img.src = ele["imageUri"];
            subnode.appendChild(img);
            const text = document.createElement('h2');
            
            const pText = document.createElement('p');
            text.textContent = ele["name"];
            pText.textContent = ele["scientificName"];
            const div = document.createElement('div');
            div.className = "ellipse";
            const imgsrc = document.createElement('img');
            imgsrc.src = '../assets/images/cardlogo.png'  
            div.appendChild(imgsrc);
            subnode.appendChild(div);
            subnode.appendChild(pText);
            subnode.appendChild(text)
            node.appendChild(subnode);
            document.getElementById("available").appendChild(node);
         }
      }
  }

  


function deleteChild() {
  var e = document.getElementById("available");
  
  //e.firstElementChild can be used.
  var child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}

   function httpGet(theUrl)
   {
       var xmlHttp = new XMLHttpRequest();
       xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
       xmlHttp.send( null );
       return xmlHttp.responseText;
   }

   function load(){
       const set = iy;
       for (var i = iy;i<data.length;i++){
           
           if(i-set == 12  ){
               break;
           }
           const ele = data[iy];
       
           const node = document.createElement("li");
           const subnode = document.createElement("div");
           subnode.className = 'card';
           const img= document.createElement('img');
           img.src = ele["imageUri"];
           subnode.appendChild(img);
           const text = document.createElement('h2');
           const pText = document.createElement('p');
           text.textContent = ele["name"];
           pText.textContent = ele["scientificName"];
           const div = document.createElement('div');
           div.className = "ellipse";
           const imgsrc = document.createElement('img');
           imgsrc.src = 'images/cardlogo.png'  
           div.appendChild(imgsrc);
           subnode.appendChild(div);
           subnode.appendChild(pText);
           subnode.appendChild(text)
           node.appendChild(subnode);
           document.getElementById("available").appendChild(node);
           iy++;
          }
   }

