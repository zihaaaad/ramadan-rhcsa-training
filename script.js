

// UI Elements
const dashboardView = document.getElementById('dashboard');
const classView = document.getElementById('class-view');
const lessonContent = document.getElementById('lesson-content');
const quizContainer = document.getElementById('quiz-container');
const quizResult = document.getElementById('quiz-result');

let currentClassDate = null;
const modulesList = document.getElementById('modules-list');

// Render Dashboard
function renderDashboard() {
    modulesList.innerHTML = '';

    // Sort dates or iterate
    Object.keys(classData).sort().forEach(dateStr => {
        const data = classData[dateStr];
        const isCompleted = data.status === 'completed';

        let cardClass = "module-card";
        if (!isCompleted) cardClass += " disabled";

        let onClickAction = isCompleted ? `onclick="openClass('${dateStr}')"` : "";
        let statusBadgeClass = isCompleted ? "status completed" : "status upcoming";
        let statusText = isCompleted ? "Completed" : "Upcoming";
        let actionBtn = isCompleted ? `<span class="action-btn">View Lesson &rarr;</span>` : "";

        const cardHtml = `
            <div class="${cardClass}" ${onClickAction}>
                <div class="module-date">${formatDate(dateStr)}</div>
                <h2 class="module-title">${data.title}</h2>
                <p class="module-desc">${data.description}</p>
                <div class="module-footer">
                    <span class="${statusBadgeClass}">${statusText}</span>
                    ${actionBtn}
                </div>
            </div>
        `;
        modulesList.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Navigation
function openClass(dateStr) {
    const data = classData[dateStr];
    if (!data) return;

    currentClassDate = dateStr;

    // Inject Content
    document.querySelector('.class-header h1').textContent = `Class 01: ${data.title}`;
    document.querySelector('.class-header .badge').textContent = formatDate(dateStr);
    lessonContent.innerHTML = data.content;

    // Generate Quiz
    generateQuiz(data.questions);

    // Reset Quiz Results
    quizResult.className = 'quiz-result hidden';
    quizResult.textContent = '';

    // Switch Views
    dashboardView.classList.remove('active');
    setTimeout(() => {
        classView.classList.add('active');
        window.scrollTo(0, 0);
    }, 50);
}

function goBack() {
    classView.classList.remove('active');
    setTimeout(() => {
        dashboardView.classList.add('active');
        window.scrollTo(0, 0);
    }, 50);
}

// Format date nicely
function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    const day = date.getDate().toString().split('').map(n => bnNums[n]).join('');
    const year = date.getFullYear().toString().split('').map(n => bnNums[n]).join('');

    return `${day} ${months[date.getMonth()]} ${year}`;
}

// Quiz System
function generateQuiz(questions) {
    quizContainer.innerHTML = '';

    questions.forEach((q, index) => {
        const questionHtml = `
            <div class="question-card" data-qid="${q.id}">
                <div class="question-title">${index + 1}. ${q.text}</div>
                <div class="options-list">
                    ${q.options.map((opt, optIndex) => `
                        <label class="option-label">
                            <input type="radio" name="q_${q.id}" value="${optIndex}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        quizContainer.insertAdjacentHTML('beforeend', questionHtml);
    });
}

function submitQuiz() {
    if (!currentClassDate) return;

    const questions = classData[currentClassDate].questions;
    let score = 0;
    let total = questions.length;
    let allAnswered = true;

    questions.forEach(q => {
        const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
        const card = document.querySelector(`.question-card[data-qid="${q.id}"]`);

        // Reset styles
        card.style.border = '1px solid var(--border-color)';

        if (!selected) {
            allAnswered = false;
        } else {
            const val = parseInt(selected.value);
            if (val === q.correctAnswer) {
                score++;
                card.style.border = '2px solid var(--success-color)';
            } else {
                card.style.border = '2px solid #ef4444';
            }
        }
    });

    quizResult.classList.remove('hidden', 'success', 'warning');

    if (!allAnswered) {
        quizResult.classList.add('warning');
        quizResult.textContent = 'অনুগ্রহ করে সবগুলো প্রশ্নের উত্তর দিন।';
        return;
    }

    quizResult.classList.add('success');
    quizResult.innerHTML = `আপনার স্কোর: <strong>${score} / ${total}</strong> <br> ${score === total ? 'অভিনন্দন! আপনি সবগুলো সঠিক উত্তর দিয়েছেন।' : 'আবার চেষ্টা করুন! কিছু উত্তর ভুল হয়েছে।'}`;
}

// Initialize Dashboard
renderDashboard();
