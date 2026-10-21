"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  RefreshCw,
  Search,
  AlertCircle
} from "lucide-react";

interface Application {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  qualification: string;
  regNumber?: string;
  experience?: string;
  message?: string;
  resumeName?: string;
  resumeSize?: string;
}

export default function ApplicationsDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/careers");
      const data = await res.json();
      if (data.success) {
        setApplications(data.data || []);
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const filtered = applications.filter((app) =>
    app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.phone.includes(searchQuery)
  );

  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-4 h-4 text-gold-brand" /> Admin Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Doctor Career Applications</h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              All candidate submissions sent to <span className="text-blue-400 font-bold">mithileshburra@ekluvya.guru</span>
            </p>
          </div>

          <button
            onClick={fetchApplications}
            disabled={loading}
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 shrink-0 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh Submissions
          </button>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8 flex items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidate by name, email, department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="text-xs font-bold text-slate-500 uppercase">
            Total Records: <span className="text-blue-600 text-sm">{filtered.length}</span>
          </div>
        </div>

        {/* Application Cards List */}
        {loading ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-semibold text-slate-600">Loading candidate submissions...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-slate-800">No Applications Found</h3>
            <p className="text-xs text-slate-500 mt-1">Submit a test application on <Link href="/careers" className="text-blue-600 underline">/careers</Link> to see it appear here live.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((app) => (
              <div key={app.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase">
                      {app.department}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mt-2">{app.fullName}</h3>
                    <div className="text-xs font-semibold text-slate-500">{app.designation || "Faculty Candidate"}</div>
                  </div>

                  <div className="text-right text-xs text-slate-400">
                    <div>Submitted ID: <span className="font-mono text-slate-700 font-bold">{app.id}</span></div>
                    <div>{new Date(app.submittedAt).toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-technical">
                  <div className="p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Email Address</div>
                    <div className="font-bold text-slate-900">{app.email}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Phone / WhatsApp</div>
                    <div className="font-bold text-slate-900">{app.phone}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Qualification & Reg</div>
                    <div className="font-bold text-slate-900">{app.qualification} ({app.regNumber || "No Reg Provided"})</div>
                  </div>
                </div>

                {app.message && (
                  <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-1">Cover Note:</span>
                    {app.message}
                  </div>
                )}

                {app.resumeName && (
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 p-3 rounded-2xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Resume Attached: {app.resumeName} ({app.resumeSize})</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
