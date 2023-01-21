function loader() {
  let loader = document.getElementById('loader');
  let loader_count = document.getElementById('loader_count');
  let box_expanding = document.getElementById('box_expanding');
  let background_gradient = document.getElementById('background_gradient');
  let background_white = document.getElementById('background_white');
  let box_counter = document.getElementById('box_counter');

  loader.style.display = 'flex';
  loader_count.style.animationPlayState = 'running';

  setInterval(() => {
      if (pokemonNames.length == sliderRange[0]) {

      setTimeout(() => {
        box_expanding.style.animationPlayState = 'running';
        loader_count.style.animationIterationCount = 'inherit';
      }, 2200);

      setTimeout(() => {
        loader_count.style.animationPlayState = 'paused';
        background_white.style.animationPlayState = 'running';
        box_counter.style.animationPlayState = 'running';
      }, 1900);

      setTimeout(() => {
        background_gradient.style.animationPlayState = 'running';
      }, 2400);

      setTimeout(() => {
        loader.style.display = 'none';
      }, 5000);

      }    
  }, 100);
}


function fetchLoader() {

  let fetch_loader = document.getElementById('fetch_loader');
  let loader_counter_fetch = document.getElementById('loader_counter_fetch');
  let pokeball_loader = document.getElementById('pokeball_loader');

  fetch_loader.style.display = 'flex';
  loader_counter_fetch.style.animationPlayState = 'running';
  pokeball_loader.style.animationPlayState = 'running';

  setInterval(() => {
    if (pokemonNames.length == sliderRange[0]) {
      loader_counter_fetch.style.animationIterationCount = 'inherit';
      loader_counter_fetch.style.animationPlayState = 'paused';
      pokeball_loader.style.animationIterationCount = 'inherit';

      setTimeout(() => {
        loader_counter_fetch.style.animationPlayState = 'paused';
        pokeball_loader.style.animationPlayState = 'paused';
        fetch_loader.style.display = 'none';
      }, 1600);
  
    }    
}, 100);
}