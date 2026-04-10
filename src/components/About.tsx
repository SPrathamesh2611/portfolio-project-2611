import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Download, Sparkles, Headphones, Settings, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/about-profile.jpg';

const timeline = [
  {
    year: '2024–Present',
    title: 'Joined Codemines Solutions',
    description: 'Providing data and technical support for Australian clients; working on Power BI projects.',
  },
  {
    year: '2023–2024',
    title: 'Joined Svasti Microfinance',
    description: 'Automated credit bureau reporting and optimized SQL-based processes to improve efficiency.',
  },
  {
    year: '2023',
    title: 'B.E. in Computer Engineering',
    description: 'Built a strong technical foundation in programming, databases, and data analytics.',
  },
  {
    year: '2019',
    title: 'Diploma in Information Technology',
    description: 'Gained hands-on skills in computer fundamentals, web technologies, and database systems.',
  },
];

const funFacts = [
  { icon: Sparkles, label: 'Minimalism' },
  { icon: Headphones, label: 'Lo-fi Beats' },
  { icon: Settings, label: 'Optimization' },
  { icon: Cpu, label: 'Learning Tools' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About</h2>
        </motion.div>

        {/* Intro + Photo */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Hello there</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
              Hi, I'm Prathamesh – a data-driven analyst crafting insights that tell stories.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Results-driven Data Analyst with expertise in SQL, Power BI, and Business Analysis. 
              Currently working as an Associate Junior Support Engineer at Codemines Solutions Pvt Ltd 
              in the Support & Implementation department, providing technical and analytical support 
              for Australian clients. Passionate about leveraging data-driven insights, process 
              optimization, and stakeholder management to drive business success.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View My Work
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                <a href="https://drive.google.com/uc?export=download&id=16yqgt0dvAZrcc9jQqdT0LvKPwGJ_pVEf">
                  Download Resume
                  <Download className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:ml-auto">
              <img
                src={profileImage}
                alt="Prathamesh Surve"
                className="rounded-2xl card-shadow w-full"
              />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/20 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="relative bg-card rounded-xl p-6 card-shadow card-hover-shadow border border-border/50"
              >
                <div className="w-3 h-3 rounded-full gradient-bg mb-4" />
                <time className="text-sm font-medium text-primary">{item.year}</time>
                <h4 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-medium text-foreground italic">
            "Crafting meaningful business insights through clean data and clear visuals."
          </p>
        </motion.blockquote>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="flex items-center gap-2 bg-accent/50 border border-border/50 rounded-full px-4 py-2"
            >
              <fact.icon className="text-primary" size={16} />
              <span className="text-sm font-medium text-foreground">{fact.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
