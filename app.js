// ============================================
// JAVA STUDY HUB - Main Application
// ============================================

// API keys removed, using Wandbox API
// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    currentSection: 'home',
    currentWeek: null,
    quiz: {
        active: false,
        weekId: null,
        isFinal: false,
        questions: [],
        currentIndex: 0,
        answers: {},
        codeAnswers: {},
        codeResults: {},
        startTime: null,
        timerInterval: null
    },
    stats: JSON.parse(localStorage.getItem('javaStudyStats') || '{"quizzes":[],"lastVisit":""}')
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initI18n();
    renderHomeWeeks();
    renderSidebarWeeks();
    renderQuizGrid();
    updateStats();
    trackVisit();
});

// ============================================
// THEME MANAGEMENT
// ============================================

// ============================================
// LOCALIZATION (I18N) & HIGHLIGHTING
// ============================================
const translations = {
    "الرئيسية": "Home",
    "المحاضرات": "Lectures",
    "الاختبارات": "Quizzes",
    "الإحصائيات": "Statistics",
    "تعلّم": "Learn",
    "بأسلوب ممتع 🚀": "the fun way 🚀",
    "ابدأ التعلم": "Start Learning",
    "اختبر نفسك": "Test Yourself",
    "أسبوع دراسي": "Weeks",
    "ملف تعليمي": "Files",
    "سؤال اختبار": "Questions",
    "موضوع مشروح": "Topics",
    "نظرة عامة على المنهج": "Course Overview",
    "اضغط على أي أسبوع للبدء في المذاكرة": "Click any week to start studying",
    "الأسابيع": "Weeks",
    "اختر أسبوع من القائمة": "Select a week from the list",
    "اضغط على أي أسبوع عشان تشوف المحتوى والشرح": "Click a week to view its content",
    "اختر أسبوع عشان تبدأ اختبار عليه - كل اختبار فيه 20 سؤال MCQ و 5 أسئلة مقالية": "Choose a week to start a quiz",
    "خروج": "Exit",
    "السابق": "Previous",
    "التالي →": "Next →",
    "السابق ←": "← Prev",
    "✅ إرسال الاختبار": "✅ Submit Quiz",
    "لوحة الإحصائيات": "Statistics Dashboard",
    "تتبع أداءك وتقدمك في المذاكرة": "Track your performance and progress",
    "اختبار مكتمل": "Completed Quizzes",
    "متوسط الدرجات": "Average Score",
    "أفضل درجة": "Best Score",
    "يوم متتالي": "Day Streak",
    "📊 الدرجات لكل أسبوع": "📊 Scores by Week",
    "📝 سجل الاختبارات": "📝 Quiz History",
    "🗑️ مسح جميع البيانات": "🗑️ Clear All Data",
    "منصة تعليمية شاملة تشرحلك منهج الجافا كامل من المحاضرة الأولى لحد الريفيجن. شروحات بالعربي والانجليزي، أمثلة عملية، واختبارات تفاعلية على كل أسبوع.": "A comprehensive platform covering the Java curriculum from the first lecture to the revision. Explanations in Arabic and English, practical examples, and interactive quizzes for every week.",
    "جامعة برج العرب التكنولوجية • سنة تانية IT": "Borg El Arab Technological University • 2nd Year IT",
    "هذا الموقع لايتبع جامعه برج العرب التكنولوجيا بشكل رسمي انما هوه عمل تطويعي تم بناء هذا الموقع بواسطه عبدالله محمد علي ❤️": "This site is not officially affiliated with Borg El Arab Technological University. It is a volunteer work built by Abdallah Mohamed Ali ❤️"
};

let currentLang = localStorage.getItem('javaStudyLang') || 'ar';

function initI18n() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('javaStudyLang', currentLang);
            document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
            applyTranslations();
        });
    }
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    if (currentLang === 'en') applyTranslations();
}

function applyTranslations() {
    const isEn = currentLang === 'en';
    const textNodes = getTextNodesIn(document.body);
    
    // Simple replace for UI elements (we use a saved original text attribute)
    textNodes.forEach(node => {
        if (!node.parentElement) return;
        if (node.parentElement.closest('.code-window') || node.parentElement.closest('.week-content') || node.parentElement.closest('.quiz-body')) return; // Skip content areas
        
        let original = node.parentElement.getAttribute('data-ar-text');
        if (!original) {
            original = node.textContent.trim();
            if (original && translations[original]) {
                node.parentElement.setAttribute('data-ar-text', original);
            }
        }
        
        if (original && translations[original]) {
            node.textContent = isEn ? translations[original] : original;
        }
    });
}

function getTextNodesIn(el) {
    var textNodes = [], nonWhitespaceMatcher = /\S/;
    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (nonWhitespaceMatcher.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }
    getTextNodes(el);
    return textNodes;
}

// Terms Highlight
function highlightTerms(html) {
    if (!html) return html;
    // Highlight important Java terms
    const terms = ['Class', 'Object', 'Method', 'Function', 'Variable', 'Loop', 'Array', 'String', 'Integer', 'Double', 'Boolean', 'Scanner', 'System.out.println', 'public', 'static', 'void', 'main', 'if', 'else', 'switch', 'for', 'while', 'do-while', 'break', 'continue', 'return', 'ArrayList', 'extends', 'implements', 'interface', 'abstract', 'private', 'protected', 'try', 'catch', 'finally', 'Exception'];
    let result = html;
    terms.forEach(term => {
        const regex = new RegExp(`\\b(${term.replace(/[.*+?^$\{\}()|[\]\\]/g, '\\function initTheme()')})\\b`, 'gi');
        // Simple replace but avoid replacing inside HTML tags
        result = result.replace(/(?![^<]*>)(.*?)/g, (match) => {
            return match.replace(regex, '<span class="term-highlight" style="color:#ff3366;font-weight:bold;">$1</span>');
        });
    });
    return result;
}

function initTheme() {
    const saved = localStorage.getItem('javaStudyTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('javaStudyTheme', next);
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    // Desktop nav
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => navigateTo(btn.dataset.section));
    });
    // Mobile nav
    document.querySelectorAll('.mobile-nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateTo(btn.dataset.section);
            closeMobileMenu();
        });
    });
    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    // Brand click
    document.getElementById('nav-brand').addEventListener('click', () => navigateTo('home'));
    // Hero buttons
    document.getElementById('start-learning-btn').addEventListener('click', () => navigateTo('weeks'));
    document.getElementById('start-quiz-btn').addEventListener('click', () => navigateTo('quiz'));
    // Quiz buttons
    document.getElementById('quiz-exit-btn').addEventListener('click', exitQuiz);
    document.getElementById('quiz-prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);
    document.getElementById('quiz-submit-btn').addEventListener('click', submitQuiz);
    // Stats
    document.getElementById('clear-stats-btn').addEventListener('click', clearStats);
    // Sidebar Toggle
    document.getElementById('desktop-sidebar-close').addEventListener('click', toggleDesktopSidebar);
    document.getElementById('desktop-sidebar-open').addEventListener('click', toggleDesktopSidebar);
}

function toggleDesktopSidebar() {
    const layout = document.querySelector('.weeks-layout');
    const openBtn = document.getElementById('desktop-sidebar-open');
    layout.classList.toggle('sidebar-hidden');
    if (layout.classList.contains('sidebar-hidden')) {
        openBtn.style.display = 'inline-flex';
    } else {
        openBtn.style.display = 'none';
    }
}

function navigateTo(section) {
    state.currentSection = section;
    // Update active section
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${section}`).classList.add('active');
    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));
    const navBtn = document.querySelector(`.nav-link[data-section="${section}"]`);
    if (navBtn) navBtn.classList.add('active');
    const mobBtn = document.querySelector(`.mobile-nav-link[data-section="${section}"]`);
    if (mobBtn) mobBtn.classList.add('active');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('mobile-menu-btn').classList.remove('active');
}

// ============================================
// HOME PAGE - WEEKS GRID
// ============================================
function renderHomeWeeks() {
    const grid = document.getElementById('home-weeks-grid');
    grid.innerHTML = WEEKS_DATA.map(w => `
        <div class="week-card" onclick="openWeekFromHome(${w.id})">
            <div class="week-card-num">${w.num}</div>
            <div class="week-card-title">${w.title}</div>
            <div class="week-card-subtitle">${w.titleEn}</div>
            <div class="week-card-topics">
                ${w.topics.slice(0, 4).map(t => `<span class="topic-tag">${t}</span>`).join('')}
                ${w.topics.length > 4 ? `<span class="topic-tag">+${w.topics.length - 4}</span>` : ''}
            </div>
        </div>
    `).join('');
}

function openWeekFromHome(weekId) {
    navigateTo('weeks');
    setTimeout(() => selectWeek(weekId), 100);
}

// ============================================
// WEEKS SIDEBAR + CONTENT
// ============================================
function renderSidebarWeeks() {
    const html = WEEKS_DATA.map(w => `
        <button class="sidebar-item" data-week="${w.id}" onclick="openWeekFromMobile(${w.id})">
            <span class="sidebar-item-num">${w.num}</span>
            <span>${w.title}</span>
        </button>
    `).join('');
    
    document.getElementById('sidebar-list').innerHTML = html;
    
    const mobileList = document.getElementById('mobile-sidebar-list');
    if (mobileList) {
        mobileList.innerHTML = html;
    }
}

function openWeekFromMobile(weekId) {
    navigateTo('weeks');
    selectWeek(weekId);
    closeMobileMenu();
}

function selectWeek(weekId) {
    state.currentWeek = weekId;
    const week = WEEKS_DATA.find(w => w.id === weekId);
    if (!week) return;

    // Update sidebar active
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll(`.sidebar-item[data-week="${weekId}"]`).forEach(el => el.classList.add('active'));

    // Render content
    const contentEl = document.getElementById('week-content');
    contentEl.innerHTML = highlightTerms(`
        <div class="week-header">
            <h2>${week.num} - ${week.title}</h2>
            <p>${week.titleEn}</p>
        </div>
        ${week.content}
        <div class="week-actions">
            <button class="btn btn-primary" onclick="startQuiz(${week.id})">
                🧪 اختبر نفسك على هذا الأسبوع
            </button>
            ${weekId < WEEKS_DATA.length ? `
            <button class="btn btn-ghost" onclick="selectWeek(${weekId + 1})">
                الأسبوع التالي →
            </button>` : ''}
        </div>
    `);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// QUIZ SYSTEM
// ============================================
function renderQuizGrid() {
    const grid = document.getElementById('quiz-grid');
    let html = WEEKS_DATA.map(w => {
        const best = getBestScore(w.id);
        return `
        <div class="quiz-card" onclick="startQuiz(${w.id})" id="quiz-card-${w.id}">
            <div class="quiz-card-icon">📝</div>
            <h4>${w.num} - ${w.title}</h4>
            <p>20 MCQ + 5 أسئلة كود</p>
            ${best !== null ? `<span class="best-score">أفضل: ${best}%</span>` : ''}
        </div>`;
    }).join('');

    // Add Final Exam card
    html += `
        <div class="quiz-card" onclick="startFinalExam()" id="quiz-card-final" style="border: 2px solid var(--accent); background: linear-gradient(135deg, rgba(255,107,53,0.05), rgba(108,99,255,0.05));">
            <div class="quiz-card-icon">🏆</div>
            <h4>الامتحان الشامل - Final Exam</h4>
            <p>~80 سؤال على المنهج كله: MCQ, صح/غلط, Complete, Output, Code</p>
            ${getBestScore('final') !== null ? `<span class="best-score">أفضل: ${getBestScore('final')}%</span>` : ''}
        </div>`;

    grid.innerHTML = html;
}

function startQuiz(weekId) {
    const week = WEEKS_DATA.find(w => w.id === weekId);
    if (!week) return;

    // Build questions array: 20 MCQ + 5 code
    const questions = [];

    // Add MCQ questions
    week.mcqQuestions.forEach((q, i) => {
        questions.push({ type: 'mcq', id: `mcq_${i}`, ...q });
    });

    // Add essay/code questions
    week.essayQuestions.forEach((q, i) => {
        questions.push({ type: 'code', id: `code_${i}`, ...q });
    });

    state.quiz = {
        active: true,
        weekId: weekId,
        isFinal: false,
        questions,
        currentIndex: 0,
        answers: {},
        codeAnswers: {},
        codeResults: {},
        startTime: Date.now(),
        timerInterval: null
    };

    document.getElementById('quiz-title').textContent = `${week.num} - ${week.title}`;
    showQuizUI();
    renderQuestion();
    startTimer();
}

function startFinalExam() {
    if (typeof FINAL_EXAM_DATA === 'undefined') {
        alert('بيانات الامتحان الشامل غير متوفرة!');
        return;
    }

    const questions = [];
    FINAL_EXAM_DATA.forEach((q, i) => {
        questions.push({ id: `final_${i}`, ...q });
    });

    state.quiz = {
        active: true,
        weekId: 'final',
        isFinal: true,
        questions,
        currentIndex: 0,
        answers: {},
        codeAnswers: {},
        codeResults: {},
        startTime: Date.now(),
        timerInterval: null
    };

    document.getElementById('quiz-title').textContent = '🏆 الامتحان الشامل - Final Exam';
    showQuizUI();
    renderQuestion();
    startTimer();
}

function showQuizUI() {
    document.getElementById('quiz-selection').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');
}

function renderQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    const total = state.quiz.questions.length;
    const idx = state.quiz.currentIndex;

    // Update progress
    document.getElementById('quiz-progress-text').textContent = `السؤال ${idx + 1} من ${total}`;
    document.getElementById('quiz-progress-fill').style.width = `${((idx + 1) / total) * 100}%`;

    // Show/hide buttons
    document.getElementById('quiz-prev-btn').style.display = idx === 0 ? 'none' : '';
    document.getElementById('quiz-next-btn').classList.toggle('hidden', idx === total - 1);
    document.getElementById('quiz-submit-btn').classList.toggle('hidden', idx !== total - 1);

    const body = document.getElementById('quiz-body');

    if (q.type === 'mcq') {
        renderMCQ(body, q, idx);
    } else if (q.type === 'tf') {
        renderTrueFalse(body, q, idx);
    } else if (q.type === 'complete') {
        renderComplete(body, q, idx);
    } else if (q.type === 'output') {
        renderOutput(body, q, idx);
    } else if (q.type === 'code') {
        renderCode(body, q, idx);
    }
}

function renderMCQ(container, q, idx) {
    const selected = state.quiz.answers[q.id];
    container.innerHTML = `
        <div class="quiz-question">
            <span class="question-badge mcq">MCQ</span>
            <div class="question-text">${q.q}</div>
            ${q.code ? `<div class="question-code"><code>${escapeHtml(q.code)}</code></div>` : ''}
            <div class="mcq-options">
                ${q.options.map((opt, i) => `
                    <div class="mcq-option ${selected === i ? 'selected' : ''}" onclick="selectMCQ('${q.id}', ${i})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${escapeHtml(opt)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderTrueFalse(container, q, idx) {
    const selected = state.quiz.answers[q.id];
    container.innerHTML = `
        <div class="quiz-question">
            <span class="question-badge mcq">صح / غلط - True or False</span>
            <div class="question-text">${q.q}</div>
            ${q.code ? `<div class="question-code"><code>${escapeHtml(q.code)}</code></div>` : ''}
            <div class="mcq-options">
                <div class="mcq-option ${selected === 0 ? 'selected' : ''}" onclick="selectMCQ('${q.id}', 0)">
                    <span class="option-letter">✅</span>
                    <span>True (صح)</span>
                </div>
                <div class="mcq-option ${selected === 1 ? 'selected' : ''}" onclick="selectMCQ('${q.id}', 1)">
                    <span class="option-letter">❌</span>
                    <span>False (غلط)</span>
                </div>
            </div>
        </div>
    `;
}

function renderComplete(container, q, idx) {
    const val = state.quiz.answers[q.id] || '';
    container.innerHTML = `
        <div class="quiz-question">
            <span class="question-badge" style="background:rgba(0,176,255,0.15);color:var(--info);">أكمل - Complete</span>
            <div class="question-text">${q.q}</div>
            ${q.code ? `<div class="question-code"><code>${escapeHtml(q.code)}</code></div>` : ''}
            <div style="margin-top:var(--space-4);">
                <input type="text" class="essay-textarea" style="min-height:auto;height:44px;font-size:var(--text-base);"
                    placeholder="اكتب الإجابة هنا..."
                    value="${escapeHtml(val)}"
                    oninput="state.quiz.answers['${q.id}'] = this.value" />
            </div>
            ${q.hint ? `<div class="info-box" style="margin-top:var(--space-4);"><h5>💡 تلميح</h5><p>${q.hint}</p></div>` : ''}
        </div>
    `;
}

function renderOutput(container, q, idx) {
    const val = state.quiz.answers[q.id] || '';
    container.innerHTML = `
        <div class="quiz-question">
            <span class="question-badge" style="background:rgba(255,214,0,0.15);color:var(--warning);">🖥️ هات الـ Output</span>
            <div class="question-text">ما هو ناتج الكود التالي؟ | What is the output of the following code?</div>
            <div class="question-code"><code>${escapeHtml(q.code)}</code></div>
            <div style="margin-top:var(--space-4);">
                <input type="text" class="essay-textarea" style="min-height:auto;height:44px;font-size:var(--text-base);"
                    placeholder="اكتب الـ Output بالظبط هنا..."
                    value="${escapeHtml(val)}"
                    oninput="state.quiz.answers['${q.id}'] = this.value" />
            </div>
            <div class="info-box warning" style="margin-top:var(--space-3);">
                <h5>⚠️ ملاحظة</h5>
                <p>اكتب الـ Output بالظبط زي ما هيطلع في الكونسول. لو فيه أكتر من سطر افصلهم بـ \\n</p>
            </div>
        </div>
    `;
}

function renderCode(container, q, idx) {
    const savedCode = state.quiz.codeAnswers[q.id] || '';
    const result = state.quiz.codeResults[q.id];
    container.innerHTML = `
        <div class="quiz-question">
            <span class="question-badge essay">💻 اكتب كود - Write Code</span>
            <div class="question-text">${q.q}</div>
            ${q.expectedInput ? `
            <div class="info-box" style="margin-top:var(--space-3); background:rgba(0,176,255,0.1); border-left: 4px solid var(--info);">
                <h5>⌨️ الـ Input المتوقع (سيتم إدخاله تلقائياً)</h5>
                <div class="question-code" style="margin:var(--space-2) 0 0;"><code>${escapeHtml(q.expectedInput)}</code></div>
            </div>` : ''}
            ${q.expectedOutput ? `
            <div class="info-box success" style="margin-top:var(--space-3);">
                <h5>🎯 الـ Output المطلوب</h5>
                <div class="question-code" style="margin:var(--space-2) 0 0;"><code>${escapeHtml(q.expectedOutput)}</code></div>
            </div>` : ''}
            ${q.hint ? `<div class="info-box" style="margin-top:var(--space-3);"><h5>💡 تلميح</h5><p>${q.hint}</p></div>` : ''}
            <div style="margin-top:var(--space-4);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);">
                    <span style="font-size:var(--text-sm);color:var(--text-tertiary);font-family:var(--font-mono);">Main.java</span>
                    <button class="btn btn-accent btn-sm" onclick="runCode('${q.id}')" id="run-btn-${q.id}">
                        ▶ شغّل الكود
                    </button>
                </div>
                <textarea class="essay-textarea" id="code-editor-${q.id}" 
                    style="min-height:220px;font-family:var(--font-mono);font-size:13px;line-height:1.7;tab-size:4;"
                    placeholder='public class Main {\n    public static void main(String[] args) {\n        // اكتب الكود هنا\n    }\n}'
                    oninput="state.quiz.codeAnswers['${q.id}'] = this.value"
                    onkeydown="handleTab(event)">${escapeHtml(savedCode)}</textarea>
            </div>
            <div id="code-result-${q.id}" class="code-result-area">
                ${result ? renderCodeResult(result) : ''}
            </div>
        </div>
    `;
}

function renderCodeResult(result) {
    if (result.loading) {
        return `<div class="info-box" style="margin-top:var(--space-3);text-align:center;">
            <h5>⏳ جاري تشغيل الكود...</h5>
            <div class="loading-spinner"></div>
        </div>`;
    }
    if (result.error) {
        return `<div class="info-box danger" style="margin-top:var(--space-3);">
            <h5>❌ خطأ في الكود</h5>
            <div class="question-code" style="margin-top:var(--space-2);"><code>${escapeHtml(result.error)}</code></div>
        </div>`;
    }
    const matchClass = result.matched === true ? 'success' : (result.matched === false ? 'danger' : '');
    const matchIcon = result.matched === true ? '✅ Output صحيح! أحسنت! 🎉' : (result.matched === false ? '❌ Output مش مطابق. حاول تاني!' : '📤 نتيجة التشغيل:');
    return `<div class="info-box ${matchClass}" style="margin-top:var(--space-3);">
        <h5>${matchIcon}</h5>
        <p style="font-family:var(--font-mono);font-size:var(--text-sm);margin-top:var(--space-2);white-space:pre-wrap;direction:ltr;text-align:left;background:var(--bg-code);padding:var(--space-3);border-radius:var(--radius-md);color:#E0E0FF;">${escapeHtml(result.output)}</p>
    </div>`;
}

// ============================================
// CODE EXECUTION (OneCompiler API)
// ============================================
async function runCode(questionId) {
    const code = state.quiz.codeAnswers[questionId] || '';
    if (!code.trim()) {
        alert('اكتب كود الأول!');
        return;
    }

    const btn = document.getElementById(`run-btn-${questionId}`);
    const resultDiv = document.getElementById(`code-result-${questionId}`);
    
    const q = state.quiz.questions.find(qq => qq.id === questionId);
    
    btn.disabled = true;
    btn.textContent = '⏳ جاري التشغيل...';
    
    state.quiz.codeResults[questionId] = { loading: true };
    resultDiv.innerHTML = renderCodeResult({ loading: true });

    try {
        let codeToRun = code;
        codeToRun = codeToRun.replace(/public\s+class\s+([A-Za-z0-9_]+)/, "class $1");

        const response = await fetch("https://wandbox.org/api/compile.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                compiler: "openjdk-jdk-22+36",
                code: codeToRun,
                stdin: (q && q.expectedInput) ? q.expectedInput : '',
                save: false
            })
        });

        const data = await response.json();
        
        let output = '';
        let error = '';
        
        if (data.status === "1" || data.compiler_error || data.program_error) {
            error = (data.compiler_error || "") + (data.program_error || "");
            error = error.trim();
        }
        
        if (data.program_output) {
            output = data.program_output.trim();
        }

        // Find question to check expected output
        let matched = null;
        
        if (q && q.expectedOutput && output && !error) {
            const expected = q.expectedOutput.trim().replace(/\r\n/g, '\n');
            const actual = output.trim().replace(/\r\n/g, '\n');
            matched = actual === expected;
        }

        const result = error ? { error } : { output, matched };
        state.quiz.codeResults[questionId] = result;
        resultDiv.innerHTML = renderCodeResult(result);

    } catch (err) {
        const result = { error: 'فشل الاتصال بالسيرفر. تأكد من الإنترنت وحاول تاني.\n' + err.message };
        state.quiz.codeResults[questionId] = result;
        resultDiv.innerHTML = renderCodeResult(result);
    }

    btn.disabled = false;
    btn.textContent = '▶ شغّل الكود';
}

function handleTab(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const s = e.target.selectionStart;
        const end = e.target.selectionEnd;
        e.target.value = e.target.value.substring(0, s) + '    ' + e.target.value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = s + 4;
        // trigger oninput
        const qid = e.target.id.replace('code-editor-', '');
        state.quiz.codeAnswers[qid] = e.target.value;
    }
}

// ============================================
// QUIZ NAVIGATION
// ============================================
function selectMCQ(qId, optionIndex) {
    state.quiz.answers[qId] = optionIndex;
    renderQuestion();
}

function nextQuestion() {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
        state.quiz.currentIndex++;
        renderQuestion();
        document.getElementById('quiz-body').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function prevQuestion() {
    if (state.quiz.currentIndex > 0) {
        state.quiz.currentIndex--;
        renderQuestion();
    }
}

function exitQuiz() {
    if (confirm('متأكد إنك عايز تخرج من الاختبار؟ الإجابات مش هتتحفظ.')) {
        resetQuiz();
    }
}

function resetQuiz() {
    if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
    state.quiz = {
        active: false, weekId: null, isFinal: false,
        questions: [], currentIndex: 0, answers: {},
        codeAnswers: {}, codeResults: {},
        startTime: null, timerInterval: null
    };
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-selection').classList.remove('hidden');
    renderQuizGrid();
}

// ============================================
// TIMER
// ============================================
function startTimer() {
    if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
    state.quiz.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - state.quiz.startTime) / 1000);
        const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const secs = (elapsed % 60).toString().padStart(2, '0');
        document.getElementById('quiz-timer-text').textContent = `${mins}:${secs}`;
    }, 1000);
}

// ============================================
// SUBMIT & RESULTS
// ============================================
function submitQuiz() {
    if (!confirm('متأكد إنك عايز تسلم الاختبار؟')) return;
    if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);

    const elapsed = Math.floor((Date.now() - state.quiz.startTime) / 1000);
    const questions = state.quiz.questions;
    let correct = 0;
    let total = 0;
    const reviewItems = [];

    questions.forEach(q => {
        if (q.type === 'mcq') {
            total++;
            const userAns = state.quiz.answers[q.id];
            const isCorrect = userAns === q.answer;
            if (isCorrect) correct++;
            reviewItems.push({
                type: 'mcq',
                question: q.q,
                correct: isCorrect,
                userAnswer: userAns !== undefined ? q.options[userAns] : 'لم يتم الإجابة',
                correctAnswer: q.options[q.answer],
                code: q.code
            });
        } else if (q.type === 'tf') {
            total++;
            const userAns = state.quiz.answers[q.id];
            const isCorrect = userAns === q.answer;
            if (isCorrect) correct++;
            reviewItems.push({
                type: 'tf',
                question: q.q,
                correct: isCorrect,
                userAnswer: userAns === 0 ? 'True' : userAns === 1 ? 'False' : 'لم يتم الإجابة',
                correctAnswer: q.answer === 0 ? 'True' : 'False',
                code: q.code
            });
        } else if (q.type === 'complete') {
            total++;
            const userAns = (state.quiz.answers[q.id] || '').trim().toLowerCase();
            const correctAns = q.answer.trim().toLowerCase();
            // Flexible matching
            const isCorrect = userAns === correctAns || correctAns.split('|').some(a => a.trim().toLowerCase() === userAns);
            if (isCorrect) correct++;
            reviewItems.push({
                type: 'complete',
                question: q.q,
                correct: isCorrect,
                userAnswer: state.quiz.answers[q.id] || 'لم يتم الإجابة',
                correctAnswer: q.answer.split('|')[0],
                code: q.code
            });
        } else if (q.type === 'output') {
            total++;
            const userAns = (state.quiz.answers[q.id] || '').trim();
            const correctAns = q.answer.trim();
            const isCorrect = normalizeOutput(userAns) === normalizeOutput(correctAns);
            if (isCorrect) correct++;
            reviewItems.push({
                type: 'output',
                question: 'ما هو الـ Output؟',
                correct: isCorrect,
                userAnswer: userAns || 'لم يتم الإجابة',
                correctAnswer: correctAns,
                code: q.code
            });
        } else if (q.type === 'code') {
            total++;
            const result = state.quiz.codeResults[q.id];
            const isCorrect = result && result.matched === true;
            if (isCorrect) correct++;
            reviewItems.push({
                type: 'code',
                question: q.q,
                correct: isCorrect,
                userAnswer: state.quiz.codeAnswers[q.id] || 'لم يتم كتابة كود',
                correctAnswer: q.expectedOutput || q.hint || '',
                code: null
            });
        }
    });

    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // Save to stats
    saveQuizResult(state.quiz.weekId, score, elapsed, correct, total);
    
    // Show results
    showResults(score, correct, total, elapsed, reviewItems);
}

function normalizeOutput(str) {
    return str.replace(/\s+/g, ' ').replace(/\\n/g, '\n').trim();
}

function showResults(score, correct, total, elapsed, reviewItems) {
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const emoji = score >= 90 ? '🏆' : score >= 70 ? '🎉' : score >= 50 ? '💪' : '📚';
    const msg = score >= 90 ? 'ممتاز! أداء رائع!' : score >= 70 ? 'جيد جداً! كمّل كده!' : score >= 50 ? 'مش وحش، بس محتاج تذاكر أكتر' : 'محتاج تراجع المنهج تاني';

    document.getElementById('quiz-active').classList.add('hidden');
    const resultsEl = document.getElementById('quiz-results');
    resultsEl.classList.remove('hidden');

    resultsEl.innerHTML = `
        <div class="results-header">
            <div class="result-emoji">${emoji}</div>
            <div class="result-score">${score}%</div>
            <div class="result-label">${msg}</div>
            <div class="result-stats">
                <div class="result-stat">
                    <span class="result-stat-value" style="color:var(--success);">✅ ${correct}</span>
                    <span class="result-stat-label">إجابة صحيحة</span>
                </div>
                <div class="result-stat">
                    <span class="result-stat-value" style="color:var(--danger);">❌ ${total - correct}</span>
                    <span class="result-stat-label">إجابة خاطئة</span>
                </div>
                <div class="result-stat">
                    <span class="result-stat-value">${total}</span>
                    <span class="result-stat-label">إجمالي الأسئلة</span>
                </div>
                <div class="result-stat">
                    <span class="result-stat-value">${mins}:${secs.toString().padStart(2, '0')}</span>
                    <span class="result-stat-label">الوقت المستغرق</span>
                </div>
            </div>
            <div class="results-actions">
                <button class="btn btn-primary" onclick="resetQuiz()">🔄 اختبار جديد</button>
                <button class="btn btn-ghost" onclick="navigateTo('stats')">📊 الإحصائيات</button>
            </div>
        </div>
        <div class="results-review">
            <h3>📋 مراجعة الإجابات</h3>
            ${reviewItems.map((r, i) => `
                <div class="review-item ${r.correct ? 'correct' : 'wrong'}">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);">
                        <span style="font-size:var(--text-xs);color:var(--text-tertiary);">سؤال ${i + 1} • ${getTypeLabel(r.type)}</span>
                        <span style="font-size:var(--text-sm);">${r.correct ? '✅' : '❌'}</span>
                    </div>
                    <div class="review-question">${r.question}</div>
                    ${r.code ? `<div class="question-code" style="margin:var(--space-2) 0;font-size:12px;"><code>${escapeHtml(r.code)}</code></div>` : ''}
                    <div class="review-answer">
                        <span>إجابتك: </span>
                        <span class="${r.correct ? 'review-correct' : 'review-wrong'}">${escapeHtml(String(r.userAnswer).substring(0, 200))}</span>
                    </div>
                    ${!r.correct ? `<div class="review-answer">
                        <span>الإجابة الصحيحة: </span>
                        <span class="review-correct">${escapeHtml(String(r.correctAnswer).substring(0, 200))}</span>
                    </div>` : ''}
                </div>
            `).join('')}
        </div>
    `;

    resultsEl.scrollIntoView({ behavior: 'smooth' });
}

function getTypeLabel(type) {
    const labels = { mcq: 'MCQ', tf: 'صح/غلط', complete: 'أكمل', output: 'هات الOutput', code: 'اكتب كود' };
    return labels[type] || type;
}

// ============================================
// STATISTICS
// ============================================
function saveQuizResult(weekId, score, elapsed, correct, total) {
    const entry = {
        weekId,
        score,
        elapsed,
        correct,
        total,
        date: new Date().toISOString()
    };
    state.stats.quizzes.push(entry);
    localStorage.setItem('javaStudyStats', JSON.stringify(state.stats));
    updateStats();
}

function getBestScore(weekId) {
    const relevant = state.stats.quizzes.filter(q => q.weekId === weekId);
    if (relevant.length === 0) return null;
    return Math.max(...relevant.map(q => q.score));
}

function updateStats() {
    const quizzes = state.stats.quizzes;
    
    // Overview cards
    document.getElementById('total-quizzes').textContent = quizzes.length;
    
    if (quizzes.length > 0) {
        const avg = Math.round(quizzes.reduce((s, q) => s + q.score, 0) / quizzes.length);
        const best = Math.max(...quizzes.map(q => q.score));
        document.getElementById('avg-score').textContent = avg + '%';
        document.getElementById('best-score').textContent = best + '%';
    } else {
        document.getElementById('avg-score').textContent = '0%';
        document.getElementById('best-score').textContent = '0%';
    }
    
    // Streak
    document.getElementById('study-streak').textContent = calculateStreak();
    
    // Week chart
    renderWeekChart();
    
    // History
    renderHistory();
}

function calculateStreak() {
    const dates = [...new Set(state.stats.quizzes.map(q => q.date.split('T')[0]))].sort().reverse();
    if (dates.length === 0) return 0;
    let streak = 1;
    const today = new Date().toISOString().split('T')[0];
    if (dates[0] !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (dates[0] !== yesterday) return 0;
    }
    for (let i = 1; i < dates.length; i++) {
        const d1 = new Date(dates[i - 1]);
        const d2 = new Date(dates[i]);
        const diff = (d1 - d2) / 86400000;
        if (diff === 1) streak++;
        else break;
    }
    return streak;
}

function renderWeekChart() {
    const chart = document.getElementById('week-chart');
    const weekScores = {};
    
    WEEKS_DATA.forEach(w => {
        const best = getBestScore(w.id);
        weekScores[w.num] = best !== null ? best : 0;
    });
    
    chart.innerHTML = Object.entries(weekScores).map(([num, score]) => `
        <div class="chart-bar-wrapper">
            <span class="chart-bar-value">${score > 0 ? score + '%' : '-'}</span>
            <div class="chart-bar" style="height: ${Math.max(score, 2)}%; ${score === 0 ? 'opacity:0.3;' : ''}"></div>
            <span class="chart-bar-label">${num}</span>
        </div>
    `).join('');
}

function renderHistory() {
    const list = document.getElementById('history-list');
    const quizzes = [...state.stats.quizzes].reverse().slice(0, 20);
    
    if (quizzes.length === 0) {
        list.innerHTML = `<div class="empty-state"><span>🎯</span><p>لسه ما عملتش أي اختبار. ابدأ دلوقتي!</p></div>`;
        return;
    }
    
    list.innerHTML = quizzes.map(q => {
        const week = WEEKS_DATA.find(w => w.id === q.weekId);
        const name = q.weekId === 'final' ? 'الامتحان الشامل' : (week ? `${week.num} - ${week.title}` : `Week ${q.weekId}`);
        const scoreClass = q.score >= 70 ? 'high' : q.score >= 50 ? 'mid' : 'low';
        const date = new Date(q.date).toLocaleDateString('ar-EG');
        return `
            <div class="history-item">
                <div>
                    <div class="history-item-title">${name}</div>
                    <div class="history-item-date">${date} • ${q.correct}/${q.total}</div>
                </div>
                <span class="history-item-score ${scoreClass}">${q.score}%</span>
            </div>
        `;
    }).join('');
}

function clearStats() {
    if (confirm('متأكد إنك عايز تمسح كل البيانات والدرجات؟')) {
        state.stats = { quizzes: [], lastVisit: '' };
        localStorage.removeItem('javaStudyStats');
        updateStats();
        renderQuizGrid();
        alert('تم مسح كل البيانات ✅');
    }
}

function trackVisit() {
    state.stats.lastVisit = new Date().toISOString();
    localStorage.setItem('javaStudyStats', JSON.stringify(state.stats));
}

// ============================================
// UTILITIES
// ============================================
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
