import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pillars } from './components/Pillars';
import { Services } from './components/Services';
import { AIFeature } from './components/AIFeature';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Service data
  const services = [
    {
      title: 'Pre-Production',
      description: 'From concept to script to storyboard—we lay the foundation for successful productions with meticulous planning.',
      image: '/assets/pre-production.jpg',
      features: [
        'Concept Development',
        'Scriptwriting & Storyboarding',
        'Location Scouting',
        'Casting & Talent Management',
      ],
    },
    {
      title: 'Production',
      description: 'State-of-the-art equipment, experienced crew, and seamless execution on set—bringing your vision to life.',
      image: '/assets/production.jpg',
      features: [
        'Cinematography',
        'Multi-Camera Shoots',
        'Lighting & Art Direction',
        'On-Set Direction',
      ],
    },
    {
      title: 'Post-Production',
      description: 'Where the magic happens—editing, color grading, VFX, sound design, and final delivery.',
      image: '/assets/post-production.jpg',
      features: [
        'Video Editing',
        'Color Grading',
        'VFX & Motion Graphics',
        'Sound Design & Mixing',
      ],
    },
    {
      title: 'AI-Assisted Filmmaking',
      description: 'Leverage cutting-edge AI tools for concept visualization, previsualization, and creative exploration.',
      image: '/assets/ai-filmmaking.jpg',
      features: [
        'AI Storyboarding',
        'Concept Art Generation',
        'Script Analysis',
        'Workflow Automation',
      ],
    },
  ];

  // Project data
  const projects = [
    // Films
    { id: 1, title: 'Urban Stories', category: 'Films', image: '/assets/urban-stories.jpg' },
    { id: 4, title: 'The Journey', category: 'Films', image: '/assets/the-journey.jpg' },
    // Ads
    { id: 2, title: 'Brand Vision 2024', category: 'Ads', image: '/assets/brand-vision.jpg' },
    { id: 5, title: 'Tech Tomorrow', category: 'Ads', image: '/assets/tech-tomorrow.jpg' },
    // Music
    { id: 3, title: 'Midnight Sessions', category: 'Music', image: '/assets/midnight-sessions.jpg' },
    // Digital/Others
    { id: 6, title: 'Digital Dreams', category: 'Digital', image: '/assets/digital-dreams.jpg' },
  ];

  // Team data
  const founder = {
    name: 'Gali Muralidhar',
    role: '',
    image: "https://drive.google.com/file/d/15jf_5vTDS02fKlELZ84O11qSk_AKMRlN/view?usp=sharing",
    description: 'With over 15 years in the film industry, our founder has led groundbreaking projects that have redefined cinematic storytelling. Passionate about merging traditional filmmaking with cutting-edge technology.',
  };

  const teamMembers = [
    { name: 'Hari ', role: 'Head of Production', image: '/assets/hari.jpg' },
    { name: 'Sachin Yadav', role: 'Creative Director', image: '/assets/team-member1.jpg' },
    { name: 'Vikram Singh', role: 'Director of Photography', image: '/assets/vikram.jpg' },
    { name: 'Anand Roy', role: 'VFX Supervisor', image: '/assets/anand.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] overflow-x-hidden">
      <Navbar />
      <Hero backgroundImage="/assets/hero-bg.jpg" />
      <About image="/assets/about-image.jpg" />
      <Pillars />
      <Services services={services} />
      <AIFeature image="https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NTY0ODE4N3ww&ixlib=rb-4.1.0&q=80&w=1080" />
      <Projects projects={projects} />
      <Team founder={founder} members={teamMembers} />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}