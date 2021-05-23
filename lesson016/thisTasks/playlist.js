function Song(name, artist) {
  this.name = name;
  this.artist = artist;
}

function Playlist() {
  this.array = [];
  this.currentSong = [];
  this.isPlaying;
  this.add = function (song) {
    this.array.push(song);
  };
  this.play = function (i) {
    return (
      this.currentSong.push(this.array[i]),
      (this.isPlaying = true),
      console.log(`${this.currentSong} started to play `)
    );
  };
  this.stop = function () {
    console.log(`${this.currentSong} stopped  playing `);
    return (this.isPlaying = false);
  };
  this.next = function () {
    return (
      (this.isPlaying = true),
      this.currentSong.push(this.array[this.currentSong.length]),
      console.log(
        `${this.currentSong[this.currentSong.length - 1]} started to play `
      )
    );
  };
}

let heyJude = new Song("Hey Jude", "The Beatles");
let jaded = new Song("Jaded", "Aerosmith");
let playlist = new Playlist();
playlist.add(heyJude.name);
playlist.add(jaded.name);

// console.log(playlist.array);
playlist.play(0);
// console.log(playlist.isPlaying);
playlist.stop();
// console.log(playlist.isPlaying);
playlist.next();
