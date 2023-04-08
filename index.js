//------nav bar-+-------+-------
  document.querySelector('.bar-click').addEventListener('click', function(){
    const sideBar = document.querySelector('.side-bar')
    sideBar.classList.toggle('side-bar-active')
  })
  document.querySelector('.bar').addEventListener('click',function(){
    const sideBar = document.querySelector('.side-bar')
    sideBar.classList.toggle('side-bar-active')
  })





	const searchButton = document.querySelector('.serch-button');
	searchButton.addEventListener('click', async function() {
  try {
  const inputKeyword = document.querySelector('.input-keyword');
  const musics = await getMusic(inputKeyword.value);
  if (musics.length == 0) {
    const songBox = document.querySelector(".songs");
	songBox.innerHTML = `<h1 style="text-align: center; padding-block:10vh;">search not found</h1>`;
  }else {
  updateUI(musics);
  }
  } catch (e) {
    console.log(e);
  }
  
});
	
	
	
	function getMusic(keyword){
    const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '2cc54ee2d4mshbe5cb9150f2cf5ep1da1b7jsneb1d6682c7f0',
		  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	  }
  };
  return fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${keyword}`, options)
	  .then(response => response.json())
	  .then(response => response.data)
	  .catch(err => console.error(err));
	
	  }
	  
  document.addEventListener('click', async function(e){
  if (e.target.classList.contains('horizontal-menu-button')) {
    const key = e.target.dataset.keyword
    const musics = await getMusic(key);
    updateUI(musics);
    }
  });
	
  function updateUI(musics) {
  let songs = '';
    musics.forEach(m => songs += showList(m));
	const songBox = document.querySelector(".songs");
	songBox.innerHTML = songs;
}
	
document.addEventListener('click', async function(e){
  if (e.target.classList.contains('song-click')) {
    const m = e.target.dataset.id.split(',');
    playmusic(m)

  }
});
	
	
	function playmusic(m) {
	  const play = document.querySelector('.audios')
	  play.innerHTML = audio(m);
	  const player = document.querySelector('#myAudio')
	  player.play()
	  
  
	  
	  
const toggleClick = document.querySelector('.toggle')
toggleClick.addEventListener('click', function(){
  const musicPlayer = document.querySelector('.music-player');
  const musicImg = document.querySelector('.music-img')
  const musicInfo = document.querySelector('.music-info')
  const musicTitle = document.querySelector('.music-title')
  const musicArtist = document.querySelector('.music-artist')
  const myAudio = document.querySelector('.myAudio')
  const musicDetail = document.querySelector('.music-detail')
  const arrow = document.querySelector('.arrow')
 
  arrow.classList.toggle('arrow-active')
  musicPlayer.classList.toggle('music-player-active');
  musicImg.classList.toggle('music-img-active');
  musicInfo.classList.toggle('music-info-active');
  musicTitle.classList.toggle('music-title-active');
  musicArtist.classList.toggle('music-artist-active');
  myAudio.classList.toggle('myAudio-active');
  musicDetail.classList.toggle('music-detail-active');
  
  
})
	}
	
	
	
	

  // ---------music player---------



	function showList(m) { 
	  function duration(){
	    const minutes = Math.floor(m.duration / 60)
  const second = m.duration % 60
  return `${minutes}:${second}`
	  }
	return `

	<div class="play song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}"><div class="song-box song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}">
    <div class="song-img song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}">
      <img src="${m.album.cover}" alt="" />
    </div>
    <div class="song-info song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}">
      <div class="song-title song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}">${m.title_short}</div>
      <div class="song-artis song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}">${m.artist.name}</div>
    </div>
    <div class="song-duration song-click" data-id="${[
	    m.title,
	    m.artist.name,
	    m.album.cover_big,
	    m.preview
	]}">${duration()}</div>
  </div></div>`}
  
  function audio(m){
    function tooLong(title){
      if (title.length > 22) {
        return title.split('').slice(0, 20).join('') + '...'
      }
      else{
        return title
      }
    }
    return `
  
  <div class="music-player toggle">
  <div class="arrow">
    
    <i class="fa-solid fa-arrow-right fa-rotate-180 arrow"></i>
  </div>
    <div class="music-img ">
      <img src="${m[2]}" alt="" />
    </div>
    <div class="music-info ">
      <div class="music-title ">${tooLong(m[0])}</div>
      <div class="music-artist "><b>${tooLong(m[1])}</b></div>
    </div>
    <div class="music-detail">
      <audio id="myAudio" controls="true" class="myAudio">
  <source src="${m[3]}" type="audio/mpeg">
  </audio>
    </div>
  </div>
</div>`
  }
  

