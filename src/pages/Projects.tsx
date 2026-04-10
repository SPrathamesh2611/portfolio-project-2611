import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const skillTags = ['All', 'Python', 'SQL', 'Power BI', 'ETL', 'NoSQL'];

const projects = [
  {
    title: 'Sales Dashboard',
    description: 'Interactive Power BI dashboard analyzing sales performance across regions with dynamic filters and drill-through reports.',
    tags: ['Power BI', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Customer Churn Analysis',
    description: 'Predictive analysis using Python and machine learning to identify customers likely to churn, with actionable retention strategies.',
    tags: ['Python', 'SQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'ETL Data Pipeline',
    description: 'Automated ETL pipeline using Apache Hop to transform and load data from multiple sources into a centralized data warehouse.',
    tags: ['ETL', 'SQL'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'MongoDB Analytics Platform',
    description: 'NoSQL-based analytics solution for processing and visualizing unstructured data from various business sources.',
    tags: ['NoSQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Financial Reporting Automation',
    description: 'Automated SQL-based reporting system generating weekly and monthly financial summaries with scheduled delivery.',
    tags: ['SQL', 'Power BI'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Web Scraping & Data Collection',
    description: 'Python scripts for scraping, cleaning, and storing web data for market research and competitive analysis.',
    tags: ['Python', 'NoSQL'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl overflow-hidden border border-border card-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="gap-1">
                        <Github size={14} /> Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-1 gradient-bg text-primary-foreground">
                        <ExternalLink size={14} /> Demo
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
