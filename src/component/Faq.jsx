import { useState } from 'react'
import '../style/common.scss'
import '../style/Faq.scss'

function Faq() {
  return (
    <>
      <div className='faq-container'>
        <section className='faq-form'>
          <form action="" className="form-box">
            <fieldset>
              <legend>FAQ 폼</legend>
              <div className="form__item">
                <div className="form__label">
                  <label htmlFor="content">제목</label>
                </div>
                <div className="input-type--box">
                  <input type="text" id="content" placeholder='내용' />
                </div>
              </div>

              <div className="form__item">
                <div className="form__label">
                  <label htmlFor="content">내용</label>
                </div>
                <div className="input-type--box">
                  <input type="text" id="content" placeholder='내용' />
                </div>
              </div>
            </fieldset>

            <button type='submit' className='button button-large button--lv1'>
              <span>제출</span>
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Faq
