 let text=document.getElementById('text');
 let author=document.getElementById('auth');
 let btn=document.getElementById('btn');
 let apiQ=[];
 function showNum(){
     const random=apiQ[Math.floor(Math.random()*apiQ.length)];
     console.log(random);
     author.textContent=(random.author).toUpperCase() ;
     
     text.textContent=random.text;
     
 }
 
   
 async function quote(){
     const apiurl="https://type.fit/api/quotes";
     try{
       const response=  await fetch(apiurl);
       apiQ= await response.json();
       showNum();
       

     }catch(error){

     }
        
    }
    btn.addEventListener('click',showNum);
    quote();
 
 
 
 
 

