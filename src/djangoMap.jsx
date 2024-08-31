import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const roadmapData = [
  {
    title: "Part 1: Development Basics",
    topics: [
      "Python virtual environment (pipenv, virtualenv, pyenv, poetry)",
      "Effective Python Book",
      "VCS (Version Control System): Git and Github (commits, branches, merges, conflicts, stashing, pull requests)",
      "IDE/Text Editor: Pycharm Pro or VS Code (shortcuts, formatting, integrations, plugins)",
      "Networks Basics: IPs, Ports, HTTP/HTTPS, FTP, Webservers, NATs, SSH, ...etc",
      "Linux",
      "Using The Terminal/CMD/PowerShell"
    ]
  },
  {
    title: "Part 2: Databases",
    topics: [
      "RDB (PostgreSQL, MySQL/MariaDB, SQLite)",
      "NoSQL (MongoDB, Redis)",
      "ORM (Object-Relational Mapper)"
    ]
  },
  {
    title: "Part 3: Software Engineering",
    topics: [
      "Conventional Commits",
      "Trunk-based Development (https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)",
      "Change Logs",
      "README",
      "Documentation",
      "Clean Code",
      "Design Principles (SOLID, KISS, YAGNI, ...etc)",
      "Design Patterns",
      "Testing (Unit, Integration, Functional)",
      "Pytest",
      "TDD (Test-Driven Development)",
      "BDD (Behavior-Driven Development)",
      "DDD (Domain-Driven Design)",
      "Issue Tracking (GitHub issues, JIRA, Redmine) Learn how to mention issue number in commit message",
      "Continues Integration ([GitHub Actions](https://github.com/features/actions), Jenkins, Travis-CI)",
      "pre-commit hooks (black, flake)",
      ".env files and environmental variables",
      "Logs, and Logging (For Example Sentry)"
    ]
  },
  {
    title: "Part 4: Web",
    topics: [
      "HTML, CSS, SASS, Javascript, Bootstrap and JQuery",
      "REST API",
      "Swagger",
      "ngrok",
      "GraphQL",
      "Browser dev tools (elements tab, console, network tab, performance)"
    ]
  },
  {
    title: "Part 5: Theory and Tools",
    topics: [
      "Security (XSS, SQL Injection, CSRF, CORS, ...etc)",
      "Symmetric Encryption and Asymmetric Encryption",
      "SSH (Connecting, Generating Keys, Adding Hosts, ...etc)",
      "Authentication (session, basic, token and jwt token)",
      "Docker, docker-compose",
      "Postman",
      "Authentication vs Authorization"
    ]
  },
  {
    title: "Part 6: Django",
    topics: [
      "Good Resources: Two-Scoops with Django, Code With Mosh - Ultimate Django Series, Documentation",
      "Django App Architecture and Organization",
      "Important Packages: django-split-settings (https://sobolevn.me/2017/04/managing-djangos-settings)", 
      "django-allauth (social auth)",
      "django-rest-auth (for drf)", 
      "django-braces (mixins)", 
      "django-compressor (for static files)", 
      "django-countries (country fields)", 
      "django-crispy-forms (render forms)", 
      "django-db-mailer", 
      "django-el-pagination", 
      "django-extensions (shell_plus, jobs, ...etc)", 
      "drf-extra-fields (Base64Fields)", 
      "django-filters, django-fsm (state machine)", 
      "django-jet (admin styles and template)", 
      "django-modeltranslation", 
      "django-newsletter", 
      "django-phonenumber-field", 
      "django-push-notifications", 
      "django-solo", 
      "django-treebeard", 
      "PyJWT", 
      "django-redis", 
      "django-wkhtmltopdf", 
      "django-import-export", 
      "sentry-sdk", 
      "django-ckeditor", 
      "geopy (locating)", 
      "django-rest-knox (auth)", 
      "drf-spectacular (swagger)", 
      "easy-thumbnails", 
      "django-oscar", 
      "django-oscar-api", 
      "django-oscar-invoices", 
      "django-debug-toolbar", 
      "pytest-django", 
      "pytest-cov",
      "custom management commands",
      "custom migrations",
      "permissions",
      "Django cookie-cutter",
      "Django Rest Framework",
      "Wagtail",
      "Django cms"
    ]
  },
  {
    title: "Part 7: Advanced Concepts & Devops & Production",
    topics: [
      "Elastic Stack",
      "Caching with redis",
      "Asynchronous programming (celery, rabbit mq, django rq, Kafka)",
      "Linux cron jobs",
      "AWS Basics (S3, EC2, Networks)",
      "Gunicorn",
      "Nginx",
      "Microservices",
      "Hosting (PAAS, SAAS, IAAS)",
      "System Design (a good book is System Design Interview - An Insider's Guide)"
    ]
  },
  {
    title: "Part 8: Front-End Optional Miscellaneous",
    topics: [
      "NPM",
      "Webpack",
      "SPA (Vue and Nuxt.js/React and Next.js/Angular)",
      "PWA",
      "TypeScript"
    ]
  }
];

const DjangoRoadmap = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('djangoRoadmapProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [expandedParts, setExpandedParts] = useState({});

  useEffect(() => {
    localStorage.setItem('djangoRoadmapProgress', JSON.stringify(progress));
  }, [progress]);

  const handleCheck = (partIndex, topicIndex) => {
    setProgress(prev => {
      const key = `${partIndex}-${topicIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  const calculatePartProgress = (partIndex) => {
    const part = roadmapData[partIndex];
    const completed = part.topics.filter((_, i) => progress[`${partIndex}-${i}`]).length;
    return Math.round((completed / part.topics.length) * 100);
  };

  const toggleExpand = (partIndex) => {
    setExpandedParts(prev => ({
      ...prev,
      [partIndex]: !prev[partIndex]
    }));
  };

  return (
    <div className="p-6 w-full bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Django Roadmap Progress Tracker</h1>
      {roadmapData.map((part, partIndex) => {
        const partProgress = calculatePartProgress(partIndex);
        return (
          <Card key={partIndex} className="mb-6 bg-gray-800 border-gray-700">
            <CardHeader className="cursor-pointer" onClick={() => toggleExpand(partIndex)}>
              <CardTitle className="text-2xl font-semibold text-blue-300 flex justify-between items-center">
                <span> {part.title}</span>
                <span className="text-sm font-normal right-0 ml-auto">{partProgress}% Complete</span>
                {expandedParts[partIndex] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </CardTitle>
              <Progress value={partProgress} className="h-2 mt-2" style={{ backgroundImage: `linear-gradient(to right, green ${partProgress}%, white ${partProgress}%)` }} />
              </CardHeader>
            <AnimatePresence>
              {expandedParts[partIndex] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent>
                    <ul>
                      {part.topics.map((topic, topicIndex) => (
                        <motion.li 
                          key={topicIndex} 
                          className="flex items-center mb-3 text-gray-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Checkbox
                            id={`checkbox-${partIndex}-${topicIndex}`}
                            checked={progress[`${partIndex}-${topicIndex}`] || false}
                            onCheckedChange={() => handleCheck(partIndex, topicIndex)}
                            className="border-blue-500"
                          />
                          <label htmlFor={`checkbox-${partIndex}-${topicIndex}`} className="ml-3 cursor-pointer">
                            {topic}
                          </label>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
};

export default DjangoRoadmap;