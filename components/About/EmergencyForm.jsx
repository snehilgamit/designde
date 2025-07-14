import React from 'react'
import countries from '../../content/countries'

const EmergencyForm = () => {
  return (
    <section className="px-base md:px-md py-2xl first-of-type:pt-md last-of-type:pb-md" id="declaration">
            <div className="container">
              <div className="fade-in" style={{ transform: 'translateY(100px) translateZ(0)' }}>
                <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
                  <div className="col-span-12 lg:col-span-4">
                    <div className="md:sticky md:top-8">
                      <h2 className="font-h3 font-semibold">Declare Emergency Now</h2>
                    </div>
                  </div>
                  <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&amp;_li]:mb-1 [&amp;_ol]:list-decimal [&amp;_ol]:pl-4 [&amp;_p]:my-6 [&amp;_ul]:list-disc [&amp;_ul]:pl-4">
                      <p className="font-p-lg">Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.</p>
                    </div>
                    <form className="flex flex-col gap-y-8 border p-4 md:p-10 border-brand-gray-400" action="javascript:throw new Error(&#x27;React form unexpectedly submitted.&#x27;)">
                      <h2 className="font-h1">I am Declaring Emergency</h2>
                      <div aria-label="What type of entity are you declaring as?" role="radiogroup" aria-required="true" aria-orientation="horizontal" id="react-aria-:R2l79udjsq:" aria-labelledby="react-aria-:R2l79udjsq: react-aria-:R2l79udjsqH1:" aria-describedby="react-aria-:R2l79udjsqH3: react-aria-:R2l79udjsqH4:" className="flex flex-row flex-wrap gap-4" data-rac="" data-orientation="horizontal" data-required="true">
                        <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;[data-selected]_.box]:!border-brand-white [&amp;_.box]:border-brand-gray-400" data-rac="" data-required="true">
                          <span style={{
                            border: 0,
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: '1px',
                            margin: '-1px',
                            overflow: 'hidden',
                            padding: 0,
                            position: 'absolute',
                            width: '1px',
                            whiteSpace: 'nowrap'
                          }}
                          >
                            <input tabIndex="0" type="radio" required="" aria-describedby="react-aria-:R2l79udjsqH3:" name="entity" value="Business" />
                          </span>
                          <span className="box focus-border flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                              <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                          </span>
                          <span className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0" id="react-aria-:R2l79udjsqH1:">As a business</span>
                        </label>
                        <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;[data-selected]_.box]:!border-brand-white [&amp;_.box]:border-brand-gray-400" data-rac="" data-required="true">
                          <span style={{
                            border: 0,
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: '1px',
                            margin: '-1px',
                            overflow: 'hidden',
                            padding: 0,
                            position: 'absolute',
                            width: '1px',
                            whiteSpace: 'nowrap'
                          }}>
                            <input tabIndex="0" type="radio" required="" aria-describedby="react-aria-:R2l79udjsqH3:" name="entity" value="Individual" />
                          </span>
                          <span className="box focus-border flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                              <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                          </span>
                          <span className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0" id="react-aria-:R2l79udjsqH1:">As an individual</span>
                        </label>
                        <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;[data-selected]_.box]:!border-brand-white [&amp;_.box]:border-brand-gray-400" data-rac="" data-required="true">
                          <span style={{
                            border: 0,
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: '1px',
                            margin: '-1px',
                            overflow: 'hidden',
                            padding: 0,
                            position: 'absolute',
                            width: '1px',
                            whiteSpace: 'nowrap'
                          }}>
                            <input tabIndex="0" type="radio" required="" aria-describedby="react-aria-:R2l79udjsqH3:" name="entity" value="Institution" />
                          </span>
                          <span className="box focus-border flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                              <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                          </span>
                          <span className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0" id="react-aria-:R2l79udjsqH1:">As a public institution</span>
                        </label>
                        <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;[data-selected]_.box]:!border-brand-white [&amp;_.box]:border-brand-gray-400" data-rac="" data-required="true">
                          <span style={{
                            border: 0,
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: '1px',
                            margin: '-1px',
                            overflow: 'hidden',
                            padding: 0,
                            position: 'absolute',
                            width: '1px',
                            whiteSpace: 'nowrap'
                          }}>
                            <input tabIndex="0" type="radio" required="" aria-describedby="react-aria-:R2l79udjsqH3:" name="entity" value="Team" />
                          </span>
                          <span className="box focus-border flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                              <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                          </span>
                          <span className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0" id="react-aria-:R2l79udjsqH1:">As a team or department</span>
                        </label>
                      </div>
                      <div>
                        <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                          <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white" id="react-aria-:R1bl79udjsqH1:" htmlFor="react-aria-:R1bl79udjsq:">Website

                            :*</label>
                          <input className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-gray-400" type="url" required="" id="react-aria-:R1bl79udjsq:" aria-labelledby="react-aria-:R1bl79udjsqH1:" data-rac="" name="website" />
                        </div>
                        <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                          <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white" id="react-aria-:R1jl79udjsqH1:" htmlFor="react-aria-:R1jl79udjsq:">Country

                            :*</label>
                          <template data-react-aria-hidden="true"></template>
                          <div className="w-full bg-transparent" data-rac="" data-required="true">
                            <button id="react-aria-:R1jl79udjsq:" type="button" aria-labelledby="react-aria-:Rljl79udjsqH7: react-aria-:Rljl79udjsqH3: react-aria-:R1jl79udjsqH1:" aria-describedby="react-aria-:Rljl79udjsqH5: react-aria-:Rljl79udjsqH6:" aria-haspopup="listbox" aria-expanded="false" className="no-focus flex w-full items-center justify-between text-left md:py-3.5" data-rac="">
                              <span id="react-aria-:Rljl79udjsqH7:" className="react-aria-SelectValue" data-rac="">United Kingdom</span>
                              <span aria-hidden="true">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" className="size-6">
                                  <path strokeLinecap="square" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div style={{
                            border: 0,
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: '1px',
                            margin: '-1px',
                            overflow: 'hidden',
                            padding: 0,
                            position: 'absolute',
                            width: '1px',
                            whiteSpace: 'nowrap'
                          }} aria-hidden="true" data-react-aria-prevent-focus="true" data-a11y-ignore="aria-hidden-focus" data-testid="hidden-select-container">
                            <input type="text" tabIndex="-1" style={{ fontSize: "16px" }} />
                            <label>
                              <select tabIndex="-1" required="" name="country">
                                <option></option>
                                {countries.map((element)=>(
                                    <option key={element} value={element}>{element}</option>
                                ))}
                              </select>
                            </label>
                          </div>
                        </div>
                        <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                          <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white" id="react-aria-:R1rl79udjsqH1:" htmlFor="react-aria-:R1rl79udjsq:">Discipline

                            :*</label>
                          <template data-react-aria-hidden="true"></template>
                          <div className="w-full bg-transparent" data-rac="" data-required="true">
                            <button id="react-aria-:R1rl79udjsq:" type="button" aria-labelledby="react-aria-:Rlrl79udjsqH7: react-aria-:Rlrl79udjsqH3: react-aria-:R1rl79udjsqH1:" aria-describedby="react-aria-:Rlrl79udjsqH5: react-aria-:Rlrl79udjsqH6:" aria-haspopup="listbox" aria-expanded="false" className="no-focus flex w-full items-center justify-between text-left md:py-3.5" data-rac="">
                              <span id="react-aria-:Rlrl79udjsqH7:" className="react-aria-SelectValue" data-rac="" data-placeholder="true"></span>
                              <span aria-hidden="true">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" className="size-6">
                                  <path strokeLinecap="square" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div style={{
                            border: 0,
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: '1px',
                            margin: '-1px',
                            overflow: 'hidden',
                            padding: 0,
                            position: 'absolute',
                            width: '1px',
                            whiteSpace: 'nowrap'
                          }} aria-hidden="true" data-react-aria-prevent-focus="true" data-a11y-ignore="aria-hidden-focus" data-testid="hidden-select-container">
                            <input type="text" tabIndex="-1" style={{ fontSize: "16px" }} />
                            <label>
                              <select tabIndex="-1" required="" name="discipline">
                                <option selected=""></option>
                                <option value="Communication Design">Communication Design</option>
                                <option value="Digital Design">Digital Design</option>
                                <option value="Service Design">Service Design</option>
                                <option value="Product Design">Product Design</option>
                              </select>
                            </label>
                          </div>
                        </div>
                        <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                          <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white" id="react-aria-:R23l79udjsqH1:" htmlFor="react-aria-:R23l79udjsq:">Email

                            :*</label>
                          <input className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-gray-400" type="email" autoComplete="email" required="" id="react-aria-:R23l79udjsq:" aria-labelledby="react-aria-:R23l79udjsqH1:" data-rac="" name="email" />
                        </div>
                        <div className="focus-border relative -mt-px flex flex-col gap-x-2 border md:flex-row md:py-0 border-brand-gray-400 text-brand-white p-0">
                          <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white sr-only" id="react-aria-:R2bl79udjsqH1:" htmlFor="react-aria-:R2bl79udjsq:">Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares.</label>
                          <textarea className="focus-ring w-full bg-transparent placeholder:text-brand-gray-400 px-4 py-3.5" rows="8" name="message" placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares." required="" id="react-aria-:R2bl79udjsq:" aria-labelledby="react-aria-:R2bl79udjsqH1:" data-rac=""></textarea>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div aria-label="Which of the following options do you consent to?" role="group" id="react-aria-:Rcl79udjsq:" aria-labelledby="react-aria-:Rcl79udjsq: react-aria-:Rcl79udjsqH1:" aria-describedby="react-aria-:Rcl79udjsqH3: react-aria-:Rcl79udjsqH4:" className="flex flex-row flex-wrap gap-4 font-p-sm" data-rac="" data-required="true">
                          <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;[data-selected]_.box]:!border-brand-white [&amp;_.box]:border-brand-gray-400" data-rac="">
                            <span style={{
                              border: 0,
                              clip: 'rect(0 0 0 0)',
                              clipPath: 'inset(50%)',
                              height: '1px',
                              margin: '-1px',
                              overflow: 'hidden',
                              padding: 0,
                              position: 'absolute',
                              width: '1px',
                              whiteSpace: 'nowrap'
                            }}>
                              <input type="checkbox" required="" aria-describedby="react-aria-:Rcl79udjsqH3:" name="dataConsent" value="true" />
                            </span>
                            <span className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                                <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                              </svg>
                            </span>
                            <span className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0" id="react-aria-:Rcl79udjsqH1:">I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.</span>
                          </label>
                        </div>
                        <div aria-label="Which of the following do options you consent to?" role="group" id="react-aria-:Rkl79udjsq:" aria-labelledby="react-aria-:Rkl79udjsq: react-aria-:Rkl79udjsqH1:" aria-describedby="react-aria-:Rkl79udjsqH3: react-aria-:Rkl79udjsqH4:" className="flex flex-row flex-wrap gap-4 font-p-sm" data-rac="">
                          <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;[data-selected]_.box]:!border-brand-white [&amp;_.box]:border-brand-gray-400" data-rac="">
                            <span style={{
                              border: 0,
                              clip: 'rect(0 0 0 0)',
                              clipPath: 'inset(50%)',
                              height: '1px',
                              margin: '-1px',
                              overflow: 'hidden',
                              padding: 0,
                              position: 'absolute',
                              width: '1px',
                              whiteSpace: 'nowrap'
                            }}>
                              <input type="checkbox" aria-describedby="react-aria-:Rkl79udjsqH3:" name="newsletterConsent" value="true" />
                            </span>
                            <span className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                                <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                              </svg>
                            </span>
                            <span className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0" id="react-aria-:Rkl79udjsqH1:">I would like to be added to the Design Declares! newsletter and receive further updates.</span>
                          </label>
                        </div>
                      </div>
                      <a className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block" data-rac="" href="/privacy-policy" target="_self">View our Privacy Policy</a>
                      <div className="flex items-center gap-x-4">
                        <button type="submit" className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red" data-rac="">Declare Emergency Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default EmergencyForm