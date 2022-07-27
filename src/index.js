import express from 'express';
const app = express();
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

 let treeData;


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBkDjpHGGLz4s8TLs4XhCguBr1buQbqXQI",
  authDomain: "woodie-13061.firebaseapp.com",
  projectId: "woodie-13061",
  storageBucket: "woodie-13061.appspot.com",
  messagingSenderId: "899681278701",
  appId: "1:899681278701:web:653628e3bb9e67a5910ae4",
  measurementId: "G-TQLSH3Z6K5"
};

const Fapp = initializeApp(firebaseConfig);
const db = getFirestore(Fapp);

async function getCities(db) {
   const citiesCol = collection(db, 'trees');
   const citySnapshot = await getDocs(citiesCol);
   const cityList = citySnapshot.docs.map(doc => doc.data());
   return cityList;
 }


app.get('/',(req,res)=> {
   res.send('Hello World'); 
});

app.get('/trees',(req,res)=> {
   getCities(db).then(data=>{
      treeData = data
      res.send(data);
   })
 });

//  app.get('/trees/search',(req,res)=> {
//    var param = req.query.param

//    deleteChild();
   
//    for(var i=0;i<length(treeData);i++){
//       const ele = treeData[i];
//       let name = ele["name"];
//       if(name.includes(param)){
//          const node = document.createElement("li");
//          const subnode = document.createElement("div");
//          subnode.className = 'card';
//          subnode.id="idCard";
//          const img= document.createElement('img');
//          img.src = ele["imageUri"];
//          subnode.appendChild(img);
//          const text = document.createElement('h2');
         
//          const pText = document.createElement('p');
//          text.textContent = ele["name"];
//          pText.textContent = ele["scientificName"];
//          const div = document.createElement('div');
//          div.className = "ellipse";
//          const imgsrc = document.createElement('img');
//          imgsrc.src = '../assets/images/cardlogo.png'  
//          div.appendChild(imgsrc);
//          subnode.appendChild(div);
//          subnode.appendChild(pText);
//          subnode.appendChild(text)
//          node.appendChild(subnode);
//          document.getElementById("available").appendChild(node);
//       }
//    }
//  });

//  function deleteChild() {
//    var e = document.getElementById("available");
   
//    //e.firstElementChild can be used.
//    var child = e.lastElementChild; 
//    while (child) {
//        e.removeChild(child);
//        child = e.lastElementChild;
//    }
// }



 const port = process.env.PORT || 3000;
 app.listen(port,() => console.log(`Listening on Port: ${port}...`))