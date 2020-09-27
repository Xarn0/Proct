
window.addEventListener("DOMContentLoaded",()=>{
    get();
function get(){








    
    const res = new XMLHttpRequest();
    res.open('GET',"0.json");
    res.setRequestHeader("Content-type", "application/json: charset=utf-8");
    res.send();
    res.addEventListener('load',function(){
    
   

 


                if(res.status == 200){
                                    let login = document.querySelector('#inputL'),
                                    password = document.querySelector("#inputP"),
                                    btn = document.querySelector('#btn') ; 
                                            btn.addEventListener('click',()=>{
                                                                log = String(login.value);
                                                                par = password.value;
                                                                                        let ot = JSON.parse(res.response);
                                            
                                                                                                             ot.forEach(item=> {
                                                                                                            if(item.login == log && item.password == par){
                                                                                                            let form = document.querySelector('.reg');
                                                                                                            form.action = "1.html";
                                                                                                                                                         }
                                                                                                                                else                     {
                                                                                                                                login.style.color = "red";
                        
                                                                                                                                                         }
                    
                                                                                                                        })
                                                
                                                               })

                                    }

                                    else
                                    {
                                                        console.error('ошибка от сервера')
                                    }

                                            
                                })
                            }
                                                                                         
                                                                   


// post();
// function post(){
//     let o = {
//         name : 'alex',
//         surname :'popov',
//         age : 21,
//         id: Math.random()
//     }
//     let rega = document.querySelector('.ra');
//    const resPost = new XMLHttpRequest();
//   let forData = new FormData(rega); 
//   forData.append('id', Math.random())                                                
//                  let obj = {};
//                   forData.forEach((value,key)=>{
//                       obj[key] = value;
//                                                })               
//                                                     let json = JSON.stringify(o)
//                                                     resPost.open('POST',"0.json");
//                                                     resPost.setRequestHeader("Content-type", "application/json: charset=utf-8");
//                                                     resPost.send(json);
//                                                     resPost.addEventListener('load',function(){
//                                                         if(resPost.status == 200){console.log('все гуд')}
//                                                         else{console.log('no good')}
//                                                     })
                                                    

            

            
              

//                }                                                                   
 

                    
 })  
 
    
    


//скрипт для работы регистрации

var btn2 = document.querySelector('#btnR'),
rega = document.querySelector('.ra');
btn2.addEventListener('click',()=>{
 
    if(rega.style.display == 'block'){
        rega.style.display = 'none'
    }else{
        rega.style.display = 'block'
    }

    
})
