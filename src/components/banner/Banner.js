import '../banner/banner.css'
import { ParallaxBanner } from 'react-scroll-parallax'

const Banner = () => {

    const headline = {
        translateY: [0, 50],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        opacity: [1, 0.3],
        children: (
            <div className='bannerWrapper'>
                <h1 className='bannerTitle'>QEEP PRO</h1>
            </div>
        )
    }

    return (
        <ParallaxBanner layers={[headline]} className='banner'/>
    )
}

export default Banner