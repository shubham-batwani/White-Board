
painting=false;
penwidth=15;
penColor=0;


window.addEventListener('load',()=>{
        const canvas = document.getElementById('canvas');
        const pen = canvas.getContext('2d');
        canvas.height = window.innerHeight*(0.73);
        canvas.width = window.innerWidth*(0.80);


        const blk = document.getElementById('blk');
        const rd  = document.getElementById('rd');
        const blu = document.getElementById('blu');
        const wh = document.getElementById('wh');
        const rs = document.getElementById('rs');
        const su = document.getElementById('su');
        const sd = document.getElementById('sd');
        

        function startPosition(event){
            painting=true;
            draw(event);
        }
    
        function finishedPosition(){
            painting=false;
            pen.beginPath();
        }

        function getColour()
        {
            if(penColor==0)
            {
                return "black";
            }
            else if(penColor == 1)
            {
                return "red";
            }
            else if(penColor == 2)
            {
                return "blue";
            }
            else
            {
                return "white";
            }
        }

        function draw(event){            

            if(event.offsetX<=0 || event.offsetY<=0 || 
                event.offsetX>=canvas.width || event.offsetY>=canvas.height)
            {
                finishedPosition();
                painting=false;
                return;
            }            
            if(!painting) return;            
            pen.lineWidth=penwidth;
            pen.lineCap="round";
            pen.strokeStyle = getColour();              
            if(penColor==3)
            {
                pen.lineWidth=50;
            }            
            pen.lineTo(event.offsetX,event.offsetY);
            pen.stroke();
            pen.beginPath();
            pen.moveTo(event.offsetX,event.offsetY);      
        }

        canvas.addEventListener('mousedown',startPosition);
        canvas.addEventListener('mouseup',finishedPosition);
        canvas.addEventListener('mousemove',draw); 
        
        blk.addEventListener("click",()=>{
            penColor=0;
        })
        blu.addEventListener("click",()=>{
            penColor=2;
        })
        rd.addEventListener("click",()=>{
            penColor=1;
        })
        wh.addEventListener("click",()=>{
            penColor=3;            
        })




        rs.addEventListener("click",()=>{
            pen.clearRect(0, 0, canvas.width, canvas.height);
        })


        su.addEventListener("click",()=>{
            
            if(penwidth<60)
            {
                penwidth+=5;
            }
            
        })
        sd.addEventListener("click",()=>{
            
            if(penwidth>5)
            {
                penwidth-=5;
            }

        })
        

        

});


window.addEventListener('resize',()=>{
    canvas.height = window.innerHeight*(0.73);
    canvas.width = window.innerWidth*(0.80);
})
