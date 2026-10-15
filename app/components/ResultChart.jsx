'use client'
import React, { useEffect, useRef, useState } from 'react'

const FILL = {
    main: 'fill-[#2a78d6] dark:fill-[#3987e5]',
    baseline: 'fill-[#b4b2a9] dark:fill-[#5f5e5a]',
}
const SWATCH = {
    main: 'bg-[#2a78d6] dark:bg-[#3987e5]',
    baseline: 'bg-[#b4b2a9] dark:bg-[#5f5e5a]',
}
const TEXT = 'fill-gray-800 dark:fill-white'
const MUTED = 'fill-gray-600 dark:fill-white/70'
const GRID = 'stroke-gray-300 dark:stroke-white/15'
// Page-coloured outline so value labels stay readable where they cross a gridline or the target line.
const HALO = 'stroke-white dark:stroke-darkTheme [paint-order:stroke]'

// Bar with rounded top corners; bars always start at 0.
const barPath = (x, y, w, y0, r = 4) => {
    const rr = Math.min(r, w / 2, Math.max(0, y0 - y))
    return `M${x},${y0} V${y + rr} Q${x},${y} ${x + rr},${y} H${x + w - rr} Q${x + w},${y} ${x + w},${y + rr} V${y0} Z`
}

const fmt = (v, digits) => v.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })

// The viewBox follows the rendered width, so text keeps its size on narrow screens.
function useWidth(ref) {
    const [width, setWidth] = useState(640)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const ro = new ResizeObserver(([entry]) => setWidth(Math.max(240, Math.round(entry.contentRect.width))))
        ro.observe(el)
        return () => ro.disconnect()
    }, [ref])
    return width
}

// Half of the tooltip's max width: keeps the centred tooltip inside the chart.
const TIP_HALF = 110

function useTooltip(width) {
    const [tip, setTip] = useState(null)
    const handlers = (x, y, text) => ({
        onPointerEnter: () => setTip({ x, y, text }),
        onPointerLeave: (e) => { if (e.pointerType === 'mouse') setTip(null) },
        onClick: () => setTip({ x, y, text }),
        className: 'cursor-pointer',
    })
    const node = tip && (
        <div role='status' className='pointer-events-none absolute z-10 w-max max-w-[220px] px-2 py-1 rounded-md text-xs leading-snug bg-white text-black border border-gray-400 shadow-[2px_2px_0_#000] dark:bg-darkTheme dark:text-white dark:border-white/50 dark:shadow-[2px_2px_0_#fff]'
            style={{ left: Math.min(Math.max(tip.x, TIP_HALF), width - TIP_HALF), top: tip.y - 8, transform: 'translate(-50%, -100%)' }}>
            {tip.text}
        </div>
    )
    return { handlers, node }
}

const Legend = ({ items }) => (
    <ul className='flex flex-wrap gap-x-5 gap-y-1 mb-3 text-sm text-gray-700 dark:text-white/80'>
        {items.map(({ name, role, dashed }) => (
            <li key={name} className='flex items-center gap-2'>
                {dashed
                    ? <span aria-hidden='true' className='w-5 border-t-2 border-dashed border-gray-800 dark:border-white' />
                    : <span aria-hidden='true' className={`w-3 h-3 rounded-sm ${SWATCH[role]}`} />}
                {name}
            </li>
        ))}
    </ul>
)

const PairedBars = ({ data, width, title }) => {
    const { handlers, node } = useTooltip(width)
    const H = 260, left = 36, right = 8, top = 24, bottom = 30
    const plotW = width - left - right, plotH = H - top - bottom
    const max = Math.ceil(Math.max(...data.groups.flatMap((g) => g.values)) / 5) * 5
    const ticks = Array.from({ length: max / 5 + 1 }, (_, i) => i * 5)
    const y = (v) => top + plotH - (v / max) * plotH
    const groupW = plotW / data.groups.length
    const bw = Math.min(24, groupW * 0.28), gap = 10
    const label = `${title}. ` + data.groups.map((g) => `${g.label}: ` + data.series.map((s, i) => `${s.name} ${fmt(g.values[i], 2)}`).join(', ')).join('; ')
    return (
        <>
            <Legend items={data.series} />
            <div className='relative'>
                <svg viewBox={`0 0 ${width} ${H}`} className='w-full h-auto overflow-visible' role='img' aria-label={label}>
                    {ticks.map((t) => (
                        <g key={t}>
                            <line x1={left} x2={width - right} y1={y(t)} y2={y(t)} className={GRID} strokeWidth='1' />
                            <text x={left - 6} y={y(t)} dy='0.32em' textAnchor='end' fontSize='11' className={MUTED}>{t}</text>
                        </g>
                    ))}
                    {data.groups.map((g, gi) => {
                        const x0 = left + gi * groupW + (groupW - (2 * bw + gap)) / 2
                        return (
                            <g key={g.label}>
                                {g.values.map((v, si) => {
                                    const x = x0 + si * (bw + gap)
                                    const s = data.series[si]
                                    return (
                                        <g key={s.name} {...handlers(x + bw / 2, y(v), `${s.name}, ${g.label}: ${fmt(v, 2)}`)}>
                                            <path d={barPath(x, y(v), bw, y(0))} className={FILL[s.role]} />
                                            <text x={x + bw / 2} y={y(v) - 6} textAnchor='middle' fontSize='11' strokeWidth='4' className={`${TEXT} ${HALO}`}>{fmt(v, 2)}</text>
                                        </g>
                                    )
                                })}
                                <text x={left + gi * groupW + groupW / 2} y={H - 10} textAnchor='middle' fontSize='12' className={TEXT}>{g.label}</text>
                            </g>
                        )
                    })}
                </svg>
                {node}
            </div>
            <table className='sr-only'>
                <caption>{title}</caption>
                <thead><tr><th scope='col'>Month</th>{data.series.map((s) => <th key={s.name} scope='col'>{s.name}</th>)}</tr></thead>
                <tbody>{data.groups.map((g) => <tr key={g.label}><th scope='row'>{g.label}</th>{g.values.map((v, i) => <td key={i}>{fmt(v, 2)}</td>)}</tr>)}</tbody>
            </table>
        </>
    )
}

const Intervals = ({ data, width, title }) => {
    const { handlers, node } = useTooltip(width)
    // Percentages by default; ROC-AUC style data sets unit '' and digits 3.
    const unit = data.unit ?? '%', digits = data.digits ?? 1
    const v = (n) => `${fmt(n, digits)}${unit}`
    const labeledTicks = data.axis.labeled ?? data.axis.ticks.filter((t) => t % 10 === 0)
    const left = data.labelWidth ?? 84, right = 48, top = 4, headH = 24, rowH = 28, metricGap = 14, axisH = 24
    const rows = data.metrics[0].rows
    const H = top + data.metrics.length * (headH + rows.length * rowH) + (data.metrics.length - 1) * metricGap + axisH
    const plotW = width - left - right
    const x = (n) => left + ((n - data.axis.min) / (data.axis.max - data.axis.min)) * plotW
    const plotBottom = H - axisH
    const label = `${title}. ` + data.metrics.map((m) => `${m.label}: ` + m.rows.map((r) => `${r.name} ${v(r.value)} (95% interval ${fmt(r.low, digits)} to ${fmt(r.high, digits)})`).join(', ')).join('; ')
    let cursor = top
    return (
        <>
            <Legend items={rows.map(({ name, role }) => ({ name, role }))} />
            <div className='relative'>
                <svg viewBox={`0 0 ${width} ${H}`} className='w-full h-auto overflow-visible' role='img' aria-label={label}>
                    {data.axis.ticks.map((t) => (
                        <g key={t}>
                            <line x1={x(t)} x2={x(t)} y1={top} y2={plotBottom} className={GRID} strokeWidth='1' />
                            {labeledTicks.includes(t) && <text x={x(t)} y={H - 6} textAnchor='middle' fontSize='11' className={MUTED}>{fmt(t, data.axis.digits ?? 0)}{unit}</text>}
                        </g>
                    ))}
                    {data.metrics.map((m, mi) => {
                        const y0 = cursor
                        cursor += headH + m.rows.length * rowH + (mi < data.metrics.length - 1 ? metricGap : 0)
                        return (
                            <g key={m.label}>
                                <text x={0} y={y0 + 16} fontSize='12' fontWeight='600' className={TEXT}>{m.label}</text>
                                {m.rows.map((r, ri) => {
                                    const cy = y0 + headH + ri * rowH + rowH / 2
                                    const text = `${r.name}, ${m.label}: ${v(r.value)} (95% CI ${fmt(r.low, digits)}–${v(r.high)})`
                                    return (
                                        <g key={r.name} {...handlers(x(r.value), cy - 8, text)}>
                                            <rect x={0} y={cy - rowH / 2} width={width} height={rowH} fill='transparent' />
                                            <text x={0} y={cy} dy='0.32em' fontSize='12' className={MUTED}>{r.name}</text>
                                            <rect x={x(r.low)} y={cy - 4} width={Math.max(8, x(r.high) - x(r.low))} height='8' rx='4' className={`${FILL[r.role]} opacity-50 dark:opacity-70`} />
                                            <circle cx={x(r.value)} cy={cy} r='6' strokeWidth='2' className={`${FILL[r.role]} stroke-white dark:stroke-darkTheme`} />
                                            <text x={x(r.high) + 8} y={cy} dy='0.32em' fontSize='11' className={TEXT}>{v(r.value)}</text>
                                        </g>
                                    )
                                })}
                            </g>
                        )
                    })}
                </svg>
                {node}
            </div>
            <table className='sr-only'>
                <caption>{title}</caption>
                <thead><tr><th scope='col'>{data.metricHeader ?? 'Metric'}</th><th scope='col'>{data.rowHeader ?? 'Recommender'}</th><th scope='col'>Value{unit && ` (${unit})`}</th><th scope='col'>95% interval{unit && ` (${unit})`}</th></tr></thead>
                <tbody>{data.metrics.flatMap((m) => m.rows.map((r) => (
                    <tr key={m.label + r.name}><th scope='row'>{m.label}</th><td>{r.name}</td><td>{fmt(r.value, digits)}</td><td>{fmt(r.low, digits)} to {fmt(r.high, digits)}</td></tr>
                )))}</tbody>
            </table>
        </>
    )
}

const Coverage = ({ data, width, title }) => {
    const { handlers, node } = useTooltip(width)
    const H = 280, left = 40, right = 8, top = 24, bottom = 62
    const plotW = width - left - right, plotH = H - top - bottom
    const ticks = [0, 20, 40, 60, 80, 100]
    const y = (v) => top + plotH - (v / 100) * plotH
    const groupW = plotW / data.bars.length
    const bw = Math.min(24, groupW * 0.4)
    const label = `${title}. Target ${data.target}%. ` + data.bars.map((b) => `${b.from} to ${b.to} INR: ${fmt(b.value, 1)}%`).join('; ')
    return (
        <>
            <Legend items={[{ name: 'Inside the range', role: 'main' }, { name: `${data.target}% target`, dashed: true }]} />
            <div className='relative'>
                <svg viewBox={`0 0 ${width} ${H}`} className='w-full h-auto overflow-visible' role='img' aria-label={label}>
                    {ticks.map((t) => (
                        <g key={t}>
                            <line x1={left} x2={width - right} y1={y(t)} y2={y(t)} className={GRID} strokeWidth='1' />
                            <text x={left - 6} y={y(t)} dy='0.32em' textAnchor='end' fontSize='11' className={MUTED}>{t}%</text>
                        </g>
                    ))}
                    <line x1={left} x2={width - right} y1={y(data.target)} y2={y(data.target)} strokeDasharray='5 4' strokeWidth='1.5' className='stroke-gray-800 dark:stroke-white pointer-events-none' />
                    {data.bars.map((b, i) => {
                        const cx = left + i * groupW + groupW / 2
                        return (
                            <g key={b.from} {...handlers(cx, y(b.value), `${b.from}–${b.to} INR: ${fmt(b.value, 1)}% of ${b.n} test fares`)}>
                                <rect x={cx - groupW / 2} y={top} width={groupW} height={plotH} fill='transparent' />
                                <path d={barPath(cx - bw / 2, y(b.value), bw, y(0))} className={FILL.main} />
                                {/* Labels of bars below the target sit just above the target line, so no label crosses it. */}
                                <text x={cx} y={Math.min(y(b.value), y(data.target)) - 6} textAnchor='middle' fontSize='11' strokeWidth='4' className={`${TEXT} ${HALO}`}>{fmt(b.value, 1)}%</text>
                                <text x={cx} y={H - bottom + 16} textAnchor='middle' fontSize='11' className={TEXT}>
                                    <tspan x={cx}>{b.from}–</tspan>
                                    <tspan x={cx} dy='13'>{b.to}</tspan>
                                </text>
                            </g>
                        )
                    })}
                    <text x={left + plotW / 2} y={H - 6} textAnchor='middle' fontSize='11' className={MUTED}>{data.xTitle}</text>
                </svg>
                {node}
            </div>
            <table className='sr-only'>
                <caption>{title}</caption>
                <thead><tr><th scope='col'>Test price range (INR)</th><th scope='col'>Test fares</th><th scope='col'>Inside the 80% range (%)</th></tr></thead>
                <tbody>{data.bars.map((b) => <tr key={b.from}><th scope='row'>{b.from} to {b.to}</th><td>{b.n}</td><td>{fmt(b.value, 1)}</td></tr>)}</tbody>
            </table>
        </>
    )
}

const CHARTS = { pairedBars: PairedBars, intervals: Intervals, coverage: Coverage }

const ResultChart = ({ chart }) => {
    const ref = useRef(null)
    const width = useWidth(ref)
    const Chart = CHARTS[chart.type]
    return (
        <figure className='border border-gray-400 rounded-xl p-4 sm:p-6 dark:border-white/50'>
            <h3 className='font-semibold leading-snug mb-3'>{chart.title}</h3>
            <div ref={ref}>
                <Chart data={chart.data} width={width} title={chart.title} />
            </div>
            <figcaption className='mt-4 text-xs leading-relaxed text-gray-600 dark:text-white/70'>
                {chart.caption}{' '}
                Source: <a href={chart.sourceUrl} target='_blank' rel='noopener noreferrer' className='underline underline-offset-2 hover:text-black dark:hover:text-white'>{chart.sourceLabel}</a>
            </figcaption>
        </figure>
    )
}

export default ResultChart
