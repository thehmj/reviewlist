function update(){
    let name =document.getElementById('movie').value;
    let genre = document.getElementById('genre').value;
    let review = document.getElementById('review').value;
    localStorage.setItem('name',name);
    localStorage.setItem('genre',genre);
    localStorage.setItem('review',review);
    console.log("update");
    let p = document.getElementById('ma').innerHTML;
     let a= localStorage.getItem('name');
      let b = localStorage.getItem('review');
     let  c = localStorage.getItem('genre');
     let x =`<tr id="y">
     <td id="1" style="background-color: rgb(213, 197, 176); color: white;">${a}</td>
     <td id="2" style="background-color: rgb(213, 197, 176); color: white;">${b}</td>
     <td id="3" style="background-color: rgb(213, 197, 176); color: white;">${c}</td>
   </tr>`
     document.getElementById('ma').innerHTML = p+x; 
    localStorage.clear();
}
