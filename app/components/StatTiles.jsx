import React from 'react'

// The label comes first in the DOM (read first by screen readers); the value is shown on top.
const StatTiles = ({ stats, className = '' }) => {
    return (
        <dl className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className}`}>
            {stats.map(({ value, label }) => (
                <div key={label} className='flex flex-col-reverse justify-end border border-gray-400 rounded-xl px-3 sm:px-4 py-3 dark:border-white/50'>
                    <dt className='mt-1 text-xs sm:text-sm leading-snug text-gray-600 dark:text-white/70'>{label}</dt>
                    <dd className='text-lg lg:text-2xl xl:text-3xl font-semibold leading-tight whitespace-nowrap'>{value}</dd>
                </div>
            ))}
        </dl>
    )
}

export default StatTiles
