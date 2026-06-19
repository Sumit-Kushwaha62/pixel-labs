const PartnerStrip = () => {
  const partners = [
    { name: 'TechFlow', icon: '⚡' },
    { name: 'CloudScale', icon: '☁️' },
    { name: 'NexusAI', icon: '🤖' },
    { name: 'DataCore', icon: '💾' },
    { name: 'WaveMedia', icon: '🌊' },
    { name: 'Zenith', icon: '🏔️' },
  ];

  // Double the array for seamless infinite scroll
  const displayPartners = [...partners, ...partners];

  return (
    <div className="partner-strip">
      <div className="container">
        <p className="partner-strip__label">Trusted by industry leaders</p>
        <div className="partner-strip__track-wrapper">
          <div className="partner-strip__track">
            {displayPartners.map((partner, index) => (
              <div key={index} className="partner-strip__item">
                <span className="partner-strip__icon">{partner.icon}</span>
                <span className="partner-strip__name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerStrip;
