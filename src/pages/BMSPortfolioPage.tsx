import { useEffect } from 'react';
import BMSSection from '../components/BMSSection';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery - Enerquest Solutions';
  }, []);

  return (
    <div className="pt-20">
      <BMSSection />
    </div>
  );
}
