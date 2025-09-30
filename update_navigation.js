// Navigation update script for all tutorial pages
const pages = [
    { file: 'emergency.html', step: 5, title: 'Emergency Workflow', next: 'Case Studies' },
    { file: 'casestudies.html', step: 6, title: 'Case Studies', next: 'Limitations' },
    { file: 'limitations.html', step: 7, title: 'Limitations', next: 'Future Work' },
    { file: 'future.html', step: 8, title: 'Future', next: 'Bibliography' },
    { file: 'bibliography.html', step: 9, title: 'Bibliography', next: 'Complete!' }
];

const navigationTemplate = `    <nav class="navbar">
        <div class="nav-brand">
            <h2>CS663 Fall Detection</h2>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="sensors.html">Sensors & Platform</a></li>
            <li><a href="models.html">Pose Models</a></li>
            <li><a href="posture.html">Posture Detection</a></li>
            <li><a href="falllogic.html">Fall Logic</a></li>
            <li><a href="emergency.html">Emergency Workflow</a></li>
            <li><a href="casestudies.html">Case Studies</a></li>
            <li><a href="limitations.html">Limitations</a></li>
            <li><a href="future.html">Future</a></li>
            <li><a href="bibliography.html">Bibliography</a></li>
        </ul>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>`;

const progressTemplate = (step, title, progress) => `
    <!-- Progress Indicator -->
    <div class="progress-indicator">
        <div class="progress-text">Tutorial Progress: Step ${step} of 10 - ${title}</div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
    </div>`;

const footerTemplate = (step, nextTitle) => `    <footer>
        <p>CS663 Computer Vision | Fall 2025</p>
        <a href="#top" class="back-to-top">Back to Top</a>
    </footer>
    
    <div class="footer-progress">
        You are currently on Step ${step}. Next: <span class="next-step">${nextTitle}</span>
    </div>

    <script>
        // Mark this step as completed
        document.addEventListener('DOMContentLoaded', function() {
            let completedSteps = JSON.parse(localStorage.getItem('tutorialProgress') || '[]');
            if (!completedSteps.includes(${step})) {
                completedSteps.push(${step});
                localStorage.setItem('tutorialProgress', JSON.stringify(completedSteps));
            }
        });
    </script>`;

const navButtonsTemplate = (prevPage, prevTitle, nextPage, nextTitle) => {
    if (nextPage === 'complete') {
        return `        <div class="nav-buttons">
            <a href="${prevPage}.html" class="btn-nav btn-secondary">← Back: ${prevTitle}</a>
            <a href="index.html" class="btn-nav">🎉 Tutorial Complete!</a>
        </div>`;
    }
    return `        <div class="nav-buttons">
            <a href="${prevPage}.html" class="btn-nav btn-secondary">← Back: ${prevTitle}</a>
            <a href="${nextPage}.html" class="btn-nav">Next: ${nextTitle} →</a>
        </div>`;
};

// Page mappings for navigation
const pageMap = {
    'emergency.html': { prev: 'falllogic', prevTitle: 'Fall Logic', next: 'casestudies', nextTitle: 'Case Studies' },
    'casestudies.html': { prev: 'emergency', prevTitle: 'Emergency Workflow', next: 'limitations', nextTitle: 'Limitations' },
    'limitations.html': { prev: 'casestudies', prevTitle: 'Case Studies', next: 'future', nextTitle: 'Future Work' },
    'future.html': { prev: 'limitations', prevTitle: 'Limitations', next: 'bibliography', nextTitle: 'Bibliography' },
    'bibliography.html': { prev: 'future', prevTitle: 'Future Work', next: 'complete', nextTitle: 'Complete!' }
};

console.log('Navigation templates ready for manual application');
