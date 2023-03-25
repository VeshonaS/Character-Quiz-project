

$(".results").click(function() {
let test= $("#quiz").val();
let sibling= $("#sib").val();

if (sibling <3 && test==="slack off" )
{
  $("#yourresult").text("You are Konata! She slaks off, but somehow always passes"); 
    $(".konata").show();
}
    else if ( sibling <3 && test==="study hard"){
          
          $("#yourresult").text("You are Miyuki! She usually forgets but she passes because shes really smart");    
            $(".miyuki").show();
        }
else if  ( sibling >=3 && test==="study hard")
{
    $("#yourresult").text("You are Kagami! She always studies and get high grades, but she's also lonely in class");   
      $(".kagami").show();
    }
else if ( sibling >=3 && test==="slack off")
{
   $("#yourresult").text("You are Tsukasa! She forgets to study too, but she fails sometimes.");    
   $(".tsukasa").show();
    }
else{
  $("#yourresult").text("Uh...You are either Akira Kogami, with those multiple personalities or you did something wrong! ")  ;
    }
});