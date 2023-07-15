import React from 'react'
import Writes from './Writes'

function Writing() {

    function nav_change(){
        document.getElementById("writing").style.animation = "move-right 0.3s forwards ease";
    }
    
    function nav_return(){
        document.getElementById("writing").style.animation = "none";
    }

  return (
    <div className='writing-con' onMouseEnter={nav_change} onMouseLeave={nav_return}>
        <h3 className='title'>Writing</h3>
            <Writes img_src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kIp5MQCTNboTUH9B6V-p7w.jpeg" link="https://medium.com/@divyansh3021/demystifying-machine-learning-algorithms-unleashing-the-power-of-intelligent-data-analysis-d4a904ffdb77" title="Demystifying Machine Learning Algorithms: Unleashing the Power of Intelligent Data Analysis" />

            <Writes img_src="src\Components\Assets\fuzzy_logic.jpg"  link="https://medium.com/@divyansh3021/fuzzy-search-improving-search-accuracy-with-approximate-matching-63756a21e45b" title="Fuzzy Search: Improving Search Accuracy with Approximate Matching" />

            <Writes img_src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Wz_jWVuoy96PpO3OaXvw_Q.jpeg" link="https://medium.com/@divyansh3021/text-vectorization-transforming-words-into-meaningful-representations-e03b31bb3cb3" title="Text Vectorization: Transforming Words into Meaningful Representations" />

            <Writes img_src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ARnyISIkMfLz9Wfo.jpg" link="https://medium.com/@divyansh3021/natural-language-processing-unlocking-the-power-of-human-communication-with-ai-925d247f9da9" title="Natural Language Processing: Unlocking the Power of Human Communication with AI"/>
    </div>
  )
}

export default Writing