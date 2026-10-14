import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate } from 'react-router'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const landingNav = [
  { label: 'About', icon: '✦', target: '/app#mandate' },
  { label: 'Services', icon: '◎', target: '/app#licensing' },
  { label: 'Innovation', icon: '⌁', target: '/app#priorities' },
  { label: 'E-Resources', icon: '▤', target: '/app#information-centre' },
  { label: 'Updates', icon: '↗', target: '/app#news' },
  { label: 'Contact', icon: '◇', target: '/app#contact' },
  { label: 'Home', icon: '⌂', target: '/app' },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const [logoUrl, setLogoUrl] = useState('')

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') setLogoUrl(reader.result)
    })
    reader.readAsDataURL(file)
  }

  const enterSite = (target: string) => navigate(target)

  return (
    <div className="site-shell">
      <section className="landing-gateway" aria-label="NACOSTI welcome">
        <div className="gateway-grid" aria-hidden="true" />
        <div className="gateway-topline">
          <span>National Commission for Science, Technology and Innovation</span>
          <span>Republic of Kenya</span>
        </div>
        <div className="gateway-stage">
          <div className="gateway-copy">
            <span className="gateway-kicker"><i /> Welcome to NACOSTI</span>
            <h1>Knowledge<br /><em>in motion.</em></h1>
            <p>Explore the people, policies and partnerships shaping Kenya's future through science, technology and innovation.</p>
            <label className="logo-upload">
              <span className="upload-icon">＋</span>
              <span><strong>Personalise the wheel</strong><small>Upload a NACOSTI logo or seal</small></span>
              <input type="file" accept="image/*" onChange={handleLogoUpload} />
            </label>
          </div>
          <div className="gateway-wheel-wrap">
            <div className="gateway-wheel" style={logoUrl ? { backgroundImage: `url(${logoUrl})` } : undefined}>
              <div className="wheel-glass" />
              <div className="wheel-logo">
                {logoUrl ? <span className="uploaded-logo" style={{ backgroundImage: `url(${logoUrl})` }} aria-label="Uploaded NACOSTI logo" /> : <><span className="wheel-bars"><i /><i /><i /></span><strong>NACOSTI</strong><small>Science • Technology • Innovation</small></>}
              </div>
              <div className="wheel-ring ring-a" />
              <div className="wheel-ring ring-b" />
              {landingNav.map((item, index) => (
                <a key={item.label} className={`arc-nav arc-nav-${index + 1}`} href={item.target} onClick={(e) => { e.preventDefault(); enterSite(item.target) }}>
                  <span className="arc-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <span className="wheel-caption">Choose a direction <b>↗</b></span>
          </div>
        </div>
        <button className="gateway-enter" type="button" onClick={() => enterSite('/app')}>Enter NACOSTI <ArrowUpRight /></button>
        <span className="gateway-scroll">Rotate. Discover. Make an impact.</span>
      </section>
    </div>
  )
}   