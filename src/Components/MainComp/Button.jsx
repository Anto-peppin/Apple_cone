import { useState } from "react"
import Swal from 'sweetalert2'


const Button = ({val:[one,two,abs]}) => {
  let [alert,setAlert] = useState(false)
  const handleAlert = ()=>{
   Swal.fire({
  title: "This Feature Not Unlocked Yet",
  width: '90%',
  padding: "3em",
  color: "red",
  background: "#fff url(/gear.gif) center/cover no-repeat",
  backdrop: `
    rgba(0,0,0,0.8)
    left top
    no-repeat
    
  `,
});

  }

    
  return (
    <>
    <section className={`flex gap-4 ${abs || ''} top-50`} >
          <button onClick={handleAlert} className="cursor-pointer pt-1 pb-2 px-3 rounded-4xl text-white bg-blue-600 text-[13px] md:text-[15px]">{one}</button>
          {
            two && <button onClick={handleAlert} className="cursor-pointer border-blue-600 border-2 rounded-4xl pt-1 pb-2 px-3 text-[13px] text-blue-600 hover:bg-blue-600 hover:text-white md:text-[15px] ">{two}</button>

          }
        </section>
    </>
  )
}

export default Button