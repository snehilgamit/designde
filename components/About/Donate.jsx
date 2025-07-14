import React from 'react'

const Donate = () => {
  return (
    <section className="px-base md:px-md py-2xl first-of-type:pt-md last-of-type:pb-md">
            <div className="container">
              <div className="fade-in" style={{ transform: 'translateY(100px) translateZ(0)' }}>
                <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
                  <div className="col-span-12 lg:col-span-4">
                    <div className="md:sticky md:top-8">
                      <h2 className="font-h3 font-semibold">Donate to D!</h2>
                    </div>
                  </div>
                  <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&amp;_li]:mb-1 [&amp;_ol]:list-decimal [&amp;_ol]:pl-4 [&amp;_p]:my-6 [&amp;_ul]:list-disc [&amp;_ul]:pl-4">
                      <p className="font-p-lg">Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <a className="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red" data-rac="" href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk" target="_blank">Donate £10</a>
                        <a className="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red" data-rac="" href="https://wise.com/pay/r/u2IiQNt2ebixruk" target="_blank">Donate £20</a>
                        <a className="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red" data-rac="" href="https://wise.com/pay/r/2vqUbqPfU9hvVLE" target="_blank">Donate £50</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Donate