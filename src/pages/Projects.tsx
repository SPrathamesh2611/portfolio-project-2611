import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';


const skillTags = ['All', 'Professional Projects', 'SQL', 'Power BI', 'Python', 'ETL', 'Data Analysis', 'AI-Assisted'];


const projects = [
  {
    title: 'Credit Bureau Data Automation',
    description: 'Built a Python–SQL automation pipeline at Svasti Microfinance for Credit Bureau submissions (CIBIL, Equifax, Highmark), cutting processing time from 1.5 hours to ~35 minutes and raising success rate to 99.96%.',
    tags: ['Professional Projects', 'SQL', 'Python', 'Data Analysis'],
    image: '/projects/credit-bureau-data-automation.png',
    github: 'https://github.com/SPrathamesh2611/CB-Data-Export-Automation',
    demo: '#',
  },
  {
    title: 'Hospital ETL & Data Quality Pipeline',
    description: 'Designed an enterprise-style hospital ETL pipeline with RAW-to-CLEAN data flow, validation error tracking, and reconciliation dashboards using SQL Server, Python, and Apache Hop.',
    tags: ['Python', 'SQL' , 'ETL'],
    image: '/projects/hospital-etl.png',
    github: 'https://github.com/SPrathamesh2611/HEALTHSPHERE-DATA-HUB',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Built a responsive personal portfolio using React and Tailwind CSS with AI-assisted development. Showcases professional projects, skills, and data analytics work through an interactive and modern UI.',
    tags: ['Professional Projects', 'AI-Assisted'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/SPrathamesh2611/portfolio-project-2611',
    demo: '#',
  },
  {
    title: 'Fitness Trainer Portfolio',
    description: 'Built a responsive fitness trainer portfolio using React and Tailwind CSS with AI-assisted development. The website highlights personal training services, fitness programs, and client transformation results through a modern and interactive UI.',
    tags: ['Professional Projects', 'AI-Assisted'],
    image: '/projects/swap.png',
    github: '#',
    demo: '#',
  },
  {
    title: 'SpaceX Shop Clone',
    description: 'Built an e-commerce clone of the SpaceX store during QSpiders training using Django and Bootstrap. Implemented product pages, user authentication, and a database-connected shopping cart system.',
    tags: ['Python', 'Django', 'HTML/CSS', 'Bootstrap'],
    image: '/projects/spacex.png',
    github: 'https://github.com/SPrathamesh2611/SpaceX_Shopping',
    demo: '#',
  },
  {
    title: 'Churn & Loan Prediction',
    description: 'Built predictive models to analyze customer churn and loan status using Python and machine learning. Cleaned and merged datasets, trained models, and developed an interactive Power BI dashboard to visualize customer behavior and business insights.',
    tags: ['Python', 'Power BI', 'Data Analysis'],
    image: '/projects/churn.png',
    github: '#',
    demo: '#',
  },
];

const ComingSoonCard = ({ tag }) => (
  <div className="bg-card rounded-xl overflow-hidden border border-border card-shadow flex flex-col items-center justify-center h-full min-h-[320px] text-center p-6">
    <h3 className="text-lg font-semibold text-foreground mb-2">
      Coming Soon
    </h3>
    <p className="text-sm text-muted-foreground">
      Projects under <span className="font-medium text-primary">{tag}</span> are in progress.
    </p>
  </div>
);

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));
  const hasProjects = filteredProjects.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={18} />
              Back
            </Button>
          </Link>
          <h1 className="text-lg font-bold ml-4 text-foreground">My Projects</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of data analytics and engineering projects showcasing my skills.
          </p>
        </motion.div>

        {/* Skill Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillTags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTag(tag)}
              className={activeTag === tag ? 'gradient-bg text-primary-foreground' : 'border-primary/30 text-muted-foreground hover:text-primary hover:border-primary'}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {hasProjects ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl overflow-hidden border border-border card-shadow group"
                >
                  {/* existing card code unchanged */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">

                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="gap-1">
                          <Github size={14} /> Code
                        </Button>
                      </a>

                      {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-1 gradient-bg text-primary-foreground">
                          <ExternalLink size={14} /> Demo
                        </Button>
                      </a> */}

                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key="coming-soon"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full flex justify-center"
              >
                <ComingSoonCard tag={activeTag} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
