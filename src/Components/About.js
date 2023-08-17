import pic1 from './html5-logo-31816.png'
import pic2 from './react-redux.png'

const About = () => {
    return(
        <>
        <div className='About'>
        Hello there! I'm <b style={{fontSize:25}}>Surya Sanjeev</b>, a driven <b style={{fontSize:25}}>Front-end Developer</b> who embarked on an extraordinary 
        journey from a non-IT background to become a proficient React magician. 
        My story is one of determination, constant learning, and the transformative power of technology. 
        Prior to diving into the world of coding, I navigated through Healthcare and Network Marketing,
        where I honed my adaptability and problem-solving prowess.
        <br/><br/>
        The allure of crafting dynamic and interactive user interfaces using <b style={{fontSize:25}}>React</b> captivated me, propelling me to immerse myself in the world of <b style={{fontSize:25}}>Web Development</b>. Armed with a thirst for knowledge
        and an unwavering passion, I delved into the intricacies of <b style={{fontSize:25}}>HTML, CSS, and JavaScript</b> before 
        conquering the realm of React. The transition was challenging, but every challenge was a chance 
        to evolve and master this captivating technology.
        <br/><br/>
        What truly sets me apart is the fusion of my diverse background with the finesse of React development.
        This unique blend allows me to conceptualize and implement striking designs while seamlessly 
        integrating the power of React to breathe life into every project. 
        Beyond coding, you might find me Solving puzzles, playing Chess, which continually inspire my 
        creativity and enrich my problem-solving toolkit. Join me on this exciting journey as I continue 
        to wield the magic of React, proving that a determined spirit can rewrite one's destiny in the 
        world of IT.
        </div>
        <stack>
        <br/>
            <img src={pic1} alt='' width="400"></img>
            <br/><br/><img src={pic2} alt='' width="400"></img>
        </stack>
        </>
    )
}

export default About