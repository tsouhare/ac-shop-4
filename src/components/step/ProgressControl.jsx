import styles from './ProgressControl.module.css'
import leftArrow from '../../assets/icons/left-arrow.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { CartContext } from "../../context/CartContext";

export default function ProgressControlButton ({currentStep, handleClickBack, handleClickNext}) {
  const {payInfo} = useContext(FormContext)
  const {sumPrice} = useContext(CartContext)

  const handleClickSubmit = () => {
    console.log('cardName:', payInfo.cardName)
    console.log('cardNumber:', payInfo.cardNumber)
    console.log('cardDate:', payInfo.cardDate)
    console.log('cardCVC:', payInfo.cardCVC)
    console.log('totalPrice:', sumPrice())
  }

  return (
  <>
    <hr />
    <section className={styles.buttonBox}>
      <div 
       onClick={handleClickBack}
       className={currentStep === 1 ? styles.hide : styles.back}  
       data-phase="shipping">
         <img className={styles.leftArrow} src={leftArrow} alt="leftArrow" />  上一步
      </div>
      {currentStep === 3 ? 
        <div 
        onClick={handleClickSubmit}
        className={styles.next}
        data-phase="address">
          確認下單
        </div> :
        <div 
        onClick={handleClickNext}
        className={styles.next}
        data-phase="address">
          <img className={styles.rightArrow} src={rightArrow} alt="rightArrow" />下一步
        </div>
      }
    </section>
  </>
  )
}