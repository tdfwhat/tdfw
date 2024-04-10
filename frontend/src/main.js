const video = document.getElementById('backdrop-video');

video.onplay = function() {
  video.classList.remove('opacity-0');
  video.classList.add('animate-fade-in');
};

for (var source of video.children) {
  if (source.tagName === "SOURCE") {
    source.src = source.dataset.src;
  }
}

video.load();