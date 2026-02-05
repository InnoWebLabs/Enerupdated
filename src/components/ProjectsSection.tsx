import { useIntersectionObserver } from './useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import { companyLogoMap } from '../data/companyLogoMap';
import { useMemo, useState } from 'react';

export default function ProjectsSection({ homepage = false }: { homepage?: boolean } = {}) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.01 });
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'international' | 'national'>(homepage ? 'national' : 'all');

  const internationalProjects = [
  { name: 'United Fish Oman', location: 'Duqum, Oman', type: 'Food Processing', icon: 'fas fa-fish' },
    { name: 'Afeefa Overseas SARL', location: 'Gabon, Africa', type: 'Commercial', icon: 'fas fa-building' }
  ];

  const nationalProjects = [
    { name: 'Applied Materials', type: 'Manufacturing', icon: 'fas fa-microchip' },
    { name: 'ABB Power Products & Systems India Ltd', type: 'Industrial', icon: 'fas fa-bolt' },
    { name: 'KK Winds', type: 'Renewable Energy', icon: 'fas fa-wind' },
    { name: 'Canara Hydraulics', type: 'Industrial', icon: 'fas fa-cogs' },
    { name: 'Mother Dairy', type: 'Food Processing', icon: 'fas fa-ice-cream' },
    { name: 'Climaveneta', type: 'HVAC', icon: 'fas fa-snowflake' },
    { name: 'Trelleborg - Dabaspet', type: 'Manufacturing', icon: 'fas fa-industry' },
    { name: 'Homag India Pvt Ltd', type: 'Industrial Automation', icon: 'fas fa-robot' },
    { name: 'GEA Westfalia', type: 'Food Processing', icon: 'fas fa-seedling' },
    { name: 'DCX Cables-Aerospace- SEZ, Dabaspet', type: 'Aerospace', icon: 'fas fa-rocket' },
    { name: 'Shakti Precision Components india pvt ltd', type: 'Precision Engineering', icon: 'fas fa-tools' },
    { name: 'Unibic', type: 'Food Processing', icon: 'fas fa-cookie' },
    { name: 'Nithin Sai Renewables', type: 'Renewable Energy', icon: 'fas fa-solar-panel' },
    { name: 'Kaynes Technology', type: 'Electronics', icon: 'fas fa-microchip' },
    { name: 'Difacto', type: 'Automation', icon: 'fas fa-cogs' },
    { name: 'Ather Energy', type: 'Electric Vehicles', icon: 'fas fa-bolt' },
    { name: 'Raneal Technologies', type: 'Technology', icon: 'fas fa-laptop-code' },
    { name: 'Avery Dennison', type: 'Manufacturing', icon: 'fas fa-industry' },
    { name: 'Meyer Organics Pvt Ltd', type: 'Pharmaceuticals', icon: 'fas fa-capsules' },
    { name: 'Rajdhani Industrial Park', type: 'Industrial', icon: 'fas fa-industry' },
    { name: 'Radisson Blue plaza-Hotel Mysore', type: 'Hospitality', icon: 'fas fa-hotel' },
    { name: 'Automotive Manufactures Pvt Ltd', type: 'Automotive', icon: 'fas fa-car' },
    { name: 'Sproutlife Foods Pvt Ltd', type: 'Food Processing', icon: 'fas fa-seedling' },
    { name: 'Global Printing & Packing Pvt Ltd', type: 'Printing & Packaging', icon: 'fas fa-print' },
    { name: 'IBEX Engineering Pvt Ltd', type: 'Engineering', icon: 'fas fa-cogs' },
    { name: 'Fahad Fishmeal & Oil Company', type: 'Food Processing', icon: 'fas fa-fish' },
    { name: 'Beckman Coulter', type: 'Medical Devices', icon: 'fas fa-vial' },
    { name: 'United Marine Products', type: 'Marine', icon: 'fas fa-water' },
    { name: 'Rajasriya Automotive Pvt Ltd', type: 'Automotive', icon: 'fas fa-car' },
    { name: 'SKyye Lounge', type: 'Hospitality', icon: 'fas fa-glass-cheers' },
    { name: 'BAWA Fishmeal & Oil Co', type: 'Food Processing', icon: 'fas fa-fish' },
    { name: '91 Spring Board', type: 'Co-working', icon: 'fas fa-briefcase' },
    { name: 'Karnataka machine Tools', type: 'Machinery', icon: 'fas fa-tools' },
    { name: 'RMZ Ecoworld', type: 'Commercial', icon: 'fas fa-building' },
    { name: 'BPE Biotree', type: 'Biotechnology', icon: 'fas fa-leaf' },
  ];

  // const galleryProjects = [
  //   { name: 'Shakti Precision', icon: 'fas fa-tools' },
  //   { name: 'Homag', icon: 'fas fa-industry' },
  //   { name: 'Applied Materials HT Yard', icon: 'fas fa-warehouse' },
  //   { name: 'GWA Westfalia', icon: 'fas fa-building' }
  // ];

  const filteredInternational = useMemo(() => {
    if (!query.trim()) return internationalProjects;
    const q = query.toLowerCase();
    return internationalProjects.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.location?.toLowerCase().includes(q)) ||
      (p.type?.toLowerCase().includes(q))
    );
  }, [internationalProjects, query]);

  const filteredNational = useMemo(() => {
    if (!query.trim()) return nationalProjects;
    const q = query.toLowerCase();
    return nationalProjects.filter(p =>
      p.name.toLowerCase().includes(q) || (p.type?.toLowerCase().includes(q))
    );
  }, [nationalProjects, query]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 -right-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-indigo-100 via-sky-100 to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Hero card with background */}
          <div className="mx-auto w-full max-w-5xl mb-16">
            <div className="relative z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-blue-100/50 via-transparent to-transparent" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-xs tracking-wide uppercase mb-4">
                <i className="fas fa-project-diagram" /> Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Our Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto mb-6 rounded-full opacity-80" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Excellence delivered across international and national markets</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs border border-blue-100 inline-flex items-center gap-2"><i className="fas fa-globe" /> International Delivery</span>
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs border border-green-100 inline-flex items-center gap-2"><i className="fas fa-industry" /> Industrial Expertise</span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs border border-amber-100 inline-flex items-center gap-2"><i className="fas fa-clock" /> On-time Execution</span>
              </div>

              {/* Controls: Tabs + Search */}
              {!homepage && (
                <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 sm:items-center sm:justify-between sticky top-24 z-10">
                  <div className="inline-flex bg-slate-100 rounded-xl p-1 border border-slate-200 self-center">
                    {[
                      { key: 'all', label: 'All' },
                      { key: 'international', label: 'International' },
                      { key: 'national', label: 'National' },
                    ].map(t => (
                      <button
                        key={t.key}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          (activeTab === (t.key as any)) ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={() => setActiveTab(t.key as any)}
                        aria-pressed={activeTab === (t.key as any)}
                      >{t.label}</button>
                    ))}
                  </div>
                  <div className="relative max-w-md w-full sm:self-auto self-center">
                    <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                      placeholder="Search projects, location, or type..."
                      className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/90 backdrop-blur border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 text-sm shadow-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {(activeTab === 'all' || activeTab === 'international') && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
              <i className="fas fa-globe text-blue-500 mr-3" />
              International Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredInternational.map((project, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl card-hover bg-gradient-to-br from-[#1e357a] via-[#2959CA] to-[#6ea8ff] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #ffffff 0, transparent 35%), radial-gradient(circle at 80% 0%, #ffffff 0, transparent 30%)'}} />
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 overflow-hidden ring-2 ring-white/10">
                        {companyLogoMap[project.name] ? (
                          <img
                            src={`/images/COMPANIES/${companyLogoMap[project.name]}`}
                            alt={project.name + ' logo'}
                            className="max-h-12 max-w-full object-contain"
                          />
                        ) : (
                          <i className={`${project.icon} text-3xl`} />
                        )}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{project.name}</h4>
                        <p className="opacity-90 text-lg">{project.location}</p>
                      </div>
                    </div>
                    {/* Removed Project Type as requested */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}

          {(activeTab === 'all' || activeTab === 'national') && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
              <i className="fas fa-flag text-green-500 mr-3" />
              National Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {(homepage ? filteredNational.slice(0, 3) : filteredNational).map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-blue-100 relative group overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-3 overflow-hidden ring-2 ring-transparent group-hover:ring-blue-200 transition">
                      {companyLogoMap[project.name] ? (
                        <img
                          src={`/images/COMPANIES/${companyLogoMap[project.name]}`}
                          alt={project.name + ' logo'}
                          className="max-h-10 max-w-full object-contain"
                        />
                      ) : (
                        <i className={`${project.icon} text-white`} />
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
              ))}
              {homepage && nationalProjects.length > 3 && (
                <div className="relative col-span-full" style={{gridColumn: '1 / -1'}}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nationalProjects.slice(3, 6).map((project) => (
                      <div key={project.name} className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-blue-100 relative overflow-hidden opacity-80" style={{filter: 'blur(3px)'}}>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-3 overflow-hidden">
                            {companyLogoMap[project.name] ? (
                              <img
                                src={`/images/COMPANIES/${companyLogoMap[project.name]}`}
                                alt={project.name + ' logo'}
                                className="max-h-10 max-w-full object-contain"
                              />
                            ) : (
                              <i className={`${project.icon} text-white`} />
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '100%' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="project-blur-overlay flex items-center justify-center" style={{position: 'absolute', inset: 0}}>
                    <button className="view-more-btn" onClick={() => navigate('/projects')}>
                      <span style={{position:'relative',zIndex:1}}>View More Projects</span>
                      <span className="shine" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          )}

          <div>
            {/* <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
              <i className="fas fa-images text-purple-500 mr-3" />
              Project Gallery
            </h3> */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleryProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                  <div className="w-full h-32 bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                    <i className={`${project.icon} text-4xl text-white`} />
                  </div>
                  <h4 className="font-semibold text-gray-800">{project.name}</h4>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


