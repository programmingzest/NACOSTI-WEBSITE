import { useState } from 'react'
import { LocateFixed, MapPinned, Navigation } from 'lucide-react'

const NACOSTI = { latitude: -1.2524, longitude: 36.7574 }

export function LocationGuide() {
  const [location, setLocation] = useState<string | null>(null)
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=36.735%2C-1.27%2C36.78%2C-1.23&layer=mapnik&marker=${NACOSTI.latitude}%2C${NACOSTI.longitude}`

  const getDirections = () => {
    if (!navigator.geolocation) {
      setLocation('Location access is not supported by this browser.')
      return
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLocation(`${coords.latitude},${coords.longitude}`),
      () => setLocation('Allow location access to start directions from your current position.'),
    )
  }

  const directionsHref = location
    ? `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${location};${NACOSTI.latitude},${NACOSTI.longitude}`
    : `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${NACOSTI.latitude},${NACOSTI.longitude}`

  return (
    <section id="location" aria-labelledby="location-heading" className="bg-secondary/40 px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Visit NACOSTI</p>
          <h2 id="location-heading" className="mt-3 text-2xl font-extrabold md:text-3xl">Find us at Upper Kabete</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Use the interactive map to locate the Commission off Waiyaki Way, or get turn-by-turn directions from your current position.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button type="button" onClick={getDirections} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-deep">
              <LocateFixed className="size-4" aria-hidden="true" />
              Use my location
            </button>
            <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold hover:border-primary">
              <Navigation className="size-4" aria-hidden="true" />
              Get directions
            </a>
          </div>
          {location ? <p className="mt-4 text-sm text-muted-foreground">{location.includes(',') ? 'Starting directions from your current location.' : location}</p> : null}
        </div>
        <div className="overflow-hidden rounded-3xl border bg-card p-2 shadow-xl">
          <iframe title="Map showing NACOSTI at Upper Kabete" src={mapUrl} className="h-64 w-full rounded-2xl border-0" loading="lazy" />
          <p className="flex items-center gap-2 px-3 py-3 text-xs text-muted-foreground">
            <MapPinned className="size-4 text-primary" aria-hidden="true" />
            Off Waiyaki Way, Upper Kabete, Nairobi
          </p>
        </div>
      </div>
    </section>
  )
}
