import React from 'react'

interface ChipsSceneProps {
  src?: string
}

const ChipsScene: React.FC<ChipsSceneProps> = ({
  src = 'https://my.spline.design/chips-lrFvVaTcN5K9FxL9EKWCEHvQ/',
}) => {
  return (
    <div className="spline-container w-full h-[600px]">
      <iframe
        src={src}
        frameBorder="0"
        width="100%"
        height="600px"
        title="3D Chips Scene"
      ></iframe>
    </div>
  )
}

export default ChipsScene
