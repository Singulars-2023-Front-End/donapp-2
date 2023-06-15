
function StaticRating() {
    const hoverRateUnity = "https://i.ibb.co/k8SssB1/recortada-7e5fdbd8-e899-4761-a950-aab6a404dfe9.png"
    const rateUnity = "https://i.ibb.co/k3wcv4m/recortada-1843b106-1d81-4eba-b69a-c4d81226d241.png"
    const halfRateUnity = "https://i.ibb.co/2ynFLWw/recortada-bf9bab81-a2cf-4bd3-8b7f-652560e863ce.png"

    function ImageLoop(props) {
        let numImages = props.numImages

        if (numImages === 5) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 4.5 && numImages > 4) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={halfRateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 4 && numImages > 3.5) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 3.5 && numImages > 3) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={halfRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>

        }
        else if (numImages <= 3 && numImages > 2.5)  {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>

        } else if (numImages <= 2.5 && numImages > 2) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={halfRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 2 && numImages > 1.5) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 1.5 && numImages > 1.0) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={halfRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 1 && numImages > 2) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={hoverRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        } else if (numImages <= 2) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={halfRateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        } else if (numImages === 0) {
            return <div style={{ display: 'flex', gap: "1em" }}>
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
                <img style={{ width: '3.5em' }} src={rateUnity} alt="hands and heart" />
            </div>
        }
    }


    return (
        <ImageLoop numImages={4.4} />
    )
}

export default StaticRating

// for (let i = 0; i < props.numImages; i++) {
//    images.push(<img src={hoverRateUnity} alt={'hands'} width={150} />)
//  }
//   return <div>{images}</div>;
// }

