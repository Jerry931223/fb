document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const searchInput = document.getElementById('search');
    const reloadButton = document.getElementById('reload');
    
    const videos = [
        {
            title: '瑪卡巴卡',
            thumbnail: 'picture/瑪卡巴卡.jpg',
            url: 'video/瑪卡巴卡.mp4'
        },
        {
            title: '把拔哩幹你娘還我甜甜圈',
            thumbnail: 'picture/把拔哩幹你娘還我甜甜圈.jpg',
            url: 'video/把拔哩幹你娘還我甜甜圈.mp4'
        },
        {
            title: '米奇是我是你爹',
            thumbnail: 'picture/米奇是我是你爹.jpg',
            url: 'video/米奇是我是你爹.mp4'
        },
        {
            title: '哭啊你媽死了',
            thumbnail: 'picture/哭啊你媽死了.jpg',
            url: 'video/哭啊你媽死了.mp4'
        },
        {
            title: '牟耳機',
            thumbnail: 'picture/牟耳機.jpg',
            url: 'video/牟耳機.mp4'
        },
        {
            title: '飛天麥可-夜市人生',
            thumbnail: 'picture/飛天麥可-夜市人生.jpg',
            url: 'video/飛天麥可-夜市人生.mp4'
        },
        {
            title: '你是麻糬',
            thumbnail: 'picture/你是麻糬.jpg',
            url: 'video/你是麻糬.mp4'
        },
        {
            title: '瑪卡巴卡',
            thumbnail: 'picture/瑪卡巴卡.jpg',
            url: 'video/瑪卡巴卡.mp4'
        },
        {
            title: '把拔哩幹你娘還我甜甜圈',
            thumbnail: 'picture/把拔哩幹你娘還我甜甜圈.jpg',
            url: 'video/把拔哩幹你娘還我甜甜圈.mp4'
        },
        {
            title: '米奇是我是你爹',
            thumbnail: 'picture/米奇是我是你爹.jpg',
            url: 'video/米奇是我是你爹.mp4'
        },
        {
            title: '哭啊你媽死了',
            thumbnail: 'picture/哭啊你媽死了.jpg',
            url: 'video/哭啊你媽死了.mp4'
        },
        {
            title: '牟耳機',
            thumbnail: 'picture/牟耳機.jpg',
            url: 'video/牟耳機.mp4'
        },
        {
            title: '飛天麥可-夜市人生',
            thumbnail: 'picture/飛天麥可-夜市人生.jpg',
            url: 'video/飛天麥可-夜市人生.mp4'
        },
        {
            title: '你是麻糬',
            thumbnail: 'picture/你是麻糬.jpg',
            url: 'video/你是麻糬.mp4'
        },
        {
            title: '瑪卡巴卡',
            thumbnail: 'picture/瑪卡巴卡.jpg',
            url: 'video/瑪卡巴卡.mp4'
        },
        {
            title: '把拔哩幹你娘還我甜甜圈',
            thumbnail: 'picture/把拔哩幹你娘還我甜甜圈.jpg',
            url: 'video/把拔哩幹你娘還我甜甜圈.mp4'
        },
        {
            title: '米奇是我是你爹',
            thumbnail: 'picture/米奇是我是你爹.jpg',
            url: 'video/米奇是我是你爹.mp4'
        },
        {
            title: '哭啊你媽死了',
            thumbnail: 'picture/哭啊你媽死了.jpg',
            url: 'video/哭啊你媽死了.mp4'
        },
        {
            title: '牟耳機',
            thumbnail: 'picture/牟耳機.jpg',
            url: 'video/牟耳機.mp4'
        },
        {
            title: '飛天麥可-夜市人生',
            thumbnail: 'picture/飛天麥可-夜市人生.jpg',
            url: 'video/飛天麥可-夜市人生.mp4'
        },
        {
            title: '你是麻糬',
            thumbnail: 'picture/你是麻糬.jpg',
            url: 'video/你是麻糬.mp4'
        },


        // 其他影片
    ];

    function renderVideos(videosToRender) {
        videoList.innerHTML = ''; // 清空列表
        videosToRender.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.classList.add('video');

            const thumbnail = document.createElement('img');
            thumbnail.src = video.thumbnail;
            thumbnail.alt = video.title;

            const title = document.createElement('h2');
            title.textContent = video.title;

            const link = document.createElement('a');
            link.href = video.url;
            link.target = '_blank';
            link.appendChild(thumbnail);

            videoElement.appendChild(link);
            videoElement.appendChild(title);

            videoList.appendChild(videoElement);
        });
    }

    function filterVideos() {
        const query = searchInput.value.toLowerCase();
        const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
        renderVideos(filteredVideos);
    }

    searchInput.addEventListener('input', filterVideos);

    // 添加點擊事件監聽器來重新載入頁面
    reloadButton.addEventListener('click', () => {
        location.reload();
    });

    // 初始渲染所有影片
    renderVideos(videos);
});
