'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SavingsCalculator() {
  const [bill, setBill] = useState(250)
  const monthlySavings = Math.round(bill * 0.65)
  const yearlySavings = monthlySavings * 12
  const twentyYearSavings = yearlySavings * 25

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-kin-cream p-8 md:p-10 max-w-md w-full">
      <h3 className="text-lg font-semibold text-kin-charcoal mb-1">How much could you save?</h3>
      <p className="text-sm text-kin-charcoal/50 mb-6">Enter your average monthly electric bill</p>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl font-bold text-kin-charcoal">${bill}</span>
          <span className="text-sm text-kin-charcoal/40">/month</span>
        </div>
        <input
          type="range"
          min={50}
          max={500}
          step={10}
          value={bill}
          onChange={e => setBill(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-kin-orange [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer"
          style={{ background: `linear-gradient(to right, #f97316 ${((bill - 50) / 450) * 100}%, #ece6e4 ${((bill - 50) / 450) * 100}%)` }}
        />
        <div className="flex justify-between text-xs text-kin-charcoal/30 mt-1">
          <span>$50</span><span>$500</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-kin-ivory rounded-2xl p-4">
          <div className="text-2xl font-bold text-kin-sage">${monthlySavings}</div>
          <div className="text-xs text-kin-charcoal/40">est. monthly savings</div>
        </div>
        <div className="bg-kin-ivory rounded-2xl p-4">
          <div className="text-2xl font-bold text-kin-sage">${twentyYearSavings.toLocaleString()}</div>
          <div className="text-xs text-kin-charcoal/40">est. 25-year savings</div>
        </div>
      </div>

      <Link href="/get-an-instant-estimate"
        className="w-full flex items-center justify-center gap-2 bg-kin-orange hover:bg-kin-orange-light text-white font-semibold py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-orange-200/50">
        Get Your Free Estimate <ArrowRight size={16} />
      </Link>

      <p className="text-[11px] text-kin-charcoal/30 text-center mt-3">
        Based on average solar savings. Actual savings vary by location and usage.
      </p>
    </div>
  )
}
