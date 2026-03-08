import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | KIN Home',
  description: 'KIN Home\'s privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <section className="pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-kin-text mb-8">Privacy Policy</h1>
          <div className="rounded-2xl border border-kin-beige overflow-hidden bg-kin-light-gray">
            <iframe
              src="https://app.termly.io/policy-viewer/policy.html?policyUUID=7bc08fc5-ce91-4b22-ae7e-a16a80c96026"
              className="w-full border-0"
              style={{ height: '2000px' }}
              title="Privacy Policy"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
