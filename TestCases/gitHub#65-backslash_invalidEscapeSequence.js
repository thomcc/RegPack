﻿b.innerHTML=`<div style=width:95vw;height:95vh;perspective:500px;overflow:hidden;background:#7e2><div style=transform-style:preserve-3d;margin:50vh+50vw;transform-origin:0+0 id=s><div style=width:55px;font:40px'' id=h>🐰<div style=transform:rotate(180deg)translateY(9px);font:50px''>🎩`;k=[];onkeydown=e=>k[e.which-37]=1;onkeyup=e=>k[e.which-37]=0;x=-400;y=-630;a=1.35;m=[0,10240,45022,59464,27080,59658,114174,0];z=1;for(i in m){for(H=17;H--;){if(m[i]>>H&1){s.innerHTML+=`<div style=width:255px;height:255px;background:#b31;position:fixed;top:${250*i}px;left:${250*H}px>`;}else s.innerHTML+=`<div id=t${i+H} style=font-size:120px;position:fixed>${[...'🌳🌲🌵'][(i*H+z++)%3]}`;}}s.innerHTML+=`<div id=t${616} style=font-size:30px>🥕`;t=0;c=0;setInterval(e=>{t+=.3;v=x;w=y;if(k[2])a-=.05;else if(k[0])a+=.05;else if(k[1]){y+=20*Math.cos(a);x+=20*Math.sin(a)}else if(k[3]){y-=20*Math.cos(a);x-=20*Math.sin(a)}if(!(m[~~(-y/250)]>>(~~(-x/250))&1)){x=v;y=w}h.style.transform=`translateX(${-x-20}px)translateY(${-y-20}px)translateZ(${60-14*Math.sin(t)}px)rotateZ(${-a}rad)rotateX(-90deg)`;if(!c)s.style.transform=`rotateX(55deg)rotateZ(${a}rad)translateX(${x}px)translateY(${y}px)`;else{s.style.transition=`5s`;s.style.transform=`rotateX(30deg)translateX(-2200px)translateY(-2000px)translateZ(-2000px)`;a=0;}for(i in m){for(H=17;H--;){if(self[`t${i+H}`]){if(c)self[`t${i+H}`].style.transition=`5s`;self[`t${i+H}`].style.transform=`translateX(${H*250+99}px)translateY(${i*250-99}px)translateZ(160px)rotateZ(${-a}rad)rotateX(-90deg)scale(2.5)`;}}}if(x<-4100)c=1},33)