export default function Index() {
	return (
		<div className='overflow-x-hidden bg-gray-900'>
			<header className='py-4 md:py-6' x-data='{expanded: false}'>
				<div className='container flex px-4 mx-auto sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between'>
						<div className='flex-shrink-0'>
							<a
								href='#'
								title=''
								className='flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'>
								<img
									className='w-auto h-8'
									src='https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg'
									alt=''
								/>
							</a>
						</div>

						<div className='flex lg:hidden'>
							<button type='button' className='text-gray-900'>
								<span aria-hidden='true'>
									<svg
										className='w-7 h-7'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								</span>
								<span aria-hidden='true'>
									<svg
										className='w-7 h-7'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>

					<div className='hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16'>
						<a
							href='#'
							title=''
							className='text-base font-medium text-gray-50 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'>
							{' '}
							Features{' '}
						</a>

						<a
							href='#'
							title=''
							className='text-base font-medium text-gray-50 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'>
							{' '}
							Pricing{' '}
						</a>

						<a
							href='#'
							title=''
							className='text-base font-medium text-gray-50 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'>
							{' '}
							Automation{' '}
						</a>
					</div>
				</div>

				<nav className='hidden'>
					<div className='px-1 py-8'>
						<div className='grid gap-y-7'>
							<a
								href='#'
								title=''
								className='flex items-center p-3 -m-3 text-base font-medium text-gray-50 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-50 focus:ring-offset-2'>
								{' '}
								Features{' '}
							</a>

							<a
								href='#'
								title=''
								className='flex items-center p-3 -m-3 text-base font-medium text-gray-50 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'>
								{' '}
								Pricing{' '}
							</a>

							<a
								href='#'
								title=''
								className='flex items-center p-3 -m-3 text-base font-medium text-gray-50 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'>
								{' '}
								Automation{' '}
							</a>
						</div>
					</div>
				</nav>
			</header>

			<section className='pt-12 bg-gray-900 sm:pt-16'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='max-w-2xl mx-auto text-center'>
						<h1 className='px-6 text-lg text-gray-200 font-inter'>
							Smart email campaign builder, made for Developers
						</h1>
						<p className='mt-5 text-4xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj'>
							Turn your visitors into profitable
							<span className='relative inline-flex sm:inline'>
								<span className='bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0'></span>
								<span className='relative'> business </span>
							</span>
						</p>

						<div className='px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9'>
							<a
								href='#'
								title=''
								className='inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 transition-all duration-200 bg-white border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
								role='button'>
								Get more customers
							</a>

							<a
								href='#'
								title=''
								className='inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-50 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900'
								role='button'>
								<svg
									className='w-5 h-5 mr-2'
									viewBox='0 0 18 18'
									fill='none'
									stroke='currentColor'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z'
										stroke-width='2'
										stroke-miterlimit='10'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Watch free demo
							</a>
						</div>

						<p className='mt-8 text-base text-gray-500 font-inter'>
							60 Days free trial · No credit card required
						</p>
					</div>
				</div>
			</section>

			<section className='pb-12 bg-gray-900 sm:pb-16 lg:pb-20'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid grid-cols-3 gap-4 max-w-md mx-auto mt-8 lg:mt-20 lg:max-w-none'>
						<div className='relative flex-1 w-full '>
							<div className='absolute -inset-4'>
								<div
									className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}></div>
							</div>

							<div className='relative overflow-hidden bg-white border border-gray-200 rounded-2xl'>
								<div className='py-8 px-9'>
									<div className='inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj'>
										1
									</div>
									<p className='mt-5 text-xl font-medium text-gray-900 font-pj'>
										Sign up for creating your first online
										store with ease.
									</p>
								</div>
							</div>
						</div>

						<div className='relative flex-1 w-full'>
							<div className='absolute -inset-4'>
								<div
									className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}></div>
							</div>

							<div className='relative overflow-hidden bg-white border border-gray-200 rounded-2xl'>
								<div className='py-8 px-9'>
									<div className='inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj'>
										2
									</div>
									<p className='mt-5 text-xl font-medium text-gray-900 font-pj'>
										Add your products to your store and
										customize.
									</p>
								</div>
							</div>
						</div>

						<div className='relative flex-1 w-full '>
							<div className='absolute -inset-4'>
								<div
									className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}></div>
							</div>

							<div className='relative overflow-hidden bg-white border border-gray-200 rounded-2xl'>
								<div className='py-8 px-9'>
									<div className='inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj'>
										3
									</div>
									<p className='mt-5 text-xl font-medium text-gray-900 font-pj'>
										Sell and earn as much as you can. Grow
										fast.
									</p>
								</div>
							</div>
						</div>

						<div className='relative flex-1 w-full '>
							<div className='absolute -inset-4'>
								<div
									className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}></div>
							</div>

							<div className='relative overflow-hidden bg-white border border-gray-200 rounded-2xl'>
								<div className='py-8 px-9'>
									<div className='inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj'>
										1
									</div>
									<p className='mt-5 text-xl font-medium text-gray-900 font-pj'>
										Sign up for creating your first online
										store with ease.
									</p>
								</div>
							</div>
						</div>

						<div className='relative flex-1 w-full'>
							<div className='absolute -inset-4'>
								<div
									className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}></div>
							</div>

							<div className='relative overflow-hidden bg-white border border-gray-200 rounded-2xl'>
								<div className='py-8 px-9'>
									<div className='inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj'>
										2
									</div>
									<p className='mt-5 text-xl font-medium text-gray-900 font-pj'>
										Add your products to your store and
										customize.
									</p>
								</div>
							</div>
						</div>

						<div className='relative flex-1 w-full '>
							<div className='absolute -inset-4'>
								<div
									className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}></div>
							</div>

							<div className='relative overflow-hidden bg-white border border-gray-200 rounded-2xl'>
								<div className='py-8 px-9'>
									<div className='inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj'>
										3
									</div>
									<p className='mt-5 text-xl font-medium text-gray-900 font-pj'>
										Sell and earn as much as you can. Grow
										fast.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
