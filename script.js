// Interactive Quiz for Fall Detection
class FallDetectionQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [
            {
                image: "images/fall-scenario-1.png",
                question: "Analyze the stick figure movement pattern. Is this a fall or normal sitting motion?",
                correctAnswer: "fall",
                explanation: "This shows rapid vertical drop with torso angle change and post-impact stillness - classic fall pattern."
            },
            {
                image: "images/fall-scenario-2.png", 
                question: "Look at this movement sequence. Does this represent a fall or controlled sitting?",
                correctAnswer: "sit",
                explanation: "This shows controlled descent with gradual torso angle change and immediate repositioning - normal sitting."
            },
            {
                image: "images/fall-scenario-3.png",
                question: "Examine this rapid movement pattern. Fall or intentional lying down?",
                correctAnswer: "fall",
                explanation: "The sudden acceleration and lack of controlled movement indicate a fall rather than intentional lying down."
            },
            {
                image: "images/fall-scenario-4.png",
                question: "This person is moving to the ground. Is this a fall or exercise movement?",
                correctAnswer: "sit",
                explanation: "The controlled movement pattern and immediate recovery suggest this is an exercise or intentional movement."
            }
        ];
        this.initializeQuiz();
    }

    initializeQuiz() {
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('quiz-image').src = question.image;
        document.getElementById('quiz-image').alt = `Fall detection scenario ${this.currentQuestion + 1}`;
        document.getElementById('quiz-question').textContent = question.question;
        document.getElementById('quiz-feedback').innerHTML = '';
        document.getElementById('next-question').style.display = 'none';
        
        // Re-enable quiz buttons
        const buttons = document.querySelectorAll('.quiz-btn');
        buttons.forEach(btn => {
            if (btn.id !== 'next-question') {
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        });
    }

    checkAnswer(userAnswer) {
        const question = this.questions[this.currentQuestion];
        const feedbackElement = document.getElementById('quiz-feedback');
        const buttons = document.querySelectorAll('.quiz-btn');
        
        // Disable quiz buttons after answer
        buttons.forEach(btn => {
            if (btn.id !== 'next-question') {
                btn.disabled = true;
                btn.style.opacity = '0.6';
            }
        });

        if (userAnswer === question.correctAnswer) {
            this.score++;
            feedbackElement.innerHTML = `
                <div class="correct">
                    <strong>Correct!</strong><br>
                    ${question.explanation}
                </div>
            `;
        } else {
            feedbackElement.innerHTML = `
                <div class="incorrect">
                    <strong>Try again!</strong><br>
                    ${question.explanation}
                </div>
            `;
        }

        // Show next question button or final score
        if (this.currentQuestion < this.questions.length - 1) {
            document.getElementById('next-question').style.display = 'inline-block';
        } else {
            this.showFinalScore();
        }
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        }
    }

    showFinalScore() {
        const feedbackElement = document.getElementById('quiz-feedback');
        const percentage = Math.round((this.score / this.questions.length) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = 'Excellent! You have a strong understanding of fall detection patterns.';
        } else if (percentage >= 60) {
            message = 'Good work! You understand the basic concepts of fall detection.';
        } else {
            message = 'Keep learning! Fall detection requires careful analysis of movement patterns.';
        }

        feedbackElement.innerHTML += `
            <div style="margin-top: 1rem; padding: 1rem; background: #e8f4f8; border-radius: 6px;">
                <strong>Quiz Complete!</strong><br>
                Score: ${this.score}/${this.questions.length} (${percentage}%)<br>
                ${message}
                <br><br>
                <button class="quiz-btn" onclick="quiz.restartQuiz()" style="margin-top: 0.5rem;">Restart Quiz</button>
            </div>
        `;
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.displayQuestion();
    }
}

// Global quiz instance
let quiz;

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize quiz if we're on the fall logic page
    if (document.getElementById('quiz-image')) {
        quiz = new FallDetectionQuiz();
    }
});

// Global functions for button onclick handlers
function checkAnswer(answer) {
    if (quiz) {
        quiz.checkAnswer(answer);
    }
}

function nextQuestion() {
    if (quiz) {
        quiz.nextQuestion();
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            // Create placeholder for missing images
            this.style.background = '#f0f0f0';
            this.style.border = '2px dashed #ccc';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '200px';
            this.alt = 'Image placeholder - ' + this.alt;
        });
    });
});

// Audio player enhancements
document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.addEventListener('loadstart', function() {
            // Add loading indicator
            const caption = this.nextElementSibling;
            if (caption && caption.classList.contains('audio-caption')) {
                caption.innerHTML += ' <em>(Loading...)</em>';
            }
        });
        
        audio.addEventListener('canplay', function() {
            // Remove loading indicator
            const caption = this.nextElementSibling;
            if (caption && caption.classList.contains('audio-caption')) {
                caption.innerHTML = caption.innerHTML.replace(' <em>(Loading...)</em>', '');
            }
        });
        
        audio.addEventListener('error', function() {
            // Handle audio loading errors
            const caption = this.nextElementSibling;
            if (caption && caption.classList.contains('audio-caption')) {
                caption.innerHTML = caption.innerHTML.replace(' <em>(Loading...)</em>', ' <em>(Audio unavailable)</em>');
            }
        });
    });
});

// Mobile navigation enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button
    const navLogo = document.querySelector('.nav-logo');
    const navMenu = document.querySelector('.nav-menu');

    if (navLogo && navMenu) {
        // Create mobile menu toggle button
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
        mobileToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        // Add toggle button to nav logo container
        navLogo.appendChild(mobileToggle);

        // Toggle menu functionality
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link (mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const spans = mobileToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });

        // Close menu when resizing to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});
