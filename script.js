console.log("Welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('songs/01.mp3');
let masterPlay= document.getElementById('masterPlay');
let MyProgressbar= document.getElementById('MyProgressbar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Ubhaya", filePath: "songs/01.mp3",coverPath: "covers/01.jpeg"},
    {songName: "Naa Roja Nuvve", filePath: "songs/02.mp3",coverPath: "covers/02.jpg"},
    {songName:"Inthandham", filePath: "songs/03.mp3",coverPath: "covers/03.jpeg"},
    {songName:"Gullabi kallu", filePath: "songs/04.mp3",coverPath: "covers/04.jpeg"},
    {songName:"Ubhaya", filePath: "songs/01.mp3",coverPath: "covers/01.jpeg"},
    {songName:"Naa Roja Nuvve", filePath: "songs/02.mp3",coverPath: "covers/02.jpg"},
    {songName:"Inthandham", filePath: "songs/03.mp3",coverPath: "covers/03.jpeg"},
    {songName:"Gullabi kallu", filePath: "songs/04.mp3",coverPath: "covers/04.jpeg"},
    {songName:"Ubhaya", filePath: "songs/01.mp3",coverPath: "covers/01.jpeg"},
    {songName:"Naa Roja Nuvve", filePath: "songs/02.mp3",coverPath: "covers/02.jpg"},
    {songName:"Inthandham", filePath: "songs/03.mp3",coverPath: "covers/03.jpeg"},
    {songName:"Gullabi kallu", filePath: "songs/04.mp3",coverPath: "covers/04.jpeg"},
   
]
songItems.forEach((element , i)=> {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
});

//audioElement.play();
//Handle Play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
} )
//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update Seekbar
    progress= parseInt( (audioElement.currentTime/audioElement.duration)*100);
    
    MyProgressbar.value=progress;
})
MyProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = MyProgressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       // element.classlist.remove('fa-pause-circle');
        // element.classlist.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
       

        

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
         makeAllPlays();
      
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/${songIndex+1}.mp3'; 
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime= 0; 
        audioElement.play();
        gif.style.opacity=1;
    
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>11){
        songIndex=0;
    }
    else{
    songIndex +=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3'; 
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex -=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3'; 
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
