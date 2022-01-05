const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
canvas.width=400;
canvas.height=400;
ctx.font="320px san-serif";
ctx.textAlign="center";
ctx.textBaseline="middle";
ctx.fillText("💩",200,150);
const unkoUrl=canvas.toDataURL("image/png");
const mo=new MutationObserver(()=>{
    const profileImages=document.querySelectorAll("[style*=profile_images]");
    console.log(profileImages);
    for(let i=0;i<profileImages.length;i++){
        profileImages[i].style.backgroundImage=`url(${unkoUrl})`;
    }
});

mo.observe(document,{subtree:true,childList:true});