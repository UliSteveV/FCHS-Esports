"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Menu, ArrowRight, Trophy, Users, Zap, Gamepad2, Swords, ChevronDown } from "lucide-react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const heroVideoRef = useRef<HTMLVideoElement>(null);
    const bgVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const games = [
        {
            name: "Mario Kart 8",
            image: "/mario-kart.png",
            desc: "Race on anti-gravity tracks and compete for first place in high-speed chaos.",
            color: "#E52521",
        },
        {
            name: "Super Smash Bros Ult",
            image: "/smash-bros.png",
            desc: "Platform fighting at its finest. Battle with iconic Nintendo characters.",
            color: "#FFD700",
            objectPosition: "center 5%",
        },
        {
            name: "Rocket League",
            image: "/rocket-league.png",
            desc: "High-octane vehicular soccer. Master aerials and teamwork to score.",
            color: "#0052CC",
        },
    ];

    return (
        <main className="main-container">

            {/* Navigation */}
            <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="navbar-container">
                    <div className="logo-section">
                        <div className="fchs-shield">
                            <Gamepad2 size={24} className="shield-icon" />
                            <span className="shield-text">FCHS</span>
                        </div>
                        <div className="nav-links desktop-only">
                            <a href="#home" className="nav-link">Home</a>
                            <a href="#about" className="nav-link">About</a>
                            <a href="#games" className="nav-link">Games</a>
                            <a href ="#donate" className="nav-link">Donate/Sponsor</a>
                        </div>
                    </div>

                    <div className="nav-actions">
                        <a href="#join" className="btn-join desktop-only">
                            <span>Join Now</span>
                        </a>
                        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <a href="#home" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#games" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Games</a>
                        <a href="#join" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Join</a>
                        <a href="#donate" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Donate/Sponsor</a>
                    </div>
                )}
            </nav>

            {/* Hero Section - Full width video background */}
            <section id="home" className="hero-video-section">
                <div className="hero-video-wrapper">
                    <video
                        ref={heroVideoRef}
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/hero-clip.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-video-overlay"></div>
                </div>

                <div className="hero-video-content">
                    <div className="hero-badge">
                        <Gamepad2 size={16} />
                        <span>FORSYTH CENTRAL HIGH SCHOOL</span>
                    </div>
                    <h1 className="hero-giant-title">
                        <span className="hero-title-line">ESPORTS</span>
                        <span className="hero-title-line hero-title-outline">CLUB</span>
                    </h1>
                    <p className="hero-tagline">
                        Compete. Conquer. Dominate. We represent Forsyth Central
                        in Mario Kart 8, Super Smash Bros Ult, and Rocket League.
                    </p>
                    <div className="hero-cta-row">
                        <a href="#games" className="btn-primary-hero">
                            Our Games <ArrowRight size={20} />
                        </a>
                        <a href="#join" className="btn-outline-hero">
                            Join The Team
                        </a>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <span>Scroll</span>
                    <ChevronDown size={20} className="scroll-bounce" />
                </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar">
                <div className="stats-container">
                    <div className="stat-item">
                        <span className="stat-number">3</span>
                        <span className="stat-label">Active Games</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Team Members</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">GHSA</span>
                        <span className="stat-label">State League</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">2024</span>
                        <span className="stat-label">Est.</span>
                    </div>
                </div>
            </section>

            {/* About Section - with team video background */}
            <section id="about" className="about-section">
                <div className="about-bg-pattern"></div>
                <div className="common-container about-content-wrapper">
                    <div className="about-grid">
                        <div className="about-text-side">
                            <span className="section-label">WHO WE ARE</span>
                            <h2 className="section-title-new">
                                Built to <span className="text-gradient">Compete</span>
                            </h2>
                            <p className="about-description">
                                We are the Forsyth Central High School Esports Club — a community of
                                competitive gamers, casual players, and gaming enthusiasts. We compete
                                in the Georgia High School Association (GHSA) state leagues and represent
                                Central with pride.
                            </p>
                            <div className="about-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Trophy size={24} />
                                    </div>
                                    <div>
                                        <h4 className="feature-title">Championship Level</h4>
                                        <p className="feature-desc">Competing in GHSA state leagues with rigorous practice schedules.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="feature-title">Community First</h4>
                                        <p className="feature-desc">A welcoming space for all skill levels and gaming interests.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="feature-title">Scholarships</h4>
                                        <p className="feature-desc">Connecting members with university esports programs and opportunities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-video-side">
                            <div className="about-video-card">
                                <video
                                    ref={bgVideoRef}
                                    className="about-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                >
                                    <source src="/team-bg.mp4" type="video/mp4" />
                                </video>
                                <div className="about-video-overlay-card"></div>
                                <div className="about-video-badge">
                                    <Swords size={18} />
                                    <span>TEAM IN ACTION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Games Section */}
            <section id="games" className="games-section-new">
                <div className="games-bg-grid"></div>
                <div className="common-container">
                    <div className="section-header-center">
                        <span className="section-label">WHAT WE PLAY</span>
                        <h2 className="section-title-new">
                            Our <span className="text-gradient">Games</span>
                        </h2>
                        <p className="section-subtitle">
                            Three titles, three battlegrounds. Choose your arena.
                        </p>
                    </div>

                    <div className="games-showcase">
                        {games.map((game, idx) => (
                            <div
                                key={idx}
                                className="game-card-premium"
                                style={{ "--game-accent": game.color } as React.CSSProperties}
                            >
                                <div className="game-card-image-wrapper">
                                    <Image
                                        src={game.image}
                                        alt={game.name}
                                        fill
                                        style={game.objectPosition ? { objectPosition: game.objectPosition } : undefined}
                                        className="game-card-img"
                                    />
                                    <div className="game-card-shine"></div>
                                </div>
                                <div className="game-card-info">
                                    <div className="game-card-number">0{idx + 1}</div>
                                    <h3 className="game-card-title">{game.name}</h3>
                                    <p className="game-card-desc">{game.desc}</p>
                                    <div className="game-card-tag">
                                        <Gamepad2 size={14} />
                                        <span>Active Roster</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA Section */}
            <section id="join" className="join-section">
                <div className="join-bg-pattern"></div>
                <div className="common-container">
                    <div className="join-card">
                        <div className="join-content">
                            <span className="section-label">GET INVOLVED</span>
                            <h2 className="join-title">Ready to<br /><span className="text-gradient">Join the Roster?</span></h2>
                            <p className="join-desc">
                                Tryouts are held every semester for all our competitive titles.
                                No matter your skill level, there&apos;s a place for you on our team.
                            </p>
                            <div className="join-buttons">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSePCEu5BhegCXEjWpZZ8tULAoVqPq-Y2mwagCgbAnp-VFxCfA/viewform" target = "_blank" className="btn-primary-hero">
                                    Join Now<ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="join-decoration">
                            <div className="join-circle join-circle-1"></div>
                            <div className="join-circle join-circle-2"></div>
                            <div className="join-circle join-circle-3"></div>
                            <Gamepad2 size={120} className="join-icon-bg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Donate Section */}
            <section id="donate" className="donate-section">
                <div className="donate-bg-pattern"></div>
                <div className="common-container">
                    <div className="donate-card">
                        <div className="donate-content">
                            <span className="section-label">SUPPORT US & SPONSOR</span>
                            <h2 className="donate-title">Donate Or<br /><span className="text-gradient">Sponsor Today</span></h2>
                            <p className="donate-desc">
                                Contact our Head Coach, Mr. Alexander, to learn about sponsorship opportunities and how you can support our team.
                                Your support helps us cover tournament fees, equipment, and travel expenses. Every contribution makes a difference.
                            </p>
                            <div className="donate-btn-row">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8o0GDmxlSyAIqIPH6VSIYQFW2LcFD6lLqrAzBBx9NDj8QjA/viewform?usp=dialog" target="_blank" className="btn-primary-hero">
                                    Donate Now <ArrowRight size={20} />
                                </a>
                                <a href = "mailto:lalexander@fiorstyh.k12.ga.us" target = "_blank" className="btn-primary-hero">
                                    Contact US <ArrowRight size={20} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="donate-decoration">
                            <div className="donate-hexagon"></div>
                            <div className="donate-hexagon donate-hexagon-2"></div>
                            <Gamepad2 size={120} className="donate-icon-bg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-new">
                <div className="footer-container-new">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <div className="footer-logo-new">
                                <Gamepad2 size={28} />
                                <span>FCHS ESPORTS</span>
                            </div>
                            <p className="footer-address">
                                Forsyth Central High School<br />
                                131 Almon C. Hill Dr<br />
                                Cumming, GA 30040
                            </p>
                        </div>
                        <div className="footer-links-grid">
                            <div className="footer-link-col">
                                <h4 className="footer-link-heading">Navigate</h4>
                                <a href="#home" className="footer-link">Home</a>
                                <a href="#about" className="footer-link">About</a>
                                <a href="#games" className="footer-link">Games</a>
                            </div>
                            <div className="footer-link-col">
                                <h4 className="footer-link-heading">Connect</h4>
                                <a href="#" className="footer-link">Discord</a>
                                <a href="#" className="footer-link">Instagram</a>
                                <a href="#" className="footer-link">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-copyright-new">
                            © {new Date().getFullYear()} FCHS Esports. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
