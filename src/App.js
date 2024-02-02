import './App.css';
import { IoIosMail,IoMdStar, IoMdStarHalf, IoIosArrowRoundForward,IoIosQuote  } from "react-icons/io";
import { FaCertificate,FaFacebook,FaTwitter,FaLinkedin,FaInstagram,FaYoutube,FaWhatsapp,FaAngleDown,FaChalkboardTeacher,FaHandPointRight,FaUniversity   } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { PiStudentFill,PiPencilSimpleLineFill,PiChalkboardTeacherFill,PiEnvelopeOpenFill,PiQuotesFill  } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";


import img1 from './image/logo.svg';
import img2 from './image/slider1.webp';
import img3 from './image/course1.webp';
import img4 from './image/course2.webp';
import img5 from './image/course3.jpg';
import img6 from './image/course4.webp';
import img7 from './image/course5.webp';
import img8 from './image/course6.webp';
import img9 from './image/about.jpeg';
import img10 from './image/count.jpeg';
import img12 from './image/happy1.jpeg';
import img13 from './image/happy-bg1.jpeg';
import img14 from './image/happy-bg.png';
import img16 from './image/c1.png';
import img17 from './image/c2.png';
import img18 from './image/c3.png';
import img19 from './image/c4.png';
import img20 from './image/c5.png';
import img21 from './image/c6.png';
import img22 from './image/logo2.svg';
// import img15 from './image/why11.png';






function App() {
  return(
    <div>
      <div className="topinfo">
        <div className="container">
          <div className="headr d-flex">
            <div className="leftinfo d-flex">
              <i><IoIosMail></IoIosMail></i><a>info@cdmi.in</a>
              <i><FaCertificate></FaCertificate></i><a>Verify certificate</a>

            </div>
            <div className="ceninfo"><a>HAVE ANY QUESTION ? +91 90333 16003</a></div>
            <div className="rightinfo d-flex">
              <li><a><FaFacebook></FaFacebook></a></li>
              <li><a><FaTwitter></FaTwitter></a></li>
              <li><a><TiSocialGooglePlus></TiSocialGooglePlus></a></li>
              <li><a><FaLinkedin></FaLinkedin></a></li>
              <li><a><FaInstagram></FaInstagram></a></li>
              <li><a><FaYoutube ></FaYoutube></a></li>
              <li><a><FaWhatsapp ></FaWhatsapp></a></li>
            </div>
          </div>          
        </div>
      </div> 
      
      <header >
        <div className="container d-flex">
          <div className="logo">
            <img src={img1}></img>
          </div>
          <div className="menu">           
              <ul className='main-menu d-flex'>
                <li><a href=''>Home</a></li>
                <li><a href=''>Courses<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
                <li><a href=''>Activities<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Known Us<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
                <li><a href=''>Get In Touch<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
                <li><a href=''>Student Zone<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              </ul>
          </div>
        </div>  
      </header> 

      {/* slider start */}

      <div className='slider'>
        <img src={img2}></img>
      </div>

      {/* slider end */}

      {/* CREATIVE COURSE satrt  */}

      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          <div className='w-33'>
            <div className='content'>
              <img src={img3}></img>
              <h2>Development Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img4}></img>
              <h2>Design Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img5}></img>
              <h2>Programming IT</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img6}></img>
              <h2>Trendy Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img7}></img>
              <h2>Civil-Mech. Engineering</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img8}></img>
              <h2>Bussiness Development</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE end */}
      
      {/* about us start */}
      <div className="pd-y d-flex about-content">
        <div className='about'>
          <div className='content'>
            <p className='about-head'>About Us
              <div className='line'></div>
            </p>
            <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
            <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
              institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
              types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
              in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
              or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
              hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <button className='about-btn'><a href=''>Enroll Now...! → </a></button>    
          </div>
        </div>
        <div className='about-img'>
          <img src={img9}></img>
        </div>
      </div>
      {/* about us end */}

      {/* COUNTING START */}      
        <div className='pd-y count'>

          <div className='bacimg' style={{
            width:'100%',
            height:'230px',
            backgroundImage:`url(${img10}) `,
            backgroundSize:'cover',
            backgroundPosition:'center',
            }}>
            
            <div className='container'>
              <div className='d-flex content'>
                <div >
                      <FaChildren className='count-icon'></FaChildren> 
                      <h1>18000+</h1>
                      <h2>Happy students</h2>
                </div> 
                <div >
                    <PiPencilSimpleLineFill className='count-icon'></PiPencilSimpleLineFill>
                    <h1>10+</h1>
                    <h2>Certification Approval</h2>
                  </div>                            
                  <div >
                    <FaChalkboardTeacher  className='count-icon'></FaChalkboardTeacher >
                    <h1>100+</h1>
                    <h2>Certified Teachers</h2>  
                  </div>
                  <div>
                    <PiStudentFill className='count-icon'></PiStudentFill>
                    <h1>12000+</h1>
                    <h2>Students Placed</h2>
                  </div>
              </div>
            </div>
          </div>
        </div>
      {/* COUNTING END */}

      {/* HAPPY STUDENTS START */}
      <div className='container pd-y'>
      
        <div className='d-flex'>
          <div className='w-50 happy'>
              <p className='happy-head'>Happy Students
                <div className='line'></div>
              </p>
              <h1>Alumni Speak</h1>
              <PiQuotesFill  className='happy-icon'></PiQuotesFill>
              <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

              <div className='happy-bottom d-flex'>
                  <img src={img12}></img>
                  <div className='bottom-con'>
                      <h3>NILAY RABADIYA</h3>
                      <h5><i>CEO</i> <span>@ Techtical Solution</span></h5>
                  </div>
              </div>
          </div>

          <div className='w-50 happy-img'>
              <div style={{
              width:'500px',
              height:'500px',
              backgroundImage:`url(${img13})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
            }}>
              
            <div className='happy1'>
              <img src={img14}></img>
            </div>
            </div>  
          </div>
        </div>
      </div>
      {/* HAPPY STUDENTS END */}

      {/*READ OUR DIFFERENCE START */} 
      <div className='pd-y read'>
        <div className='container'>
          <p className='read-head'>READ OUR DIFFERENCE
            <div className='line'></div>
          </p>
          <h1>WHY CHOOSE CREATIVE</h1>
          <div className='readimg d-flex'>
            <div className='w-33'>
              <div className='content '>
                <div className='icon'>
                  <i><GiTeacher></GiTeacher></i>
                </div>
                <h2>Industry Experts As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>

            <div className='w-33'>
              <div className='content '>
                <div className='icon'>
                  <i><GiTeacher></GiTeacher></i>
                </div>
                <h2>Latest Curriculum</h2>
                <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
              </div>
            </div>

            <div className='w-33'>
              <div className='content '>
                <div className='icon'>
                  <i><GiTeacher></GiTeacher></i>
                </div>
                <h2>Lifetime Support</h2>
                <p>We will provide you lifetime support on all the courses you learned from us.</p>
              </div>
            </div>

            <div className='w-33'>
              <div className='content '>
                <div className='icon'>
                  <i><GiTeacher></GiTeacher></i>
                </div>
                <h2>Latest Technology</h2>
                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
              </div>
            </div>

            <div className='w-33'>
              <div className='content '>
                <div className='icon'>
                  <i><GiTeacher></GiTeacher></i>
                </div>
                <h2>Interview Assistance</h2>
                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
              </div>
            </div>

            <div className='w-33'>
              <div className='content '>
                <div className='icon'>
                  <i><GiTeacher></GiTeacher></i>
                </div>
                <h2>Free Upgradation</h2>
                <p>We will be provided free upgradation for any newer version of the course you have.</p>
              </div>
            </div>
          </div>

        </div>
          </div>

      {/* READ OUR DIFFERENCE END */}

      {/* STUDENT PLACEMENT START */}

            <div className='pd-y student '>
              <div className='container'>
                <div className='stu-head'>
                  <p> STUDENT PLACEMENT</p>
                  <div className='line'></div>
                  <h1>OUR RECRUITMENT PARTNERS</h1>
                </div>
                <div className='samll-div'></div>
                <div className='com-name d-flex'>
                  <div className='com-img'>
                    <img src={img16}></img>
                  </div>
                  <div className='com-img'>
                    <img src={img17}></img>
                  </div>
                  <div className='com-img'>
                    <img src={img18}></img>
                  </div>
                  <div className='com-img'>
                    <img src={img19}></img>
                  </div>
                  <div className='com-img'>
                    <img src={img20}></img>
                  </div>
                  <div className='com-img'>
                    <img src={img21}></img>
                  </div>
                </div>
              </div>
            </div>

      {/* STUDENT PLACEMENT END */}
      {/* Our Demanded Course - start */}
            <div className='our'>
              <div className='container'>
                <h2 className='our-head'>Our Demanded Course - </h2>
                <div className='contan'>
                  <div className='our-name'><a>3ds Max Civil Training Course</a></div>
                  <div className='our-name'><a>Computer Training Institute In Katargam</a></div>
                  <div className='our-name'><a>CCC Certificate Center In Surat</a></div>
                  <div className='our-name'><a>Adobe Xd Design Training Institute In Surat</a></div>
                  <div className='our-name'><a>Spoken English Class In Katargam</a></div>
                  <div className='our-name'><a>3d Game Development Training Institute In Katargam</a></div>
                  <div className='our-name'><a>Advance Flutter Training Institute In Surat</a></div>
                  <div className='our-name'><a>Android App Development Institute </a></div>
                  <div className='our-name'><a>Lumion Training Institute</a></div>
                  <div className='our-name'><a>Graphics Design Training In Surat</a></div>
                  <div className='our-name'><a>Advance Laravel Training Institute In Surat</a></div>
                  <div className='our-name'><a>Wordpress Training Institute In Surat</a></div>
                  <div className='our-name'><a>Web Development Training In Katargam </a></div>
                  <div className='our-name'><a>Ios App Training Institute In Katargam</a></div>
                  <div className='our-name'><a>Best React Js Training Institute</a></div>
                  <div className='our-name'><a>Computer Training Institute In Katargam</a></div>
                  <div className='our-name'><a>Computer Training Institute In Katargam</a></div>
                  <div className='our-name'><a>Computer Training Institute In Katargam</a></div>
                </div>
                <p className='more'><a>Show More</a></p>
              </div>
            </div>
      {/* Our Demanded Course - end */}
      <footer>
        <div className='pd-y'>
          <div className='container d-flex'>
            <div className='s-1 pd-x'>
              <div className="logo">
                <a><img src={img22}></img></a>
              </div>
              <p >Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <h6 className='folw'>FOLLOW US ON</h6>
              <ul className='social d-flex'>
                <li><a><FaFacebook></FaFacebook></a></li>
                <li><a><FaTwitter></FaTwitter></a></li>
                <li><a><TiSocialGooglePlus></TiSocialGooglePlus></a></li>
                <li><a><FaLinkedin></FaLinkedin></a></li>
                <li><a><FaInstagram></FaInstagram></a></li>
                <li><a><FaYoutube ></FaYoutube></a></li>
                <li><a><FaWhatsapp ></FaWhatsapp></a></li>
              </ul>
            </div>
            <div className='s-2 pd-x'>
              <h2 className='head'>FEATURE LINKS</h2>
              <div className='list-name'>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>About Us</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Blogs</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Join Us</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Company Login</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Certificate Verification</a></li>
              </div>
            </div>
            <div className='s-3 pd-x'>
              <h6 className='head'>CONTACT US</h6>
              <div className='head-name'>
                  <p className='head-offi'><a>HEAD OFFICE - YOGICHOWK</a></p>
                  <p >401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat. Mo : <a>+91 90333 16003</a></p>
              </div>
              <div className='other'>
                <h6 className='head'><a>OTHER BRANCHES</a></h6>  
                <div className='other-offi'>
                  <li><i><FaUniversity ></FaUniversity></i><a> Katargam</a></li>
                  <li><i><FaUniversity ></FaUniversity></i><a> Mota Varachha</a></li>
                  <li><i><FaUniversity ></FaUniversity></i><a> Adajan</a></li>
                  <li><i><FaUniversity ></FaUniversity></i><a> Navsari</a></li>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </footer>

      
    </div>
  ) 
}
export default App;