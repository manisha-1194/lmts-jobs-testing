(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={jobs:[{id:1,title:`Frontend Developer`,company:`TechNova`,location:`Remote`,salary:`$80k - $120k`,tags:[`React`,`TypeScript`,`Tailwind`]},{id:2,title:`Backend Engineer`,company:`DataSphere`,location:`New York`,salary:`$90k - $140k`,tags:[`Node.js`,`PostgreSQL`,`AWS`]},{id:3,title:`UI/UX Designer`,company:`Creatio`,location:`London`,salary:`£60k - £90k`,tags:[`Figma`,`Prototyping`,`Design Systems`]}],prepCategories:[{title:`Aptitude`,description:`Master Quantitative, Logical, and Verbal reasoning with timed practice sets.`,icon:`🧠`,topics:[`Quant`,`Reasoning`,`Verbal`]},{title:`DSA`,description:`In-depth Data Structures and Algorithms with curated problem sheets.`,icon:`💻`,topics:[`Arrays`,`Linked Lists`,`Trees`,`Graphs`]},{title:`Technical`,description:`Operating Systems, DBMS, Networking, and OOPS concepts for core basics.`,icon:`⚙️`,topics:[`OS`,`DBMS`,`CN`,`OOPS`]},{title:`HR`,description:`Ace behavioral interviews with common questions and situation-based tips.`,icon:`🤝`,topics:[`Behavioral`,`Situation`,`Salary`]}],companies:[{name:`Google`,pattern:`Aptitude + Technical + 3 Coding Rounds + HR`,packages:`30-40+ LPA`,eligibility:`7.5+ CGPA`,color:`blue`},{name:`Microsoft`,pattern:`Technical Online + 3 DSA Rounds`,packages:`25-45 LPA`,eligibility:`8+ CGPA`,color:`cyan`},{name:`TCS`,pattern:`NQT (Aptitude + Coding) + Interview`,packages:`3.5 - 7 LPA`,eligibility:`60% throughout`,color:`orange`},{name:`Infosys`,pattern:`InfyTQ / HackWithInfy + Interview`,packages:`3.6 - 8 LPA`,eligibility:`65% throughout`,color:`teal`}],dsaSheet:[{topic:`Basic Math`,problems:5,difficulty:`Easy`,status:`Incomplete`},{topic:`Recursion`,problems:12,difficulty:`Medium`,status:`Incomplete`},{topic:`Arrays`,problems:25,difficulty:`Medium`,status:`Incomplete`},{topic:`Strings`,problems:15,difficulty:`Easy`,status:`Incomplete`},{topic:`Linked List`,problems:18,difficulty:`Hard`,status:`Incomplete`}]};document.getElementById(`app`);function t(e){document.querySelectorAll(`.page`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(e);t&&t.classList.add(`active`),document.querySelectorAll(`nav a`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`onclick`)?.includes(e))}),window.scrollTo({top:0,behavior:`smooth`})}function n(){let t=document.getElementById(`jobs-list`);t&&(t.innerHTML=e.jobs.map(e=>`
    <div class="glass-card job-card">
      <div class="job-header">
        <h3>${e.title}</h3>
        <span class="salary-tag">${e.salary}</span>
      </div>
      <p class="company-name">${e.company} • ${e.location}</p>
      <div class="tags">
        ${e.tags.map(e=>`<span class="tag">${e}</span>`).join(``)}
      </div>
      <button class="btn-primary apply-btn">Apply Now</button>
    </div>
  `).join(``))}function r(){let t=document.getElementById(`prep-grid`);t&&(t.innerHTML=e.prepCategories.map(e=>`
    <div class="glass-card section-card">
      <div class="icon-box">${e.icon}</div>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <div class="topic-chips">
        ${e.topics.map(e=>`<span class="chip">${e}</span>`).join(``)}
      </div>
      <button class="btn-secondary">Start Preparing</button>
    </div>
  `).join(``))}function i(){let t=document.getElementById(`companies-grid`);t&&(t.innerHTML=e.companies.map(e=>`
    <div class="glass-card company-card">
      <h3>${e.name}</h3>
      <div class="comp-info">
        <p><strong>Package:</strong> ${e.packages}</p>
        <p><strong>Eligibility:</strong> ${e.eligibility}</p>
      </div>
      <div class="pattern-box">
        <p><strong>Round Pattern:</strong></p>
        <p class="pattern-text">${e.pattern}</p>
      </div>
      <button class="btn-secondary">Full Details</button>
    </div>
  `).join(``))}function a(){let t=document.getElementById(`dsa-sheet-body`);t&&(t.innerHTML=e.dsaSheet.map((e,t)=>`
    <tr class="dsa-row">
      <td>${t+1}</td>
      <td>${e.topic}</td>
      <td>${e.problems} Problems</td>
      <td><span class="diff-badge ${e.difficulty.toLowerCase()}">${e.difficulty}</span></td>
      <td><input type="checkbox" class="dsa-check"></td>
      <td><button class="btn-sm">Solve</button></td>
    </tr>
  `).join(``))}window.addEventListener(`load`,()=>{n(),r(),i(),a(),window.navigate=t;let e=document.getElementById(`theme-toggle`),o=document.body;localStorage.getItem(`theme`)===`light`&&(o.classList.add(`light-mode`),e.textContent=`☀️`),e.addEventListener(`click`,()=>{o.classList.toggle(`light-mode`);let t=o.classList.contains(`light-mode`);localStorage.setItem(`theme`,t?`light`:`dark`),e.textContent=t?`☀️`:`🌙`})});