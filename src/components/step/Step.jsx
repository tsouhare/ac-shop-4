import StepProgress from './StepProgress'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import ProgressControl from './ProgressControl'
import { useContext } from "react";
import { FormContext } from "context/FormContext";

 export default function Step() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <StepProgress />
          <StepOne />
          {/*<StepTwo />*/}
          {/*<StepThree />*/}
          <ProgressControl />
        </div>
      </main>
    </>
  )
 }
