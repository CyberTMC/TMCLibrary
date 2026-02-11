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
    ]
};

// ==================== STATE MANAGEMENT ====================

let currentView = 'timeline';
let currentFilter = '';
let currentCodeId = null;
let autoplayAttempts = 0;
const MAX_AUTOPLAY_ATTEMPTS = 5;

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
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const musicStatus = document.getElementById('musicStatus');
const musicPlayer = document.getElementById('musicPlayer');

// ==================== MUSIC PLAYER FUNCTIONS ====================

// Initialize music player
function initMusicPlayer() {
    console.log('🎵 Initializing music player...');
    
    // Set initial volume
    bgMusic.volume = 0.3;
    volumeSlider.value = 30;
    
    // Load saved settings
    loadMusicSettings();
    
    // Initially hide controls
    musicControls.classList.add('hidden');
    
    // === AUTO PLAY - THỬ NGAY LẬP TỨC ===
    bgMusic.load(); // Load lại audio
    attemptAutoplay();
    
    // Add event listeners
    bgMusic.addEventListener('play', () => {
        console.log('🎵 Music is playing');
        updateMusicUI('playing');
        saveMusicSettings();
    });
    
    bgMusic.addEventListener('pause', () => {
        console.log('🎵 Music is paused');
        updateMusicUI('paused');
        saveMusicSettings();
    });
    
    bgMusic.addEventListener('ended', () => {
        console.log('🎵 Music ended, replaying');
        bgMusic.currentTime = 0;
        bgMusic.play().catch(() => {});
    });
    
    bgMusic.addEventListener('canplaythrough', () => {
        console.log('🎵 Audio loaded successfully');
        // Thử phát lại khi audio đã sẵn sàng
        if (autoplayAttempts < MAX_AUTOPLAY_ATTEMPTS) {
            attemptAutoplay();
        }
    });
}

// Hàm thử tự động phát nhạc
function attemptAutoplay() {
    autoplayAttempts++;
    console.log(`🎵 Autoplay attempt ${autoplayAttempts}/${MAX_AUTOPLAY_ATTEMPTS}`);
    
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('✅ AUTOPLAY SUCCESSFUL!');
                updateMusicUI('playing');
                saveMusicSettings();
                autoplayAttempts = 0; // Reset counter
            })
            .catch(error => {
                console.log(`❌ Autoplay attempt ${autoplayAttempts} failed:`, error.message);
                
                // Thử lại với độ trễ tăng dần
                if (autoplayAttempts < MAX_AUTOPLAY_ATTEMPTS) {
                    const delay = autoplayAttempts * 500; // 500ms, 1000ms, 1500ms, ...
                    console.log(`🎵 Retrying in ${delay}ms...`);
                    setTimeout(() => attemptAutoplay(), delay);
                } else {
                    console.log('🎵 Max autoplay attempts reached, waiting for user interaction');
                    updateMusicUI('paused');
                    
                    // Hiển thị thông báo nhỏ (tùy chọn)
                    showAutoplayNotification();
                }
            });
    }
}

// Hiển thị thông báo nếu autoplay bị chặn
function showAutoplayNotification() {
    // Tạo thông báo nếu chưa có
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
        
        // Tự động ẩn sau 5 giây
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
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by user interaction');
                updateMusicUI('playing');
                saveMusicSettings();
                
                // Xóa thông báo nếu có
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
        isPlaying: !bgMusic.paused
    };
    localStorage.setItem('tmcMusicSettings', JSON.stringify(settings));
}

// Load music settings
function loadMusicSettings() {
    const saved = localStorage.getItem('tmcMusicSettings');
    if (saved) {
        try {
            const settings = JSON.parse(saved);
            bgMusic.volume = settings.volume;
            bgMusic.muted = settings.isMuted || false;
            volumeSlider.value = settings.volume * 100;
            updateVolumeIcon(settings.volume);
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

// ============ AUTO PLAY TRIGGERS - KHÔNG THỂ CHẶN ============

// 1. TRIGGER: Click anywhere on page
document.addEventListener('click', function playOnClick() {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by click');
                updateMusicUI('playing');
                saveMusicSettings();
                
                // Xóa thông báo
                const notice = document.querySelector('.autoplay-notice');
                if (notice) notice.remove();
            })
            .catch(() => {});
    }
}, { once: true }); // Chỉ chạy 1 lần

// 2. TRIGGER: Scroll
document.addEventListener('scroll', function playOnScroll() {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by scroll');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// 3. TRIGGER: Touch (mobile)
document.addEventListener('touchstart', function playOnTouch() {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by touch');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// 4. TRIGGER: Key press (any key)
document.addEventListener('keydown', function playOnKey() {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by keypress');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// 5. TRIGGER: Mouse move
document.addEventListener('mousemove', function playOnMouseMove() {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music started by mouse move');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
}, { once: true });

// 6. TRIGGER: Visibility change (quay lại tab)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                console.log('✅ Music resumed on tab focus');
                updateMusicUI('playing');
                saveMusicSettings();
            })
            .catch(() => {});
    }
});

// 7. TRIGGER: Page fully loaded
window.addEventListener('load', function() {
    console.log('📄 Page fully loaded');
    // Thử autoplay lại khi page đã load xong
    setTimeout(() => {
        if (bgMusic.paused) {
            attemptAutoplay();
        }
    }, 1000);
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

// Final fallback - thử phát nhạc sau 2 giây nếu vẫn chưa phát
setTimeout(() => {
    if (bgMusic && bgMusic.paused) {
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
