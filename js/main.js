// turn that counts the chances
var turn=1;
let computerPlay=document.getElementById('computer');
let personPlay=document.getElementById('person');
let player1;
let player2;
let isComputerPlaying=false;
let winnerDeclared=false;

// Player object
function Player(name)
{
    this.name=name;
}

personPlay.addEventListener('click',function(){
    document.querySelector('.buttons').style.display='none';
    document.querySelector('.play').style.display='block';
    let play1=window.prompt('enter name of player1');
    console.log(play1);
    player1=new Player(play1);
    let play2=window.prompt('Enter Name of player2');
    player2=new Player(play2);
    console.log(player2.name);
}
)

computerPlay.addEventListener('click',function(){
    document.querySelector('.buttons').style.display='none';
    document.querySelector('.play').style.display='block';
    let play1=window.prompt('Enter Name of player');
    console.log(play1);
    player1=new Player(play1);
    player2=new Player('computer');
    isComputerPlaying=true;
})

//var player1=window.prompt('enter name of player 1');
//var player2=window.prompt('enter name of player 2');

//function to check the winner after every attempt made by user
function checkwinner(){
    var data=[];
    let i=1;
    while(i<10)
    {
        data.push(document.getElementById(`${i}`).value);
        i++;
    }
    if(data[0]==data[1] && data[1]==data[2] && data[0]!='')
    {
        return true;
    }
    else if(data[1]==data[4] && data[4]==data[7] && data[1]!='')
    {
        return true;
    }
    else if(data[2]==data[5] && data[5]==data[8] && data[2]!='')
    {
        return true;
    }
    else if(data[3]==data[4] && data[4]==data[5] && data[3]!='')
    {
        return true;
    }
    else if(data[6]==data[7] && data[7]==data[8] && data[6]!='')
    {
        return true;
    }
    else if(data[0]==data[3] && data[3]==data[6] && data[0]!='')
    {
        return true;
    }
    else if(data[0]==data[4] && data[4]==data[8] && data[0]!='')
    {
        return true;
    }
    else if(data[2]==data[4] && data[4]==data[6] && data[2]!='')
    {
        return true;
    }
    else{
        if(turn==10)
        {
            document.getElementById('winner-declaration').innerHTML='no one wins';
            winnerDeclared=true;
        }
            
    }
    return false;

}

function checker(){
    if(turn>=6)
    {
        if(checkwinner())
        {
            if(turn%2!=0)
            {
                document.getElementById('winner-declaration').innerHTML=`${player2.name} is the winner`;
                winnerDeclared=true;
                return true;
            }
            else{
                document.getElementById('winner-declaration').innerHTML=`${player1.name} is the winner`;
                winnerDeclared=true;
                return true;
            }
            
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}


//filling the field of tic-tac-toe
function fillField(x){
    if(winnerDeclared===true){
        window.alert('result is declared already!!');
        return;
    }
    console.log(turn);
    //console.log(x.getAttribute('data'));
    if(x.getAttribute('data')=='vacant')
    {
        if(turn%2!=0)
        {
            
            player1Fill(x);
            
            
        }
        else{
            player2Fill(x);
           
        }
        
    }
    else{
        window.alert('its filled');
    }
    //checker();
}

async function player1Fill(x){

    x.value='X';
    x.setAttribute('data','filled');
    //setTimeout(1000);
    turn++;
    let res=checker();

    if(res===false)
    {
        if(isComputerPlaying==true)
        {
            computerFill();
            checker();
        }
    }
}

function player2Fill(x){
    x.value='0';
    x.setAttribute('data','filled');
    turn++;
    checker();
}

//fill by computer

function computerFill(){
    console.log(turn);
    while(true)
    {
        let number=Math.floor(Math.random()*9)+1;
        if(document.getElementById(`${number}`).getAttribute('data')=='vacant')
        {
            (document.getElementById(`${number}`).value='0');
            document.getElementById(`${number}`).setAttribute('data','filled');
            break;
        }
        
    }
    turn++;
}

function reset()
{
    var count=1;
    while(count<10)
    {
    
        document.getElementById(`${count}`).value="";
        document.getElementById(`${count}`).setAttribute('data','vacant');
        count++;
    }
    document.getElementById('winner-declaration').innerHTML='';
    turn=1;
    winnerDeclared=false;
}

function newgame(){
    reset();
    document.querySelector('.play').style.display='none';
    document.querySelector('.buttons').style.display='block';
}
