import { useEffect } from 'react';
import CertificationsSection from '../components/CertificationsSection';

export default function CertificationsPage() {
  useEffect(() => {
    document.title = 'Certifications - Enerquest Solutions';
  }, []);

  return (
    <div className="pt-20">
      <CertificationsSection />
    </div>
  );
}
