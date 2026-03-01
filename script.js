// =============================================
// Ramadan RHCSA Training — Content-Block Engine
// =============================================

// UI Elements
const dashboardView = document.getElementById('dashboard');
const classView = document.getElementById('class-view');
const lessonContent = document.getElementById('lesson-content');
const quizContainer = document.getElementById('quiz-container');
const quizResult = document.getElementById('quiz-result');
const modulesList = document.getElementById('modules-list');

let currentClassDate = null;

// ==============================
// Block Rendering Engine
// ==============================

function renderBlock(block) {
    switch (block.type) {

        case 'heading':
            return `<div class="lesson-section"><h2>${block.text}</h2></div>`;

        case 'subheading':
            return `<h3>${block.text}</h3>`;

        case 'paragraph':
            return `<p>${block.text}</p>`;

        case 'list':
            return `<ul>${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`;

        case 'quote':
            return `
                <div class="quote-block">
                    ${(Array.isArray(block.text) ? block.text : [block.text]).map(t => `<p>${t}</p>`).join('')}
                </div>`;

        case 'highlight':
            return `
                <div class="highlight-box success">
                    ${block.title ? `<h3>${block.title}</h3>` : ''}
                    ${(Array.isArray(block.text) ? block.text : [block.text]).map(t => `<p>${t}</p>`).join('')}
                </div>`;

        case 'terminal':
            return `
                <div class="terminal-block">
                    <code>${block.commands.join('<br>')}</code>
                </div>`;

        case 'alert':
            return `
                <div class="alert-note">
                    <strong>${block.label || 'Note'}:</strong> ${block.text}
                </div>`;

        case 'cards':
            return `
                <div class="cards-grid">
                    ${block.items.map(card => `
                        <div class="info-card">
                            ${card.icon ? `<div class="card-icon">${card.icon}</div>` : ''}
                            <h3>${card.title}</h3>
                            ${card.text ? `<p>${card.text}</p>` : ''}
                            ${card.list ? `<ul class="feature-list">${card.list.map(li => `<li>${li}</li>`).join('')}</ul>` : ''}
                            ${card.alert ? `<div class="alert-note"><strong>Note:</strong> ${card.alert}</div>` : ''}
                        </div>
                    `).join('')}
                </div>`;

        case 'timeline':
            return `
                <div class="process-timeline">
                    ${block.steps.map((step, i) => `
                        <div class="process-step${step.highlight ? ' highlight' : ''}${i === block.steps.length - 1 ? ' end' : ''}">
                            <div class="step-number">${i + 1}</div>
                            <div class="step-content">
                                <h4>${step.title}</h4>
                                <p>${step.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>`;

        case 'history':
            return `
                <div class="history-timeline">
                    ${block.items.map(item => `
                        <div class="history-item${item.highlight ? ' highlight' : ''}">
                            <div class="year">${item.year}</div>
                            <div class="details">
                                <h4>${item.title}</h4>
                                <p>${item.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>`;

        case 'table':
            return `
                <div class="table-responsive">
                    <table class="modern-table">
                        <thead>
                            <tr>${block.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${block.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                        </tbody>
                    </table>
                </div>`;

        case 'comparison':
            return `
                <div class="comparison-grid">
                    ${block.items.map(item => `
                        <div class="comp-card ${item.cssClass || ''}">
                            <div class="comp-header">${item.header}</div>
                            <ul class="comp-list">
                                ${item.list.map(li => `<li>${li}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>`;

        case 'qa':
            return `
                <div class="qa-container">
                    ${block.items.map(item => `
                        <div class="qa-item">
                            <h4><span class="q-mark">Q:</span> ${item.question}</h4>
                            <p><strong>উত্তর:</strong> ${item.answer}</p>
                        </div>
                    `).join('')}
                </div>`;

        case 'numbered-facts':
            return `
                <div class="qa-container">
                    ${block.items.map((item, i) => `
                        <div class="qa-item">
                            <h4><span class="q-mark">${i + 1}.</span> ${item.title}</h4>
                            <p>${item.text}</p>
                        </div>
                    `).join('')}
                </div>`;

        case 'prompt-structure':
            return `
                <div class="terminal-block" style="font-size: 1.2rem; text-align: center;">
                    <code><strong>${block.parts.map(p => p.value).join('')}</strong></code>
                    <div style="display: flex; justify-content: space-around; font-size: 0.9rem; color: #64748b; margin-top: 0.75rem;">
                        ${block.parts.map(p => `<span>${p.label}</span>`).join('')}
                    </div>
                </div>`;

        case 'lts-box':
            return `
                <div class="lts-box">
                    <h3>${block.title}</h3>
                    ${(Array.isArray(block.text) ? block.text : [block.text]).map(t => `<p>${t}</p>`).join('')}
                </div>`;

        default:
            return `<p>[Unknown block type: ${block.type}]</p>`;
    }
}

function renderClassContent(sections) {
    return sections.map(section => {
        if (section.type === 'section') {
            return `
                <div class="lesson-section">
                    ${section.title ? `<h2>${section.title}</h2>` : ''}
                    ${section.subtitle ? `<p>${section.subtitle}</p>` : ''}
                    ${section.blocks.map(b => renderBlock(b)).join('')}
                </div>`;
        }
        return renderBlock(section);
    }).join('');
}

// ==============================
// Dashboard Rendering
// ==============================

function renderDashboard() {
    modulesList.innerHTML = '';
    const sortedDates = Object.keys(classData).sort();
    const totalClasses = sortedDates.length;

    // Update progress indicator
    const progressEl = document.getElementById('class-progress');
    if (progressEl) {
        progressEl.textContent = `${totalClasses} টি ক্লাস পাওয়া যাচ্ছে`;
    }

    sortedDates.forEach((dateStr, index) => {
        const data = classData[dateStr];
        const classNum = data.classNumber || (index + 1);

        const cardHtml = `
            <div class="module-card" onclick="openClass('${dateStr}')">
                <div class="module-meta">
                    <span class="module-date">${formatDate(dateStr)}</span>
                    <span class="module-number">Class ${String(classNum).padStart(2, '0')}</span>
                </div>
                <h2 class="module-title">${data.title}</h2>
                <p class="module-desc">${data.description}</p>
                <div class="module-footer" style="justify-content: flex-end;">
                    <span class="action-btn">View Lesson &rarr;</span>
                </div>
            </div>
        `;
        modulesList.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ==============================
// Navigation
// ==============================

function openClass(dateStr) {
    const data = classData[dateStr];
    if (!data) return;
    currentClassDate = dateStr;

    // Calculate class number
    const sortedDates = Object.keys(classData).sort();
    const classNum = data.classNumber || (sortedDates.indexOf(dateStr) + 1);

    // Inject Content
    document.querySelector('.class-header h1').textContent = `Class ${String(classNum).padStart(2, '0')}: ${data.title}`;
    document.querySelector('.class-header .badge').textContent = formatDate(dateStr);

    // Render content from blocks
    if (data.sections) {
        lessonContent.innerHTML = renderClassContent(data.sections);
    } else if (data.content) {
        // Fallback for old raw HTML format
        lessonContent.innerHTML = data.content;
    }

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

// ==============================
// Date Formatting (Bengali)
// ==============================

function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const day = date.getDate().toString().split('').map(n => bnNums[n]).join('');
    const year = date.getFullYear().toString().split('').map(n => bnNums[n]).join('');
    return `${day} ${months[date.getMonth()]} ${year}`;
}

// ==============================
// Quiz System
// ==============================

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
        card.classList.remove('correct', 'incorrect');

        if (!selected) {
            allAnswered = false;
        } else {
            const val = parseInt(selected.value);
            if (val === q.correctAnswer) {
                score++;
                card.classList.add('correct');
            } else {
                card.classList.add('incorrect');
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

// ==============================
// Initialize
// ==============================
renderDashboard();
