import '../PageStyles/Home.css';
import portfolioImg from '../assets/woman.png';

function Home() {
    return (<>
        <section className='container'>
            <div className='content' >
                <h1 className='title2'>
                    Hi, I'm Riddhi Suvariya
                </h1>
                <p className='description'>
                I'm currently pursuing my studies in Computer Science Engineering at Darshan University, Rajkot.  </p>
                <a href='mailto:myemail@email.come' className='contactbtn'>Contact Me</a>
            </div>
            <img src={portfolioImg} alt='...' className='homeImg'/>
            <div className='topBlur'></div>
            <div className='bottomBlur'></div>
        </section>
    </>);
}
export { Home };