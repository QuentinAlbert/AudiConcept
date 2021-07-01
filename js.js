let span = document.getElementsByTagName('span'),
    img = document.getElementsByClassName('caroussel'),
    l = 0;

    console.log(span);
    console.log(img);
    console.log("h");

span[1].onclick = ()=>{
    l++;
    for(let i of img)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-870px";}
        if (l==2) {i.style.left = "-1740px";}
        if (l==3) {i.style.left = "-2610px";}
        if (l==4) {i.style.left = "-3480px";}
        if (l==5) {i.style.left = "-3775px";}
        if (l>5) {l=5;}
        
    }
}

span[0].onclick = ()=>{
    l--;
    for(let i of img)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-870px";}
        if (l==2) {i.style.left = "-1740px";}
        if (l==3) {i.style.left = "-2610px";}
        if (l==4) {i.style.left = "-3480px";}
        if (l<0) {l=0;}
        
    }
}


const img1 = document.querySelector('.img1'),
     text1 = document.querySelector('.interior-view'),
      img2 = document.querySelector('.img2'),
      text2 = document.querySelector('.interior'),
      img3 = document.querySelector('.img3'),
      text3 = document.querySelector('.spoiler');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const topEltoTop = img1.getBoundingClientRect().top;
    const topEltoTop2 = img2.getBoundingClientRect().top;
    const topEltoTop3 = img3.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topEltoTop).toFixed() - clientHeight * 1){
        img1.classList.add('active');
        text1.classList.add('active2');
    }
    if(scrollTop > (scrollTop + topEltoTop2).toFixed() - clientHeight * 1){
        img2.classList.add('active');
        text2.classList.add('active2');
    }
    if(scrollTop > (scrollTop + topEltoTop3).toFixed() - clientHeight * 1){
        img3.classList.add('active');
        text3.classList.add('active2');
    }
})

