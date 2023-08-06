import styles from './Step.module.css'
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function StepThree() {
  const { payInfo, setPayInfo } = useContext(FormContext);

  const handleOnChange = (e) => {
    setPayInfo({
      ...payInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className={styles.form} data-phase="credit-card">
        <h3>付款資訊</h3>
        <section>
          <div className={styles.formLine}>
            <div className={styles.selectL}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input 
              className={styles.selections} name="cardName" type="text" placeholder="John Doe" onChange={(e) => handleOnChange(e)}/>
            </div>
          </div>
          <div className={styles.formLine}>
            <div className={styles.selectL}>
              <div className={styles.inputLabel}>卡號</div>
              <input className={styles.selections} name="cardNumber" type="text" placeholder="1111 2222 3333 4444" onChange={(e) => handleOnChange(e)}/>
            </div>
          </div>
          <div className={styles.formLine}> 
            <div className={styles.selectM}>
              <div className={styles.inputLabel}>有效期限</div>
              <input className={styles.selections} name="cardDate" type="text" placeholder="MM/YY" onChange={(e) => handleOnChange(e)}/>
            </div>
            <div className={styles.selectM}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input className={styles.selections} name="cardCVC" type="text" placeholder={123} onChange={(e) => handleOnChange(e)}/>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}