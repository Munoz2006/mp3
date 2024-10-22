const playList = [
    {
      title: 'Sexo con Cristina',
      artist: 'Anuel AA',
      img: 'assets/image/anuel.jpg',
      ruta: 'assets/music/y2mate.com - Anuel AA  Sexo Con Cristina Official Audio.mp3'
    },
    {
      title: 'Tiro Tiro',
      artist: 'Ilan Amores',
      img: 'assets/image/tirotiro.jpg',
      ruta: 'assets/music/y2mate.com - Ilan Amores  Tiro Tiro feat Damas Gratis Video Oficial.mp3'
    },
    {
      title: 'Pretextos',
      artist: 'Maluma',
      img: 'assets/image/pretextos.jpg',
      ruta: 'assets/music/y2mate.com - Maluma  Pretextos Cover Audio ft Cosculluela.mp3'
    },
    {
      title: 'Perros',
      artist: 'Moebiuz',
      img: 'assets/image/la grasa.jpg',
      ruta: 'assets/music/y2mate.com - Perros.mp3'
    },
    {
      title: 'La resaka',
      artist: 'SuperMerk2',
      img: 'assets/image/superM.jpg',
      ruta: 'assets/music/y2mate.com - SuperMerk2  La resaka Remastered 2023 Audio.mp3'
    },
  ]
  
  let indiceActual = 0;
  
  const audio = document.getElementById('audio');
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const former = document.getElementById('former')
  const forward = document.getElementById('forward');
  const rewind = document.getElementById('rewind');
  const following = document.getElementById('following')
  const stop = document.getElementById('stop');
  const audioSource = document.getElementById("audioSource");
  const songName = document.getElementById("songName");
  const imagen = document.getElementById("img")
  const artista = document.getElementById('artist')
  
 
  cargarCancion(indiceActual);
  
  
  function cargarCancion(indice) {
    songName.textContent = playList[indice].title;
    artista.textContent = playList[indice].artist
    imagen.src = playList[indice].img;
    audioSource.src = playList[indice].ruta;
    audio.load();
  }
  

  play.addEventListener('click', () => audio.play());
  
  pause.addEventListener('click', () => audio.pause());
  
  rewind.addEventListener('click', () => audio.currentTime = Math.max(0, audio.currentTime - 10));
  
  forward.addEventListener('click', () => audio.currentTime += 10);
  
  stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
  });
  
 
  following.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % playList.length;
    cargarCancion(indiceActual); 
    audio.play(); 
  })
  
  
  former.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + playList.length) % playList.length; 
    cargarCancion(indiceActual); 
    audio.play();
  })
  

  audio.addEventListener('ended', () => {
    indiceActual = (indiceActual + 1) % playList.length; 
    cargarCancion(indiceActual);
    audio.play(); 
  });