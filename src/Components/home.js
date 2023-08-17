import '../App';
import pic from '../Surya.jpg'
const Home = () => {
    return(
        <>
        <div className='line'>
        <div className="title">Hi!
        <br/>I am an Aspiring<br/><b>Front End Developer</b> 
        <br/>who is looking for an oppurtunity to build a career in <br/>Web-Development.
        <br/><i class="bi bi-phone"></i>(+91) 83094-04827
        <br/><i class="bi bi-envelope-at"></i> arava.suryasanjeev@gmail.com
        </div>
        <img className='pic' src={pic} alt=""></img>
        </div>       
        </>

    )
}

export default Home
