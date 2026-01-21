class AFKManager {
    constructor(timeoutMinutes = 1) {
        this.timeoutMs = timeoutMinutes * 60 * 1000;
        this.isAFK = false;
        this.afkTimeout = null;
        this.afkScreen = null;
        this.starsCanvas = null;
        this.starsCtx = null;
        this.stars = [];
        
        this.init();
    }

    init() {
        this.createAFKScreen();
        this.addActivityListeners();
    }

    createAFKScreen() {
        this.afkScreen = document.createElement('div');
        this.afkScreen.id = 'afk-screen';
        this.afkScreen.className = 'afk-screen hidden';
        this.afkScreen.innerHTML = `
            <canvas id="afk-stars"></canvas>
            <div class="afk-content">
                <div class="afk-text">
                    <h1>AFK</h1>
                    <p>Vous êtes inactif...</p>
                    <p class="afk-timer"><span id="afk-timer-text">0</span>s</p>
                </div>
            </div>
        `;
        document.body.appendChild(this.afkScreen);
        this.initStarsCanvas();
    }

    initStarsCanvas() {
        this.starsCanvas = document.getElementById('afk-stars');
        this.starsCtx = this.starsCanvas.getContext('2d');
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        this.starsCanvas.width = width;
        this.starsCanvas.height = height;
        
        this.stars = Array.from({ length: 150 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.5,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.5
        }));
        
        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            this.starsCanvas.width = width;
            this.starsCanvas.height = height;
        });
    }

    animateStars() {
        if (!this.isAFK) return;
        
        const width = this.starsCanvas.width;
        const height = this.starsCanvas.height;
        
        this.starsCtx.clearRect(0, 0, width, height);
        this.starsCtx.fillStyle = '#00d4ff';
        this.starsCtx.globalAlpha = 0.85;
        
        this.stars.forEach(s => {
            this.starsCtx.beginPath();
            this.starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            this.starsCtx.fill();
            s.x += s.dx;
            s.y += s.dy;
            if (s.x < 0 || s.x > width) s.dx *= -1;
            if (s.y < 0 || s.y > height) s.dy *= -1;
        });
        
        this.starsCtx.globalAlpha = 1;
        requestAnimationFrame(() => this.animateStars());
    }

    addActivityListeners() {
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        events.forEach(event => {
            document.addEventListener(event, () => this.resetInactivityTimer());
        });
    }

    resetInactivityTimer() {
        if (this.afkTimeout) {
            clearTimeout(this.afkTimeout);
        }

        if (this.isAFK) {
            this.hideAFKScreen();
        }

        this.afkTimeout = setTimeout(() => {
            this.showAFKScreen();
        }, this.timeoutMs);
    }

    showAFKScreen() {
        this.isAFK = true;
        this.afkScreen.classList.remove('hidden');
        
        this.animateStars();
        
        let seconds = 0;
        const timerInterval = setInterval(() => {
            seconds++;
            const timerElement = document.getElementById('afk-timer-text');
            if (timerElement) {
                timerElement.textContent = seconds;
            }
        }, 1000);
        
        this.afkScreen.dataset.timerInterval = timerInterval;
    }

    hideAFKScreen() {
        this.isAFK = false;
        this.afkScreen.classList.add('hidden');
        
        const timerInterval = parseInt(this.afkScreen.dataset.timerInterval);
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        const timerElement = document.getElementById('afk-timer-text');
        if (timerElement) {
            timerElement.textContent = '0';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AFKManager(1);
});
