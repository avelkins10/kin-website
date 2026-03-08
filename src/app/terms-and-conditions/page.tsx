import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | KIN Home',
  description: 'KIN Home\'s terms and conditions of use.',
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />

      <section className="pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-kin-text mb-8">Terms &amp; Conditions</h1>
          <div className="rounded-2xl border border-kin-beige overflow-hidden bg-kin-light-gray">
            <iframe
              src="https://app.termly.io/policy-viewer/policy.html?policyUUID=10eda91a-b9e7-4de5-9a9a-ddb3df736895"
              className="w-full border-0"
              style={{ height: '1200px' }}
              title="Terms and Conditions"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
