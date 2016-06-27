
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


function drawSongs(songList){
  var results = document.getElementById('results');
  console.log(songList);
  var songs = ''
  for (var i = 0; i < songList.length; i++){
  var currentSong = songList[i];
  
  songs += '<tr><td>' + currentSong.title +'</td><td>'+ currentSong.artist + '</td><td>'+ currentSong.collection +'</td><td><audio controls src=' + currentSong.preview + '></audio></td><td><img src='+ currentSong.albumArt + '>' + '</td><td>'+ "$" + currentSong.price +'</td></tr>';
  console.log(currentSong[i])
  // var row = table.insertRow([i])
  }
  results.innerHTML = songs;
}