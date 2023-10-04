// Youtube Video player
const videosContainer =  document.getElementById('videosContainer');
const videoIdInput = document.getElementById('videoId');
const popup = document.getElementById('popup');
const videoEl = document.querySelector('#popup > iframe');
let youtubeVideoIds = [];

const loadVideos = () => {
   youtubeVideoIds = JSON.parse(localStorage.getItem('youtubeVideoIds')) || [];
};

const displayVideos = () => {
    const videosHTMLString = youtubeVideoIds
    .map(
        (id) => `
        <li onclick="clickvideo(event, '${id}')">
          <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt="Cover image 
          for YouTube video with id ${id}">
          <button class="delete-btn" > &times;</button>
          </li>`  
    )
    .join('');
    videosContainer.innerHTML = videosHTMLString;
};

const clickvideo = (event, id) => {
    console.log(event, id);
    if (event.target.classList.contains('delete-btn')) {
        youtubeVideoIds = youtubeVideoIds.filter(i => i !== id);
        console.log(youtubeVideoIds);
        localStorage.setItem('youtubeVideoIds', JSON.stringify(youtubeVideoIds));
        displayVideos();
    } else {
        videoEl.src = `https://www.youtube.com/embed/${id}`;
        popup.classList.add('open');
        popup.classList.remove('closed');
    }
};


const saveVideo = (e) => {
    e.preventDefault();
    const videoId = videoIdInput.value;
    youtubeVideoIds.unshift(videoId);
    videoIdInput.value = '';
    localStorage.setItem('youtubeVideoIds', JSON.stringify(youtubeVideoIds));
    displayVideos();
};

const handlePopupClick = () => {
    popup.classList.add('closed');
    popup.classList.remove('open');
}

loadVideos();
displayVideos();

