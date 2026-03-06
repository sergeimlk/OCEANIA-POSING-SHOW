import React, { useState, useEffect } from 'react';
import {
    Calendar, MapPin, Ticket, Award, CheckCircle2,
    Menu, X, ChevronDown, ChevronUp, Trophy, Camera, ShieldAlert,
    Dumbbell, Instagram, Printer, Download, FileText
} from 'lucide-react';

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#accueil' },
        { name: 'Le Concours', href: '#concours' },
        { name: 'Jury', href: '#jury' },
        { name: 'Candidats', href: '#candidats' },
        { name: '8 Poses', href: '#poses' },
        { name: 'Règlement', href: '#reglement' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="backdrop-blur-xl bg-navy/60 border border-white/10 shadow-xl rounded-full px-6 py-3 flex justify-between items-center transition-all">

                    <div className="flex-shrink-0 flex items-center">
                        <img src="https://www.oceania-club.fr/wp-content/themes/oceaniaclub/assets/images/oceania-club.png" alt="Océania Club" className="h-8 md:h-10" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-medium text-white hover:text-primary transition-colors duration-200 uppercase text-sm tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#candidats" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase text-sm">
                            Voir les candidats
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full px-4 pt-2">
                    <div className="backdrop-blur-md bg-navy/95 border border-navy/50 shadow-xl rounded-2xl p-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-white hover:text-primary p-2 rounded-lg hover:bg-white/10 transition-colors uppercase text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#candidats" onClick={() => setIsOpen(false)} className="bg-primary text-white px-4 py-3 rounded-xl font-semibold text-center shadow-md uppercase text-sm">
                            Voir les candidats
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('April 15, 2026 12:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-3 md:gap-6 justify-center mt-4 animate-fade-in-up">
            {[
                { label: 'Jours', value: timeLeft.days },
                { label: 'Heures', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center backdrop-blur-md bg-white/80 border border-white/50 shadow-lg rounded-2xl w-20 h-20 md:w-24 md:h-24 hover:-translate-y-1 transition-transform duration-300">
                    <span className="font-title text-2xl md:text-4xl font-extrabold text-primary">{item.value.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] md:text-xs uppercase font-bold text-navy mt-1 tracking-wider">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

const Hero = () => {
    return (
        <section id="accueil" className="relative pt-32 pb-20 lg:pt-28 lg:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 text-navy font-medium mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                        Édition 2026
                    </div>

                    <h1 className="font-title text-5xl md:text-7xl font-extrabold text-navy tracking-tight leading-tight mb-6">
                        Compétition de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-yellow-500 drop-shadow-sm">Posing Bodybuilding</span>
                    </h1>

                    <p className="mt-4 text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-body">
                        Rejoignez-nous pour la compétition de bodybuilding à Bayonne, détails à l'accueil du club ou voir <a href="https://www.instagram.com/mily.dna/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle font-medium text-navy hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5 mr-1 text-pink-500" />@mily.dna</a>.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-white/60 border border-white/40 shadow-sm rounded-2xl p-4 w-40 hover:-translate-y-1 transition-transform duration-300">
                            <Calendar className="h-8 w-8 text-primary mb-2" />
                            <span className="font-semibold text-navy">15 Avril 2026</span>
                        </div>
                        <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-white/60 border border-white/40 shadow-sm rounded-2xl p-4 w-40 hover:-translate-y-1 transition-transform duration-300">
                            <MapPin className="h-8 w-8 text-cyan mb-2" />
                            <span className="font-semibold text-navy text-center">Océania Club Bayonne</span>
                        </div>
                        <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-white/60 border border-white/40 shadow-sm rounded-2xl p-4 w-40 hover:-translate-y-1 transition-transform duration-300">
                            <Ticket className="h-8 w-8 text-gold mb-2" />
                            <span className="font-semibold text-navy">Entrée Gratuite</span>
                        </div>
                    </div>

                    <Countdown />
                </div>
            </div>
        </section>
    );
};

const Concours = () => {
    return (
        <section id="concours" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-title text-3xl md:text-5xl font-extrabold text-navy mb-4">Le Concours</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Un événement gratuit centré exclusivement sur la qualité du posing bodybuilding classic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <CheckCircle2 className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-title text-xl font-bold text-navy mb-4">Check-list Jour J</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan"></span>
                                Accueil & vérifications de 12h00 à 14h00
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan"></span>
                                Remise de la clé USB (format .mp3)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan"></span>
                                Tenue : Shorty noir uni, pas de bijoux
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan"></span>
                                Tan uniforme autorisé (pas de paillettes)
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                            <MapPin className="h-7 w-7 text-cyan" />
                        </div>
                        <h3 className="font-title text-xl font-bold text-navy mb-4">Déroulement sur scène</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">1.</span>
                                Présentation libre ( -1min, musique perso)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">2.</span>
                                Les 8 Poses obligatoires
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">3.</span>
                                Comparaisons par vagues (Call-outs)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">4.</span>
                                Sélection du Top 5 puis Top 3
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                            <Award className="h-7 w-7 text-gold" />
                        </div>
                        <h3 className="font-title text-xl font-bold text-navy mb-4">Critères de Jugement</h3>
                        <ul className="space-y-4 text-gray-600">
                            <div>
                                <div className="flex justify-between font-semibold text-navy mb-1">
                                    <span>8 Poses (Technique)</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between font-semibold text-navy mb-1">
                                    <span>Routine Libre</span>
                                    <span>10%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-cyan h-2 rounded-full" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between font-semibold text-navy mb-1">
                                    <span>Endurance & Présence</span>
                                    <span>10%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gold h-2 rounded-full" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Jury = () => {
    const [isGridOpen, setIsGridOpen] = useState(false);

    const juryMembers = [
        { name: 'Alex', role: 'Président du Jury / MC', instagram: 'https://www.instagram.com/labar64/', customImage: '/alex.jpg' },
        { name: 'Walass', role: 'Juge Posing', instagram: 'https://www.instagram.com/walass_ifbb_pro/', customImage: '/walass.jpg' },
        { name: 'Houda', role: 'Juge Esthétique', instagram: 'https://www.instagram.com/houda_ifbbprowellness/', customImage: '/houda.jpg' },
        { name: 'Juanito', role: 'Juge Invité', instagram: 'https://www.instagram.com/juanitocoaching/', customImage: '/juanito.jpg' },
        { name: 'Manael', role: 'Jury à distance', customImage: '/manael.jpg' },
    ];

    return (
        <section id="jury" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-title text-3xl md:text-5xl font-extrabold text-navy mb-4">Panel du Jury</h2>
                    <div className="h-1 w-24 bg-cyan mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {juryMembers.map((member, index) => {
                        const Tag = member.instagram ? 'a' : 'div';
                        return (
                            <Tag
                                key={index}
                                href={member.instagram}
                                target={member.instagram ? "_blank" : undefined}
                                rel={member.instagram ? "noopener noreferrer" : undefined}
                                className={`flex flex-col items-center group ${member.instagram ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                            >
                                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full p-1 bg-gradient-to-tr from-cyan to-primary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                                    <img
                                        src={member.customImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}&backgroundColor=f8f9fa`}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white bg-white"
                                    />
                                </div>
                                <h3 className="font-title text-xl font-bold text-navy">{member.name}</h3>
                                {member.instagram && (
                                    <div className="mt-2 flex items-center gap-1 text-sm font-medium text-pink-500 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <Instagram className="w-4 h-4" /> Instagram
                                    </div>
                                )}
                                <p className="text-sm font-medium text-cyan px-3 py-1 bg-cyan/10 rounded-full mt-2 text-center max-w-[160px] leading-tight">
                                    {member.role}
                                </p>
                            </Tag>
                        );
                    })}
                </div>

                {/* Bouton Grille d'Évaluation */}
                <div className="mt-16 flex justify-center relative z-10">
                    <button
                        onClick={() => setIsGridOpen(true)}
                        className="flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:bg-navy/90 border border-white/10 transition-all duration-300"
                    >
                        <FileText className="w-6 h-6 text-gold" />
                        Ouvrir la Grille d'Évaluation
                    </button>
                </div>

                {/* Modal Full Screen Grille */}
                {isGridOpen && (
                    <div className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6 transition-all duration-300">
                        <div className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
                            {/* Header Modal */}
                            <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 border-b border-gray-100 px-6 py-4">
                                <h3 className="font-title text-xl font-bold text-navy flex items-center gap-2 mb-4 sm:mb-0">
                                    <FileText className="w-6 h-6 text-primary" />
                                    Grille d'Évaluation Officielle
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <button
                                        onClick={() => {
                                            const iframe = document.getElementById('grid-iframe');
                                            if (iframe) iframe.contentWindow.print();
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                                    >
                                        <Printer className="w-4 h-4" />
                                        Imprimer / PDF
                                    </button>
                                    <a
                                        href="/Grille_Evaluation_Jury_Simplifiee.txt"
                                        download="Grille_Simplifiee_Bayonne_2026.txt"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-navy text-sm font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                                    >
                                        <Download className="w-4 h-4" />
                                        Format Texte (Simplifié)
                                    </a>
                                    <button
                                        onClick={() => setIsGridOpen(false)}
                                        className="flex items-center justify-center p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all ml-2"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Contenu Modal (iframe HTML) */}
                            <div className="flex-grow bg-gray-100 overflow-hidden relative">
                                <iframe
                                    id="grid-iframe"
                                    src="/Grille_Evaluation_Jury_Classic_Posing.html"
                                    className="w-full h-full border-0 absolute inset-0"
                                    title="Grille Evaluation Jury"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const Candidats = () => {
    const candidates = [
        { name: 'Artem', num: '1', instagram: 'https://www.instagram.com/artem__badyva/', image: '/artem.jpg' },
        { name: 'Mily', num: '2', instagram: 'https://www.instagram.com/mily.dna/', image: '/mily.jpg' },
        { name: 'Sancho', num: '3', instagram: 'https://www.instagram.com/sancho.h64/', image: '/sancho.jpg' },
        { name: 'Illya', num: '4', instagram: 'https://www.instagram.com/illyabadyva/', image: '/illya.png' },
        { name: 'Quentin', num: '5', instagram: 'https://www.instagram.com/quentinhoo.64/', image: '/quentin.png' },
    ];

    return (
        <section id="candidats" className="py-24 bg-navy text-white relative">
            {/* Abstract dark shapes */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-4 border-primary/50"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-[20px] border-cyan/30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div>
                        <h2 className="font-title text-3xl md:text-5xl font-extrabold mb-4 text-white">Les Candidats</h2>
                        <div className="h-1 w-24 bg-gold rounded-full"></div>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <Dumbbell className="h-5 w-5 text-gold" />
                        <span className="font-medium text-white/90">5 Athlètes inscrits</span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {candidates.map((candidate, idx) => (
                        <a key={idx} href={candidate.instagram} target="_blank" rel="noopener noreferrer" className="relative w-full sm:w-64 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col items-center hover:bg-white/20 transition-all duration-300 group">
                            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center font-title font-bold text-gold">
                                #{candidate.num}
                            </div>
                            <img
                                src={candidate.image}
                                alt={candidate.name}
                                className="w-24 h-24 rounded-full mb-4 shadow-lg border-2 border-white/10 group-hover:scale-110 object-cover transition-transform duration-300"
                            />
                            <h3 className="font-title text-2xl font-bold tracking-wide mt-2">{candidate.name}</h3>
                            <div className="mt-3 flex items-center gap-2 text-sm text-pink-400 font-medium group-hover:text-pink-300 transition-colors">
                                <Instagram className="w-5 h-5" /> Instagram
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PosesClassic = () => {
    const poses = [
        { title: 'Front Double Biceps', img: '/pose1.jpg' },
        { title: 'Front Lat Spread', img: '/pose2.jpg' },
        { title: 'Side Chest', img: '/pose3.jpg' },
        { title: 'Back Double Biceps', img: '/pose4.jpg' },
        { title: 'Back Lat Spread', img: '/pose5.png' },
        { title: 'Side Triceps', img: '/pose6.jpg' },
        { title: 'Abdominal and Thigh', img: '/pose7.jpg' },
        { title: 'Most Muscular', img: '/pose8.jpg' },
    ];

    return (
        <section id="poses" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-title text-3xl md:text-5xl font-extrabold text-navy mb-4">Les 8 Poses Classic</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez les figures techniques essentielles évaluées lors de la compétition pour le jugement de l'esthétique et de la symétrie.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {poses.map((pose, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 aspect-[3/4]">
                            <img
                                src={pose.img}
                                alt={pose.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
                                <span className="text-gold font-bold text-sm uppercase tracking-wider mb-1">Pose {index + 1}</span>
                                <h3 className="font-title text-xl font-bold text-white leading-tight">{pose.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Reglement = () => {
    const articles = [
        { title: "ART. 1 – OBJET ET NATURE DE L'ÉVÉNEMENT", content: "Concours gratuit centré exclusivement sur la qualité du posing bodybuilding classic. Aucun critère de masse musculaire ni de poids n'est évalué. Le classement final est déterminé par l'exécution des huit poses obligatoires et la routine libre." },
        { title: "ART. 2 – CONDITIONS D'ÉLIGIBILITÉ", content: "Être âgé·e de 18 ans révolus. Remplir et signer le Formulaire Candidat. Signer la Décharge de responsabilité." },
        { title: "ART. 3 – INSCRIPTIONS ET VÉRIFICATIONS", content: "Clôture des inscriptions : 31 mars 2026. Remise des clés USB (format .mp3) lors de l'accueil de 12h à 13h." },
        { title: "ART. 4 – DÉROULEMENT TECHNIQUE", content: "Accueil et vérifications. Présentations libres (routine). 8 Poses obligatoires. Comparaisons par vagues. Délibération et remise des prix." },
        { title: "ART. 5 – TENUE ET APPARENCE", content: "Shorty noir uni, non brillant, sans logos (String interdit). Pieds nus obligatoires, bijoux prohibés. Tan et huile autorisés de manière uniforme." },
        { title: "ART. 6 – BARÈME DE NOTATION", content: "Huit poses (80%), Routine libre (10%), Endurance (10%). La meilleure et la pire note de chaque juge sont retranchées." },
        { title: "ART. 7 – SÉCURITÉ ET ASSURANCE", content: "L'organisateur est couvert par une RC, les candidats restent responsables de leur propre assurance individuelle accident." },
        { title: "ART. 8 – DROIT À L'IMAGE", content: "Le candidat cède son droit à l'image pour toute diffusion liée à l'événement." },
        { title: "ART. 9 – ACCEPTATION DU RÈGLEMENT", content: "La participation implique l'acceptation totale, sans réserve, du présent règlement." },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="reglement" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <ShieldAlert className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="font-title text-3xl md:text-5xl font-extrabold text-navy mb-4">Règlement Officiel</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-primary/30' : 'hover:border-gray-300 shadow-sm'}`}
                        >
                            <button
                                className={`w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 focus:outline-none transition-colors ${openIndex === index ? 'bg-primary/5' : 'hover:bg-gray-100'}`}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className={`font-title font-bold text-lg pr-4 ${openIndex === index ? 'text-primary' : 'text-navy'}`}>
                                    {article.title}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 text-gray-600 bg-white border-t border-gray-100 leading-relaxed">
                                    {article.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-navy pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="https://www.oceania-club.fr/wp-content/themes/oceaniaclub/assets/images/oceania-club.png" alt="Océania Club" className="h-8" />
                    </div>
                    <div className="flex space-x-6">
                        <a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
                        <a href="#concours" className="text-gray-400 hover:text-white transition-colors">Concours</a>
                        <a href="#reglement" className="text-gray-400 hover:text-white transition-colors">Règlement</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    <p>© 2026 Classic Posing Bayonne. Océania Club. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

function App() {
    return (
        <div className="antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
            <Topbar />
            <main className="flex-grow">
                <Hero />
                <Concours />
                <Jury />
                <Candidats />
                <PosesClassic />
                <Reglement />
            </main>
            <Footer />
        </div>
    );
}

export default App;
