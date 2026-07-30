"use strict";

const CONFIG = {
    siteTitle: "TMCLibrary",
    baseUrl: "https://cybertmc.github.io/TMCLibrary/",
    thumbnailFolder: "background/",
    thumbnailExtensions: ["jpg", "png", "webp", "jpeg"],
    themeStorageKey: "tmclibrary-theme",
    musicStorageKey: "tmclibrary-music-v2",
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
                { name: "Xem code trên Ideone", url: "https://ideone.com/V4JZi6", icon: "fa-solid fa-code" }
            ]
        },
        {
            id: "2",
            title: "Không Buông",
            description: "Code Python hiển thị lời bài hát với hiệu ứng chữ màu đỏ ấn tượng. Sử dụng thư viện chuẩn, không cần cài đặt thêm.",
            lang: "Python",
            tags: ["music", "lyrics", "red theme"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7565953044748242184",
            links: [
                { name: "Xem code trên Ideone", url: "https://ideone.com/NdMbUs", icon: "fa-solid fa-code" }
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
                { name: "Phiên bản có pygame", url: "https://ideone.com/CilekQ", icon: "fa-solid fa-gamepad" },
                { name: "Phiên bản đơn giản", url: "https://ideone.com/8VPwtG", icon: "fa-solid fa-code" }
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
                { name: "Tải code từ Google Drive", url: "https://drive.google.com/file/d/1F-trIYKzWzQhepqc-2f3JApdb2WGwp16/view", icon: "fa-solid fa-download" }
            ]
        },
        {
            id: "5",
            title: "Ngày này năm ấy",
            description: "Code Python với hai phiên bản hỗ trợ âm thanh cần pygame và không âm thanh cho máy tính cấu hình thấp.",
            lang: "Python",
            tags: ["pygame", "audio", "dual version"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7552594723551087880",
            links: [
                { name: "Phiên bản có âm thanh", url: "https://ideone.com/w4yj7t", icon: "fa-solid fa-volume-high" },
                { name: "Phiên bản không âm thanh", url: "https://ideone.com/oLJe3U", icon: "fa-solid fa-code" }
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
                { name: "Xem code trên Ideone", url: "https://ideone.com/GSQ8Xn", icon: "fa-solid fa-code" }
            ]
        },
        {
            id: "7",
            title: "Người đầu tiên",
            description: "Code Python hiển thị lời bài hát với hiệu ứng màu sắc lạnh, tạo cảm giác sâu lắng và tinh tế.",
            lang: "Python",
            tags: ["cold colors", "lyrics", "emotional"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7586695262454680840",
            links: [
                { name: "Xem code trên Ideone", url: "https://ideone.com/0JkI9w", icon: "fa-solid fa-code" }
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
                { name: "Xem code trên Ideone", url: "https://ideone.com/cCLbHQ", icon: "fa-solid fa-code" }
            ]
        },
        {
            id: "9",
            title: "Valentine 3D - Bản thường & Góc quay",
            description: "Mã nguồn HTML/CSS/JS tạo thiệp Valentine với hiệu ứng 3D. Có bản thường và bản dùng góc quay camera; tải về cần giải nén trước khi chạy.",
            lang: "HTML/CSS/JS",
            tags: ["valentine", "3d", "interactive", "camera"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7612518932695518471",
            links: [
                { name: "Bản thường Valentine 3D", url: "https://drive.google.com/file/d/1NLCtfnBtK2i2cIN93PpJKzWxufw48J2W/view?usp=sharing", icon: "fa-solid fa-download" },
                { name: "Bản góc quay camera", url: "https://drive.google.com/file/d/1letI6flSAgs5kwFmWgtxCr9Ko_e4r8a4/view?usp=sharing", icon: "fa-solid fa-video" }
            ]
        },
        {
            id: "10",
            title: "Hoa sữa",
            description: "Code Python hiển thị lời bài hát Hoa sữa với hiệu ứng màu sắc và chuyển động đẹp mắt, phù hợp với nhạc trữ tình.",
            lang: "Python",
            tags: ["music", "lyrics", "romantic", "slow"],
            featured: false,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7612675489421004040",
            links: [
                { name: "Xem code trên Ideone", url: "https://ideone.com/qYTtzr", icon: "fa-solid fa-code" }
            ]
        },
        {
            id: "11",
            title: "Một bài hát không vui mấy X Em mới là người yêu anh",
            description: "Code Python hiển thị lời bài hát với hiệu ứng màu sắc độc đáo và chuyển cảnh phù hợp nhịp nhạc.",
            lang: "Python",
            tags: ["music", "lyrics"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7631244676732914951",
            links: [
                { name: "Xem code trên Ideone", url: "https://ideone.com/dnWfZ5", icon: "fa-solid fa-code" }
            ]
        },
        {
            id: "12",
            title: "hate that i made you love me",
            description: "Lyrics Player Python với giao diện hiện đại, đồng bộ lời bài hát chuẩn theo nhạc, hiệu ứng chữ và cửa sổ mượt mà, mang đến trải nghiệm xem lyric đẹp mắt và đầy cảm xúc.",
            lang: "Python",
            tags: ["music"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com/embed/v2/7664244982215167252",
            links: [
                { name: "Xem code trên Ideone", url: "https://ideone.com/T5vhD5", icon: "fa-solid fa-code" }
            ]
        },
         {
            id: "13",
            title: "Comming Soon!",
            description: "None",
            lang: "Python",
            tags: ["music" "Remix"],
            featured: true,
            tiktokVideo: "https://www.tiktok.com",
            links: [
                { name: "Xem code trên Ideone", url: "tb.html", icon: "fa-solid fa-code" }
            ]
        }

    ],
    music: {
        folder: "background-music/",
        defaultVolume: 0.3,
        playlist: [
            {
                title: "Dự Báo Thời Tiết Hôm Nay Mưa",
                artist: "GREY D",
                file: "GREY D - dự báo thời tiết hôm nay mưa.mp3"
            },
            {
                title: "Track 06",
                artist: "Tyronee, VSTRA, Obito",
                file: "[ Lyrics ] Track 06 #U2013 Tyronee, VSTRA, Obito.mp3"
            },
            {
                title: "Chẳng Phải Tình Đầu Sao Đau Đến Thế",
                artist: "MIN, Dangrangto, Antransax",
                file: "MIN - ch#U1eb3ng ph#U1ea3i t#U00ecnh #U0111#U1ea7u sao #U0111au #U0111#U1ebfn th#U1ebf feat. Dangrangto, Antransax (Official Audio).mp3"
            },
            {
                title: "Trời Giấu Trời Mang Đi",
                artist: "Nhạc trẻ",
                file: "Tr#U1eddi Gi#U1ea5u Tr#U1eddi Mang #U0110i.mp3"
            },
            {
                title: "Vẫn Nhớ",
                artist: "Soobin Hoàng Sơn Cover",
                file: "V#U1eabn Nh#U1edb - Soobin Ho#U00e0ng S#U01a1n _ Cover.mp3"
            },
            {
                title: "Ai Ngoài Anh",
                artist: "VSTRA",
                file: "VSTRA - Ai Ngo#U00e0i Anh (Official Audio).mp3"
            },
            {
                title: "Hoa Sữa",
                artist: "HNT Remix",
                file: "Hoa S#U1eefa ( HNT Remix ) __ Hot TikTok 2025 - Audio Lyrics Video.mp3"
            },
            {
                title: "Một bài hát không vui mấy",
                artist: "T.R.I x Dangrangto x DONAL",
                file: "T.R.I x @Dangrangto x DONAL - m#U1ed9t b#U00e0i h#U00e1t kh#U00f4ng vui m#U1ea5y (extended ver.) _ OFFICIAL LYRICS VIDEO.mp3"
            }
        ]
    }
};

// ===== GOOGLE SHEETS VIEWS =====
// URL Web App Google Apps Script đã triển khai với quyền truy cập "Bất kỳ ai".
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzUT9v-Z5z7WJHMmgbTC-ctwCKO8Q3paT4P8cwHIvsxSHORXXR0XQcwx8l0vfhPIFEm/exec";
const VIEW_REQUEST_TIMEOUT = 12000;
const VIEW_SESSION_PREFIX = "tmclibrary-viewed-v3-";
const VIEW_VISITOR_KEY = "tmclibrary-viewer-session-v3";

function emptyViews() {
    return Object.fromEntries(CONFIG.codes.map((code) => [code.id, 0]));
}

function normalizeViews(payload) {
    const result = emptyViews();

    if (!payload || typeof payload !== "object") return result;
    if (payload.success === false) {
        throw new Error(payload.message || "Google Sheets API trả về lỗi.");
    }

    // Hỗ trợ cả API mới { success: true, views: {...} }
    // và API cũ trả trực tiếp { "1": 10, "2": 20 }.
    const source = payload.views && typeof payload.views === "object"
        ? payload.views
        : payload.data?.views && typeof payload.data.views === "object"
            ? payload.data.views
            : payload;

    CONFIG.codes.forEach((code) => {
        const value = Number(source[code.id]);
        result[code.id] = Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
    });

    return result;
}

function getIncrementedView(payload, codeId) {
    if (!payload || typeof payload !== "object") return null;
    if (payload.success === false) {
        throw new Error(payload.message || "Không thể tăng lượt xem.");
    }

    const candidates = [
        payload.views,
        payload.count,
        payload.view,
        payload.data?.views,
        payload.data?.count,
        payload.data?.view
    ];

    for (const candidate of candidates) {
        if (candidate && typeof candidate === "object") {
            const value = Number(candidate[codeId]);
            if (Number.isFinite(value) && value >= 0) return Math.floor(value);
        } else {
            const value = Number(candidate);
            if (Number.isFinite(value) && value >= 0) return Math.floor(value);
        }
    }

    return null;
}

async function fetchViewApi(params) {
    if (!WEB_APP_URL || !WEB_APP_URL.startsWith("https://script.google.com/macros/s/")) {
        throw new Error("WEB_APP_URL chưa được cấu hình đúng.");
    }

    const url = new URL(WEB_APP_URL);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            url.searchParams.set(key, String(value));
        }
    });
    url.searchParams.set("_", String(Date.now()));

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), VIEW_REQUEST_TIMEOUT);

    try {
        const response = await fetch(url.toString(), {
            method: "GET",
            cache: "no-store",
            redirect: "follow",
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`Google Sheets API phản hồi HTTP ${response.status}.`);
        }

        const payload = await response.json();
        if (!payload || typeof payload !== "object") {
            throw new Error("Dữ liệu lượt xem không hợp lệ.");
        }
        return payload;
    } finally {
        clearTimeout(timeout);
    }
}

async function loadViewsFromSheet() {
    try {
        const payload = await fetchViewApi({ action: "get" });
        state.viewApiAvailable = true;
        return normalizeViews(payload);
    } catch (error) {
        state.viewApiAvailable = false;
        console.error("Không tải được lượt xem từ Google Sheets:", error);
        return emptyViews();
    }
}

function getViews(codeId) {
    return Number(state.views[String(codeId)]) || 0;
}

function getViewerSessionId() {
    let visitorId = sessionStorage.getItem(VIEW_VISITOR_KEY);
    if (visitorId) return visitorId;

    if (window.crypto?.randomUUID) {
        visitorId = window.crypto.randomUUID();
    } else {
        visitorId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }

    sessionStorage.setItem(VIEW_VISITOR_KEY, visitorId);
    return visitorId;
}

async function increaseView(codeId) {
    const id = String(codeId);
    const sessionKey = `${VIEW_SESSION_PREFIX}${id}`;

    if (sessionStorage.getItem(sessionKey)) return getViews(id);
    if (state.pendingViewRequests.has(id)) return state.pendingViewRequests.get(id);

    const request = (async () => {
        try {
            const payload = await fetchViewApi({
                action: "increment",
                id,
                visitor: getViewerSessionId()
            });

            let newViews = getIncrementedView(payload, id);
            if (newViews === null) {
                // Nếu API trả về danh sách đầy đủ thay vì một con số.
                const normalized = normalizeViews(payload);
                newViews = normalized[id];
            }

            state.views[id] = Number(newViews) || 0;
            state.viewApiAvailable = true;
            sessionStorage.setItem(sessionKey, "1");
            updateViewDisplays(id);
            return state.views[id];
        } catch (error) {
            state.viewApiAvailable = false;
            console.error(`Không tăng được lượt xem cho ID ${id}:`, error);
            showToast("Không thể cập nhật lượt xem. Hãy kiểm tra Google Apps Script.");
            return getViews(id);
        } finally {
            state.pendingViewRequests.delete(id);
        }
    })();

    state.pendingViewRequests.set(id, request);
    return request;
}

function totalViews() {
    return CONFIG.codes.reduce((total, code) => total + getViews(code.id), 0);
}

function updateStatistics() {
    elements.heroTotalCodes.textContent = formatNumber(CONFIG.codes.length);
    elements.heroTotalViews.textContent = formatNumber(totalViews());
    elements.heroFeaturedCodes.textContent = formatNumber(CONFIG.codes.filter((code) => code.featured).length);
}

// ===== STATE =====
const state = {
    search: "",
    filter: "all",
    view: "grid",
    currentCodeId: null,
    views: {},
    viewApiAvailable: true,
    pendingViewRequests: new Map(),
    lastFocusedElement: null,
    currentSongIndex: 0,
    isMusicReady: false
};

// ===== ELEMENTS =====
const elements = {
    header: document.querySelector(".site-header"),
    themeButton: document.getElementById("themeButton"),
    searchInput: document.getElementById("searchInput"),
    filterButtons: [...document.querySelectorAll(".filter-button")],
    viewButtons: [...document.querySelectorAll(".view-button")],
    codeGrid: document.getElementById("codeGrid"),
    emptyState: document.getElementById("emptyState"),
    resultCount: document.getElementById("resultCount"),
    resetSearchButton: document.getElementById("resetSearchButton"),
    randomCodeButton: document.getElementById("randomCodeButton"),
    featuredButton: document.getElementById("featuredButton"),
    heroTotalCodes: document.getElementById("heroTotalCodes"),
    heroTotalViews: document.getElementById("heroTotalViews"),
    heroFeaturedCodes: document.getElementById("heroFeaturedCodes"),
    modalBackdrop: document.getElementById("modalBackdrop"),
    detailDrawer: document.getElementById("detailDrawer"),
    drawerClose: document.getElementById("drawerClose"),
    drawerCover: document.querySelector(".drawer-cover"),
    drawerThumbnail: document.getElementById("drawerThumbnail"),
    drawerBadges: document.getElementById("drawerBadges"),
    drawerTitle: document.getElementById("drawerTitle"),
    drawerId: document.getElementById("drawerId"),
    drawerViews: document.getElementById("drawerViews"),
    drawerDescription: document.getElementById("drawerDescription"),
    drawerTags: document.getElementById("drawerTags"),
    videoSection: document.getElementById("videoSection"),
    tiktokVideo: document.getElementById("tiktokVideo"),
    sourceLinks: document.getElementById("sourceLinks"),
    copyLinkButton: document.getElementById("copyLinkButton"),
    facebookShareButton: document.getElementById("facebookShareButton"),
    xShareButton: document.getElementById("xShareButton"),
    toast: document.getElementById("toast"),
    currentYear: document.getElementById("currentYear"),
    musicToggle: document.getElementById("musicToggle"),
    musicPanel: document.getElementById("musicPanel"),
    backgroundMusic: document.getElementById("backgroundMusic"),
    playPauseButton: document.getElementById("playPauseButton"),
    previousButton: document.getElementById("previousButton"),
    nextButton: document.getElementById("nextButton"),
    volumeSlider: document.getElementById("volumeSlider"),
    volumeIcon: document.getElementById("volumeIcon"),
    currentSongTitle: document.getElementById("currentSongTitle"),
    currentSongArtist: document.getElementById("currentSongArtist"),
    musicProgress: document.getElementById("musicProgress"),
    musicProgressFill: document.getElementById("musicProgressFill"),
    currentTime: document.getElementById("currentTime"),
    durationTime: document.getElementById("durationTime")
};

// ===== FALLBACK PALETTES =====
const fallbackPalettes = [
    ["#6f53dd", "#18233f"],
    ["#c34b7d", "#31172b"],
    ["#1a9d91", "#102b32"],
    ["#d36a43", "#382019"],
    ["#4267cc", "#121d3a"],
    ["#904fd0", "#241739"],
    ["#2f8ca8", "#102733"],
    ["#d25973", "#351725"],
    ["#ba3d68", "#261632"],
    ["#629b58", "#182d22"],
    ["#7558dc", "#17223e"]
];

// ===== UTILITY FUNCTIONS =====
function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatNumber(value) {
    return new Intl.NumberFormat("vi-VN").format(Number(value) || 0);
}

function getThumbnailUrl(id, extensionIndex = 0) {
    const ext = CONFIG.thumbnailExtensions[extensionIndex] || CONFIG.thumbnailExtensions[0];
    return `${CONFIG.thumbnailFolder}${encodeURIComponent(id)}.${ext}`;
}

function applyThumbnailFallback(image, codeId) {
    const nextIndex = Number(image.dataset.extensionIndex || 0) + 1;
    if (nextIndex < CONFIG.thumbnailExtensions.length) {
        image.dataset.extensionIndex = String(nextIndex);
        image.src = getThumbnailUrl(codeId, nextIndex);
        return;
    }

    image.style.opacity = "0";
    image.style.visibility = "hidden";
    image.removeAttribute("src");
}

// ===== FILTER & RENDER =====
function getFilteredCodes() {
    const term = state.search.trim().toLocaleLowerCase("vi");

    return CONFIG.codes
        .filter((code) => {
            if (state.filter === "featured" && !code.featured) return false;
            if (state.filter !== "all" && state.filter !== "featured" && code.lang !== state.filter) return false;

            if (!term) return true;
            const haystack = [code.id, code.title, code.description, code.lang, ...code.tags].join(" ").toLocaleLowerCase("vi");
            return haystack.includes(term);
        })
        .sort((a, b) => {
            if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
            return Number(b.id) - Number(a.id);
        });
}

function createProjectCard(code, index) {
    const palette = fallbackPalettes[(Number(code.id) - 1) % fallbackPalettes.length];
    const tags = code.tags.slice(0, 3).map((tag) => `<span class="card-tag">#${escapeHtml(tag)}</span>`).join("");

    return `
        <article class="project-card" data-code-id="${escapeHtml(code.id)}" tabindex="0" role="button" aria-label="Mở ${escapeHtml(code.title)}" style="--thumb-a:${palette[0]};--thumb-b:${palette[1]};animation-delay:${Math.min(index * 45, 300)}ms">
            <div class="card-thumbnail">
                <img src="${getThumbnailUrl(code.id)}" data-extension-index="0" data-code-id="${escapeHtml(code.id)}" alt="Thumbnail ${escapeHtml(code.title)}" loading="lazy">
                <span class="card-id">ID ${escapeHtml(code.id)}</span>
                ${code.featured ? '<span class="card-featured"><i class="fa-solid fa-star"></i> Nổi bật</span>' : ""}
                <h3 class="card-thumbnail-title">${escapeHtml(code.title)}</h3>
            </div>
            <div class="card-body">
                <div class="card-topline">
                    <span class="language-badge"><i class="fa-solid fa-code"></i>${escapeHtml(code.lang)}</span>
                    <span class="card-views" data-view-id="${escapeHtml(code.id)}"><i class="fa-regular fa-eye"></i> ${formatNumber(getViews(code.id))}</span>
                </div>
                <p class="card-description">${escapeHtml(code.description)}</p>
                <div class="card-tags">${tags}</div>
                <div class="card-footer">
                    <span class="card-open">Xem chi tiết <i class="fa-solid fa-arrow-right"></i></span>
                    ${code.tiktokVideo ? '<span class="card-demo"><i class="fa-brands fa-tiktok"></i> Demo</span>' : ""}
                </div>
            </div>
        </article>
    `;
}

function renderCodes() {
    const codes = getFilteredCodes();
    elements.codeGrid.classList.toggle("list-view", state.view === "list");
    elements.resultCount.textContent = `${formatNumber(codes.length)} dự án`;
    elements.emptyState.hidden = codes.length !== 0;
    elements.codeGrid.hidden = codes.length === 0;
    elements.codeGrid.innerHTML = codes.map(createProjectCard).join("");

    elements.codeGrid.querySelectorAll("img[data-code-id]").forEach((image) => {
        image.addEventListener("error", () => applyThumbnailFallback(image, image.dataset.codeId));
    });

    elements.codeGrid.querySelectorAll(".project-card").forEach((card) => {
        const open = () => openCode(card.dataset.codeId);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });
    });
}

// ===== VIEWS UI UPDATE =====
function updateViewDisplays(codeId) {
    const id = String(codeId);
    const views = getViews(id);

    document.querySelectorAll(`[data-view-id="${CSS.escape(id)}"]`).forEach((element) => {
        element.innerHTML = `<i class="fa-regular fa-eye"></i> ${formatNumber(views)}`;
    });

    if (state.currentCodeId === id) {
        elements.drawerViews.textContent = formatNumber(views);
    }

    updateStatistics();
}

// ===== SHARE FUNCTIONS =====
function projectShareUrl(codeId) {
    const url = new URL(CONFIG.baseUrl, window.location.href);
    url.searchParams.set("id", codeId);
    return url.toString();
}

function updateBrowserUrl(codeId = null) {
    const url = new URL(window.location.href);
    if (codeId) url.searchParams.set("id", codeId);
    else url.searchParams.delete("id");
    history.replaceState({}, "", url);
}

// ===== OPEN / CLOSE DRAWER =====
function openCode(codeId, options = {}) {
    const code = CONFIG.codes.find((item) => item.id === String(codeId));
    if (!code) return;

    state.lastFocusedElement = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    state.currentCodeId = code.id;

    const palette = fallbackPalettes[(Number(code.id) - 1) % fallbackPalettes.length];
    elements.drawerCover.style.background = `linear-gradient(135deg, ${palette[0]}, ${palette[1]})`;
    elements.drawerThumbnail.style.opacity = "1";
    elements.drawerThumbnail.style.visibility = "visible";
    elements.drawerThumbnail.dataset.extensionIndex = "0";
    elements.drawerThumbnail.dataset.codeId = code.id;
    elements.drawerThumbnail.src = getThumbnailUrl(code.id);
    elements.drawerThumbnail.alt = `Thumbnail ${code.title}`;

    elements.drawerBadges.innerHTML = `
        <span class="drawer-badge"><i class="fa-solid fa-code"></i>${escapeHtml(code.lang)}</span>
        ${code.featured ? '<span class="drawer-badge"><i class="fa-solid fa-star"></i>Nổi bật</span>' : ""}
    `;
    elements.drawerTitle.textContent = code.title;
    elements.drawerId.textContent = code.id;
    elements.drawerViews.textContent = formatNumber(getViews(code.id));
    elements.drawerDescription.textContent = code.description;
    elements.drawerTags.innerHTML = code.tags
        .map((tag) => `<span class="drawer-tag">#${escapeHtml(tag)}</span>`)
        .join("");

    if (code.tiktokVideo) {
        elements.videoSection.hidden = false;
        elements.tiktokVideo.src = code.tiktokVideo;
    } else {
        elements.videoSection.hidden = true;
        elements.tiktokVideo.src = "";
    }

    elements.sourceLinks.innerHTML = code.links.map((link) => `
        <a class="source-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
            <span class="source-icon"><i class="${escapeHtml(link.icon)}"></i></span>
            <span class="source-copy">
                <strong>${escapeHtml(link.name)}</strong>
                <span>${escapeHtml(link.url)}</span>
            </span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    `).join("");

    elements.detailDrawer.classList.add("active");
    elements.modalBackdrop.classList.add("active");
    elements.detailDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    updateBrowserUrl(code.id);

    requestAnimationFrame(() => elements.drawerClose.focus({ preventScroll: true }));

    if (!options.skipView) {
        increaseView(code.id);
    }
}

function closeDrawer() {
    const focusTarget = state.lastFocusedElement;
    state.currentCodeId = null;
    elements.detailDrawer.classList.remove("active");
    elements.modalBackdrop.classList.remove("active");
    elements.detailDrawer.setAttribute("aria-hidden", "true");
    elements.tiktokVideo.src = "";
    document.body.classList.remove("drawer-open");
    updateBrowserUrl(null);

    if (focusTarget?.isConnected) {
        requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
    }
}

// ===== TOAST =====
let toastTimer = null;
function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("active");
    toastTimer = setTimeout(() => elements.toast.classList.remove("active"), 2200);
}

// ===== SHARE =====
async function copyCurrentLink() {
    if (!state.currentCodeId) return;
    const url = projectShareUrl(state.currentCodeId);

    try {
        await navigator.clipboard.writeText(url);
        showToast("Đã sao chép liên kết dự án");
    } catch {
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
        showToast("Đã sao chép liên kết dự án");
    }
}

function shareCurrentProject(platform) {
    const code = CONFIG.codes.find((item) => item.id === state.currentCodeId);
    if (!code) return;

    const url = encodeURIComponent(projectShareUrl(code.id));
    const text = encodeURIComponent(`Khám phá ${code.title} trên TMCLibrary`);
    const shareUrl = platform === "facebook"
        ? `https://www.facebook.com/sharer/sharer.php?u=${url}`
        : `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

    window.open(shareUrl, "_blank", "noopener,noreferrer,width=720,height=620");
}

function resetSearch() {
    state.search = "";
    state.filter = "all";
    elements.searchInput.value = "";
    elements.filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
    renderCodes();
}

// ===== THEME =====
function applyTheme(theme) {
    const light = theme === "light";
    document.body.classList.toggle("light-theme", light);
    elements.themeButton.innerHTML = `<i class="fa-solid fa-${light ? "sun" : "moon"}"></i>`;
    localStorage.setItem(CONFIG.themeStorageKey, light ? "light" : "dark");
}

function setupTheme() {
    const saved = localStorage.getItem(CONFIG.themeStorageKey);
    const theme = saved || "dark";
    applyTheme(theme);
}

// ===== MUSIC PLAYER =====
function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
}

function musicUrl(file) {
    return `${CONFIG.music.folder}${encodeURIComponent(file)}`;
}

function saveMusicSettings() {
    const audio = elements.backgroundMusic;
    const settings = {
        volume: audio.volume,
        currentSongIndex: state.currentSongIndex,
        currentTime: audio.currentTime
    };
    localStorage.setItem(CONFIG.musicStorageKey, JSON.stringify(settings));
}

function loadMusicSettings() {
    try {
        const settings = JSON.parse(localStorage.getItem(CONFIG.musicStorageKey) || "{}");
        const volume = Number.isFinite(settings.volume) ? settings.volume : CONFIG.music.defaultVolume;
        elements.backgroundMusic.volume = Math.min(1, Math.max(0, volume));
        elements.volumeSlider.value = String(Math.round(elements.backgroundMusic.volume * 100));
        state.currentSongIndex = Number.isInteger(settings.currentSongIndex)
            ? Math.min(CONFIG.music.playlist.length - 1, Math.max(0, settings.currentSongIndex))
            : 0;
        return Number(settings.currentTime) || 0;
    } catch {
        elements.backgroundMusic.volume = CONFIG.music.defaultVolume;
        elements.volumeSlider.value = String(CONFIG.music.defaultVolume * 100);
        return 0;
    }
}

function updateVolumeIcon() {
    const volume = elements.backgroundMusic.volume;
    const icon = volume === 0 ? "volume-xmark" : volume < 0.5 ? "volume-low" : "volume-high";
    elements.volumeIcon.className = `fa-solid fa-${icon}`;
}

function updateMusicUI() {
    const paused = elements.backgroundMusic.paused;
    elements.playPauseButton.innerHTML = `<i class="fa-solid fa-${paused ? "play" : "pause"}"></i>`;
    elements.musicToggle.classList.toggle("playing", !paused);
}

function loadSong(index, autoplay = false, resumeTime = 0) {
    const playlist = CONFIG.music.playlist;
    if (!playlist.length) return;

    state.currentSongIndex = (index + playlist.length) % playlist.length;
    const song = playlist[state.currentSongIndex];
    const audio = elements.backgroundMusic;

    audio.src = musicUrl(song.file);
    audio.load();
    elements.currentSongTitle.textContent = song.title;
    elements.currentSongArtist.textContent = song.artist;

    const onMetadata = () => {
        if (resumeTime > 0 && resumeTime < audio.duration) audio.currentTime = resumeTime;
        if (autoplay) audio.play().catch(() => showToast("Trình duyệt cần bạn bấm phát nhạc"));
        audio.removeEventListener("loadedmetadata", onMetadata);
    };
    audio.addEventListener("loadedmetadata", onMetadata);
    saveMusicSettings();
}

function setupMusicPlayer() {
    const resumeTime = loadMusicSettings();
    loadSong(state.currentSongIndex, false, resumeTime);
    updateVolumeIcon();

    elements.musicToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        elements.musicPanel.classList.toggle("active");
    });

    elements.musicPanel.addEventListener("click", (event) => event.stopPropagation());

    elements.playPauseButton.addEventListener("click", () => {
        const audio = elements.backgroundMusic;
        if (audio.paused) audio.play().catch(() => showToast("Không thể phát tệp nhạc này"));
        else audio.pause();
    });

    elements.previousButton.addEventListener("click", () => loadSong(state.currentSongIndex - 1, true));
    elements.nextButton.addEventListener("click", () => loadSong(state.currentSongIndex + 1, true));

    elements.volumeSlider.addEventListener("input", (event) => {
        elements.backgroundMusic.volume = Number(event.target.value) / 100;
        updateVolumeIcon();
        saveMusicSettings();
    });

    elements.musicProgress.addEventListener("click", (event) => {
        const audio = elements.backgroundMusic;
        if (!Number.isFinite(audio.duration)) return;
        const rect = elements.musicProgress.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        audio.currentTime = ratio * audio.duration;
    });

    elements.backgroundMusic.addEventListener("play", updateMusicUI);
    elements.backgroundMusic.addEventListener("pause", updateMusicUI);
    elements.backgroundMusic.addEventListener("ended", () => loadSong(state.currentSongIndex + 1, true));
    elements.backgroundMusic.addEventListener("timeupdate", () => {
        const audio = elements.backgroundMusic;
        const progress = Number.isFinite(audio.duration) && audio.duration > 0 ? (audio.currentTime / audio.duration) * 100 : 0;
        elements.musicProgressFill.style.width = `${progress}%`;
        elements.currentTime.textContent = formatTime(audio.currentTime);
        elements.durationTime.textContent = formatTime(audio.duration);
    });
    elements.backgroundMusic.addEventListener("error", () => {
        updateMusicUI();
        showToast("Không đọc được tệp nhạc hiện tại");
    });
    elements.backgroundMusic.addEventListener("pause", saveMusicSettings);

    window.addEventListener("beforeunload", saveMusicSettings);
    document.addEventListener("click", () => elements.musicPanel.classList.remove("active"));
}

// ===== EVENT BINDINGS =====
function bindEvents() {
    window.addEventListener("scroll", () => {
        elements.header.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });

    elements.themeButton.addEventListener("click", () => {
        applyTheme(document.body.classList.contains("light-theme") ? "dark" : "light");
    });

    elements.searchInput.addEventListener("input", (event) => {
        state.search = event.target.value;
        renderCodes();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "/" && document.activeElement !== elements.searchInput) {
            event.preventDefault();
            elements.searchInput.focus();
        }
        if (event.key === "Escape" && elements.detailDrawer.classList.contains("active")) closeDrawer();
    });

    elements.filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            state.filter = button.dataset.filter;
            elements.filterButtons.forEach((item) => item.classList.toggle("active", item === button));
            renderCodes();
        });
    });

    elements.viewButtons.forEach((button) => {
        button.addEventListener("click", () => {
            state.view = button.dataset.view;
            elements.viewButtons.forEach((item) => item.classList.toggle("active", item === button));
            renderCodes();
        });
    });

    elements.resetSearchButton.addEventListener("click", resetSearch);
    elements.randomCodeButton.addEventListener("click", () => {
        const random = CONFIG.codes[Math.floor(Math.random() * CONFIG.codes.length)];
        openCode(random.id);
    });

    elements.featuredButton.addEventListener("click", () => {
        state.filter = "featured";
        elements.filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "featured"));
        renderCodes();
        document.getElementById("library").scrollIntoView({ behavior: "smooth" });
    });

    elements.drawerClose.addEventListener("click", closeDrawer);
    elements.modalBackdrop.addEventListener("click", closeDrawer);
    elements.drawerThumbnail.addEventListener("error", () => applyThumbnailFallback(elements.drawerThumbnail, elements.drawerThumbnail.dataset.codeId));
    elements.copyLinkButton.addEventListener("click", copyCurrentLink);
    elements.facebookShareButton.addEventListener("click", () => shareCurrentProject("facebook"));
    elements.xShareButton.addEventListener("click", () => shareCurrentProject("x"));
}

// ===== INIT =====
async function init() {
    setupTheme();
    bindEvents();
    setupMusicPlayer();

    // Load views từ Google Sheet
    state.views = await loadViewsFromSheet();

    updateStatistics();
    renderCodes();
    elements.currentYear.textContent = String(new Date().getFullYear());

    const codeId = new URLSearchParams(window.location.search).get("id");
    if (codeId && CONFIG.codes.some((code) => code.id === codeId)) {
        openCode(codeId);
    }
}

document.addEventListener("DOMContentLoaded", init);
