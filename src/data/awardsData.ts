// Awards and Recognition Data
export interface Award {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  year?: string;
  category?: string;
  icon: string;
}

// Awards array - add your awards here
export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Excellence Award',
    description: 'Recognition for outstanding performance in electrical contracting services',
    imagePath: 'Award1.jpg',
    icon: 'fas fa-trophy'
  },
  {
    id: 'award-2',
    title: 'Industry Recognition',
    description: 'Awarded for excellence in electrical engineering and project delivery',
    imagePath: 'Award2.jpg',
    icon: 'fas fa-medal'
  },
  {
    id: 'award-3',
    title: 'Quality Achievement',
    description: 'Outstanding quality standards in electrical installations',
    imagePath: 'Award3.jpg',
    icon: 'fas fa-star'
  },
  {
    id: 'award-4',
    title: 'Safety Excellence',
    description: 'Recognition for maintaining highest safety standards',
    imagePath: 'Award4.jpg',
    icon: 'fas fa-shield-alt'
  },
  {
    id: 'award-5',
    title: 'Innovation Award',
    description: 'Innovative solutions in electrical contracting',
    imagePath: 'Award5.jpg',
    icon: 'fas fa-lightbulb'
  },
  {
    id: 'award-6',
    title: 'Client Satisfaction',
    description: 'Outstanding client service and project satisfaction',
    imagePath: 'Award6.jpg',
    icon: 'fas fa-handshake'
  },
  {
    id: 'award-7',
    title: 'Technical Excellence',
    description: 'Superior technical expertise in electrical systems',
    imagePath: 'Award7.jpg',
    icon: 'fas fa-cogs'
  },
  {
    id: 'award-8',
    title: 'Professional Achievement',
    description: 'Professional excellence in electrical contracting',
    imagePath: 'Award8.jpg',
    icon: 'fas fa-award'
  },
  {
    id: 'award-9',
    title: 'Industry Leadership',
    description: 'Leadership in electrical contracting industry',
    imagePath: 'Award9.jpg',
    icon: 'fas fa-crown'
  },
  {
    id: 'award-10',
    title: 'Performance Excellence',
    description: 'Exceptional performance in project execution',
    imagePath: 'Award10.jpg',
    icon: 'fas fa-gem'
  },
  {
    id: 'award-11',
    title: 'Service Recognition',
    description: 'Excellence in electrical services and customer care',
    imagePath: 'Award11.jpg',
    icon: 'fas fa-certificate'
  },
  {
    id: 'award-12',
    title: 'Achievement Award',
    description: 'Significant achievements in electrical contracting',
    imagePath: 'Award12.jpg',
    icon: 'fas fa-ribbon'
  },
  {
    id: 'award-13',
    title: 'Recognition of Merit',
    description: 'Merit recognition for outstanding electrical work',
    imagePath: 'Award13.jpg',
    icon: 'fas fa-rosette'
  }
];

// Work Completion Certificates Data
export interface WorkCompletionCertificate {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  client?: string;
  project?: string;
  completionDate?: string;
  icon: string;
}

// Work Completion Certificates array
export const workCompletionCertificates: WorkCompletionCertificate[] = [
  {
    id: 'work-completion-1',
    title: 'Applied Materials Work Completion',
    description: 'Successfully completed electrical installation and commissioning project for Applied Materials',
    imagePath: 'appled_materials.jpg',
    client: 'Applied Materials',
    icon: 'fas fa-check-circle'
  },
  {
    id: 'work-completion-2',
    title: 'GEA Work Completion Certificate',
    description: 'Electrical contracting work completion certificate from GEA for industrial project',
    imagePath: 'gea_work_completion.jpg',
    client: 'GEA',
    icon: 'fas fa-certificate'
  },
  {
    id: 'work-completion-3',
    title: 'Trelleborg Completion Certificate',
    description: 'Project completion certificate from Trelleborg for electrical systems installation',
    imagePath: 'trelleborg_completion.jpg',
    client: 'Trelleborg',
    icon: 'fas fa-award'
  }
];

// Award categories for filtering (optional)
export const awardCategories = [
  'Performance Excellence',
  'Industry Leadership',
  'Quality Excellence',
  'Safety Achievement',
  'Innovation Award',
  'Client Satisfaction'
];