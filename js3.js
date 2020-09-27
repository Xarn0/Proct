window.addEventListener("DOMContentLoaded",()=>{
  const request = new XMLHttpRequest();
  request.open("GET", "serv.json");
  request.setRequestHeader("Content-type", "application/json: charset=utf-8");
  request.send();
  request.addEventListener("load",function(){
    if(request.status == 200){
      let data = JSON.parse(request.response);
      data.forEach(item => {
       let c1 = document.createElement('div');
       c1.classList.add('m');
      c1.innerHTML = `
      <div class = "mainCard">
          <h3 class ="cardH3">${item.name}</h3>
                                    <div class="cardPost"> 
                                        <div class='part_1 '> <img  src="${item.img}">
                                        </div>
                                                  <div class='part_1'  >
                                                                <ul>
                                                                    <li>Страниц :  <br/>
                                                                          <span class="dat">${item.NumberOfPages} стр</span>
                                                                    </li>
                                                                    <br/>
                                                                    <br/>

                                                                    <li>Тема:<br/>
                                                                          <span class="dat" >${item.Subject}</span>
                                                                    </li>
                                                                    <br/>
                                                                    <br/>

                                                                    <li>Год издание:<br/>
                                                                          <span class="dat">${item.YearEdition}г</span>
                                                                    </li>
                                                                    <br/>
                                                                    <br/>

                                                                    <li>Автор:<br/>
                                                                          <span class="dat">${item.Author}</span> 
                                                                    </li>
                                                                    <br/>
                                                                    <br/>
                                                                    <br/>

                                                                    <li><a href="${item.document}">
                                                                    Получить книгу
                                                                    </a>
                                                                    <li><a href="review.html">Оставить Отзыв </a></li>
                                                                    
                                                                   
                                                                    
                                                                  
                                                  </ul>
                                        </div>
                            <div class='part_1'>
                                        <h4>Описание :</h4>
                                        <p>${item.description}</p>

                            </div> 
          



                                </div>
          </div>
          <hr>
      `;
        
        let main = document.querySelector("main").appendChild(c1);
//         let in1 = document.querySelector('#sear'),
//         in2 = document.querySelector('#sear1')
//         let value1 = in1.value;
//          in2.addEventListener("click", ()=>{
//            console.log(value1)
           
//              pous(value1)
            
//          })
//         function  pous(value1){
//            switch(value1){
//           case 'Программирование' :
//             item.filter((u)=>{
//              if(u.Subject !== 'Программирование');
//                   u.style.display = 'none'; })
//                   break;
//           case 'Кулинария' :
//             item.filter((u)=>{
//              if(item.Subject !== 'Кулинария');
//                   item.style.display = 'none';})
//                   break;
//           case 'Фантастика' : 
//               item.filter((u)=>{
//               if(item.Subject !== 'Фантастика');
//                     item.style.display = 'none';})
//                     break;
//           case 'Мистика' : 
//               item.filter((u)=>{
//               if(item.Subject !== 'Мистика');
//                     item.style.display = 'none';})
//                     break;
//           case 'Ужасы' : 
//               item.filter((u)=>{
//               if(item.Subject !== 'Ужасы');
//                     item.style.display = 'none';})
//                     break;
//           case 'Наука' : 
//               item.filter((u)=>{
//               if(item.Subject !== 'Наука');
//                     item.style.display = 'none';})
//                     break;
// }
//         } 







      });
    }
    else{
      console.error("что-то не так пошло  ")
    }
  })
})
function ri (){
 
  console.log(in1)
}
 let in1 = document.getElementById('sear').value;
       let in2 = document.querySelector('#sear1');
        let value1 = String(in1.value);
         in2.addEventListener("click", ()=>{
         console.log(in1)
           
             pous(in1)
            
         })
function  pous(value1){
  switch(value1){
 case 'Программирование' :
   item.filter((u)=>{
    if(u.Subject !== 'Программирование');
         u.style.display = 'none'; })
         break;
 case 'Кулинария' :
   item.filter((u)=>{
    if(item.Subject !== 'Кулинария');
         item.style.display = 'none';})
         break;
 case 'Фантастика' : 
     item.filter((u)=>{
     if(item.Subject !== 'Фантастика');
           item.style.display = 'none';})
           break;
 case 'Мистика' : 
     item.filter((u)=>{
     if(item.Subject !== 'Мистика');
           item.style.display = 'none';})
           break;
 case 'Ужасы' : 
     item.filter((u)=>{
     if(item.Subject !== 'Ужасы');
           item.style.display = 'none';})
           break;
 case 'Наука' : 
     item.filter((u)=>{
     if(item.Subject !== 'Наука');
           item.style.display = 'none';})
           break;
}
} 