import React from 'react';

// Confidence 0..5 -> color
export const CONF_COLORS = ['#cbd5e1', '#ef4444', '#f97316', '#facc15', '#84cc16', '#16a34a'];

export default function ProgressRing({ pct = 0, size = 64, stroke = 7, color = '#0284c7', track = '#e2e8f0', label }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (Math.max(0, Math.min(100, pct)) / 100) * c;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset .6s ease' }}
      />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize={size * 0.26} fontWeight="700" fill="#0f172a">
        {label ?? `${pct}%`}
      </text>
    </svg>
  );
}
