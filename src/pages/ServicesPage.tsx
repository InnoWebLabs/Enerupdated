import { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services - Enerquest Solutions';
  }, []);

  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
}
