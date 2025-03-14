import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  let pronoun = ['the', 'our', 'my'];
  let adj = ['great', 'big','small','fast'];
  let noun = ['jogger', 'racoon','neandhertal','magician'];
  let domain = ['.es','.com','.org','.ar']

  for (let i in pronoun){
    for (let j in adj) {
      for(let k in noun){
        for (let l in domain){
          const arrayList = pronoun[i] + adj[j] + noun[k] + domain[l]
          console.log(arrayList)
        }
      }
    }
  }
  
  

};
