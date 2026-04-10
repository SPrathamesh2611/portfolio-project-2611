import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, ArrowLeftRight, BarChart3, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-profile.jpeg';

const typedItems = ['Data Analyst', 'Power BI', 'SQL', 'Python'];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prathamesh-surve-4323301a0/' },
  { icon: Github, href: 'https://github.com/SPrathamesh2611?tab=repositories' },
  { icon: Facebook, href: 'https://m.facebook.com/prathamesh.p.surve/' },
  { icon: Instagram, href: 'https://www.instagram.com/' },
];

const floatingCards = [
  { icon: Database, label: 'SQL', position: 'top-4 -left-4' },
  { icon: ArrowLeftRight, label: 'ETL', position: 'top-1/2 -right-8' },
  { icon: BarChart3, label: 'Visualization', position: 'bottom-8 left-8' },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typedItems[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typedItems.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Hello, I'm{' '}
              <span className="gradient-text">Prathamesh Surve</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Skilled in{' '}
              <span className="text-primary font-semibold typing-cursor">
                {displayText}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="/projects">
                <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity">
                  View My Work
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative max-w-[200px] sm:max-w-xs md:max-w-md mx-auto">
              {/* Profile Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden card-shadow">
                <img
                  src={heroImage}
                  alt="Prathamesh Surve"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                  className={`absolute ${card.position} z-20 floating-card`}
                >
                  <div className="flex items-center gap-2">
                    <card.icon className="text-primary" size={20} />
                    <span className="text-sm font-medium text-foreground">{card.label}</span>
                  </div>
                </motion.div>
              ))}

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/30 rounded-3xl -z-10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
