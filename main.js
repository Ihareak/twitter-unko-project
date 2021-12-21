console.log("working");
const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
canvas.width=200;
canvas.height=200;
ctx.font="200px san-serif";
ctx.fillText("💩",-40,140);
const unkoUrl=canvas.toDataURL("image/png");
console.log(unkoUrl);
const mo=new MutationObserver(()=>{
    const profileImages=document.querySelectorAll("[style*=profile]");
    console.log(profileImages);
    for(let i=0;i<profileImages.length;i++){
        profileImages[i].style.backgroundImage=`url(${unkoUrl})`;
    }
});

mo.observe(document,{subtree:true,childList:true});