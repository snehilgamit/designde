const Header = () => {
    return (
        <header className="px-base md:px-md text-brand-white py-0">
            <div className="container">

                <div className="font-h3 fixed bottom-4 right-4 z-20 border border-brand-black bg-brand-white text-brand-black max-sm:left-4 md:bottom-6 md:right-6 fade-in">
                    <div className="max-sm:!w-auto" style={{ width: '13rem' }}>
                        <div className="flex h-full flex-col">
                            <button type="button" aria-label="Open Menu" className="focus-ring flex h-12 w-full items-center gap-x-3 border-brand-black px-3 transition-colors justify-between border-b pr-0 hover:bg-brand-red" data-rac="">
                                <span>Menu</span>
                                <span className="flex aspect-square h-full items-center justify-center border-l border-l-brand-black">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" className="size-8 transition-transform" style={{ transform: 'rotate(0deg)' }}
                                    >
                                        <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="-mb-px box-border overflow-hidden"></div>
                            <a className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-brand-black px-3 transition-colors border-t hover:bg-brand-red" data-rac="" href="/#declaration" target="_self">Declare Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header