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
    back1: 'Through this project, I learned how enterprise-grade Python and SQL automation pipelines are designed for compliance-critical BFSI workflows, where accuracy and speed directly affect operational success.',
    back2: 'This project improved reporting turnaround time and strengthened my ability to optimize business workflows using automation, which is highly relevant for analyst and BI engineering roles.',
    tags: ['Professional Projects', 'SQL', 'Python', 'Data Analysis'],
    image: '/projects/credit-bureau-data-automation.png',
    github: 'https://github.com/SPrathamesh2611/CB-Data-Export-Automation',
    demo: '#',
  },
  {
    title: 'Hospital ETL & Data Quality Pipeline',
    description: 'Designed an enterprise-style hospital ETL pipeline with RAW-to-CLEAN data flow, validation error tracking, and reconciliation dashboards using SQL Server, Python, and Apache Hop.',
    back1: 'This project helped me understand ETL architecture deeply, especially how validation checkpoints and reconciliation logic are used to build trusted healthcare reporting pipelines.',
    back2: 'It improved the reliability of dashboard-ready data and strengthened my data engineering mindset around warehouse design, data quality, and business reporting.',
    tags: ['Python', 'SQL', 'ETL'],
    image: '/projects/hospital-etl.png',
    github: 'https://github.com/SPrathamesh2611/HEALTHSPHERE-DATA-HUB',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Built a responsive personal portfolio using React and Tailwind CSS with AI-assisted development. Showcases professional projects, skills, and data analytics work through an interactive and modern UI.',
    back1: 'While building this project, I learned modern React architecture, smooth UI animation patterns, and how to structure technical work in a recruiter-friendly storytelling format.',
    back2: 'It significantly improved how I present my professional work, making my profile stronger through better branding, user experience, and business-focused communication.',
    tags: ['Professional Projects', 'AI-Assisted'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/SPrathamesh2611/portfolio-project-2611',
    demo: '#',
  },

  {
    title: 'Fitness Trainer Portfolio',
    description: 'Built a responsive fitness trainer portfolio using React and Tailwind CSS with AI-assisted development. The website highlights personal training services, fitness programs, and client transformation results through a modern and interactive UI.',
    back1: 'This project taught me how responsive UI design and service-first layouts can improve user trust, engagement, and the overall browsing experience for potential clients.',
    back2: 'It strengthened my ability to create conversion-focused interfaces that align design decisions with business goals and customer usability.',
    tags: ['Professional Projects', 'AI-Assisted'],
    image: '/projects/swap.png',
    github: 'https://github.com/SPrathamesh2611/Fitness-Trainer-Portfolio',
    demo: '#',
  },
  {
    title: 'SpaceX Shop Clone',
    description: 'Built an e-commerce clone of the SpaceX store during QSpiders training using Django and Bootstrap. Implemented product pages, user authentication, and a database-connected shopping cart system.',
    back1: 'By building this e-commerce clone, I learned Django backend workflows, authentication handling, and how cart systems interact with database-driven product management.',
    back2: 'It strengthened my backend fundamentals and improved my understanding of how technical architecture supports real-world business flows and user journeys.',
    tags: ['Python', 'Django', 'HTML/CSS', 'Bootstrap'],
    image: '/projects/spacex.png',
    github: 'https://github.com/SPrathamesh2611/SpaceX_Shopping',
    demo: '#',
  },
  {
    title: 'Churn & Loan Prediction',
    description: 'Built predictive models to analyze customer churn and loan status using Python and machine learning. Cleaned and merged datasets, trained models, and developed an interactive Power BI dashboard to visualize customer behavior and business insights.',
    back1: 'This project gave me strong hands-on learning in predictive modeling, feature engineering, and dashboard storytelling for customer behavior and loan analytics.',
    back2: 'It improved my ability to transform raw customer data into decision-ready insights that support retention strategy and risk-based business decisions.',
    tags: ['Python', 'Power BI', 'Data Analysis'],
    image: '/projects/churn.png',
    github: 'https://github.com/SPrathamesh2611/Churn-Loan-Prediction-Project',
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
                  className="group [perspective:1000px] h-[420px]"
                >
                  <div className="relative h-full w-full rounded-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* existing card code unchanged */}
                    <div className="absolute inset-0 bg-card rounded-xl overflow-hidden border border-border card-shadow [backface-visibility:hidden]">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
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
                    </div>

                    {/* Back Side */}
                    {/* Back Side */}
                    <div className="absolute inset-0 bg-card rounded-xl border border-border card-shadow p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {project.title}
                        </h3>


                        <p className="text-sm text-primary mb-2">
                          {project.back1}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {project.back2}
                        </p>
                      </div>

                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full gap-2 gradient-bg text-primary-foreground">
                          <Github size={16} />
                          View GitHub Code
                        </Button>
                      </a>
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
