import { useEffect } from 'react';
import ProjectsSection from '../components/ProjectsSection';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects - Enerquest Solutions';
  }, []);

  return (
    <div className="pt-20">
      <ProjectsSection />
    </div>
  );
}
