import React from 'react'
import './About.css';
const About = () => {
  return (
    <div>
<section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">About our Dental Clinic</div>
		<article className="postcard light green">
				<img className="postcard__img" src="images/homebg1.jpg" alt="clinic" />

			<div className="postcard__text t-dark">
				<h1 className="postcard__title green">Shreeji Multispeciality</h1>
				<div className="postcard__subtitle small">
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Clinics have a crucial role among healthcare institutions that are organized to provide medication to the people. Shreeji Multispeciality Dental Clinic (rated 3.5 on NiceLocal.in) is properly equipped to grant care in the area of dentistry, to determine the sicknesses and to assure patient's recovery.

Heat and cold sensitivity, dark spots, cracks, yellowing, chipping — these are some of the most worrying symptoms of problems with a person's teeth that can be paired with other oral issues. If you want to fix those, it is advised to seek professional help — and Shreeji Multispeciality Dental Clinic offers it in the form of surgical, basic dentistry. Qualified dentists are able to perform vestibuloplasty, and treat various troubling conditions, such as dental caries, pulpitis and periodontitis.</div>
			</div>
		</article>
	</div>
</section>
    </div>
  )
}

export default About