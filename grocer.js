   
 /*  addBtn = document.getElementsByClassName('addBtn');
   cartContainer = document.getElementsByClassName('cartContainer')[0]
   for(var i=0;i<addBtn.length;i++){
     addBtn[i].addEventListener('click',updatecartContainer);
   }
   function updatecartContainer(e){
       currentaddBtn = e.target;
       products = currentaddBtn.parentElement.parentElement.parentElement;
       
      title = products.getElementsByClassName('title')[0].innerText;
       price = products.getElementsByClassName('price')[0].innerText;
         
       carttitle = cartContainer .getElementsByClassName('carttitle');
       for(var i=0;i<carttitle.length;i++){
         if(carttitle[i].innerText===title){
           alert('Item Already Added to Cart');
           return;
         }
       }
       addnewRowCart(title,price); 
        totalPrice=0;
       cartprices = cartContainer.getElementsByClassName('cartprice');
       for( var i=0;i<cartprices.length;i++){
        totalPrice = totalPrice+ parseInt(cartprices[i].innerText.replace('/','').replace('-',''));
      
       }
       finalPrice = totalPrice*0.9;
       document.getElementsByClassName('amount')[0].innerText = finalPrice;
   }
   
 
   function addnewRowCart(title,price){
     div = document.createElement('div');
     div.classList.add('row');

     insideDiv =   `   <div class="carttitle">${title}</div>
            <div class="cartprice">${price}</div>
            <div class="remove"><button type ="submit" class= " remove"  >Remove</button></div>
            <div class = discount>   10%</div>`;

            div.innerHTML = insideDiv;
            cartContainer.appendChild(div);
            removebtn = document.getElementsByClassName('remove');
            for(var i=0;i<removebtn.length;i++){
              removebtn[i].addEventListener('click', removefrmcart);

            }
   };
   function removefrmcart(e){
       e.target.parentElement.parentElement.remove();
      newPriceAftRemove();
   }
   function  newPriceAftRemove(){
     total= 0;
     cartprices = cartContainer.getElementsByClassName('cartprice');
        for( var i=0;i<cartprices.length;i++){
        
        total = total+ parseInt(cartprices[i].innerText.replace('/','').replace('-',''));
      
        }
        finalT = total*0.9;
       document.getElementsByClassName('amount')[0].innerText = finalT;
   }*/



  
  $(".addBtn").click(function  updatecartContainer(e){
       currentaddBtn = e.target;
        products = currentaddBtn.parentElement.parentElement.parentElement;
       
      title = $('.title')[0].innerText;
      console.log(title);
       

    

    

  
  })




