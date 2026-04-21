// ==================== CONFIGURATION ====================

const CONFIG = {
    siteTitle: "TMCLibrary",
    baseUrl: "https://cybertmc.github.io/TMCLibrary",
    
    // Code snippets data
    codes: [
        {
            id: "1",
            title: "Hẹn hò nhưng không yêu",
            description: "Code Python hiển thị lời bài hát với hiệu ứng màu sắc đẹp mắt và chuyển động mượt mà. Phù hợp cho người mới học Python.",
            lang: "Python",
            tags: ["music", "lyrics", "colorful"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7574464770758216967",
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/V4JZi6", icon: "fas fa-code"},
            ]
        },
        {
            id: "2",
            title: "Không Buông",
            description: "Code Python hiển thị lời bài hát với hiệu ứng chữ màu đỏ ấn tượng. Sử dụng thư viện chuẩn, không cần cài đặt thêm.",
            lang: "Python",
            tags: ["music", "lyrics", "red theme"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7565953044748242184",
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/NdMbUs", icon: "fas fa-code"},
            ]
        },
        {
            id: "3",
            title: "Địa ngục trần gian",
            description: "Code Python với hai phiên bản: có pygame cho hiệu ứng âm thanh và không cần pygame cho chạy đơn giản.",
            lang: "Python",
            tags: ["pygame", "music", "dual version"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7558938762890235144",
            links: [
                {name: "Phiên bản có pygame", url: "https://ideone.com/CilekQ", icon: "fas fa-gamepad"},
                {name: "Phiên bản đơn giản", url: "https://ideone.com/8VPwtG", icon: "fas fa-code"},
            ]
        },
        {
            id: "4",
            title: "Vì yêu cứ đâm đầu",
            description: "Code Python hiển thị lời bài hát với hiệu ứng độc đáo, phù hợp cho các dự án nhỏ về xử lý văn bản.",
            lang: "Python",
            tags: ["music", "lyrics", "special effect"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7561892204461952274",
            links: [
                {name: "Tải code từ Google Drive", url: "https://drive.google.com/file/d/1F-trIYKzWzQhepqc-2f3JApdb2WGwp16/view", icon: "fas fa-download"},
            ]
        },
        {
            id: "5",
            title: "Ngày này năm ấy",
            description: "Code Python với hai phiên bản hỗ trợ âm thanh (cần pygame) và không âm thanh cho máy tính cấu hình thấp.",
            lang: "Python",
            tags: ["pygame", "audio", "dual version"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7552594723551087880",
            links: [
                {name: "Phiên bản có âm thanh", url: "https://ideone.com/w4yj7t", icon: "fas fa-volume-up"},
                {name: "Phiên bản không âm thanh", url: "https://ideone.com/oLJe3U", icon: "fas fa-code"},
            ]
        },
        {
            id: "6",
            title: "Anh vui",
            description: "Code Python hiển thị lời bài hát không cần cài đặt thư viện. Chạy được trên mọi máy tính có Python.",
            lang: "Python",
            tags: ["no library", "simple", "lyrics"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7539988102937447688",
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/GSQ8Xn", icon: "fas fa-code"},
            ]
        },
        {
            id: "7",
            title: "Người đầu tiên",
            description: "Code python hiển thị lời bài hát với hiệu ứng màu sắc lạnh, tạo cảm giác sâu lắng và tinh tế.",
            lang: "Python",
            tags: ["cold colors", "lyrics", "emotional"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7586695262454680840",
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/0JkI9w", icon: "fas fa-code"},
            ]
        },
        {
            id: "8",
            title: "Ai ngoài anh",
            description: "Code Python hiển thị lời bài hát với hiệu ứng màu sắc lãng mạn, phù hợp cho các chương trình tình cảm.",
            lang: "Python",
            tags: ["romantic", "lyrics", "colorful"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7599379786640706834",
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/cCLbHQ", icon: "fas fa-code"},
            ]
        },
        {
            id: "9",
            title: "Valentine 3D - Bản thường & Góc quay",
            description: "Mã nguồn HTML/CSS/JS tạo thiệp Valentine với hiệu ứng 3D. Bao gồm hai phiên bản: bản thường và bản có góc quay camera. Phù hợp để gửi tặng người thương.[tải về nhớ giải nén ra nhé!!]",
            lang: "HTML/CSS/JS",
            tags: ["valentine", "3d", "interactive", "camera"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7612518932695518471",
            links: [
                {name: "Bản thường (Valentine 3D)", url: "https://drive.google.com/file/d/1NLCtfnBtK2i2cIN93PpJKzWxufw48J2W/view?usp=sharing", icon: "fas fa-download"},
                {name: "Bản góc quay camera", url: "https://drive.google.com/file/d/1letI6flSAgs5kwFmWgtxCr9Ko_e4r8a4/view?usp=sharing", icon: "fas fa-video"}
            ]
        },
        {
            id: "10",
            title: "Hoa sữa",
            description: "Code Python hiển thị lời bài hát Hoa sữa với hiệu ứng màu sắc và chuyển động đẹp mắt. Phù hợp cho những ai yêu thích nhạc trữ tình.",
            lang: "Python",
            tags: ["music", "lyrics", "romantic", "slow"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7612675489421004040",  
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/qYTtzr", icon: "fas fa-code"},
            ]
        },
        {
            id: "11",
            title: "Một bài hát không vui mấy X Em mới là người yêu anh",
            description: "Code Python hiển thị lời bài hát với hiệu ứng màu sắc độc đáo",
            lang: "Python",
            tags: ["music", "lyrics"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7631244676732914951",  
            links: [
                {name: "Xem code trên Ideone", url: "https://ideone.com/dnWfZ5", icon: "fas fa-code"},
            ]
        }
    ],
    
    // Music configuration
    music: {
        musicFolder: 'background-music/',
        supportedFormats: ['.mp3', '.ogg', '.wav', '.m4a'],
        defaultVolume: 0.3
    }
};

// ==================== STATE MANAGEMENT ====================

let currentView = 'timeline';
let currentFilter = '';
let currentCodeId = null;
let autoplayAttempts = 0;
const MAX_AUTOPLAY_ATTEMPTS = 5;

// Music state
let musicPlaylist = [];
let currentSongIndex = 0;
let isMusicInitialized = false;

// ==================== DOM ELEMENTS ====================

// Navigation
const searchInput = document.getElementById('searchInput');
const viewControls = document.querySelectorAll('.view-control');

// Content
const codeTimeline = document.getElementById('codeTimeline');
const emptyState = document.getElementById('emptyState');
const totalCodesElement = document.getElementById('totalCodes');
const featuredCodesElement = document.getElementById('featuredCodes');

// Detail Panel
const detailPanel = document.querySelector('.detail-panel');
const panelClose = document.getElementById('panelClose');
const panelTitle = document.getElementById('panelTitle');
const panelDescription = document.getElementById('panelDescription');
const videoSection = document.getElementById('videoSection');
const tiktokVideo = document.getElementById('tiktokVideo');
const codeLinks = document.getElementById('codeLinks');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const shareFacebook = document.getElementById('shareFacebook');
const shareTwitter = document.getElementById('shareTwitter');

// Music Player Elements
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicControls = document.getElementById('musicControls');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const musicStatus = document.getElementById('musicStatus');
const musicPlayer = document.getElementById('musicPlayer');
const currentSongTitle = document.getElementById('currentSongTitle');
const currentSongArtist = document.getElementById('currentSongArtist');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
const progressBar = document.querySelector('.progress-bar');

// ==================== MUSIC PLAYLIST FUNCTIONS ====================

// Load danh sách nhạc từ thư mục background-music
async function loadMusicPlaylist() {
    console.log('🎵 Loading music playlist...');
    
    // ĐÃ SỬA: Thêm dấu phẩy và đầy đủ artist cho tất cả bài hát
    const samplePlaylist = [
        { 
            name: 'Track 06', 
            file: '[ Lyrics ] Track 06 – Tyronee, VSTRA, Obito.mp3', 
            artist: 'Tyronee, VSTRA, Obito' 
        },
        { 
            name: 'Chẳng Phải Tình Đầu Sao Đau Đến Thế', 
            file: 'MIN - chẳng phải tình đầu sao đau đến thế feat. Dangrangto, Antransax (Official Audio).mp3', 
            artist: 'MIN, Dangrangto, Antransax' 
        },
        { 
            name: 'Trời Giấu Trời Mang Đi', 
            file: 'Trời Giấu Trời Mang Đi.mp3', 
            artist: 'Nhạc Trẻ' 
        },
        { 
            name: 'Vẫn Nhớ', 
            file: 'Vẫn Nhớ - Soobin Hoàng Sơn _ Cover.mp3', 
            artist: 'Soobin Hoàng Sơn (Cover)' 
        },
        { 
            name: 'Ai Ngoài Anh', 
            file: 'VSTRA - Ai Ngoài Anh (Official Audio).mp3', 
            artist: 'VSTRA' 
        },
        {
            name: 'Hoa Sữa',
            file: 'Hoa Sữa ( HNT Remix ) __ Hot TikTok 2025 - Audio Lyrics Video.mp3',
            artist: 'HNT Remix'  // ĐÃ SỬA: thêm artist
        },
        {
            name: 'Một bài hát không vui mấy',
            file: 'T.R.I x @Dangrangto x DONAL - một bài hát không vui mấy (extended ver.) _ OFFICIAL LYRICS VIDEO.mp3',
            artist: 'T.R.I x @Dangrangto x DONAL'  // ĐÃ SỬA: thêm artist
        }
    ];
    
    // Tạo playlist từ danh sách mẫu
    musicPlaylist = samplePlaylist.map((song, index) => ({
        id: index + 1,
        title: song.name,
        artist: song.artist,
        url: CONFIG.music.musicFolder + encodeURIComponent(song.file), // ĐÃ SỬA: encode URL
        file: song.file
    }));
    
    console.log(`✅ Loaded ${musicPlaylist.length} songs from playlist`);
    return musicPlaylist;
}

// Chọn bài hát ngẫu nhiên
function getRandomSong() {
    if (musicPlaylist.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * musicPlaylist.length);
    return { song: musicPlaylist[randomIndex], index: randomIndex };
}

// Chọn bài hát khác không trùng với bài hiện tại
function getDifferentRandomSong(currentIndex) {
    if (musicPlaylist.length <= 1) return getRandomSong();
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * musicPlaylist.length);
    } while (newIndex === currentIndex);
    
    return { song: musicPlaylist[newIndex], index: newIndex };
}

// Phát bài hát theo index (ĐÃ SỬA: thêm kiểm tra lỗi)
function playSongByIndex(index) {
    if (!musicPlaylist.length || index < 0 || index >= musicPlaylist.length) {
        console.error('Invalid song index');
        return false;
    }
    
    const song = musicPlaylist[index];
    
    // ĐÃ SỬA: Kiểm tra song và url tồn tại
    if (!song || !song.url) {
        console.error('Song or URL missing for index:', index);
        return false;
    }
    
    currentSongIndex = index;
    
    // Cập nhật source audio
    bgMusic.src = song.url;
    bgMusic.load();
    
    // Cập nhật UI
    currentSongTitle.textContent = song.title || 'Unknown Title';
    currentSongArtist.textContent = song.artist || 'Unknown Artist';
    
    // Phát nhạc
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                updateMusicUI('playing');
                console.log(`🎵 Now playing: ${song.title}`);
            })
            .catch(error => {
                console.log(`❌ Cannot play ${song.title}:`, error.message);
                updateMusicUI('paused');
            });
    }
    
    return true;
}

// Phần còn lại của code giữ nguyên (các hàm khác không bị lỗi)
// ... (tiếp tục với initMusicPlayer, updateMusicUI, v.v.)

// ==================== MUSIC PLAYER FUNCTIONS ====================

// Initialize music player
async function initMusicPlayer() {
    console.log('🎵 Initializing music player...');
    
    // Set initial volume
    if (bgMusic) {
        bgMusic.volume = CONFIG.music.defaultVolume;
        if (volumeSlider) volumeSlider.value = CONFIG.music.defaultVolume * 100;
    }
    
    // Load playlist
    await loadMusicPlaylist();
    
    // Load saved settings
    loadMusicSettings();
    
    // Initially hide controls
    if (musicControls) musicControls.classList.add('hidden');
    
    // Add event listeners cho audio
    if (bgMusic) {
        bgMusic.addEventListener('play', () => {
            updateMusicUI('playing');
            saveMusicSettings();
        });
        
        bgMusic.addEventListener('pause', () => {
            updateMusicUI('paused');
            saveMusicSettings();
        });
        
        bgMusic.addEventListener('ended', () => {
            console.log('🎵 Song ended, playing next random song...');
            playNextRandomSong();
        });
        
        bgMusic.addEventListener('timeupdate', updateProgress);
        
        bgMusic.addEventListener('loadedmetadata', () => {
            if (durationTimeEl) durationTimeEl.textContent = formatTime(bgMusic.duration);
        });
        
        bgMusic.addEventListener('canplaythrough', () => {
            console.log('🎵 Audio loaded successfully');
            if (autoplayAttempts < MAX_AUTOPLAY_ATTEMPTS && bgMusic.paused) {
                attemptAutoplay();
            }
        });
    }
    
    // Chọn bài hát ngẫu nhiên đầu tiên
    if (musicPlaylist.length > 0) {
        playRandomSong();
    }
    
    isMusicInitialized = true;
}

// Hàm thử tự động phát nhạc
function attemptAutoplay() {
    if (!isMusicInitialized || !bgMusic) return;
    
    autoplayAttempts++;
    console.log(`🎵 Autoplay attempt ${autoplayAttempts}/${MAX_AUTOPLAY_ATTEMPTS}`);
    
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('✅ AUTOPLAY SUCCESSFUL!');
                updateMusicUI('playing');
                saveMusicSettings();
                autoplayAttempts = 0;
            })
            .catch(error => {
                console.log(`❌ Autoplay attempt ${autoplayAttempts} failed:`, error.message);
                
                if (autoplayAttempts < MAX_AUTOPLAY_ATTEMPTS) {
                    const delay = autoplayAttempts * 500;
                    console.log(`🎵 Retrying in ${delay}ms...`);
                    setTimeout(() => attemptAutoplay(), delay);
                } else {
                    console.log('🎵 Max autoplay attempts reached, waiting for user interaction');
                    updateMusicUI('paused');
                    showAutoplayNotification();
                }
            });
    }
}

// Format thời gian (giây -> mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Cập nhật thanh tiến trình
function updateProgress() {
    if (!bgMusic || !bgMusic.duration || !progressFill || !currentTimeEl) return;
    const progress = (bgMusic.currentTime / bgMusic.duration) * 100;
    progressFill.style.width = `${progress}%`;
    currentTimeEl.textContent = formatTime(bgMusic.currentTime);
    if (durationTimeEl) durationTimeEl.textContent = formatTime(bgMusic.duration);
}

// Phát bài hát ngẫu nhiên
function playRandomSong() {
    const random = getRandomSong();
    if (random) {
        return playSongByIndex(random.index);
    }
    return false;
}

// Phát bài hát ngẫu nhiên khác
function playNextRandomSong() {
    const next = getDifferentRandomSong(currentSongIndex);
    if (next) {
        return playSongByIndex(next.index);
    }
    return false;
}

// Phát bài trước (ngẫu nhiên)
function playPreviousSong() {
    if (musicPlaylist.length <= 1) {
        return playRandomSong();
    }
    return playNextRandomSong();
}

// Update music UI
function updateMusicUI(state) {
    if (!playPauseBtn) return;
    const playPauseIcon = playPauseBtn.querySelector('i');
    if (!playPauseIcon) return;
    
    if (state === 'playing') {
        playPauseIcon.className = 'fas fa-pause';
        if (musicStatus) {
            musicStatus.textContent = 'playing';
            musicStatus.classList.remove('paused');
        }
    } else {
        playPauseIcon.className = 'fas fa-play';
        if (musicStatus) {
            musicStatus.textContent = 'paused';
            musicStatus.classList.add('paused');
        }
    }
}

// Save music settings
function saveMusicSettings() {
    if (!bgMusic) return;
    const settings = {
        volume: bgMusic.volume,
        isMuted: bgMusic.muted,
        isPlaying: !bgMusic.paused,
        currentSongIndex: currentSongIndex,
        currentTime: bgMusic.currentTime
    };
    localStorage.setItem('tmcMusicSettings', JSON.stringify(settings));
}

// Load music settings
function loadMusicSettings() {
    const saved = localStorage.getItem('tmcMusicSettings');
    if (saved && bgMusic) {
        try {
            const settings = JSON.parse(saved);
            bgMusic.volume = settings.volume || CONFIG.music.defaultVolume;
            bgMusic.muted = settings.isMuted || false;
            if (volumeSlider) volumeSlider.value = (settings.volume || CONFIG.music.defaultVolume) * 100;
            updateVolumeIcon(settings.volume || CONFIG.music.defaultVolume);
            
            if (settings.currentSongIndex !== undefined && musicPlaylist[settings.currentSongIndex]) {
                currentSongIndex = settings.currentSongIndex;
                const song = musicPlaylist[currentSongIndex];
                if (song) {
                    bgMusic.src = song.url;
                    if (currentSongTitle) currentSongTitle.textContent = song.title;
                    if (currentSongArtist) currentSongArtist.textContent = song.artist;
                    
                    if (settings.currentTime) {
                        bgMusic.currentTime = settings.currentTime;
                    }
                }
            }
        } catch (e) {
            console.error('Error loading music settings');
        }
    }
}

// Update volume icon
function updateVolumeIcon(volume) {
    if (!volumeIcon) return;
    if (volume === 0 || (bgMusic && bgMusic.muted)) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}

// Hiển thị thông báo nếu autoplay bị chặn
function showAutoplayNotification() {
    if (!document.querySelector('.autoplay-notice')) {
        const notice = document.createElement('div');
        notice.className = 'autoplay-notice';
        notice.innerHTML = '🔊 Click anywhere to play music';
        notice.style.cssText = `
            position: fixed;
            bottom: 150px;
            right: 80px;
            background: var(--ui-surface, #11141c);
            border: 1px solid var(--terminal-accent, #00ff9d);
            color: var(--terminal-accent, #00ff9d);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.8rem;
            z-index: 9998;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,255,157,0.2);
        `;
        document.body.appendChild(notice);
        
        setTimeout(() => {
            if (notice && notice.parentNode) {
                notice.style.opacity = '0';
                notice.style.transition = 'opacity 0.5s';
                setTimeout(() => notice.remove(), 500);
            }
        }, 5000);
    }
}

// Force play music
function forcePlayMusic() {
    if (bgMusic && bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by user interaction');
                updateMusicUI('playing');
                saveMusicSettings();
                
                const notice = document.querySelector('.autoplay-notice');
                if (notice) notice.remove();
            })
            .catch(err => console.log('❌ Cannot play:', err));
    }
}

// ==================== PHẦN CÒN LẠI GIỮ NGUYÊN ====================
// (Các hàm renderCodeTimeline, openCodePanel, closePanel, filterAndSortCodes, init, v.v.)
// ... code của bạn từ đây trở đi giữ nguyên không thay đổi
