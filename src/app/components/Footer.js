import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube, FaGit } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Join with US..</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="https://github.com/Himanshusonixqf"><i > <FaGit/> </i> </Link>
                            <Link href="https://www.linkedin.com/in/himanshu-soni-66a5011b9/"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="https://www.facebook.com/profile.php?id=100012665346149"><i > <FaFacebookF/> </i></Link>
                            <Link href="https://www.instagram.com/13himanshu_soni/"><i > <FaInstagram/>  </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="C:\Users\win\movie\src\app\page.js">Home</a></li>
                            <li><a href="C:\Users\win\movie\src\app\contact\page.js">Contact us</a></li>
                            <li><a href="C:\Users\win\movie\src\app\about\page.js">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><a href="#">App design</a></li>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Logo design</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">ReactJS</a></li>
                            <li><a href="#">Java</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> </Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;