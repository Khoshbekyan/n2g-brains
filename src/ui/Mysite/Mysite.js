import Courses from "../Courses/Courses"
import Footer from "../Footer/footer"
import "./Mysite.css"
const Mysite = ()=>{
    return(
    
        <section>
              <div className="main">
                    <h1>N2G Brains</h1>
                </div>
                <Courses/>
                <Footer/>
        </section>
    )
}
export default Mysite