class CursorAnimation {
    constructor() {
        this.cursorOuter = null;
        this.cursorInner = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseOuterX = 0;
        this.mouseOuterY = 0;
        this.isHoveringLink = false;
        this.init();
    }

    init() {
        document.body.style.cursor = 'none';

        this.createCursorElements();
        
        this.addEventListeners();
        
        this.updateTheme();
        
        window.addEventListener('themechange', () => this.updateTheme());
        
        this.animate();
    }

    createCursorElements() {
        this.cursorOuter = document.createElement('div');
        this.cursorOuter.classList.add('cursor-outer');
        document.body.appendChild(this.cursorOuter);

        this.cursorInner = document.createElement('div');
        this.cursorInner.classList.add('cursor-inner');
        document.body.appendChild(this.cursorInner);
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mousedown', () => this.onMouseDown());
        document.addEventListener('mouseup', () => this.onMouseUp());
        
        document.addEventListener('mouseover', (e) => this.onMouseOver(e));
        document.addEventListener('mouseout', (e) => this.onMouseOut(e));
    }

    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    onMouseDown() {
        this.cursorInner.classList.add('active');
        this.cursorOuter.classList.add('active');
    }

    onMouseUp() {
        this.cursorInner.classList.remove('active');
        this.cursorOuter.classList.remove('active');
    }

    onMouseOver(e) {
        const target = e.target;
        if (this.isInteractiveElement(target)) {
            this.isHoveringLink = true;
            this.cursorOuter.classList.add('hover');
            this.cursorInner.classList.add('hover');
        }
    }

    onMouseOut(e) {
        const target = e.target;
        if (this.isInteractiveElement(target)) {
            this.isHoveringLink = false;
            this.cursorOuter.classList.remove('hover');
            this.cursorInner.classList.remove('hover');
        }
    }

    isInteractiveElement(element) {
        const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
        if (interactiveTags.includes(element.tagName)) return true;
        
        if (element.getAttribute('onclick') !== null) return true;
        if (element.className.includes('btn') || element.className.includes('button')) return true;
        if (element.className.includes('clickable') || element.className.includes('link')) return true;
        
        return false;
    }

    updateTheme() {
        const isDarkTheme = !document.body.classList.contains('light-theme');
        
        if (isDarkTheme) {
            this.cursorOuter.classList.remove('light-theme');
            this.cursorInner.classList.remove('light-theme');
        } else {
            this.cursorOuter.classList.add('light-theme');
            this.cursorInner.classList.add('light-theme');
        }
    }

    animate() {
        this.cursorInner.style.left = this.mouseX + 'px';
        this.cursorInner.style.top = this.mouseY + 'px';

        this.mouseOuterX += (this.mouseX - this.mouseOuterX) * 0.15;
        this.mouseOuterY += (this.mouseY - this.mouseOuterY) * 0.15;

        this.cursorOuter.style.left = this.mouseOuterX + 'px';
        this.cursorOuter.style.top = this.mouseOuterY + 'px';

        requestAnimationFrame(() => this.animate());
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CursorAnimation();
    });
} else {
    new CursorAnimation();
}
