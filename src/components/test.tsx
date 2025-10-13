{/* Journey Roadmap Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #00a19a 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #00c9bf 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-8">
                OUR JOURNEY
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-4xl">
                From concept to reality, discover the milestones that shaped
                OpenProperty into the revolutionary platform it is today.
              </p>
            </motion.div>

            {/* Horizontal Curved Road */}
            <div className="relative h-[600px] w-full">
              {/* SVG Road */}
              <svg
                width="100%"
                height="600"
                viewBox="0 0 1200 600"
                className="absolute inset-0"
              >
                {/* Road Base (Asphalt) */}
                <motion.path
                  d="M 50 300 Q 300 150 600 300 Q 900 450 1150 300"
                  stroke="#2d3748"
                  strokeWidth="40"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
                />

                {/* Road Center Line (Dashed Yellow) */}
                <motion.path
                  d="M 50 300 Q 300 150 600 300 Q 900 450 1150 300"
                  stroke="#fbbf24"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="20,15"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
                />

                {/* Road Edges (White Lines) */}
                <motion.path
                  d="M 50 280 Q 300 130 600 280 Q 900 430 1150 280"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.8, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 50 320 Q 300 170 600 320 Q 900 470 1150 320"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.8, ease: 'easeInOut' }}
                />
              </svg>

              {/* Milestone 1 - Genesis of UMU (Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute top-[286px] left-[70px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">💡</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Top Left */}
                <div className="absolute -top-32 -left-8 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Genesis of UMU
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Maxine landed on the idea of UMU way back in 2019 and has
                    been developing and innovating since.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 2 - Thought + Discussion Process (Center-Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute top-[220px] left-[320px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📋</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Bottom Left */}
                <div className="absolute top-24 -left-16 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Thought + Discussion Process
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Over the following decade Maxine continued to run her own
                    estate agency whilst developing UMU alongside it, working
                    with Coventry University to build the framework.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 3 - Beta Testing (Center-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="absolute top-[286px] left-[755px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Top Right */}
                <div className="absolute -top-32 -right-16 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Beta Testing
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Soon enough, the app will be launching our product very soon
                    for beta testing.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 4 - Prototype Built (Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="absolute top-[326px] right-[80px]"
              >
                {/* Marker Pin */}
                <div className="w-16 h-20 bg-gradient-to-b from-[#00a19a] to-[#00c9bf] rounded-t-full relative shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#00a19a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📱</span>
                    </div>
                  </div>
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-[#00c9bf]"></div>
                </div>

                {/* Info Card - Bottom Right */}
                <div className="absolute top-24 -right-16 w-80 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Prototype Built
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our prototype was completed in mid 2024 and we are now
                    hoping to raise investment.
                  </p>
                </div>
              </motion.div>

              {/* Animated Car */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
                className="absolute top-[270px] right-[40px]"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-4xl"
                >
                  🚗
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section
        ref={journeyRef}
        className="relative py-24 bg-white overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-20">
            <h2 className="text-5xl font-normal text-black mb-6">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              From concept to reality, discover the milestones that shaped
              OpenProperty into the revolutionary platform it is today.
            </p>
          </div>

          <div className="relative h-[600px]">
      
            <svg
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 500"
              preserveAspectRatio="xMidYMid meet"
            >
             
              <path
                d="M 80 200
       L 200 200
       Q 300 200 300 150
       L 300 150
       Q 300 100 400 100
       L 600 100
       Q 700 100 700 180
       L 700 180
       Q 700 250 850 250
       L 1100 250
       Q 1150 250 1150 300
       L 1150 350"
                stroke="#d1d5db"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />

          
              <path
                d="M 80 200
       L 200 200
       Q 300 200 300 150
       L 300 150
       Q 300 100 400 100
       L 600 100
       Q 700 100 700 180
       L 700 180
       Q 700 250 850 250
       L 1100 250
       Q 1150 250 1150 300
       L 1150 350"
                stroke="#ffffff"
                strokeWidth="3"
                fill="none"
                strokeDasharray="6,8"
                strokeLinecap="round"
              />

              {/* Creative Markers with Better Spacing */}
              {/* Genesis Marker */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="80"
                  cy="250"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="80" cy="250" r="6" fill="#ffffff" />
                <rect
                  x="50"
                  y="210"
                  width="60"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="80"
                  y="225"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2023
                </text>
              </g>

              {/* Thought + Discussion Marker */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="400"
                  cy="150"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="400" cy="150" r="6" fill="#ffffff" />
                <rect
                  x="340"
                  y="110"
                  width="120"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="400"
                  y="125"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2023-2024
                </text>
              </g>

              {/* Beta Testing Marker */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="800"
                  cy="180"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="800" cy="180" r="6" fill="#ffffff" />
                <rect
                  x="770"
                  y="140"
                  width="60"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="800"
                  y="155"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2024
                </text>
              </g>

              {/* Prototype Built Marker with Car */}
              <g className="cursor-pointer hover:scale-110 transition-transform duration-200">
                <circle
                  cx="1150"
                  cy="340"
                  r="12"
                  fill="#00A19A"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <circle cx="1150" cy="340" r="6" fill="#ffffff" />
                <rect
                  x="1110"
                  y="300"
                  width="80"
                  height="24"
                  rx="12"
                  fill="#00A19A"
                />
                <text
                  x="1150"
                  y="315"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  2025
                </text>

                {/* Car at the last marker */}
                <g
                  transform="translate(1135, 360)"
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  {/* Car Body */}
                  <rect
                    x="0"
                    y="0"
                    width="35"
                    height="14"
                    rx="4"
                    fill="#3b82f6"
                  />
                  {/* Car Top */}
                  <rect
                    x="6"
                    y="-10"
                    width="23"
                    height="10"
                    rx="3"
                    fill="#3b82f6"
                  />
                  {/* Windows */}
                  <rect
                    x="8"
                    y="-7"
                    width="7"
                    height="5"
                    rx="1"
                    fill="#bfdbfe"
                  />
                  <rect
                    x="19"
                    y="-7"
                    width="7"
                    height="5"
                    rx="1"
                    fill="#bfdbfe"
                  />
                  {/* Wheels */}
                  <circle cx="9" cy="14" r="4" fill="#1f2937" />
                  <circle cx="26" cy="14" r="4" fill="#1f2937" />
                  {/* Headlight */}
                  <circle cx="33" cy="7" r="2" fill="#fbbf24" />
                </g>
              </g>
            </svg>

            {/* Journey Milestones - Compact Headings Only */}

            {/* Genesis of UNU */}
            <div className="group absolute left-20 top-[12rem] max-w-[250px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[160px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Genesis of OP
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    Founded on the idea that property intelligence should be
                    accessible, transparent, and powerful. Our journey began in
                    2023 with a vision to revolutionize how property decisions
                    are made.
                  </p>
                </div>
              </div>
            </div>

            {/* Thought + Discussion Process */}
            <div className="group absolute left-[440px] top-[12rem] max-w-[300px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[180px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Research + Development
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    Over the following months, we conducted extensive market
                    research, interviewed hundreds of property professionals,
                    and developed our core technology framework in partnership
                    with leading universities.
                  </p>
                </div>
              </div>
            </div>

            {/* Beta Testing */}
            <div className="group absolute left-[860px] top-[11rem]  max-w-[250px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[140px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Alpha Testing
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    October 2024: We are launching our alpha version with select
                    property professionals for comprehensive testing and
                    feedback collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Prototype Built */}
            <div className="group absolute right-[6rem] top-[23rem]  max-w-[250px]">
              <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/95 h-[60px] group-hover:h-auto group-hover:min-h-[140px] group-hover:p-6 overflow-hidden">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#00A19A] rounded-full mr-3 flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#00A19A] transition-colors duration-300 whitespace-nowrap">
                    Full Platform Launch
                  </h3>
                </div>
                <div className="mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    Our comprehensive platform launched in early 2025, featuring
                    AI-powered analytics, real-time market data, and the
                    revolutionary Property Passport system that's transforming
                    the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section
        ref={journeyRef}
        className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #00a19a 1px, transparent 1px),
                             linear-gradient(-45deg, #00c9bf 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-start mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-8 text-black">
              OUR JOURNEY
              {/* <span
                className="font-light"
                style={{
                  background:
                    'linear-gradient(135deg, #00A19A, #00c9bf, #00e6d6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                JOURNEY
              </span> */}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              From concept to reality, discover the milestones that shaped
              OpenProperty into the revolutionary platform it is today.
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00A19A" />
                  <stop offset="50%" stopColor="#00c9bf" />
                  <stop offset="100%" stopColor="#00e6d6" />
                </linearGradient>
              </defs>

              {/* Desktop connecting lines */}
              <g className="hidden lg:block">
                <motion.path
                  d="M 200 150 Q 400 100 600 200 Q 800 300 1000 150"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isJourneyInView
                      ? { pathLength: 1, opacity: 0.6 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 3, delay: 1 }}
                />
                <motion.path
                  d="M 1000 150 Q 800 50 600 250 Q 400 450 200 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isJourneyInView
                      ? { pathLength: 1, opacity: 0.6 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 3, delay: 1.5 }}
                />
              </g>
            </svg>

            {/* Journey Milestones */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Genesis of OpenProperty */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 100 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00A19A] to-[#00c9bf] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00A19A]/40 transition-all duration-500">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00A19A] to-[#00c9bf] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            💡
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00A19A] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00A19A] transition-colors duration-300">
                      Genesis of OpenProperty
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      Founded on the idea that property intelligence should be
                      accessible, transparent, and powerful. Our journey began
                      in 2023 with a vision to revolutionize how property
                      decisions are made.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A19A]/10 border border-[#00A19A]/20">
                      <span className="text-[#00A19A] font-semibold text-sm">
                        2023 - Foundation
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Research + Development Process */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group lg:mt-24"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00c9bf]/40 transition-all duration-500">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            📋
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00c9bf] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00c9bf] transition-colors duration-300">
                      Research + Development Process
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      Over the following months, we conducted extensive market
                      research, interviewed hundreds of property professionals,
                      and developed our core technology framework in partnership
                      with leading universities.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c9bf]/10 border border-[#00c9bf]/20">
                      <span className="text-[#00c9bf] font-semibold text-sm">
                        2023-2024 - R&D Phase
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Alpha Testing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.9,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00e6d6] to-[#00A19A] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00e6d6]/40 transition-all duration-500">
                      <motion.div
                        animate={{ rotate: [0, -360] }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00e6d6] to-[#00A19A] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            ✓
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00e6d6] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00e6d6] transition-colors duration-300">
                      Alpha Testing
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      October 2024: We are launching our alpha version with
                      select property professionals for comprehensive testing
                      and feedback collection.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00e6d6]/10 border border-[#00e6d6]/20">
                      <span className="text-[#00e6d6] font-semibold text-sm">
                        October 2024 - Alpha Launch
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Platform Launch */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={
                  isJourneyInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 1.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative group lg:mt-24"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00A19A] via-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#00A19A]/40 transition-all duration-500">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00A19A] via-[#00c9bf] to-[#00e6d6] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            📱
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pin Tail */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#00A19A] to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00A19A] transition-colors duration-300">
                      Full Platform Launch
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      Our comprehensive platform launched in early 2025,
                      featuring AI-powered analytics, real-time market data, and
                      the revolutionary Property Passport system that's
                      transforming the industry.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A19A]/10 border border-[#00A19A]/20">
                      <span className="text-[#00A19A] font-semibold text-sm">
                        2025 - Full Launch
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1.5, delay: 2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center justify-center p-8 rounded-2xl glassmorphism max-w-4xl mx-auto bg-gradient-to-r from-[#00A19A]/10 via-[#00c9bf]/10 to-[#00e6d6]/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 leading-tight text-gray-900">
                  Join us on our{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #00A19A, #00c9bf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    continuing journey
                  </span>
                </h3>
                <p className="text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                  We're just getting started. Be part of the revolution that's
                  transforming property intelligence and decision-making
                  worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>