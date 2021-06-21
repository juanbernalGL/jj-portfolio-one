import React from 'react'
import { PlayState, Tween } from 'react-gsap'

const Banner = () => {
  const tween = React.useRef(null)
  return (
    <div className=" bg-primary h-14 flex items-center">
      <div className="overflow-hidden w-full">
        <Tween
          ref={tween}
          from={{ x: '-1000px' }}
          to={{ x: '100%' }}
          duration={35}
          playState={PlayState.play}
          repeat="-1"
          ease="Elastic.out(1, 0.3)"
        >
          <div className="">
            <p className="text-white">
              a jack of all trades is a master of none... but oftentimes better
              than a master of one.
            </p>
          </div>
        </Tween>
      </div>
    </div>
  )
}

export default Banner
