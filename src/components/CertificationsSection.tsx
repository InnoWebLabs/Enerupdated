
import { useIntersectionObserver } from './useIntersectionObserver';
import { certifications, compliances, certificationsIntro, certificationsCommitment } from '../data/certificationsData';
import { awards, workCompletionCertificates } from '../data/awardsData';
import { useState } from 'react';




export default function CertificationsSection({ homepage = false }: { homepage?: boolean } = {}) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.001 });
  const [modal, setModal] = useState<{ 
    code: string; 
    name: string; 
    imagePath?: string; 
    description?: string; 
    year?: string; 
    category?: string; 
  } | null>(null);

  return (
    <section id="certifications" className={`py-20 relative overflow-hidden ${homepage ? 'bg-gray-50' : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'}`}>
      {!homepage && (
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 15% 10%, #dbeafe 0, transparent 35%), radial-gradient(circle at 85% 0%, #bfdbfe 0, transparent 30%), radial-gradient(circle at 50% 100%, #dbeafe 0, transparent 30%)'}} />
      )}
      <div className="container mx-auto px-4 relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Hero card with background */}
          <div className="mx-auto w-full max-w-5xl mb-10">
            <div className="relative z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center">
              {!homepage && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-xs tracking-wide uppercase mb-4">
                  <i className="fas fa-award" /> Our Standards
                </div>
              )}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">{certificationsIntro.title}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto mb-6 rounded-full opacity-80" />
              {certificationsIntro.subtitle && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  {certificationsIntro.subtitle}
                </p>
              )}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs border border-blue-100 inline-flex items-center gap-2"><i className="fas fa-certificate" /> ISO 9001:2015</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100 inline-flex items-center gap-2"><i className="fas fa-shield-alt" /> CPRI Approved</span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs border border-amber-100 inline-flex items-center gap-2"><i className="fas fa-gavel" /> Govt. Licensed</span>
              </div>
            </div>
          </div>
          {/* Certifications Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <button
                className="group bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl px-8 py-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => setModal({ code: 'ISO CERTIFIED', name: 'ISO 9001:2015 Quality Management' })}
              >
                <span className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg mb-4">
                  <i className="fas fa-certificate text-2xl" />
                </span>
                <span className="text-xl md:text-2xl font-extrabold text-blue-800 tracking-wide">ISO CERTIFIED</span>
                <span className="text-sm text-gray-500 mt-1">ISO 9001:2015</span>
                <span className="text-xs text-gray-600 mt-2">Quality Management System</span>
                <span className="mt-4 text-xs text-blue-700 underline group-hover:text-blue-900">View Certificate</span>
              </button>
              
              <button
                className="group bg-white/90 backdrop-blur-sm border border-green-200 rounded-2xl px-8 py-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => setModal({ code: 'CPRI APPROVED', name: 'CPRI APPROVED' })}
              >
                <span className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg mb-4">
                  <i className="fas fa-shield-alt text-2xl" />
                </span>
                <span className="text-xl md:text-2xl font-extrabold text-green-800 tracking-wide">CPRI APPROVED</span>
                <span className="text-sm text-gray-500 mt-1">Central Power Research Institute</span>
                <span className="text-xs text-gray-600 mt-2">Certified Products & Testing</span>
                <span className="mt-4 text-xs text-green-700 underline group-hover:text-green-900">View Approval</span>
              </button>
            </div>
          </div>

          {/* Awards Section - only if not homepage */}
          {!homepage && (
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  <i className="fas fa-trophy text-yellow-600 mr-3"></i>
                  Awards & Recognition
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full opacity-80" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Recognition and awards that highlight our excellence in the electrical industry.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {awards.length > 0 ? (
                  awards.map((award) => (
                    <div
                      key={award.id}
                      className="bg-white border border-yellow-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                    >
                      {/* Award Image */}
                      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setModal({ code: award.id, name: award.title, imagePath: `/images/AWARDS/${award.imagePath}`, description: award.description, year: award.year, category: award.category })}>
                        <img 
                          src={`/images/AWARDS/${award.imagePath}`} 
                          alt={award.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBMMTIwIDEwMEg4MEwxMDAgNjBaIiBmaWxsPSIjRDFENUQ5Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNEMUQ1RDkiLz4KPC9zdmc+';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Award Info */}
                      <div className="p-4">
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-sm">
                            <i className={`${award.icon} text-sm`} />
                          </div>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center line-clamp-2">{award.title}</h3>
                        {award.year && (
                          <div className="flex justify-center mb-2">
                            <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">
                              {award.year}
                            </span>
                          </div>
                        )}
                        {award.category && (
                          <div className="text-xs text-gray-500 mt-2 italic text-center">{award.category}</div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  // Placeholder when no awards are added yet
                  <div className="col-span-full bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-dashed border-yellow-300 rounded-xl p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-trophy text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Awards Coming Soon</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Add your award images to the <code className="bg-yellow-100 px-2 py-1 rounded text-xs">public/images/AWARDS/</code> folder 
                      and update the awards data to display them here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Work Completion Certification Section - only if not homepage */}
          {!homepage && (
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  <i className="fas fa-clipboard-check text-green-600 mr-3"></i>
                  Work Completion Certification
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full opacity-80" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Certificates of successful project completion from our valued clients and partners.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {workCompletionCertificates.length > 0 ? (
                  workCompletionCertificates.map((certificate) => (
                    <div
                      key={certificate.id}
                      className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                    >
                      {/* Certificate Image */}
                      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setModal({ code: certificate.id, name: certificate.title, imagePath: `/images/Work-Completion/${certificate.imagePath}`, description: certificate.description, year: certificate.completionDate, category: certificate.client })}>
                        <img 
                          src={`/images/Work-Completion/${certificate.imagePath}`} 
                          alt={certificate.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBMMTIwIDEwMEg4MEwxMDAgNjBaIiBmaWxsPSIjRDFENUQ5Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNEMUQ1RDkiLz4KPC9zdmc+';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Certificate Info */}
                      <div className="p-4">
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-sm">
                            <i className={`${certificate.icon} text-sm`} />
                          </div>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center line-clamp-2">{certificate.title}</h3>
                        {certificate.client && (
                          <div className="flex justify-center mb-2">
                            <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                              {certificate.client}
                            </span>
                          </div>
                        )}
                        {certificate.completionDate && (
                          <div className="text-xs text-gray-500 mt-2 italic text-center">{certificate.completionDate}</div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  // Placeholder when no certificates are added yet
                  <div className="col-span-full bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-dashed border-green-300 rounded-xl p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-clipboard-check text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Work Completion Certificates Coming Soon</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Add your work completion certificate images to the <code className="bg-green-100 px-2 py-1 rounded text-xs">public/images/Work-Completion/</code> folder 
                      and update the certificates data to display them here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Compliances Section - only if not homepage */}
          {!homepage && (
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  <i className="fas fa-gavel text-green-600 mr-3"></i>
                  Compliances
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-700 mx-auto mb-6 rounded-full opacity-80" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We strictly adhere to all statutory and regulatory compliances for your peace of mind.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {compliances.map((item) => (
                  <div
                    key={item.code}
                    className="bg-white/90 border border-green-100 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 flex items-center justify-center font-bold mb-3 shadow-sm text-sm">
                      {item.code}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 break-words leading-tight">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {homepage ? (
            <div className="mt-16 rounded-2xl p-8 bg-gradient-to-r from-blue-50 to-white border border-blue-100 shadow-xl text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">We make it possible for you</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-4">Best-in-class quality management and industry approvals that your projects can rely on.</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><i className="fas fa-file-signature text-blue-600" /> Audit-ready docs</span>
                <span className="inline-flex items-center gap-2"><i className="fas fa-clock text-blue-600" /> Rapid verification</span>
                <span className="inline-flex items-center gap-2"><i className="fas fa-shield-alt text-blue-600" /> Safety-first</span>
              </div>
            </div>
          ) : (
            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center border border-blue-100">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className={`${certificationsCommitment.icon} text-4xl text-white`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{certificationsCommitment.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                {certificationsCommitment.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal Popup for Certifications, Compliances, and Awards */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white/95 rounded-2xl shadow-2xl p-6 max-w-lg w-full relative animate-fade-in-up max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold z-10"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            
            {modal.code === 'ISO CERTIFIED' ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{modal.code} - ISO 9001:2015</h2>
                <div className="text-lg font-semibold text-gray-700 mb-4">Quality Management</div>
                <img src="/images/ISO/ISO.jpg" alt="ISO Certificate" className="rounded-xl w-full object-contain max-h-96 border shadow" />
              </>
            ) : modal.code === 'CPRI APPROVED' ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{modal.code}</h2>
                <div className="text-lg font-semibold text-gray-700 mb-4">Certified Products</div>
                <img src="/images/CPRI/CPRI Certificate.jpg" alt="CPRI Certificate" className="rounded-xl w-full object-contain max-h-96 border shadow" />
              </>
            ) : modal.imagePath ? (
              // Award or Work Completion Certificate modal
              <>
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{modal.name}</h2>
                  {modal.year && modal.category && (
                    <div className="flex justify-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        modal.imagePath.includes('/Work-Completion/') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {modal.year || modal.category}
                      </span>
                      {modal.year && modal.category && (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {modal.category}
                        </span>
                      )}
                    </div>
                  )}
                  {modal.description && (
                    <p className="text-gray-600 mb-4">{modal.description}</p>
                  )}
                </div>
                <img 
                  src={modal.imagePath} 
                  alt={modal.name} 
                  className="rounded-xl w-full object-contain max-h-96 border shadow" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden bg-gray-100 rounded-xl p-8 text-center">
                  <i className="fas fa-image text-4xl text-gray-400 mb-2"></i>
                  <p className="text-gray-500">Image not found</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Please add {modal.imagePath?.split('/').pop()} to the 
                    {modal.imagePath?.includes('/Work-Completion/') ? ' Work-Completion' : ' AWARDS'} folder
                  </p>
                </div>
              </>
            ) : (
              // Compliance modal
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{modal.code} - {modal.name}</h2>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


