import { LatestNews } from '@/components/LatestNews'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export default function NewsPage() {
  return (
    <div className="app-page">
      <SiteHeader />
      <LatestNews showAllLink={false} />
      <SiteFooter />
    </div>
  )
}
