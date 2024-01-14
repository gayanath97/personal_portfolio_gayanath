import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What are they</h5>
      <h2>Skills</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Communication Skills</h5>

          <small className="client_review">
            Ability to convey complex technical information in a clear and
            understandable manner, both in written and verbal communication.y
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className="client_name">Problem-Solving</h5>
          <small className="client_review">
            Strong problem-solving skills to analyze issues, identify root
            causes, and implement effective solutions.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className="client_name">Critical Thinking</h5>
          <small className="client_review">
            Capacity to think critically and assess situations from multiple
            perspectives, leading to well-informed decisions.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client_name">Team Collaboration</h5>
          <small className="client_review">
            Ability to work collaboratively in a team environment, share
            knowledge, and contribute to collective goals.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client_name">Adaptability</h5>
          <small className="client_review">
            Flexibility to adapt to changing project requirements, technologies,
            and methodologies.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client_name">Creativity</h5>
          <small className="client_review">
            Creative thinking to devise innovative solutions and approaches to
            software development challenges.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client_name">Time Management</h5>
          <small className="client_review">
            Effective time management skills to prioritize tasks, meet
            deadlines, and manage workloads efficiently.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
