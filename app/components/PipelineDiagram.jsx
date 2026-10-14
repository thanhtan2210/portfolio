import React from 'react'

const Arrow = () => (
    <svg viewBox='0 0 24 24' className='w-5 h-5 rotate-90 md:rotate-0 text-gray-500 dark:text-white/60'>
        <path d='M4 12h14m-5-5 5 5-5 5' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
)

// Steps side by side with arrows from md up; stacked with downward arrows on mobile.
// Arrows are separate, hidden list items so every step box gets the same width.
const PipelineDiagram = ({ steps }) => {
    return (
        <ol aria-label='Pipeline' className='flex flex-col md:flex-row md:items-stretch gap-2'>
            {steps.flatMap((step, index) => [
                index > 0 && (
                    <li key={`arrow-${index}`} aria-hidden='true' className='flex items-center justify-center shrink-0'>
                        <Arrow />
                    </li>
                ),
                <li key={step.title} className='md:flex-1 min-w-0 border border-gray-400 rounded-xl px-4 py-3 dark:border-white/50'>
                    <p className='font-semibold text-sm leading-snug [overflow-wrap:anywhere]'>{step.title}</p>
                    <p className='mt-1 text-xs leading-snug text-gray-600 dark:text-white/70'>{step.note}</p>
                </li>,
            ].filter(Boolean))}
        </ol>
    )
}

export default PipelineDiagram
