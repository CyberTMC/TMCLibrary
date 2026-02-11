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
            featured: true,
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
    
    // Danh sách nhạc mẫu - bạn có thể thay thế bằng cách quét thư mục thực tế
    // Trong môi trường thực tế, bạn cần API phía server để lấy danh sách file
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
    }
];
    
    // Tạo playlist từ danh sách mẫu
    musicPlaylist = samplePlaylist.map((song, index) => ({
        id: index + 1,
        title: song.name,
        artist: song.artist,
        url: CONFIG.music.musicFolder + song.file,
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

// Phát bài hát theo index
function playSongByIndex(index) {
    if (!musicPlaylist.length || index < 0 || index >= musicPlaylist.length) {
        console.error('Invalid song index');
        return false;
    }
    
    const song = musicPlaylist[index];
    currentSongIndex = index;
    
    // Cập nhật source audio
    bgMusic.src = song.url;
    bgMusic.load();
    
    // Cập nhật UI
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    
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
    // Có thể phát bài trước đó hoặc ngẫu nhiên
    if (musicPlaylist.length <= 1) {
        return playRandomSong();
    }
    
    // Phát bài ngẫu nhiên khác
    return playNextRandomSong();
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
    if (bgMusic.duration) {
        const progress = (bgMusic.currentTime / bgMusic.duration) * 100;
        progressFill.style.width = `${progress}%`;
        currentTimeEl.textContent = formatTime(bgMusic.currentTime);
        durationTimeEl.textContent = formatTime(bgMusic.duration);
    }
}

// ==================== MUSIC PLAYER FUNCTIONS ====================

// Initialize music player
async function initMusicPlayer() {
    console.log('🎵 Initializing music player...');
    
    // Set initial volume
    bgMusic.volume = CONFIG.music.defaultVolume;
    volumeSlider.value = CONFIG.music.defaultVolume * 100;
    
    // Load playlist
    await loadMusicPlaylist();
    
    // Load saved settings
    loadMusicSettings();
    
    // Initially hide controls
    musicControls.classList.add('hidden');
    
    // Add event listeners cho audio
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
        durationTimeEl.textContent = formatTime(bgMusic.duration);
    });
    
    bgMusic.addEventListener('canplaythrough', () => {
        console.log('🎵 Audio loaded successfully');
        if (autoplayAttempts < MAX_AUTOPLAY_ATTEMPTS && bgMusic.paused) {
            attemptAutoplay();
        }
    });
    
    // Chọn bài hát ngẫu nhiên đầu tiên
    if (musicPlaylist.length > 0) {
        playRandomSong();
    }
    
    isMusicInitialized = true;
}

// Hàm thử tự động phát nhạc
function attemptAutoplay() {
    if (!isMusicInitialized) return;
    
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
            background: var(--ui-surface);
            border: 1px solid var(--terminal-accent);
            color: var(--terminal-accent);
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
    if (bgMusic.paused && musicPlaylist.length > 0) {
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

// Update music UI
function updateMusicUI(state) {
    const playPauseIcon = playPauseBtn.querySelector('i');
    
    if (state === 'playing') {
        playPauseIcon.className = 'fas fa-pause';
        musicStatus.textContent = 'playing';
        musicStatus.classList.remove('paused');
    } else {
        playPauseIcon.className = 'fas fa-play';
        musicStatus.textContent = 'paused';
        musicStatus.classList.add('paused');
    }
}

// Save music settings
function saveMusicSettings() {
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
    if (saved) {
        try {
            const settings = JSON.parse(saved);
            bgMusic.volume = settings.volume || CONFIG.music.defaultVolume;
            bgMusic.muted = settings.isMuted || false;
            volumeSlider.value = (settings.volume || CONFIG.music.defaultVolume) * 100;
            updateVolumeIcon(settings.volume || CONFIG.music.defaultVolume);
            
            // Khôi phục bài hát đã phát trước đó
            if (settings.currentSongIndex !== undefined && musicPlaylist[settings.currentSongIndex]) {
                currentSongIndex = settings.currentSongIndex;
                const song = musicPlaylist[currentSongIndex];
                bgMusic.src = song.url;
                currentSongTitle.textContent = song.title;
                currentSongArtist.textContent = song.artist;
                
                if (settings.currentTime) {
                    bgMusic.currentTime = settings.currentTime;
                }
            }
        } catch (e) {
            console.error('Error loading music settings');
        }
    }
}

// Update volume icon
function updateVolumeIcon(volume) {
    if (volume === 0 || bgMusic.muted) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}

// Toggle music controls
function toggleMusicControls() {
    musicControls.classList.toggle('hidden');
    musicToggle.classList.toggle('active');
}

// ==================== MUSIC EVENT LISTENERS ====================

// Toggle music controls
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusicControls();
    forcePlayMusic();
});

// Play/Pause button
playPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
    } else {
        bgMusic.pause();
    }
});

// Stop button
stopBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    bgMusic.pause();
    bgMusic.currentTime = 0;
    updateMusicUI('paused');
    saveMusicSettings();
});

// Previous button
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    playPreviousSong();
});

// Next button
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    playNextRandomSong();
});

// Volume slider
volumeSlider.addEventListener('input', (e) => {
    e.stopPropagation();
    const volume = e.target.value / 100;
    bgMusic.volume = volume;
    updateVolumeIcon(volume);
    saveMusicSettings();
});

// Volume icon click (mute/unmute)
volumeIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    bgMusic.muted = !bgMusic.muted;
    const volume = bgMusic.muted ? 0 : bgMusic.volume;
    updateVolumeIcon(volume);
    saveMusicSettings();
});

// Progress bar click
progressBar.addEventListener('click', (e) => {
    e.stopPropagation();
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    bgMusic.currentTime = percent * bgMusic.duration;
});

// Prevent closing when clicking inside controls
musicControls.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close controls when clicking outside
document.addEventListener('click', (e) => {
    if (!musicPlayer.contains(e.target) && !musicControls.classList.contains('hidden')) {
        musicControls.classList.add('hidden');
        musicToggle.classList.remove('active');
    }
});

// ============ AUTO PLAY TRIGGERS ============

// Click anywhere on page
document.addEventListener('click', function playOnClick() {
    if (bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by click');
                updateMusicUI('playing');
                saveMusicSettings();
                
                const notice = document.querySelector('.autoplay-notice');
                if (notice) notice.remove();
            })
            .catch(() => {});
    }
}, { once: true });

// Scroll
document.addEventListener('scroll', function playOnScroll() {
    if (bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by scroll');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// Touch (mobile)
document.addEventListener('touchstart', function playOnTouch() {
    if (bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by touch');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// Key press
document.addEventListener('keydown', function playOnKey() {
    if (bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by keypress');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// Mouse move
document.addEventListener('mousemove', function playOnMouseMove() {
    if (bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by mouse move');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// Visibility change (quay lại tab)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && bgMusic.paused && musicPlaylist.length > 0) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music resumed on tab focus');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
});

// ==================== UTILITY FUNCTIONS ====================

// Count featured codes
function countFeaturedCodes() {
    return CONFIG.codes.filter(code => code.featured).length;
}

// Update statistics
function updateStatistics() {
    totalCodesElement.textContent = CONFIG.codes.length;
    featuredCodesElement.textContent = countFeaturedCodes();
}

// ==================== RENDER FUNCTIONS ====================

// Render code timeline
function renderCodeTimeline(codes) {
    if (codes.length === 0) {
        codeTimeline.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    codeTimeline.style.display = 'block';
    emptyState.style.display = 'none';
    
    codeTimeline.innerHTML = codes.map(code => `
        <div class="timeline-item ${code.featured ? 'featured' : ''}" data-id="${code.id}">
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${code.title}</h3>
                    <div class="timeline-badges">
                        ${code.featured ? '<span class="timeline-badge featured">featured</span>' : ''}
                        <span class="timeline-badge language">${code.lang}</span>
                    </div>
                </div>
                
                <p class="timeline-description">${code.description}</p>
                
                ${code.tags.length > 0 ? `
                    <div class="timeline-tags">
                        ${code.tags.map(tag => `<span class="timeline-tag">#${tag}</span>`).join('')}
                    </div>
                ` : ''}
                
                <div class="timeline-actions">
                    <button class="timeline-btn primary view-code-btn" data-id="${code.id}">
                        <i class="fas fa-code"></i>
                        view code
                    </button>
                    ${code.tiktokVideo ? `
                        <button class="timeline-btn video-btn" data-id="${code.id}">
                            <i class="fab fa-tiktok"></i>
                            watch demo
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.view-code-btn') && !e.target.closest('.video-btn')) {
                const codeId = item.getAttribute('data-id');
                openCodePanel(codeId);
            }
        });
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.view-code-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const codeId = btn.getAttribute('data-id');
            openCodePanel(codeId);
        });
    });
    
    document.querySelectorAll('.video-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const codeId = btn.getAttribute('data-id');
            openCodePanel(codeId);
            
            setTimeout(() => {
                const videoSection = document.querySelector('#videoSection');
                if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    });
}

// Open code panel
function openCodePanel(codeId) {
    const code = CONFIG.codes.find(c => c.id === codeId);
    if (!code) return;
    
    currentCodeId = codeId;
    
    panelTitle.textContent = `${code.title.toLowerCase().replace(/\s+/g, '_')}.py`;
    panelDescription.textContent = code.description;
    
    if (code.tiktokVideo) {
        videoSection.style.display = 'block';
        tiktokVideo.src = code.tiktokVideo;
    } else {
        videoSection.style.display = 'none';
    }
    
    codeLinks.innerHTML = code.links.map(link => `
        <div class="link-item" onclick="window.open('${link.url}', '_blank')">
            <div class="link-icon">
                <i class="${link.icon}"></i>
            </div>
            <div class="link-info">
                <div class="link-title">${link.name}</div>
                <div class="link-url">${link.url}</div>
            </div>
        </div>
    `).join('');
    
    const shareUrl = `${CONFIG.baseUrl}?id=${codeId}`;
    const shareText = encodeURIComponent(`Check out this Python code: ${code.title}`);
    
    copyLinkBtn.onclick = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            const originalText = copyLinkBtn.querySelector('span').textContent;
            copyLinkBtn.innerHTML = '<i class="fas fa-check"></i><span>copied!</span>';
            copyLinkBtn.style.borderColor = '#00ff9d';
            copyLinkBtn.style.color = '#00ff9d';
            
            setTimeout(() => {
                copyLinkBtn.innerHTML = '<i class="fas fa-copy"></i><span>copy link</span>';
                copyLinkBtn.style.borderColor = '';
                copyLinkBtn.style.color = '';
            }, 2000);
        });
    };
    
    shareFacebook.onclick = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    };
    
    shareTwitter.onclick = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`, '_blank');
    };
    
    detailPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close panel
function closePanel() {
    detailPanel.classList.remove('active');
    document.body.style.overflow = 'auto';
    tiktokVideo.src = '';
    currentCodeId = null;
}

// Filter codes
function filterAndSortCodes() {
    let filteredCodes = [...CONFIG.codes];
    
    if (currentFilter) {
        const searchTerm = currentFilter.toLowerCase();
        filteredCodes = filteredCodes.filter(code => 
            code.title.toLowerCase().includes(searchTerm) ||
            code.description.toLowerCase().includes(searchTerm) ||
            code.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    filteredCodes.sort((a, b) => (b.featured - a.featured));
    
    renderCodeTimeline(filteredCodes);
}

// ==================== EVENT LISTENERS ====================

// Search input
searchInput.addEventListener('input', (e) => {
    currentFilter = e.target.value;
    filterAndSortCodes();
});

// View controls
viewControls.forEach(control => {
    control.addEventListener('click', () => {
        viewControls.forEach(c => c.classList.remove('active'));
        control.classList.add('active');
        currentView = control.getAttribute('data-view');
    });
});

// Panel close
panelClose.addEventListener('click', closePanel);

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (!detailPanel.contains(e.target) && !e.target.closest('.timeline-item') && 
        !e.target.closest('.view-code-btn') && !e.target.closest('.video-btn')) {
        closePanel();
    }
});

// Escape key to close panel
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailPanel.classList.contains('active')) {
        closePanel();
    }
});

// ==================== INITIALIZATION ====================

function init() {
    console.log('🚀 TMCLibrary initializing...');
    
    updateStatistics();
    filterAndSortCodes();
    initMusicPlayer();
    
    // Check URL for code ID
    const urlParams = new URLSearchParams(window.location.search);
    const codeId = urlParams.get('id');
    
    if (codeId) {
        setTimeout(() => {
            openCodePanel(codeId);
        }, 500);
    }
    
    // Typing effect for search placeholder
    const searchPlaceholders = [
        "search code...",
        "find python files...",
        "filter by tags...",
        "look for music codes..."
    ];
    
    let placeholderIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typePlaceholder() {
        const currentText = searchPlaceholders[placeholderIndex];
        
        if (!isDeleting) {
            searchInput.placeholder = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typePlaceholder, 2000);
                return;
            }
        } else {
            searchInput.placeholder = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                placeholderIndex = (placeholderIndex + 1) % searchPlaceholders.length;
            }
        }
        
        setTimeout(typePlaceholder, isDeleting ? 50 : 100);
    }
    
    setTimeout(typePlaceholder, 1000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Final fallback
setTimeout(() => {
    if (bgMusic && bgMusic.paused && musicPlaylist.length > 0) {
        console.log('🎵 Final autoplay attempt...');
        bgMusic.play()
            .then(() => {
                console.log('✅ Final autoplay successful!');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {
                console.log('❌ Final autoplay failed - waiting for user interaction');
            });
    }
}, 2000);
