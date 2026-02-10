// ==================== CONFIGURATION ====================

const CONFIG = {
    siteTitle: "TMCLibrary",
    baseUrl: "https://cybertmc.github.io/TMCLibrary",
    
    // Google Sheets Configuration
    googleSheets: {
        sheetId: "15RyPcYnOP2wUdWPCCjBrIl2KHzrCUGNqz69MiTQmNyQ", // Sheet ID mới
        apiKey: "AIzaSyCzK2YAVmQu2mTxZvBx_mWt07yU-VG9z_U",
        sheetName: "Sheet1", // Tên sheet
        gid: "0", // Sheet ID từ URL
        scriptUrl: "https://script.google.com/macros/s/AKfycbw6raAOt_nY7_Po12uuaYSYHB5uALKMfBqq7PI8hgZ8Spu9zSINtDS_5nsIcoze3ZL81g/exec"
    },
    
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

// ==================== GOOGLE SHEETS VIEW COUNTER ====================

let viewsData = {};
let isUpdatingViews = false;

// Load views data from Google Sheets
async function loadViewsFromGoogleSheets() {
    try {
        const { sheetId, apiKey } = CONFIG.googleSheets;
        // Sử dụng ranges để lấy tất cả dữ liệu từ cột A đến C
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:C?key=${apiKey}`;
        
        console.log('Fetching from URL:', url);
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Google Sheets API error: ${response.status}`);
        }
        
        const data = await response.json();
        const rows = data.values || [];
        
        console.log('Raw Google Sheets data:', rows);
        
        // Reset views data
        viewsData = {};
        
        if (rows.length === 0) {
            // Sheet is empty, initialize with zeros
            console.log('Sheet is empty, initializing with zeros');
            CONFIG.codes.forEach(code => {
                viewsData[code.id] = 0;
            });
            return;
        }
        
        // Parse rows (bỏ qua header nếu có)
        let startRow = 0;
        // Kiểm tra nếu hàng đầu tiên là header
        if (rows[0] && (rows[0][0] === 'ID' || rows[0][0] === 'id' || rows[0][0] === 'Id')) {
            startRow = 1;
            console.log('Skipping header row');
        }
        
        for (let i = startRow; i < rows.length; i++) {
            const row = rows[i];
            if (row && row.length >= 2) {
                const id = String(row[0]).trim();
                const views = parseInt(row[1]) || 0;
                if (id) {
                    viewsData[id] = views;
                }
            }
        }
        
        console.log('Views data loaded from Google Sheets:', viewsData);
        
        // Initialize missing entries
        CONFIG.codes.forEach(code => {
            if (!viewsData.hasOwnProperty(code.id)) {
                viewsData[code.id] = 0;
            }
        });
        
        // Cache for offline use
        localStorage.setItem('tmc-library-views-cache', JSON.stringify({
            data: viewsData,
            timestamp: Date.now()
        }));
        
    } catch (error) {
        console.error('Error loading views from Google Sheets:', error);
        // Try to load from cache
        try {
            const cache = localStorage.getItem('tmc-library-views-cache');
            if (cache) {
                const cacheData = JSON.parse(cache);
                // Use cache if less than 1 hour old
                if (Date.now() - cacheData.timestamp < 3600000) {
                    viewsData = cacheData.data;
                    console.log('Loaded views from cache');
                } else {
                    throw new Error('Cache expired');
                }
            } else {
                throw new Error('No cache available');
            }
        } catch (cacheError) {
            console.error('Cache error:', cacheError);
            // Initialize with zeros
            CONFIG.codes.forEach(code => {
                viewsData[code.id] = 0;
            });
        }
    }
}

// Increment view count using Google Apps Script Web App
async function incrementViewCount(codeId) {
    if (!viewsData[codeId]) {
        viewsData[codeId] = 0;
    }
    
    // Increment locally
    viewsData[codeId]++;
    
    // Update UI immediately
    updateViewCountInUI(codeId);
    
    // Save to local storage as backup
    localStorage.setItem('tmc-library-views-backup', JSON.stringify({
        data: viewsData,
        timestamp: Date.now()
    }));
    
    // Send to Google Sheets via Apps Script Web App
    try {
        await updateViewCountInSheets(codeId, viewsData[codeId]);
    } catch (error) {
        console.error('Error updating Google Sheets:', error);
        // Queue for later update
        queueViewCountUpdate(codeId, viewsData[codeId]);
    }
}

// Update Google Sheets using Google Apps Script Web App
async function updateViewCountInSheets(codeId, viewCount) {
    const scriptUrl = CONFIG.googleSheets.scriptUrl;
    
    try {
        // Sử dụng JSONP để tránh CORS
        const response = await updateViaJSONP(scriptUrl, codeId, viewCount);
        console.log('Google Sheets update response:', response);
        return response;
    } catch (error) {
        console.error('JSONP failed:', error);
        // Fallback to fetch with no-cors
        await updateViaFetch(scriptUrl, codeId, viewCount);
        return true;
    }
}

// Update using JSONP (works with CORS)
function updateViaJSONP(scriptUrl, codeId, viewCount) {
    return new Promise((resolve, reject) => {
        const callbackName = 'callback_' + Date.now() + '_' + Math.random().toString(36).substr(2);
        const url = `${scriptUrl}?id=${encodeURIComponent(codeId)}&views=${viewCount}&action=updateView&callback=${callbackName}`;
        
        // Create script element
        const script = document.createElement('script');
        script.src = url;
        
        // Define callback
        window[callbackName] = function(response) {
            console.log('Google Sheets updated via JSONP:', response);
            // Clean up
            delete window[callbackName];
            if (script.parentNode) {
                document.body.removeChild(script);
            }
            resolve(response);
        };
        
        // Error handling
        script.onerror = function() {
            delete window[callbackName];
            if (script.parentNode) {
                document.body.removeChild(script);
            }
            reject(new Error('JSONP request failed'));
        };
        
        // Add to page
        document.body.appendChild(script);
        
        // Timeout after 10 seconds
        setTimeout(() => {
            if (window[callbackName]) {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                reject(new Error('JSONP timeout'));
            }
        }, 10000);
    });
}

// Update using fetch (fallback)
async function updateViaFetch(scriptUrl, codeId, viewCount) {
    try {
        // Use GET request for CORS compatibility
        const url = `${scriptUrl}?id=${encodeURIComponent(codeId)}&views=${viewCount}&action=updateView`;
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors'
        });
        
        console.log('View count sent via fetch (no-cors)');
        return true;
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}

// Queue view count updates for retry
function queueViewCountUpdate(codeId, viewCount) {
    const queue = JSON.parse(localStorage.getItem('tmc-library-views-queue') || '[]');
    queue.push({
        id: codeId,
        views: viewCount,
        timestamp: Date.now()
    });
    
    // Keep only last 100 items
    if (queue.length > 100) {
        queue.splice(0, queue.length - 100);
    }
    
    localStorage.setItem('tmc-library-views-queue', JSON.stringify(queue));
    
    console.log('View update queued. Queue size:', queue.length);
    
    // Try to process queue
    setTimeout(processQueue, 3000);
}

// Process queued updates
async function processQueue() {
    if (isUpdatingViews) return;
    
    const queue = JSON.parse(localStorage.getItem('tmc-library-views-queue') || '[]');
    if (queue.length === 0) return;
    
    isUpdatingViews = true;
    console.log('Processing queue with', queue.length, 'items');
    
    try {
        const newQueue = [];
        
        for (const item of queue) {
            try {
                await updateViewCountInSheets(item.id, item.views);
                console.log('Successfully updated queued item:', item);
                // Item processed successfully, don't add back to queue
            } catch (error) {
                console.error('Failed to update queued item:', item, error);
                // Keep in queue for retry (but only if less than 1 day old)
                if (Date.now() - item.timestamp < 86400000) {
                    newQueue.push(item);
                }
            }
        }
        
        // Save remaining queue
        localStorage.setItem('tmc-library-views-queue', JSON.stringify(newQueue));
        
        if (newQueue.length > 0) {
            console.log(newQueue.length, 'items remain in queue');
            // Retry after 30 seconds
            setTimeout(processQueue, 30000);
        }
        
    } finally {
        isUpdatingViews = false;
    }
}

// Update view count in UI
function updateViewCountInUI(codeId) {
    const viewCount = viewsData[codeId] || 0;
    
    // Update in timeline items
    document.querySelectorAll(`.timeline-item[data-id="${codeId}"] .timeline-views`).forEach(element => {
        element.textContent = `${viewCount} lượt xem`;
    });
    
    // Update in detail panel
    const panelViewElement = document.querySelector('.panel-views');
    if (panelViewElement && currentCodeId === codeId) {
        panelViewElement.textContent = `${viewCount} lượt xem`;
    }
}

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
    
    codeTimeline.innerHTML = codes.map(code => {
        const viewCount = viewsData[code.id] || 0;
        return `
        <div class="timeline-item ${code.featured ? 'featured' : ''}" data-id="${code.id}">
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title-section">
                        <h3 class="timeline-title">${code.title}</h3>
                        <div class="timeline-views">${viewCount} lượt xem</div>
                    </div>
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
    `}).join('');
    
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
    
    // Increment view count
    incrementViewCount(codeId);
    
    // Update panel content
    panelTitle.textContent = `${code.title.toLowerCase().replace(/\s+/g, '_')}.py`;
    panelDescription.textContent = code.description;
    
    // Update view count in panel
    const viewCount = viewsData[codeId] || 0;
    let viewCountElement = document.querySelector('.panel-views');
    if (!viewCountElement) {
        // Create view count element if it doesn't exist
        const panelTitleContainer = document.querySelector('.panel-title');
        viewCountElement = document.createElement('div');
        viewCountElement.className = 'panel-views';
        panelTitleContainer.appendChild(viewCountElement);
    }
    viewCountElement.textContent = `${viewCount} lượt xem`;
    
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
    
    // Then sort by view count (highest first)
    filteredCodes.sort((a, b) => {
        if (a.featured === b.featured) {
            const viewsA = viewsData[a.id] || 0;
            const viewsB = viewsData[b.id] || 0;
            return viewsB - viewsA;
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

async function init() {
    // Load view counts from Google Sheets
    await loadViewsFromGoogleSheets();
    
    // Process any queued updates
    setTimeout(processQueue, 2000);
    
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
