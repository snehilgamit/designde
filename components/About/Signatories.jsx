import React, { useEffect } from 'react'
import signatories from '../../content/signatories'
import supporters from '../../content/supporters';
const Signatories = () => {
  return (
    <section className="px-base md:px-md py-2xl first-of-type:pt-md last-of-type:pb-md">
      <div className="container">
        <div className="fade-in" style={{
          transform: 'translateY(100px) translateZ(0)'
        }}
        >
          <div className="">
            <div className="space-y-12">
              <div>
                <span className="block max-w-fit text-6xl">#
                  0</span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-h3">Signatories and counting in </span>
                  <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-red text-brand-black">D!
                    UK</span>
                </span>
              </div>
              <div className="columns-3 sm:columns-4 lg:columns-6 container:columns-9">
                {signatories.map((value, index) => (
                  <a key={index} className="focus-ring group relative w-fit transition-colors block max-w-fit font-helvetica text-xs font-medium text-brand-gray-400 [&amp;:is(a)]:hocus:text-brand-white [&amp;:is(a)]:hocus:underline" data-rac="" aria-label={value.ariaLabel} href={value.href} target="_blank">{value.innerHTML}</a>
                ))}
              </div>
              <Supporters />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Signatories



const Supporters = () => {
  return (
    <>
      <div>
        <span className="block max-w-fit text-6xl">#
          0</span>
        <h2 className="font-h3">Global Supporters</h2>
      </div>
      <div className="columns-3 sm:columns-4 lg:columns-6 container:columns-9">
        {Object.keys(supporters).map((value, index) => (
          <div className="mb-3" key={index}>
            <h3 className="text-xs font-bold">{value}</h3>
            {supporters[value].map((e, i) => (
              <a key={i} className="focus-ring group relative w-fit transition-colors block max-w-fit font-helvetica text-xs font-medium text-brand-gray-400 [&amp;:is(a)]:hocus:text-brand-white [&amp;:is(a)]:hocus:underline" data-rac="" aria-label={e.ariaLabel} href={e.href} target="_blank">{e.innerHTML}</a>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}