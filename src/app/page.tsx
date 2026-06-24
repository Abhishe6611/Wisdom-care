"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 variants={itemVariants} className={styles.heroTitle}>
                Enriching Lives Through <span className={styles.textAccent}>Value Education</span>
              </motion.h1>
              <motion.p variants={itemVariants} className={styles.heroSubtitle}>
                Wisdom Care e-Techno School & PU College is dedicated to providing world-class facilities and education to shape the leaders of tomorrow.
              </motion.p>
              <motion.div variants={itemVariants} className={styles.heroActions}>
                <Link href="/admissions" className="btn-primary">
                  Apply for Admissions <ArrowRight size={20} className={styles.iconMargin} />
                </Link>
                <Link href="/about" className="btn-secondary-glass">
                  Discover Our Campus
                </Link>
              </motion.div>
            </motion.div>

            <div className={styles.heroImageWrapper}>
              <div className={styles.studentGlow}></div>
              <img
                src="/student.png"
                alt="Student"
                className={styles.studentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className={`${styles.statCard} glass`}>
              <Users size={48} className={styles.statIcon} />
              <h3 className={styles.statNumber}>1000+</h3>
              <p className={styles.statLabel}>Happy Students</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.statCard} glass`}>
              <BookOpen size={48} className={styles.statIcon} />
              <h3 className={styles.statNumber}>50+</h3>
              <p className={styles.statLabel}>Expert Faculty</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.statCard} glass`}>
              <Trophy size={48} className={styles.statIcon} />
              <h3 className={styles.statNumber}>100%</h3>
              <p className={styles.statLabel}>Success Rate</p>
            </motion.div>
            <motion.div variants={itemVariants} className={`${styles.statCard} glass`}>
              <GraduationCap size={48} className={styles.statIcon} />
              <h3 className={styles.statNumber}>15+</h3>
              <p className={styles.statLabel}>Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className={styles.programsSection}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Programs
          </motion.h2>

          <div className={styles.programsGrid}>
            <motion.div
              className={styles.programCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.programImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
                  alt="e-Techno School"
                  fill
                  className={styles.programImage}
                />
              </div>
              <div className={styles.programContent}>
                <h3>e-Techno School</h3>
                <p>A futuristic curriculum designed to foster critical thinking, coding skills, and technological proficiency from an early age.</p>
                <Link href="/academics#e-techno" className={styles.programLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.programCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.programImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
                  alt="PU College"
                  fill
                  className={styles.programImage}
                />
              </div>
              <div className={styles.programContent}>
                <h3>PU College (Science & Commerce)</h3>
                <p>Comprehensive pre-university education preparing students for competitive exams like NEET, JEE, and KCET with expert coaching.</p>
                <Link href="/academics#pu-college" className={styles.programLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>Ready to Join<br />Wisdom Care?</h2>
            <p>Admissions are now open for the upcoming academic year. Secure your child&apos;s future today.</p>
            <div className={styles.ctaActions}>
              <Link href="/admissions" className="btn-primary">Apply Online Now</Link>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
