import React from 'react'

const Test: React.FC = () => {
    return (
        <>
        <h1>Hi</h1>
            <video muted autoPlay loop id="myVideo">
                <source src="/bg-video.mp4" type="video/mp4" />
            </video>
        </>
    )
}

export default Test