const DATA = {
  jobs: [
    { id: 1, title: 'Frontend Developer', company: 'TechNova', location: 'Remote', salary: '$80k - $120k', tags: ['React', 'TypeScript', 'Tailwind'] },
    { id: 2, title: 'Backend Engineer', company: 'DataSphere', location: 'New York', salary: '$90k - $140k', tags: ['Node.js', 'PostgreSQL', 'AWS'] },
    { id: 3, title: 'UI/UX Designer', company: 'Creatio', location: 'London', salary: '£60k - £90k', tags: ['Figma', 'Prototyping', 'Design Systems'] },
  ],
  prepCategories: [
    { title: 'Aptitude', description: 'Master Quantitative, Logical, and Verbal reasoning with timed practice sets.', icon: '🧠', topics: ['Quant', 'Reasoning', 'Verbal'] },
    { title: 'DSA', description: 'In-depth Data Structures and Algorithms with curated problem sheets.', icon: '💻', topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'] },
    { title: 'Technical', description: 'Operating Systems, DBMS, Networking, and OOPS concepts for core basics.', icon: '⚙️', topics: ['OS', 'DBMS', 'CN', 'OOPS'] },
    { title: 'HR', description: 'Ace behavioral interviews with common questions and situation-based tips.', icon: '🤝', topics: ['Behavioral', 'Situation', 'Salary'] },
  ],
  companies: [
    { name: 'Google', pattern: 'Aptitude + Technical + 3 Coding Rounds + HR', packages: '30-40+ LPA', eligibility: '7.5+ CGPA', color: 'blue' },
    { name: 'Microsoft', pattern: 'Technical Online + 3 DSA Rounds', packages: '25-45 LPA', eligibility: '8+ CGPA', color: 'cyan' },
    { name: 'TCS', pattern: 'NQT (Aptitude + Coding) + Interview', packages: '3.5 - 7 LPA', eligibility: '60% throughout', color: 'orange' },
    { name: 'Infosys', pattern: 'InfyTQ / HackWithInfy + Interview', packages: '3.6 - 8 LPA', eligibility: '65% throughout', color: 'teal' },
  ],
  dsaSheet: [
    { topic: 'Basic Math', problems: 5, difficulty: 'Easy', status: 'Incomplete' },
    { topic: 'Recursion', problems: 12, difficulty: 'Medium', status: 'Incomplete' },
    { topic: 'Arrays', problems: 25, difficulty: 'Medium', status: 'Incomplete' },
    { topic: 'Strings', problems: 15, difficulty: 'Easy', status: 'Incomplete' },
    { topic: 'Linked List', problems: 18, difficulty: 'Hard', status: 'Incomplete' },
  ]
};

const app = document.getElementById('app');

function navigate(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update nav links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('onclick')?.includes(pageId));
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderJobs() {
  const container = document.getElementById('jobs-list');
  if(!container) return;
  container.innerHTML = DATA.jobs.map(job => `
    <div class="glass-card job-card">
      <div class="job-header">
        <h3>${job.title}</h3>
        <span class="salary-tag">${job.salary}</span>
      </div>
      <p class="company-name">${job.company} • ${job.location}</p>
      <div class="tags">
        ${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <button class="btn-primary apply-btn">Apply Now</button>
    </div>
  `).join('');
}

function renderPrep() {
  const container = document.getElementById('prep-grid');
  if(!container) return;
  container.innerHTML = DATA.prepCategories.map(cat => `
    <div class="glass-card section-card">
      <div class="icon-box">${cat.icon}</div>
      <h3>${cat.title}</h3>
      <p>${cat.description}</p>
      <div class="topic-chips">
        ${cat.topics.map(t => `<span class="chip">${t}</span>`).join('')}
      </div>
      <button class="btn-secondary">Start Preparing</button>
    </div>
  `).join('');
}

function renderCompanies() {
  const container = document.getElementById('companies-grid');
  if(!container) return;
  container.innerHTML = DATA.companies.map(c => `
    <div class="glass-card company-card">
      <h3>${c.name}</h3>
      <div class="comp-info">
        <p><strong>Package:</strong> ${c.packages}</p>
        <p><strong>Eligibility:</strong> ${c.eligibility}</p>
      </div>
      <div class="pattern-box">
        <p><strong>Round Pattern:</strong></p>
        <p class="pattern-text">${c.pattern}</p>
      </div>
      <button class="btn-secondary">Full Details</button>
    </div>
  `).join('');
}

function renderDSASheet() {
  const container = document.getElementById('dsa-sheet-body');
  if(!container) return;
  container.innerHTML = DATA.dsaSheet.map((topic, index) => `
    <tr class="dsa-row">
      <td>${index + 1}</td>
      <td>${topic.topic}</td>
      <td>${topic.problems} Problems</td>
      <td><span class="diff-badge ${topic.difficulty.toLowerCase()}">${topic.difficulty}</span></td>
      <td><input type="checkbox" class="dsa-check"></td>
      <td><button class="btn-sm">Solve</button></td>
    </tr>
  `).join('');
}

// Initial Render
window.addEventListener('load', () => {
  renderJobs();
  renderPrep();
  renderCompanies();
  renderDSASheet();
  
  // Make navigate global
  window.navigate = navigate;

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });
});

// CSS is handled in src/style.css
