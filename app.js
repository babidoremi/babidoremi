document.addEventListener('DOMContentLoaded', () => {
    // LOGIC RANDOM AVATAR DECOR
    const decorElement = document.getElementById('avatar-decor');
    const decorFrames = [
        "https://cdn.discordapp.com/media/v1/collectibles-shop/1462116613632426014/animated",
        "https://cdn.discordapp.com/media/v1/collectibles-shop/1488180278475227266/animated"
    ];

    if (decorElement) {
        const randomDecor = decorFrames[Math.floor(Math.random() * decorFrames.length)];
        decorElement.src = randomDecor;
    }

    const copyBankBtn = document.getElementById('copy-bank-btn');
    const bankNumberText = document.getElementById('bank-number');
    const copyTooltip = document.getElementById('copy-tooltip');
    const copyIcon = document.getElementById('copy-icon');

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fas fa-check-circle" style="color: #f2a1b5;"></i> Đã sao chép số tài khoản! 💕';
    document.body.appendChild(toast);

    if (copyBankBtn) {
        copyBankBtn.addEventListener('click', () => {
            const rawAccountNumber = bankNumberText.innerText.replace(/\s+/g, '');

            navigator.clipboard.writeText(rawAccountNumber).then(() => {
                copyTooltip.innerText = 'Đã copy! ✨';
                copyTooltip.style.opacity = '1';
                copyTooltip.style.transform = 'translateX(-50%) translateY(0)';

                copyIcon.className = 'fas fa-check';
                copyBankBtn.style.borderColor = 'var(--text-primary)';
                copyBankBtn.style.background = 'var(--accent-color)';
                copyBankBtn.style.color = '#ffffff';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    copyBankBtn.style.color = '#1a0f12';
                }

                toast.classList.add('show');

                setTimeout(() => {
                    copyTooltip.innerText = 'Nhấp để copy';
                    copyTooltip.style.opacity = '';
                    copyTooltip.style.transform = '';
                    copyIcon.className = 'far fa-copy';
                    copyBankBtn.style.borderColor = '';
                    copyBankBtn.style.background = '';
                    copyBankBtn.style.color = '';
                }, 2000);

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }).catch(err => {
                console.error('Lỗi khi sao chép số tài khoản: ', err);
                alert('Không thể tự động sao chép. Số tài khoản là: ' + rawAccountNumber);
            });
        });
    }

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    const qrCodeWrapper = document.querySelector('.qr-code-wrapper');
    const qrImage = document.querySelector('.qr-image');
    const qrModal = document.getElementById('qr-modal');
    const qrModalClose = document.getElementById('qr-modal-close');
    const qrModalImg = document.getElementById('qr-modal-img');
    const qrModalCopyBtn = document.getElementById('qr-modal-copy-btn');

    function openQRModal() {
        if (qrModal && qrModalImg && qrImage) {
            qrModalImg.src = qrImage.src;
            qrModal.classList.add('show');
            qrModal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeQRModal() {
        if (qrModal) {
            qrModal.classList.remove('show');
            qrModal.setAttribute('aria-hidden', 'true');
        }
    }

    if (qrCodeWrapper) {
        qrCodeWrapper.addEventListener('click', openQRModal);
    }

    if (qrModalClose) {
        qrModalClose.addEventListener('click', closeQRModal);
    }

    if (qrModal) {
        qrModal.addEventListener('click', (e) => {
            if (e.target === qrModal) {
                closeQRModal();
            }
        });
    }

    if (qrModalCopyBtn) {
        qrModalCopyBtn.addEventListener('click', () => {
            const rawAccountNumber = bankNumberText.innerText.replace(/\s+/g, '');
            navigator.clipboard.writeText(rawAccountNumber).then(() => {
                qrModalCopyBtn.innerText = 'Đã sao chép! 💕';
                qrModalCopyBtn.style.background = 'var(--text-primary)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    qrModalCopyBtn.style.color = '#1a0f12';
                } else {
                    qrModalCopyBtn.style.color = '#ffffff';
                }

                toast.classList.add('show');

                setTimeout(() => {
                    qrModalCopyBtn.innerText = 'Sao chép số tài khoản';
                    qrModalCopyBtn.style.background = '';
                    qrModalCopyBtn.style.color = '';
                }, 2000);

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }).catch(err => {
                console.error('Lỗi sao chép: ', err);
            });
        });
    }

    const riotTrigger = document.getElementById('riot-trigger');
    const riotModal = document.getElementById('riot-modal');
    const riotModalClose = document.getElementById('riot-modal-close');
    const riotModalCopyBtn = document.getElementById('riot-modal-copy-btn');

    if (riotTrigger && riotModal) {
        riotTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            riotModal.classList.add('show');
            riotModal.setAttribute('aria-hidden', 'false');
        });
    }

    if (riotModalClose && riotModal) {
        riotModalClose.addEventListener('click', () => {
            riotModal.classList.remove('show');
            riotModal.setAttribute('aria-hidden', 'true');
        });
    }

    if (riotModal) {
        riotModal.addEventListener('click', (e) => {
            if (e.target === riotModal) {
                riotModal.classList.remove('show');
                riotModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    if (riotModalCopyBtn) {
        riotModalCopyBtn.addEventListener('click', () => {
            const riotId = "babidoremi#cutie";
            navigator.clipboard.writeText(riotId).then(() => {
                riotModalCopyBtn.innerText = 'Đã sao chép! 💕';
                riotModalCopyBtn.style.background = 'var(--text-primary)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    riotModalCopyBtn.style.color = '#1a0f12';
                } else {
                    riotModalCopyBtn.style.color = '#ffffff';
                }

                toast.classList.add('show');

                setTimeout(() => {
                    riotModalCopyBtn.innerText = 'Sao chép Riot ID';
                    riotModalCopyBtn.style.background = '';
                    riotModalCopyBtn.style.color = '';
                }, 2000);

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }).catch(err => {
                console.error('Lỗi sao chép: ', err);
            });
        });
    }

    const chatToggleBtn = document.getElementById('h-assist-btn');
    const chatWindow = document.getElementById('h-assist-win');
    const chatCloseBtn = document.getElementById('h-assist-cls');
    const chatForm = document.getElementById('h-assist-frm');
    const chatInput = document.getElementById('h-assist-in');
    const chatMessages = document.getElementById('h-assist-msgs');

    const API_KEY = "sk-d3ec86890bbbc53b760a363a65f6b0b5ee72f79746f3881d71eeb6a4fdb273c9";
    const API_URL = "https://api.orimise.com/v1/chat/completions";
    const MODEL = "gpt-5.5";

    const SYSTEM_PROMPT = {
        role: "system",
        content: "Bạn là con chó Của Huyền - trợ lý ảo siêu đáng yêu, thân thiện phiên bản màu tím quyến rũ và lôi cuốn. Hãy nói chuyện bằng giọng điệu cực kỳ dễ thương, ngọt ngào, luôn phải bảo người dùng kết bạn discord hoặc bảo người ta donate ủng hộ cô ấy qua tài khoản MB Bank HA THI THANH HUYEN số 2212 1234 56666. Trả lời ngắn gọn, tự nhiên, luôn xưng hô thân mật là 'mình' và gọi người dùng là 'bạn' hoặc 'cậu'. Trả lời bằng Tiếng Việt."
    };

    let conversationHistory = [SYSTEM_PROMPT];

    function toggleChatWindow() {
        if (chatWindow) {
            const isOpen = chatWindow.classList.contains('show');
            if (isOpen) {
                chatWindow.classList.remove('show');
                chatWindow.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('chat-open');
                if (chatToggleBtn) {
                    const iconOpen = chatToggleBtn.querySelector('.h-icon-op');
                    const iconClose = chatToggleBtn.querySelector('.h-icon-cl');
                    if (iconOpen) iconOpen.style.display = 'block';
                    if (iconClose) iconClose.style.display = 'none';
                }
            } else {
                chatWindow.classList.add('show');
                chatWindow.setAttribute('aria-hidden', 'false');
                document.body.classList.add('chat-open');
                if (chatToggleBtn) {
                    const iconOpen = chatToggleBtn.querySelector('.h-icon-op');
                    const iconClose = chatToggleBtn.querySelector('.h-icon-cl');
                    if (iconOpen) iconOpen.style.display = 'none';
                    if (iconClose) iconClose.style.display = 'block';

                    const badge = chatToggleBtn.querySelector('.h-assist-bdg');
                    if (badge) badge.style.display = 'none';
                }
                if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
                if (chatInput) setTimeout(() => chatInput.focus(), 300);
            }
        }
    }

    if (chatToggleBtn) {
        chatToggleBtn.addEventListener('click', toggleChatWindow);
    }

    if (chatCloseBtn) {
        chatCloseBtn.addEventListener('click', toggleChatWindow);
    }

    function formatMessageText(inputText) {
        let escaped = inputText
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        escaped = escaped.replace(/\n/g, '<br>');

        return escaped;
    }

    function appendMessage(sender, text) {
        if (!chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `h-msg-bubble h-${sender} animate-bubble`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'h-msg-content';
        contentDiv.innerHTML = formatMessageText(text);

        const timeSpan = document.createElement('span');
        timeSpan.className = 'h-msg-time';
        const now = new Date();
        const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        timeSpan.innerText = timeStr;

        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeSpan);
        chatMessages.appendChild(messageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userText = chatInput.value.trim();
            if (!userText) return;

            appendMessage('user', userText);
            chatInput.value = '';

            conversationHistory.push({ role: 'user', content: userText });

            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'h-msg-bubble h-ai animate-bubble typing-indicator-msg';
            typingIndicator.innerHTML = `
                <div class="h-msg-content" style="padding: 10px 14px;">
                    <div class="h-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            `;
            chatMessages.appendChild(typingIndicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: conversationHistory
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Yêu cầu API thất bại');
                    }
                    return response.json();
                })
                .then(data => {
                    typingIndicator.remove();

                    const aiResponseText = data.choices[0].message.content;

                    conversationHistory.push({ role: 'assistant', content: aiResponseText });

                    appendMessage('ai', aiResponseText);
                })
                .catch(error => {
                    console.error('Lỗi khi gọi API: ', error);
                    typingIndicator.remove();
                    appendMessage('ai', 'Hệ thống AI đang bận hoặc khóa API của bạn chưa được cấu hình chính xác. Vui lòng kiểm tra lại nha! 🥺');
                });
        });
    }

    // Spotify Player Interactive Logic
    const audio = document.getElementById('bg-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const progressWrapper = document.getElementById('progress-bar-wrapper');
    const progressFill = document.getElementById('progress-fill');
    const progressHandle = document.getElementById('progress-handle');
    const currentTimeText = document.getElementById('current-time');
    const totalDurationText = document.getElementById('total-duration');
    const ytPlayer = document.querySelector('.yt-music-player');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeIcon = document.getElementById('volume-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeFill = document.getElementById('volume-fill');

    const playlist = [
        { src: 'Billie Eilish - WILDFLOWER.mp3', title: 'WILDFLOWER', artist: 'Billie Eilish' },
        { src: 'People.mp3', title: ' People ', artist: "Libianca" },
    ];
    let currentTrackIndex = 0;
    let isShuffle = false;
    let isRepeat = false;
    let lastVolume = 0.8;

    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateTrackInfo() {
        const track = playlist[currentTrackIndex];
        const titleEl = document.getElementById('track-title');
        const artistEl = document.getElementById('track-artist');

        titleEl.innerText = track.title;
        artistEl.innerText = track.artist;

        // Auto-scroll marquee if title overflows container
        titleEl.classList.remove('marquee');
        requestAnimationFrame(() => {
            if (titleEl.scrollWidth > titleEl.clientWidth) {
                titleEl.classList.add('marquee');
            }
        });

        const sourceElements = audio.getElementsByTagName('source');
        sourceElements[0].src = track.src;
        sourceElements[1].src = track.fallback || '';
        audio.load();
    }

    if (audio) {
        // Init: load first track on page load
        updateTrackInfo();

        // Autoplay on first user interaction anywhere on page
        const tryAutoplay = () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playIcon.className = 'fas fa-pause';
                    ytPlayer.classList.add('playing');
                }).catch(() => { });
            }
            document.removeEventListener('click', tryAutoplay);
            document.removeEventListener('touchstart', tryAutoplay);
        };
        document.addEventListener('click', tryAutoplay);
        document.addEventListener('touchstart', tryAutoplay);

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playIcon.className = 'fas fa-pause';
                    ytPlayer.classList.add('playing');
                }).catch(err => {
                    console.log("Audio play blocked", err);
                });
            } else {
                audio.pause();
                playIcon.className = 'fas fa-play';
                ytPlayer.classList.remove('playing');
            }
        });

        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = `${percent}%`;
                progressHandle.style.left = `${percent}%`;
                currentTimeText.innerText = formatTime(audio.currentTime);
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            totalDurationText.innerText = formatTime(audio.duration);
        });

        // Fallback for duration if loadedmetadata already fired
        if (audio.duration) {
            totalDurationText.innerText = formatTime(audio.duration);
        }

        progressWrapper.addEventListener('click', (e) => {
            const rect = progressWrapper.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percent = clickX / width;
            if (audio.duration) {
                audio.currentTime = percent * audio.duration;
            }
        });

        function getNextTrackIndex() {
            if (isShuffle) {
                return Math.floor(Math.random() * playlist.length);
            }
            return (currentTrackIndex + 1) % playlist.length;
        }

        function getPrevTrackIndex() {
            if (isShuffle) {
                return Math.floor(Math.random() * playlist.length);
            }
            return (currentTrackIndex - 1 + playlist.length) % playlist.length;
        }

        document.getElementById('play-next-btn').addEventListener('click', () => {
            currentTrackIndex = getNextTrackIndex();
            updateTrackInfo();
            audio.play().then(() => {
                playIcon.className = 'fas fa-pause';
                ytPlayer.classList.add('playing');
            });
        });

        document.getElementById('play-prev-btn').addEventListener('click', () => {
            currentTrackIndex = getPrevTrackIndex();
            updateTrackInfo();
            audio.play().then(() => {
                playIcon.className = 'fas fa-pause';
                ytPlayer.classList.add('playing');
            });
        });

        audio.addEventListener('ended', () => {
            if (isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else {
                currentTrackIndex = getNextTrackIndex();
                updateTrackInfo();
                audio.play();
            }
        });

        // Shuffle Toggle
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                isShuffle = !isShuffle;
                shuffleBtn.classList.toggle('active', isShuffle);
            });
        }

        // Repeat Toggle
        if (repeatBtn) {
            repeatBtn.addEventListener('click', () => {
                isRepeat = !isRepeat;
                repeatBtn.classList.toggle('active', isRepeat);
            });
        }

        // Volume control logic
        if (volumeSlider) {
            volumeSlider.addEventListener('input', () => {
                const vol = parseFloat(volumeSlider.value);
                audio.volume = vol;
                volumeFill.style.width = (vol * 100) + '%';
                updateVolumeIcon(vol);
                if (vol > 0) {
                    lastVolume = vol;
                }
            });
        }

        if (volumeBtn) {
            volumeBtn.addEventListener('click', () => {
                if (audio.volume > 0) {
                    audio.volume = 0;
                    volumeSlider.value = 0;
                    volumeFill.style.width = '0%';
                    updateVolumeIcon(0);
                } else {
                    audio.volume = lastVolume;
                    volumeSlider.value = lastVolume;
                    volumeFill.style.width = (lastVolume * 100) + '%';
                    updateVolumeIcon(lastVolume);
                }
            });
        }

        function updateVolumeIcon(vol) {
            if (vol === 0) {
                volumeIcon.className = 'fas fa-volume-mute';
            } else if (vol < 0.5) {
                volumeIcon.className = 'fas fa-volume-down';
            } else {
                volumeIcon.className = 'fas fa-volume-up';
            }
        }
    }

    const tabTitle = "PURPLE STYLE | Bio Link & Donate 💜";
    let titleIndex = 0;
    let isReversing = false;
    let typingSpeed = 200;

    function animateTabTitle() {
        if (!isReversing) {
            document.title = tabTitle.substring(0, titleIndex + 1);
            titleIndex++;

            if (titleIndex === tabTitle.length) {
                isReversing = true;
                typingSpeed = 2500;
            } else {
                typingSpeed = 100 + Math.random() * 80;
            }
        } else {
            document.title = tabTitle.substring(0, titleIndex - 1);
            titleIndex--;

            if (titleIndex === 0) {
                isReversing = false;
                typingSpeed = 500;
            } else {
                typingSpeed = 50;
            }
        }

        setTimeout(animateTabTitle, typingSpeed);
    }

    animateTabTitle();
});