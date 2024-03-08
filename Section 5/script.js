function onClick(event){
    console.log(event);
    console.log('click');
    console.log(event.target);
    event.target.style.color='red';

    if(event.altKey){
        event.target.style.color='green';
    }
    if(event.ctrlKey){
        event.target.style.color='yellow';

    }
    if(event.shiftKey){
        event.target.style.color='blue';
    }  
}
function theEvent(event){
    console.log(event);
    if(event.type=='focus'){
        event.target.style.backgroundColor='blue';
    }
}
function hoverEffect(e,active){
    console.log(active,e);
    if(active){
        e.target.style.backgroundColor='white';
        return;
    }
    e.target.style.backgroundColor='red';
}

function goSearch(event){

    if(event.keyCode==13){
        console.log('enter');
        search();
    }
}
function search(){
    console.log(searching);
    var searching='i am searching';
    setInterval(function(){
        searching+='.';
        document.querySelector('h3').innerHTML=searching;
    },500);
}

document.querySelector('#middle').addEventListener('click',function(e){
    alert('Πατησες το middle button');
    console.log(e);
})

document.querySelector('#middle').addEventListener('click',onClick);
document.querySelector('body').addEventListener('contextmenu',function(e){
    console.log(e);
    e.preventDefault();
})
