const img = document.querySelectorAll(".image img")
let index=0;
var u=document.querySelectorAll('.symbol2 i')
var a=function test()
{
    if(index==0)
    {
        u[0].style.fontSize=16+"px"
        u[0].style.opacity=0.7 
    }
    index=index+1;
    if(index>img.length-1)
    {
        index=0
        u[u.length-1].style.fontSize=13+"px"
        u[u.length-1].style.opacity=0.3 
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7
    }
    if(index>0){
    document.querySelector('.image').style.right=index * 100+"%"
    u[index-1].style.fontSize=13+"px"
    u[index -1].style.opacity=0.3
    u[index].style.fontSize=16+"px"
    u[index].style.opacity=0.7 
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
}
}
var b=function test()
{
    if(index==0)
    {
        u[0].style.fontSize=16+"px"
        u[0].style.opacity=0.7 
    }
    index=index-1;
    if(index<0)
    {
        index=img.length-1
        u[0].style.fontSize=13+"px"
        u[0].style.opacity=0.3 
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7
    }
    document.querySelector('.image').style.right=index * 100+"%"
    if(index<img.length-1){
    u[index+1].style.fontSize=13+"px"
    u[index +1].style.opacity=0.3
    u[index].style.fontSize=16+"px"
    u[index].style.opacity=0.7 
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
}
}
var z= function autoimg()
{
    if(index>img.length-1)
    {
        index=0;
        u[u.length-1].style.fontSize=13+"px"
        u[u.length-1].style.opacity=0.3 
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7
    }
    if(index==0)
    {
        u[0].style.fontSize=16+"px"
        u[0].style.opacity=0.7 
    }
    if(index>0)
    {
        u[index-1].style.fontSize=13+"px"
        u[index -1].style.opacity=0.3
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7  
    }
    document.querySelector('.image').style.right=index*100+"%"
    index+=1;
}
var c=function click1()
{
    document.querySelector('.image').style.right=0*100+"%"
    index=0
    u[0].style.fontSize=16+"px"
    u[0].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
var d=function click2()
{
    document.querySelector('.image').style.right=1*100+"%"
    index=1
    u[1].style.fontSize=16+"px"
    u[1].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
    
}
var e=function click3()
{
    document.querySelector('.image').style.right=2*100+"%"
    index=2
    u[2].style.fontSize=16+"px"
    u[2].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
var f=function click4()
{
    document.querySelector('.image').style.right=3*100+"%"
    index=3
    u[3].style.fontSize=16+"px"
    u[3].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
var g=function click5()
{
    document.querySelector('.image').style.right=4*100+"%"
    index=4
    u[4].style.fontSize=16+"px"
    u[4].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
setInterval(z,5000)
var nut=0
var hide= function hide1(){
   
   if(nut==0) {document.getElementById("test").style.display="block" ;nut=1;return}
   if(nut==1) {document.getElementById("test").style.display="none" ;nut=0;return}
}
var VNicon=document.getElementById("VNicon")
var ENicon = document.getElementById("ENicon")
var VN = document.getElementsByClassName("VN")
var EN = document.getElementsByClassName("EN")
VNicon.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        EN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        VN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconVN.png"
})
ENicon.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        VN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        EN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconE.png"
})
var searchbox=document.getElementById("searchbox")
var congtac=0
searchbox.addEventListener('click',function(){
    if(congtac==0){document.querySelector(".display").style.display="flex";congtac=1;return}
    if(congtac==1){document.querySelector(".display").style.display="none";congtac=0;return}
})
const product = document.querySelectorAll(".containerComics div")
let count=0;
var goleft =function gotoleft()
{
    count-=1;
    if(count<0)
    {
       count=0; 
    }
    document.querySelector(".containerComics").style.right=count*190.5+"px";
}
var goright =function gotoright()
{
    count+=1;
    if(count>product.length-1)
    {
        count=product.length-1
    }
    document.querySelector(".containerComics").style.right=count*190.5+"px";
}
var product_search_list = document.querySelectorAll(".product_search")
var tb=document.querySelectorAll("#sl")
var search = function search1()
{
    var input_value = document.getElementById("searchbox").value;
    var input_value_legit = input_value.toLowerCase()
    if(input_value_legit.length==0) {
        for(var i=0;i<product_search_list.length;i++)
        {
            product_search_list[i].style.display="none"
        }
        tb[0].innerHTML='0'
        tb[1].innerHTML='0'
    }
    else
{
    let count2=0
    for(var i=0;i<product_search_list.length;i++)
    {
        var check=product_search_list[i].textContent.toLowerCase()
        if(check.indexOf(input_value_legit)>-1)
        {
            product_search_list[i].style.display="flex"
            count2+=1
        }
        if(check.indexOf(input_value_legit)<0){
            product_search_list[i].style.display="none"
        }
    }
    tb[0].innerHTML=count2
    tb[1].innerHTML=count2
}
}







