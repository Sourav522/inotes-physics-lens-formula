nodeParentDiv=document.getElementById('nodeParentDiv');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


var i=0;
var j=0;
class nodeClass{
    constructor(nodeMap){
        this.l1Length=1;
        this.l2Length=nodeMap.length;
        this.l3Length=[];
        for(i=0;i<this.l2Length;i++){
            this.l3Length.push(nodeMap[i].length)
        }
        //console.log(this.l1,this.l2,this.l3);
        this.nodeL1ClickState=1;
        this.nodeL1=document.createElement('DIV');
        nodeParentDiv.appendChild(this.nodeL1);
        this.nodeL1.classList.add('node1');
        this.nodeL1.style.marginLeft='78.885vh';
        this.nodeL1.style.marginTop='40vh';
        this.nodeL2=[];
        this.nodeL2ClickState=[];
        this.nodeL3=[[1],[1],[1]];
        this.nodeL3ClickState=[[1,2,3],[1,2],[1]];
        for(i=0;i<this.l2Length;i++){
            this.nodeL2ClickState[i]=1;
            this.nodeL2[i]=document.createElement('DIV');
            nodeParentDiv.appendChild(this.nodeL2[i]);
            this.nodeL2[i].classList.add('node2');
            if(this.l2Length%2==1){
                this.nodeL2[i].style.marginLeft=(parseFloat(this.nodeL1.style.marginLeft.replace('vh',''))+(i-parseInt(this.l2Length/2))*50)+'vh';
            }
            else{
                this.nodeL2[i].style.marginLeft=(parseFloat(this.nodeL1.style.marginLeft.replace('vh',''))+(i*2-(this.l2Length-1))*25)+'vh';
            } 
            this.nodeL2[i].style.marginTop='70vh';
            this.nodeL2[i].style.width='23vh';
            this.nodeL2[i].style.height='23vh';

           

            for(j=0;j<this.l3Length[i];j++){
                this.nodeL3ClickState[i][j]=1;
                this.nodeL3[i][j]=document.createElement('DIV');
                nodeParentDiv.appendChild(this.nodeL3[i][j]);
                this.nodeL3[i][j].classList.add('node3');
                if(this.l3Length[i]%2==1){
                    this.nodeL3[i][j].style.marginLeft=(parseFloat(this.nodeL2[i].style.marginLeft.replace('vh',''))+(j-parseInt(this.l3Length[i]/2))*30)+'vh';
                }
                else{
                    this.nodeL3[i][j].style.marginLeft=(parseFloat(this.nodeL2[i].style.marginLeft.replace('vh',''))+(j*2-(this.l3Length[i]-1))*15)+'vh';
                } 
                this.nodeL3[i][j].style.marginTop='110vh';
                this.nodeL3[i][j].style.width='22vh';
                this.nodeL3[i][j].style.height='13vh';

                //connecterline drawing from Level 1 to Level2
            }
        }


    }
}

nodeMap=[[1],[1,2,3,4,5,6],[1,2]];

node = new nodeClass(nodeMap);



nodeHTMLDataFinal=[['00.svg'],['10.svg','11.svg','12.svg','13.svg','14.svg','15.svg'],['20.svg','21.svg']];
nodeHTMLDataInitial=[['<div>Lens Formula</div>'],['<div>Magnification Formula</div>','<div>m < |1| for Real Image</div>','<div>m < |1| for Virtual Image</div>','<div>m = |1|</div>','<div>m > |1| for Real Image</div>','<div>m > |1| for Virtual Image</div>'],['<div>Power of a single lens</div>','<div>Power of Combination of Lens</div>']];
node.nodeL1.innerHTML='<div><br>Lens Formula, Magnification and Power of Lens</div>';
node.nodeL2[0].innerHTML='<div>Formula of Lens</div>';
node.nodeL2[1].innerHTML='<div>Magnification of Lens</div>';
node.nodeL2[2].innerHTML='<div>Power of Lens</div>';
node.nodeL3[0][0].innerHTML='<div>Lens Formula</div>';
node.nodeL3[1][0].innerHTML='<div>Magnification Formula</div>';
node.nodeL3[1][1].innerHTML='<div>m < |1| for Real Image</div>';
node.nodeL3[1][2].innerHTML='<div>m < |1| for Virtual Image</div>';
node.nodeL3[1][3].innerHTML='<div>m = |1| </div>';
node.nodeL3[1][4].innerHTML='<div>m > |1| for Real Image</div>';
node.nodeL3[1][5].innerHTML='<div>m > |1| for Virtual Image</div>';
node.nodeL3[2][0].innerHTML='<div>Power of a single lens</div>';
node.nodeL3[2][1].innerHTML='<div>Power of Combination of Lens</div>';

node.nodeL1.onclick=function(){
    if(node.nodeL1ClickState%2==1){
        nodeParentDiv.style.transform='translate(0vh,-30vh)';
        this.style.transform='scale(0.8)';
        for(i=0;i<node.l2Length;i++){
            node.nodeL2[i].style.opacity=1;
            
            for(j=0;j<node.l3Length[i];j++){
                node.nodeL3[i][j].style.opacity=0;

            }
        }
    }
    else{
        nodeParentDiv.style.transform='translate(0vh,0vh)';
        this.style.transform='scale(1.5)';
        for(i=0;i<node.l2Length;i++){
            node.nodeL2[i].style.opacity=0;
            
            for(j=0;j<node.l3Length[i];j++){
                node.nodeL3[i][j].style.opacity=0;
            }
        }
    }
    node.nodeL1ClickState+=1;
    
}
centerPoint=[177.78/2,20];
l2TransformData=0;
for(i=0;i<node.l2Length;i++){
    node.nodeL2[i].onclick=function(){
        if(node.nodeL1ClickState%2==0){
            tempIndex= node.nodeL2.indexOf(this);
            if(node.nodeL2ClickState[tempIndex]%2==1){
                leftDiff=(centerPoint[0]-parseFloat(this.style.marginLeft.replace('vh',''))-parseFloat(this.style.width.replace('vh',''))/2);
                topDiff=(centerPoint[1]-parseFloat(this.style.marginTop.replace('vh',''))-parseFloat(this.style.height.replace('vh',''))/2);
                nodeParentDiv.style.transform='translate('+leftDiff+'vh,'+topDiff+'vh)';  
                l2TransformData=nodeParentDiv.style.transform;
                node.nodeL2[tempIndex].style.transform='scale(0.8)'; 
                node.nodeL2[tempIndex].style.opacity=1;
                
                node.nodeL1.style.transform='scale(0.4)';
                for(j=0;j<node.l2Length;j++){
                    if(j!=tempIndex){
                        node.nodeL2ClickState[j]=1;
                        node.nodeL2[j].style.transform='scale(0.4)'; 
                        node.nodeL2[j].style.opacity=0.4;
                        
                        for(k=0;k<node.nodeL3[j].length;k++){
                            node.nodeL3[j][k].style.opacity=0;
                            node.nodeL3[j][k].style.zIndex='-1';
                        }
                    }
                }
                for(k=0;k<node.nodeL3[tempIndex].length;k++){
                    //console.log(node.nodeL3[tempIndex].length,tempIndex,k);
                    node.nodeL3[tempIndex][k].style.opacity=1;
                    node.nodeL3[tempIndex][k].style.zIndex='0';
                }
            }
            else{
                nodeParentDiv.style.transform='translate(0vh,-30vh)';
                node.nodeL2[tempIndex].style.transform='scale(1.0)';
                node.nodeL1.style.transform='scale(0.8)';
                for(j=0;j<node.l2Length;j++){
                    if(j!=tempIndex){
                        node.nodeL2ClickState[j]=1;
                        node.nodeL2[j].style.transform='scale(1.0)'; 
                        node.nodeL2[j].style.opacity=1;
                        
                        ;
                    }
                } 
                for(k=0;k<node.nodeL3[tempIndex].length;k++){
                    node.nodeL3[tempIndex][k].style.opacity=0;
                }
            }
            node.nodeL2ClickState[tempIndex]+=1;
        }
        
    }
}

tempIndex1=-10;
tempIndex2=-10;
centerPoint1=[177.78/2,50];
l3TransformData=[[1,1,1],[1,1,1],[1,1,1]];
for(m=0;m<node.nodeL2.length;m++){
    for(n=0;n<node.nodeL3[m].length;n++){
        l3TransformData[m][n]=0;
        node.nodeL3[m][n].onclick=function(){
            if(node.nodeL1ClickState%2==0){
                //to find the indices of nodel3 array
                for(p=0;p<node.nodeL2.length;p++){
                    if(node.nodeL3[p].indexOf(this)!=-1){
                        tempIndex1=p;
                    }
                }
                tempIndex2= node.nodeL3[tempIndex1].indexOf(this);
                if(node.nodeL2ClickState[tempIndex1]%2==0){
                    if(node.nodeL3ClickState[tempIndex1][tempIndex2]%2==1){
                        l3TransformData[tempIndex1][tempIndex2]=nodeParentDiv.style.transform;
                        //console.log(nodeParentDiv.style.transform);
                        leftDiff1=(centerPoint1[0]-parseFloat(this.style.marginLeft.replace('vh',''))-parseFloat(this.style.width.replace('vh',''))/2);
                        topDiff1=(centerPoint1[1]-parseFloat(this.style.marginTop.replace('vh',''))-parseFloat(this.style.height.replace('vh',''))/2);
                        nodeParentDiv.style.transform='translate('+leftDiff1+'vh,'+topDiff1+'vh)';  
                        //node.nodeL3[tempIndex1][tempIndex2].style.opacity=1;
                        node.nodeL3[tempIndex1][tempIndex2].style.transform='scale(7.4)';
                        node.nodeL3[tempIndex1][tempIndex2].style.zIndex='1';
                        node.nodeL2[tempIndex1].style.transform='scale(0.5)';
                        this.innerHTML='<image class="slideImage" src="Image/'+nodeHTMLDataFinal[tempIndex1][tempIndex2]+'" width="100%">';
                        this.style.padding='0.1vh';
                        this.style.backgroundImage='linear-gradient(transparent,transparent)';
                        this.style.boxShadow='0.0vh 0.0vh 0vh 0.0vh rgb(0 0 0 / 28%)';
                            for(q=0;q<node.nodeL3[tempIndex1].length;q++){
                                if(q!=tempIndex2){
                                    node.nodeL3ClickState[tempIndex1][q]=1;
                                    //node.nodeL3[tempIndex1][q].style.opacity=0.5;
                                    node.nodeL3[tempIndex1][q].style.transform='scale(0.5)';
                                    
                                }
                            }
                    
                        
                    }
                    else{
                        //console.log(nodeParentDiv.style.transform);
                        this.innerHTML=nodeHTMLDataInitial[tempIndex1][tempIndex2];
                        this.style.padding='1vh';
                        this.style.backgroundImage='linear-gradient(#10dca3,#3988fa)';
                        this.style.boxShadow='0.0vh 0.0vh 1vh 0.5vh rgb(0 0 0 / 28%)';
                        nodeParentDiv.style.transform=l2TransformData.toString();
                        node.nodeL2[tempIndex1].style.transform='scale(0.8)';
                        for(q=0;q<node.nodeL3[tempIndex1].length;q++){
                            node.nodeL3[tempIndex1][q].style.transform='scale(1.0)';
                            node.nodeL3[tempIndex1][q].style.zIndex='0';
                            if(q!=tempIndex2){
                                node.nodeL3ClickState[tempIndex1][q]=1;
                                //node.nodeL3[tempIndex1][q].style.opacity=1;
                                
                            }
                        }
                        
                    }
                    node.nodeL3ClickState[tempIndex1][tempIndex2]+=1;
                }
                

            }

        }
    }
}








document.getElementById('crossButton').onclick=function(){
    //console.log('finish');
    dsBridge.call("byjus.sendExploreUIEvent", {

        tag: "finish",

        data: ""

    });
}


