import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const skills = [
  {
    name: 'SQL',
    percentage: 90,
    description: 'Skilled in writing complex queries, joins, and stored procedures for data extraction, transformation, and performance optimization.',
  },
  {
    name: 'Power BI',
    percentage: 70,
    description: 'Experienced in creating interactive dashboards, DAX measures, and data models to visualize business insights effectively.',
  },
  {
    name: 'Python',
    percentage: 70,
    description: 'Proficient in data cleaning, analysis, and automation using libraries like Pandas and NumPy for faster decision-making.',
  },
  {
    name: 'Apache Hop (ETL)',
    percentage: 55,
    description: 'Hands-on experience designing and executing ETL pipelines for data integration and workflow automation.',
  },
];

const SkillCard = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentPercentage((prev) => {
            if (prev >= skill.percentage) {
              clearInterval(interval);
              return skill.percentage;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, 200 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-card rounded-xl p-6 card-shadow card-hover-shadow border border-border/50"
    >
      <h3 className="text-xl font-bold text-foreground mb-3">{skill.name}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{skill.description}</p>
      
      <div className="space-y-2">
        <div className="flex justify-end">
          <span className="text-sm font-semibold text-primary">{currentPercentage}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
            className="progress-bar-fill"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Here are the tools I talk to more than people.</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
