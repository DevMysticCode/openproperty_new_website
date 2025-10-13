// components/PoweredByFooter.tsx
export default function PoweredByFooter() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 text-center pointer-events-none">
      <div className="inline-flex items-center bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full px-6 py-3 shadow-lg">
        <span className="text-gray-600 text-sm font-medium mr-2">
          Powered by
        </span>
        <span className="bg-gradient-to-r from-[#00A19A] to-[#00c9bf] bg-clip-text text-transparent font-semibold text-sm">
          OpenProperty
        </span>
      </div>
    </div>
  )
}
