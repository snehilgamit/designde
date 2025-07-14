import React from 'react'

const Latest = () => {
  return (
              <section className="px-base md:px-md py-2xl first-of-type:pt-md last-of-type:pb-md">
            <div className="container">
              <div className="fade-in" style={{
                transform: 'translateY(100px) translateZ(0)'
              }}
              >
                <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
                  <div className="col-span-12 lg:col-span-4">
                    <div className="md:sticky md:top-8">
                      <h2 className="font-h3 font-semibold">Latest</h2>
                    </div>
                  </div>
                  <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                    <div className="space-y-12 fade-in" style={{
                      transform: 'translateY(100px) translateZ(0)'
                    }}
                    >
                      <div className="space-y-16">
                        <div className="fade-in" style={{
                          transform: 'translateY(100px) translateZ(0)'
                        }}
                        >
                          <article className="grid grid-cols-12 gap-x-8 space-y-4 @container" lang="en-GB">
                            <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
                              <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">Events</span>
                              <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">D!

                                UK</span>
                            </div>
                            <div className="col-span-12 @2xl:col-span-6">
                              <h2 className="transition-colors group-hocus:text-brand-red">SD4P Collective: How can Service Design drive meaningful sustainability impact</h2>
                            </div>
                            <div className="col-span-12 space-y-4 @2xl:col-span-6">
                              <p className="text-brand-gray-400">Recap: SD4P Collective working session – 28th March 2025</p>
                              <a className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block" data-rac="" href="https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact">Read story</a>
                            </div>
                          </article>
                        </div>
                        <div className="fade-in" style={{
                          transform: 'translateY(100px) translateZ(0)'
                        }}
                        >
                          <article className="grid grid-cols-12 gap-x-8 space-y-4 @container" lang="en-GB">
                            <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
                              <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">Events</span>
                              <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">D!

                                UK</span>
                            </div>
                            <div className="col-span-12 @2xl:col-span-6">
                              <h2 className="transition-colors group-hocus:text-brand-red">Designing Tomorrow: Speculative Thinking Shapes Our Present</h2>
                            </div>
                            <div className="col-span-12 space-y-4 @2xl:col-span-6">
                              <p className="text-brand-gray-400">Design Declares &#x27;November Event Challenges Perspectives on Sustainability and Innovation</p>
                              <a className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block" data-rac="" href="https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present">Read story</a>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="fade-in" style={{
                        transform: 'translateY(100px) translateZ(0)'
                      }}
                      >
                        <a className="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red" data-rac="" href="/latest">See all the latest</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Latest