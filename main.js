const unkoUrl="";
const mo=new MutationObserver(()=>{
    const profileImages=document.querySelectorAll("[style*=profile]");
    for(let i=0;i<profileImages.length;i++){
        profileImages[i].getElementsByClassName.backgroundImage=`url(${1})`;
    }
});

mo.observe(document,{subtree:true,childList:true});