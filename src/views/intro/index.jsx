import React from 'react';
import './index.css';

const Intro = () => (
  <section id="intro">
    <div className="wrapper intro">
      <div className="intro__content">
        <h2 className="intro__title">О Курсе</h2>
        <p className="intro__description">Если вы думали о том, чтобы начать писать на Kotlin, познакомиться с языком или вы уже используете Kotlin и хотите систематизировать знания - School.kt прекрасное место для этого. Разработчики с опытом в мобильных и клиент-серверных приложениях поделятся своими знаниями: как начать писать на Kotlin, расскажут об идеологии языка, его подходах к решению задач и ответят на все ваши вопросы.</p>
        <p className="intro__description">Что нужно от Вас? Наличие опыта в программировании и желание постигать новое!</p>
      </div>
      <div className="intro__logo">
        <img
          src="images/belarus-kotlin-user.jpg"
          alt="Belarus Kotlin User"
        />
      </div>
    </div>
  </section>
);


export default Intro;
