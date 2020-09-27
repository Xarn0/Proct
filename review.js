window.addEventListener("DOMContentLoaded",()=>{
    let res = new XMLHttpRequest();
    res.open("GET","Отзыв.json");
    res.setRequestHeader("Content-type","application/json: charset=utf-8");
    res.send();
    res.addEventListener("load",function(){
        if(res.status==200){
            let op = JSON.parse(res.response);
            op.forEach(item => {
               let otzv = document.createElement('div') ;
               otzv.classList.add('formaRew');
               otzv.innerHTML =`
               
               <img src="2.main/images.jpg">
            <h4>${item.name} ${item.surname}, ${item.age}</h4>
 <p>${item.text}</p>

               `;
               document.querySelector('main').appendChild(otzv);
            });
        }
        else{
            console.error("сервер")
        }
    })
})