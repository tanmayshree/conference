import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Heading from "../Heading/Heading";
import welcomeIcon from "./../../assets/welcome.jpg"
import Bullets from "../Bullets/Bullets";
import ImportantDates from "../Important Dates/ImportantDates";

const Home = () => {
    return (
        <>
            <div className="rounded-2xl overflow-hidden m-1 md:m-5">
                <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay transitionTime="500" interval="1000" infiniteLoop>
                    <div>
                        <img alt="image1" src="https://marketplace.canva.com/EAFK_XV_Ht8/1/0/1600w/canva-black-typographic-retro-moon-and-astronaut-twitter-header-0NTqoXhUtsE.jpg" />
                    </div>
                    <div>
                        <img alt="image2" src="https://pbs.twimg.com/media/CikwEeyXAAAMtWk.jpg" />
                    </div>
                    <div>
                        <img alt="image3" src="https://pbs.twimg.com/media/DIMMk7EXkAADT11.jpg" />
                    </div>

                </Carousel>
            </div>

            <Heading title="Welcome to 5th ICDIS-2023" />
            <div className="welcome-box mx-8 md:gap-16">
                <p className="text-left text-base">
                    International Conference on Data and Information Sciences (ICDIS-2023), to be held at Raja Balwant Singh Engineering Technical Campus, Bichpuri, Agra, India during June 16-17, 2023. 
                    <br /><br />
                    Raja Balwant Singh Engineering Technical Campus, Bichpuri, Agra is a well known and established name in the field of Technical Education .It comprises of the Faculty of Engineering and Technology, Faculty of Pharmacy and Faculty of Architecture and Town Planning. It is involved in imparting education in B.Tech, M.Tech, B.Pharm and B.Arch courses. All these courses are approved by AICTE, they were formerly affiliated to Dr. B.R. Ambedkar University, Agra and presently affiliated to Dr. A.P.J. AKTU Technical University, Lucknow (College code-004).RBS Engineering Technical Campus is determinate to provide the world class technical education to produce competent and versatile professionals to build a strong and developed nation and establish itself as a leading institute. 
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam numquam pariatur temporibus neque quod, nostrum eligendi esse. Nostrum unde debitis animi numquam magni est neque modi nesciunt id odio dolore, nam porro, quas alias quaerat officiis reiciendis dolorum aperiam molestias? Quia quo libero corrupti aspernatur repellendus a fuga ipsum.
                    <br /><br />
                    We encourage healthy competition to enable our students to find a place in today's competitive world. For more details, <a href="http://fetrbs.org/index.aspx">http://fetrbs.org/index.aspx</a>
                </p>
                <img src={welcomeIcon} alt="" className="welcome-img"/>
            </div>

            <ImportantDates/>
            <Bullets/>

            <Heading title="ICDIS History" />
            <div className="mx-10 grid md:grid-cols-2 text-left">
                <div className="mt-2 mb-5">
                    <h2 className="text-2xl">ICDIS 2017</h2>
                    <p><strong>First version of ICDIS</strong> was organized at Indira Gandhi National Tribal University, Amarkantak, Madhya-Pradesh, India, during November 14-15, 2017. ICDIS-2017 received around 230 submissions from around 550 authors of different countries such as India, Malaysia, Bangladesh, Sri Lanka and many more. On the basis of quality reviews, 59 high quality papers were selected for publication in two proceedings volumes, with an acceptance rate of 25.6%. All papers of ICDIS-2017 have been published in two volumes under Book Series "Lecture Notes in Networks and Systems", titled as "Advances in Data and Information Sciences".</p>
                    <a href="https://www.springer.com/in/book/9789811083594">https://www.springer.com/in/book/9789811083594</a>
                    <br />
                    <a href="https://www.springer.com/in/book/9789811083594">https://www.springer.com/in/book/9789811083594</a>
                </div>
            </div>
        </>
    )
}

export default Home;