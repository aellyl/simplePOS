// $('.toggle').on('click', function() {
//     $('.container').stop().addClass('active');
//   });
  
//   $('.close').on('click', function() {
//     $('.container').stop().removeClass('active');
//   });
document.addEventListener('DOMContentLoaded', function() {
    var toggle= document.querySelector('.toggle');
    var containerActive;
    
      toggle.addEventListener('click',function(){
        containerActive= document.querySelector('.active');
        if(containerActive)
        {
            document.querySelector('.container').classList.remove('active');
            //   var close = document.querySelector('.close');
            //   close.addEventListener('click',function(){
            //     document.querySelector('.container').classList.remove('active');
            //   });
           
        }else{
            document.querySelector('.container').classList.add('active');
        }

        
        
      })



    

  })

