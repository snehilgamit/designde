import React from 'react'

const Footer = () => {
    return (
        <footer className="px-base md:px-md bottom-0 border-t-[length:--rounded-main] border-brand-red bg-brand-red py-lg text-brand-black [--focus-color:theme(colors.brand.white)] md:sticky">
            <div className="container">
                <div className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16">
                    <div className="col-span-12 row-span-2 md:col-span-4">
                        <span className="font-display block w-min text-[5rem] text-current">Design Declares</span>
                    </div>
                    <div className="col-span-12 md:col-span-4">

                        <nav className="grid grid-cols-2 flex-col items-start gap-x-8 gap-y-2" aria-label="Menu">
                            <div className="col-span-1 sm:col-span-2">
                                <a className="focus-ring group relative w-fit transition-colors hocus:underline" data-rac="" href="/contact" target="_self">Contact</a>
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <a className="focus-ring group relative w-fit transition-colors hocus:underline" data-rac="" href="https://www.instagram.com/design_declares/" target="_blank">Instagram</a>
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <a className="focus-ring group relative w-fit transition-colors hocus:underline" data-rac="" href="https://www.linkedin.com/groups/12699995/" target="_blank">LinkedIn</a>
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <a className="focus-ring group relative w-fit transition-colors hocus:underline" data-rac="" href="/privacy-policy" target="_self">Privacy Policy</a>
                            </div>
                        </nav>

                    </div>
                    <div className="col-span-12 space-y-4 md:col-span-4">
                        <p className="font-bold">Sign up to the D! Newsletter</p>
                        <form className="flex flex-col gap-y-4 text-brand-black [--focus-color:theme(colors.brand.white)]" action="javascript:throw new Error(&#x27;React form unexpectedly submitted.&#x27;)">
                            <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-black">
                                <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5" id="react-aria-:R6dhjsqH1:" htmlFor="react-aria-:R6dhjsq:">Email

                                    :*</label>
                                <input className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-black" type="email" autoComplete="email" required="" id="react-aria-:R6dhjsq:" aria-labelledby="react-aria-:R6dhjsqH1:" data-rac="" name="email" />
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="space-y-4">
                                    <div aria-label="Which of the following do options you consent to?" role="group" id="react-aria-:R2qdhjsq:" aria-labelledby="react-aria-:R2qdhjsq: react-aria-:R2qdhjsqH1:" aria-describedby="react-aria-:R2qdhjsqH3: react-aria-:R2qdhjsqH4:" className="flex flex-row flex-wrap gap-4 font-p-sm" data-rac="" data-required="true">
                                        <label className="group/focus group flex items-center gap-x-2 transition-colors [&amp;_.box]:border-brand-black" data-rac="">
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
                                                <input type="checkbox" required="" aria-describedby="react-aria-:R2qdhjsqH3:" name="newsletterConsent" value="true" />
                                            </span>
                                            <span className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                                                <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                                                    <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                                                </svg>
                                            </span>
                                            <span className="max-w-full transition-colors md:py-3.5 whitespace-normal !py-0" id="react-aria-:R2qdhjsqH1:">I would like to be added to the Design Declares! newsletter and receive further updates.</span>
                                        </label>
                                    </div>
                                    <a className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block" data-rac="" href="/privacy-policy" target="_self">View our Privacy Policy</a>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <button type="submit" className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-black hocus:text-brand-white" data-rac="">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-12 space-y-4 md:col-span-8">
                        <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&amp;_li]:mb-1 [&amp;_ol]:list-decimal [&amp;_ol]:pl-4 [&amp;_p]:my-6 [&amp;_ul]:list-disc [&amp;_ul]:pl-4">
                            <p className="font-p-sm">
                                This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand. <a className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color]" data-rac="" href="https://digitalbeacon.co/report/designdeclares-com" target="_blank">Learn more about our carbon footprint</a>
                                .
                            </p>
                            <p className="font-p-sm">
                                Empowered by <a className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color]" data-rac="" href="https://driftime.media" target="_blank">Driftime®</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer