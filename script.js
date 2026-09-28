const { useState } = React;

const navigation = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Services', 'services'],
    ['Projects', 'projects'],
    ['Contact', 'contact']
];

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '12+', label: 'Projects Built' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Creative Support' }
];

const services = [
    { icon: 'fa-brands fa-html5', title: 'UI/UX Design', text: 'Clean interfaces, intuitive layouts, and engaging user journeys that feel premium.' },
    { icon: 'fa-solid fa-code', title: 'Frontend Development', text: 'Responsive websites and dashboards crafted with attention to speed, clarity, and usability.' },
    { icon: 'fa-solid fa-mobile-screen-button', title: 'Mobile-first Design', text: 'Fluid interfaces that adapt beautifully across phones, tablets, and desktops.' },
    { icon: 'fa-solid fa-rocket', title: 'Landing Pages', text: 'High-converting pages designed to drive actions, leads, and brand trust.' }
];

const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'] },
    { category: 'Design', items: ['UI Design', 'UX Strategy', 'Wireframes', 'Figma', 'Brand Styling'] },
    { category: 'Workflow', items: ['Git', 'SEO Basics', 'Performance', 'Accessibility', 'Testing'] }
];

const experience = [
    { period: '2023 - Present', title: 'Frontend Developer', company: 'Freelance / Personal Projects', details: 'Creating modern portfolio websites, landing pages, and responsive digital experiences for personal brands and businesses.' },
    { period: '2021 - 2023', title: 'Web Designer', company: 'Creative Client Work', details: 'Designed and built user-friendly interfaces with a focus on conversion, clarity, and polished presentation.' }
];

const projects = [
    { icon: 'fas fa-baseball-ball', title: 'Cricket Portfolio', description: 'A modern sports portfolio design built with HTML, CSS, and JavaScript for a crisp and engaging presentation.', href: 'Cricket%20portfolio/index.html', label: 'View Project' },
    { icon: 'fas fa-code', title: 'Portfolio Redesign', description: 'A sleek personal brand concept focused on storytelling, product positioning, and premium visual polish.', href: '#contact', label: 'Request Similar' },
    { icon: 'fas fa-laptop-code', title: 'Landing Page', description: 'A conversion-driven landing page for service-based businesses with clear messaging and strong CTAs.', href: '#contact', label: 'Discuss Project' }
];

const testimonials = [
    { quote: 'Azaan brings a strong eye for design and a clean coding approach. Every detail feels intentional and modern.', author: 'Client Feedback' },
    { quote: 'The website looked premium and responsive from the very first draft. It instantly felt more professional.', author: 'Business Client' }
];

const process = [
    'Discovery and strategy',
    'Visual design and UX',
    'Responsive development',
    'Testing and launch'
];

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Navbar({ menuOpen, setMenuOpen }) {
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#home">A.</a>
                </div>

                <button
                    type="button"
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navigation.map(([label, id]) => (
                        <li className="nav-item" key={id}>
                            <a href={`#${id}`} className="nav-link" onClick={handleLinkClick}>{label}</a>
                        </li>
                    ))}
                </ul>

                <button type="button" className="nav-btn" onClick={() => scrollToSection('contact')}>Let&apos;s Talk</button>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="eyebrow">
                        <span className="dot"></span>
                        Available for freelance work
                    </span>

                    <h1>Hello, I&apos;m Azaan Ahmed.</h1>
                    <p className="subtitle">Frontend Developer &amp; Web Designer</p>
                    <p className="description">
                        I build refined, responsive digital experiences that balance modern design with user-focused functionality.
                    </p>

                    <div className="hero-meta">
                        <span>Creative development</span>
                        <span>UI systems</span>
                        <span>Conversion-focused design</span>
                    </div>

                    <div className="action-buttons">
                        <button type="button" className="btn btn-hire" onClick={() => scrollToSection('contact')}>Hire Me</button>
                        <button type="button" className="btn btn-contact" onClick={() => scrollToSection('projects')}>View Work</button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-card glass-card">
                        <img src="Screenshot 2026-09-25 235850.png" alt="Azaan Ahmed" />
                    </div>
                </div>
            </div>

            <div className="stats-grid">
                {stats.map((item) => (
                    <div className="stat-card glass-card" key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="content-section">
            <div className="section-heading">
                <span className="section-kicker">About</span>
                <h2>Designing simple experiences with real impact.</h2>
            </div>

            <div className="about-wrap">
                <div className="about-copy">
                    <p>
                        I&apos;m a frontend-focused creator who enjoys blending visual storytelling, usability, and clean code to deliver standout user experiences.
                    </p>
                    <p>
                        My work focuses on building polished websites that feel premium, run smoothly, and communicate value clearly from the first scroll.
                    </p>
                </div>

                <div className="about-points glass-card">
                    <div>
                        <strong>01</strong>
                        <span>Brand-aware design</span>
                    </div>
                    <div>
                        <strong>02</strong>
                        <span>High-quality UX</span>
                    </div>
                    <div>
                        <strong>03</strong>
                        <span>Clean frontend code</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Services() {
    return (
        <section id="services" className="content-section">
            <div className="section-heading">
                <span className="section-kicker">Services</span>
                <h2>What I can help you build.</h2>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card glass-card" key={service.title}>
                        <div className="icon-wrap">
                            <i className={service.icon}></i>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="content-section">
            <div className="section-heading">
                <span className="section-kicker">Experience</span>
                <h2>My journey so far.</h2>
            </div>

            <div className="timeline">
                {experience.map((item) => (
                    <div className="timeline-item glass-card" key={item.title}>
                        <span className="timeline-period">{item.period}</span>
                        <h3>{item.title}</h3>
                        <p className="timeline-company">{item.company}</p>
                        <p>{item.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="content-section">
            <div className="section-heading">
                <span className="section-kicker">Skills</span>
                <h2>Tools and strengths.</h2>
            </div>

            <div className="skills-grid">
                {skills.map((group) => (
                    <div className="skill-group glass-card" key={group.category}>
                        <h3>{group.category}</h3>
                        <div className="skill-list">
                            {group.items.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="content-section">
            <div className="section-heading">
                <span className="section-kicker">Projects</span>
                <h2>Selected work and ideas.</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card glass-card" key={project.title}>
                        <div className="project-image">
                            <i className={project.icon}></i>
                        </div>
                        <div className="project-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                className="btn btn-project"
                                href={project.href}
                                target={project.href.startsWith('#') ? undefined : '_blank'}
                                rel={project.href.startsWith('#') ? undefined : 'noopener'}
                            >
                                {project.label}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="content-section">
            <div className="section-heading">
                <span className="section-kicker">Testimonials</span>
                <h2>Feedback that speaks for itself.</h2>
            </div>

            <div className="testimonial-grid">
                {testimonials.map((item) => (
                    <div className="testimonial-card glass-card" key={item.author}>
                        <p>&ldquo;{item.quote}&rdquo;</p>
                        <span>{item.author}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="content-section contact-section">
            <div className="section-heading">
                <span className="section-kicker">Contact</span>
                <h2>Let&apos;s create something memorable.</h2>
            </div>

            <div className="contact-shell glass-card">
                <div className="contact-copy">
                    <p>
                        Need a modern website, portfolio, or landing page that feels professional and polished? Let&apos;s build it.
                    </p>
                    <div className="contact-points">
                        {process.map((step) => (
                            <span key={step}>{step}</span>
                        ))}
                    </div>
                </div>

                <form className="contact-form" action="https://formsubmit.co/ahmedazaan272@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="New message from your portfolio" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="true" />

                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

function Footer() {
    const year = 2026;

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {year} Azaan Ahmed. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/itx_azaan_10/" target="_blank" rel="noopener" className="social-icon" title="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/azaan.ahmad.186590" target="_blank" rel="noopener" className="social-icon" title="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <Hero />
                <About />
                <Services />
                <Experience />
                <Skills />
                <Projects />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

