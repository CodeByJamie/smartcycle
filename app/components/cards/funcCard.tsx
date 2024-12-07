import * as HeroIcons from '@heroicons/react/24/outline';
import React from 'react';

export default function funcCard({ icon, stepNum, stepDesc, desc }: {icon: string, stepNum: number, stepDesc: string, desc: string}) {
    return (
        <>
            <div className="p-6 flex flex-col items-center">
            {
                React.createElement(HeroIcons[icon as keyof typeof HeroIcons], { className: "size-5" })
            }

              <span className="text-lg font-semibold mt-4">Step {stepNum}: {stepDesc}</span>
              <span className="mt-2 text-gray-600">{desc}</span>
            </div>
        </>
    )
}