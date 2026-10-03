import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CanteenPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <Link href="/facilities">Facilities</Link> / <span className="text-sriher-blue">Canteen</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-sriher-navy tracking-tight">
            Institutional Canteen & <span className="crimson-gradient-text italic font-normal">Food Court</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Clean, hygienic multi-cuisine food court serving nutritious meals, fresh fruit juices, and bakery counters for students, doctors, and visitors.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-serif font-bold text-sriher-navy text-lg mb-2">Student & Faculty Cafeteria</h3>
              <p className="text-xs text-slate-500 font-technical">South & North Indian Thali meals, breakfast tiffins, and evening tea/coffee counters prepared under FSSAI standards.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-serif font-bold text-sriher-navy text-lg mb-2">Patient Diet Kitchen</h3>
              <p className="text-xs text-slate-500 font-technical">Specialized clinical diet preparation for hospital IP patients under the supervision of chief clinical dietitians.</p>
            </div>
          </div>
        </div>

        <Link href="/facilities" className="text-xs font-bold text-sriher-blue hover:text-sriher-navy flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
