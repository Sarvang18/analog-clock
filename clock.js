// setTimeout(()=>{
//     console.log('good');
// },1000)

hh=document.querySelector('#hour')
mh=document.querySelector('#min')
sh=document.querySelector('#sec')

setInterval(()=>{
    
    d=new Date()
    h=d.getHours()
    if(h>=12){
        h=h-12;
    }
    m=d.getMinutes()
    s=d.getSeconds()

    hRotation=(30*h+m/2)
    mRotation=(6*m+0.1*s)
    sRotation=(6*s)

    hh.style.transform=`rotate(${hRotation}deg)`
    mh.style.transform=`rotate(${mRotation}deg)`
    sh.style.transform=`rotate(${sRotation}deg)`
},1000)

