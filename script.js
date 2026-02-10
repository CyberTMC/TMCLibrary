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
            
            // Scroll to video section after a short delay
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
    
    // Update panel content
    panelTitle.textContent = `${code.title.toLowerCase().replace(/\s+/g, '_')}.py`;
    panelDescription.textContent = code.description;
    
    // Update video section
    if (code.tiktokVideo) {
        videoSection.style.display = 'block';
        tiktokVideo.src = code.tiktokVideo;
    } else {
        videoSection.style.display = 'none';
    }
    
    // Update code links
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
    
    // Update share URLs
    const shareUrl = `${CONFIG.baseUrl}?id=${codeId}`;
    const shareText = encodeURIComponent(`Check out this Python code: ${code.title}`);
    
    // Update copy link button
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
    
    // Update social share buttons
    shareFacebook.onclick = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    };
    
    shareTwitter.onclick = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`, '_blank');
    };
    
    // Show panel
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
    
    // Apply search filter
    if (currentFilter) {
        const searchTerm = currentFilter.toLowerCase();
        filteredCodes = filteredCodes.filter(code => 
            code.title.toLowerCase().includes(searchTerm) ||
            code.description.toLowerCase().includes(searchTerm) ||
            code.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Featured codes first
    filteredCodes.sort((a, b) => (b.featured - a.featured));
    
    // Then sort by title
    filteredCodes.sort((a, b) => {
        if (a.featured === b.featured) {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
    
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
        // In future, we could add different view modes
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
    // Update statistics
    updateStatistics();
    
    // Load initial codes
    filterAndSortCodes();
    
    // Check URL for code ID
    const urlParams = new URLSearchParams(window.location.search);
    const codeId = urlParams.get('id');
    
    if (codeId) {
        setTimeout(() => {
            openCodePanel(codeId);
        }, 500);
    }
    
    // Add terminal-like typing effect to search placeholder
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
    
    // Start typing effect after a delay
    setTimeout(typePlaceholder, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
