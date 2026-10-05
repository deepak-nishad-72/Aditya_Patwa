import os
import subprocess
import shutil

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aditya Patwa - Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  @page {
    size: A4 portrait;
    margin: 10mm 12mm 10mm 12mm;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.5pt;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  .resume-container {
    max-width: 100%;
    margin: 0 auto;
  }
  
  /* Header */
  .header {
    border-bottom: 2px solid #2563eb;
    padding-bottom: 8px;
    margin-bottom: 9px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .header-left h1 {
    font-size: 20pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.5px;
    line-height: 1.1;
  }
  
  .header-left .title {
    font-size: 10.5pt;
    font-weight: 600;
    color: #2563eb;
    margin-top: 3px;
  }
  
  .contact-info {
    font-size: 8.8pt;
    color: #475569;
    text-align: right;
    line-height: 1.5;
  }
  
  .contact-info a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
  }
  
  /* Sections */
  .section {
    margin-bottom: 9px;
  }
  
  .section-title {
    font-size: 9.8pt;
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 2px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .section-title::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 11px;
    background: #2563eb;
    border-radius: 2px;
  }
  
  .summary-text {
    color: #334155;
    font-size: 9.2pt;
    line-height: 1.45;
    text-align: justify;
  }
  
  /* Skills Table / Grid */
  .skills-grid {
    display: grid;
    grid-template-columns: 145px 1fr;
    row-gap: 3px;
    column-gap: 8px;
    font-size: 9pt;
  }
  
  .skill-category {
    font-weight: 600;
    color: #1e293b;
  }
  
  .skill-list {
    color: #475569;
  }
  
  /* Experience & Projects */
  .item {
    margin-bottom: 6px;
  }
  
  .item:last-child {
    margin-bottom: 0;
  }
  
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5px;
  }
  
  .item-title {
    font-size: 9.5pt;
    font-weight: 700;
    color: #0f172a;
  }
  
  .item-title span {
    font-weight: 500;
    color: #64748b;
  }
  
  .item-date {
    font-size: 8.5pt;
    font-weight: 600;
    color: #64748b;
  }
  
  .item-subtitle {
    font-size: 8.8pt;
    font-weight: 500;
    color: #2563eb;
    margin-bottom: 2px;
  }
  
  ul.bullets {
    padding-left: 15px;
    margin: 0;
  }
  
  ul.bullets li {
    font-size: 8.9pt;
    color: #334155;
    line-height: 1.35;
    margin-bottom: 2px;
  }
  
  ul.bullets li strong {
    color: #0f172a;
    font-weight: 600;
  }
  
  /* Two Column Layout for bottom */
  .two-col {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 12px;
  }
</style>
</head>
<body>

<div class="resume-container">

  <!-- HEADER -->
  <header class="header">
    <div class="header-left">
      <h1>Aditya Patwa</h1>
      <div class="title">Software Engineer & Full Stack Web Developer</div>
    </div>
    <div class="contact-info">
      <div>📧 <a href="mailto:adityapatwa4652@gmail.com">adityapatwa4652@gmail.com</a></div>
      <div>📱 +91 8318564652 &nbsp;|&nbsp; 📍 Deoria, Uttar Pradesh, India</div>
      <div>🌐 <a href="https://github.com/adityapatwa">github.com/adityapatwa</a></div>
    </div>
  </header>

  <!-- PROFESSIONAL SUMMARY -->
  <section class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Disciplined and results-driven Software Engineer with a <strong>Bachelor of Computer Applications (BCA)</strong> and proven expertise in building responsive, scalable full-stack web applications and robust software solutions. Proficient in modern JavaScript (React.js), Python scripting, PHP, and SQL database architecture. Adept at translating user needs into clean, maintainable code with strong analytical problem-solving and cross-functional agile collaboration.
    </p>
  </section>

  <!-- TECHNICAL SKILLS -->
  <section class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-category">Languages:</div>
      <div class="skill-list">JavaScript (ES6+), Python, C++, Java, PHP, SQL, HTML5, CSS3</div>
      
      <div class="skill-category">Frontend & UI:</div>
      <div class="skill-list">React.js, Tailwind CSS, Modern CSS3, Responsive Design, State Management, DOM APIs</div>
      
      <div class="skill-category">Backend & Database:</div>
      <div class="skill-list">PHP, Python Scripts, MySQL, Relational Database Design, CRUD Operations, RESTful APIs</div>
      
      <div class="skill-category">Tools & Methodologies:</div>
      <div class="skill-list">Git & GitHub, VS Code, OOPs, Data Structures & Algorithms (DSA), System Architecture, Agile</div>
    </div>
  </section>

  <!-- WORK EXPERIENCE -->
  <section class="section">
    <div class="section-title">Professional Experience</div>
    
    <div class="item">
      <div class="item-header">
        <div class="item-title">Web Developer <span>— Professional Web Development & Software Services</span></div>
        <div class="item-date">Recent Experience</div>
      </div>
      <div class="item-subtitle">Deoria, Uttar Pradesh, India</div>
      <ul class="bullets">
        <li>Architected and maintained high-performance web applications utilizing <strong>HTML5, CSS3, JavaScript, PHP</strong>, and <strong>MySQL</strong>.</li>
        <li>Implemented structured relational database schemas, dynamic querying, and API endpoints for real-time data persistence.</li>
        <li>Partnered with cross-functional project teams to translate client requirements into pixel-perfect, accessible user interfaces.</li>
        <li>Applied standard software engineering methodologies, modular component design, and Git version control for clean codebases.</li>
      </ul>
    </div>
  </section>

  <!-- KEY PROJECTS -->
  <section class="section">
    <div class="section-title">Key Projects</div>

    <div class="item">
      <div class="item-header">
        <div class="item-title">MedPulse <span>– Healthcare & Diagnostic Management System</span></div>
        <div class="item-date">React, PHP, SQL, CSS3</div>
      </div>
      <ul class="bullets">
        <li>Built an end-to-end healthcare portal featuring real-time doctor appointment scheduling and patient diagnostic records.</li>
        <li>Integrated secure SQL database queries ensuring high data integrity, quick search indexing, and automated report logs.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div class="item-title">CloudVault <span>– Inventory & SQL Analytics Dashboard</span></div>
        <div class="item-date">Python, SQL, Analytics</div>
      </div>
      <ul class="bullets">
        <li>Engineered an automated inventory tracking dashboard handling transactional data flows, stock alerts, and visual analytics.</li>
        <li>Optimized complex SQL queries for fast aggregation of inventory metrics and historical reporting.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div class="item-title">ApexCommerce <span>– Full-Featured Modern E-Commerce Platform</span></div>
        <div class="item-date">React.js, PHP, MySQL, CSS</div>
      </div>
      <ul class="bullets">
        <li>Engineered an e-commerce platform with faceted category filters, persistent cart state, and order summary computation.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div class="item-title">AlgoVisualizer <span>– Interactive DSA & Algorithms Platform</span></div>
        <div class="item-date">C++, JavaScript, React</div>
      </div>
      <ul class="bullets">
        <li>Created an educational visualization tool for sorting algorithms (QuickSort, MergeSort) and graph traversals with complexity metrics.</li>
      </ul>
    </div>
  </section>

  <!-- EDUCATION & LANGUAGES -->
  <section class="section">
    <div class="two-col">
      <div>
        <div class="section-title">Education</div>
        <div class="item">
          <div class="item-header">
            <div class="item-title">Bachelor of Computer Applications (BCA)</div>
            <div class="item-date">Graduate</div>
          </div>
          <div class="item-subtitle" style="color: #475569; font-weight: 500;">University / Institute of Computer Applications &bull; Uttar Pradesh, India</div>
          <p style="font-size: 8.4pt; color: #64748b; margin-top: 2px;">
            Coursework: Web Development, Database Management Systems (DBMS), OOPs (C++, Java, Python), Software Engineering, Data Structures & Algorithms.
          </p>
        </div>
      </div>

      <div>
        <div class="section-title">Languages & Personal</div>
        <div style="font-size: 8.8pt; color: #334155; line-height: 1.5; margin-top: 2px;">
          <div><strong>Hindi:</strong> Native / Proficient</div>
          <div><strong>English:</strong> Professional Working Proficiency</div>
          <div style="margin-top: 3px;"><strong>Location:</strong> Ram Gulam Tola, Deoria, UP - 274001</div>
        </div>
      </div>
    </div>
  </section>

</div>

</body>
</html>
"""

def main():
    temp_html = os.path.abspath('temp_resume.html')
    output_pdf = os.path.abspath('public/aditya-resume.pdf')
    dist_pdf = os.path.abspath('dist/aditya-resume.pdf')

    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html_content)

    edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    if not os.path.exists(edge_path):
        edge_path = r'C:\Program Files\Microsoft\Edge\Application\msedge.exe'

    cmd = [
        edge_path,
        '--headless',
        '--disable-gpu',
        '--no-pdf-header-footer',
        f'--print-to-pdf={output_pdf}',
        temp_html
    ]

    print("Running Edge headless command to render PDF...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    print("Return code:", res.returncode)

    if os.path.exists(output_pdf):
        size = os.path.getsize(output_pdf)
        print(f"Success! Generated {output_pdf} ({size} bytes)")
        if os.path.exists('dist'):
            shutil.copyfile(output_pdf, dist_pdf)
            print("Copied to dist/aditya-resume.pdf")
    else:
        print("Failed to generate PDF")

    if os.path.exists(temp_html):
        os.remove(temp_html)

if __name__ == '__main__':
    main()
