'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SavingsCalculator() {
  const [bill, setBill] = useState(250)
  const monthlySavings = Math.round(bill * 0.65)
  const twentyYearSavings = monthlySavings * 12 * 25

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-kin-beige p-8 md:p-10 max-w-md w-full">
      <h3 className="text-lg font-semibold text-kin-text mb-1">How much could you save?</h3>
      <p className="text-sm text-kin-text-secondary mb-6">Enter your average monthly electric bill</p>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl font-bold text-kin-text">${bill}</span>
          <span className="text-sm text-kin-text-secondary">/month</span>
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
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-kin-sage [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer"
          style={{ background: `linear-gradient(to right, #8c968d ${((bill - 50) / 450) * 100}%, #ece7e4 ${((bill - 50) / 450) * 100}%)` }}
        />
        <div className="flex justify-between text-xs text-kin-text-secondary mt-1">
          <span>$50</span><span>$500</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-kin-light-gray rounded-2xl p-4">
          <div className="text-2xl font-bold text-kin-sage">${monthlySavings}</div>
          <div className="text-xs text-kin-text-secondary">est. monthly savings</div>
        </div>
        <div className="bg-kin-light-gray rounded-2xl p-4">
          <div className="text-2xl font-bold text-kin-sage">${twentyYearSavings.toLocaleString()}</div>
          <div className="text-xs text-kin-text-secondary">est. 25-year savings</div>
        </div>
      </div>

      <Link href="/get-an-instant-estimate"
        className="w-full flex items-center justify-center gap-2 bg-kin-sage hover:bg-kin-sage-light text-white font-semibold py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-kin-sage/20">
        Get Your Free Estimate <ArrowRight size={16} />
      </Link>

      <p className="text-[11px] text-kin-text-secondary/60 text-center mt-3">
        Based on average solar savings. Actual savings vary by location and usage.
      </p>
    </div>
  )
}
