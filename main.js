const 八卦=document.querySelector("#八卦")
console.log(八卦)
var x=false
八卦.onmousedown=function(){x=true}
document.body.onmousedown=function(e){
    console.log(e)
    if(x===true){
        八卦.style.top=e.clientY - 300 +'px'
        八卦.style.left=e.clientX -300 +'px'
    }
}


八卦.onmouseup=function(){x=false} 