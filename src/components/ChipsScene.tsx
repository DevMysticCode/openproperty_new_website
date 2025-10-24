import React from 'react'

interface ChipsSceneProps {
  src?: string
  height?: string
}

const ChipsScene: React.FC<ChipsSceneProps> = ({
  src = 'https://my.spline.design/chipscopy-wfrQIIIR58pmz9mG9WukgxPE/',
  height = '100%', // Change default to 100%
}) => {
  return (
    <div className="spline-container w-full h-full">
      {' '}
      {/* Add h-full */}
      <iframe
        src={src}
        frameBorder="0"
        width="100%"
        height="100%" // Use 100% instead of the prop
        title="3D Chips Scene"
      />
    </div>
  )
}

export default ChipsScene
