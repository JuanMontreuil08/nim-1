type Project = {
  name: string
  description: string
  video: string
  image?: string // Add optional image field
  github?: string // Add optional GitHub repository link
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
//  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'BO Daily Digest',
    description:
      'An AI workflow built with Trigger.dev that fetches the latest Bloomberg Originals YouTube video, extracts its transcript, summarizes it with GPT-5, and delivers the insights straight to my inbox.',

    video:
      'https://www.youtube.com/watch?v=pT0lDFDprIg',
    image: 'https://res.cloudinary.com/dncjapapu/image/upload/v1756779337/trigger_vnmq8l.png', // Add image path
    github: 'https://github.com/JuanMontreuil08/bloomberg-originals-video-tracker', // Add GitHub repository link
    id: 'project1',
  },
  {
    name: 'Yei^2',
    description: 'An AI-powered investment agent that analyzes portfolios, market data, and news, delivering personalized insights directly through email and voice.',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    image: 'https://res.cloudinary.com/dncjapapu/image/upload/v1756779335/architecture_ttufsy.png', // Add image path
    github: 'https://github.com/JuanMontreuil08/stock-guru-api', // Add GitHub repository link
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Interbank',
    title: 'Data Analyst',
    start: 'Oct 2024',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'EY',
    title: 'Analytics Translator',
    start: 'Apr 2024',
    end: 'Jul 2024',
    id: 'work2',
  },
  {
    company: 'Rappi',
    title: 'BI Analyst',
    start: 'Nov 2022',
    end: 'Apr 2024',
    id: 'work3',
  },
  {
    company: 'Beat',
    title: 'Regional CX Data Analytics Intern',
    start: 'Mar 2022',
    end: 'Sep 2022',
    id: 'work4',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '🚀 My AI Hackathon Experience in Bogotá – Building FIABLE',
    description: 'Here’s my full experience in Colombia — tech, people, and culture all rolled into one!',
    link: '/blog/ai-hackathon-experience-bogota-fiable',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/JuanMontreuil08',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/juan-montreuil-6b65ba163/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/juan.montreuil8/',
  },
]

export const EMAIL = 'juanmontreuil71@gmail.com'
