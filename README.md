# itune-sampler
A fun challenge (and also the first skill check) to use strictly JQUERY, Javascript, HTML, and CSS to render an artist, album, or song to the view with a simple HTML5 media player to play a sample of each song.

The first thing I had to focus on was adding the correct information to the screen. I had to do this through the `drawSongs` function that has already been setup in app.js. 
it looked something like this...

``` function drawSongs(songList){
  var results = document.getElementById('results');
  console.log(songList); ```

The second was writing a Getter function that would retrieve the search results from the Itunes library API. I was able to notice that sending a normal http request in a promise would not return any results, so with the help of my teacher, we had to push up a js file to fix the issue. the js file would use the school's heroku web adress to precede the itunes api, using the `encodeURIComponent` function for the itunes API to accept our requests. We were provided a promise to use to handle the songs sent back, it starts with the `getJSON` function with the parameter of the ajoined heroku adress and the URI encoded itunes adress, then returning a new variable `songList` that uses the `.map` method to create a prototype object for each song in the list.
At this point in time, I think I barely began to scratch the surface of learning http requests and defining promises, haha good times.

It was my responsibility to update the `drawSongs function` so the user could actually see the data that is returned from the itunes service. This was part of my intro to using for Loops some-what reliogiusly for the next three months and probably every technical interview I will have for the next 5 years of my life. Here is what I came up with : 

```function drawSongs(songList){
  var results = document.getElementById('results');
  console.log(songList);
  var songs = ''
  for (var i = 0; i < songList.length; i++){
  var currentSong = songList[i];```

  Then using JQUERY I had an awesome time hard coding the HTML of each song 

  ```songs += '<tr><td>' + currentSong.title +'</td><td>'+ currentSong.artist + '</td><td>'+ currentSong.collection +'</td><td><audio controls src=' + currentSong.preview + '></audio></td><td><img src='+ currentSong.albumArt + '>' + '</td><td>'+ "$" + currentSong.price +'</td></tr>'; ```
  
  followed by defining my results as songs 

   ```results.innerHTML = songs; ```

I had an issue immedeatly after clicking on the media player where every song would play at the same time, honestly i cant remeber what kind of element I was trying to use to play the sample through, but I got a kick out of being the first person to pull down results to the page, AND accidentally scare the 5 people surronding me with the volume on my computer turned all the way up and playing 50 songs at the same time.

