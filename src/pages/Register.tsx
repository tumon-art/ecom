export const Register = () => {
  return (
   <div className="grid justify-center">
    <h3 className="H3"> Create an Account</h3>

    <form className=" w-96 grid justify-center">
    <input className="inp4sign" placeholder="name" />
    <input className="inp4sign" placeholder="last name" />
    <input className="inp4sign" placeholder="username" />
    <input className="inp4sign" placeholder="email" />
    <input className="inp4sign" placeholder="password" />
    <input className="inp4sign" placeholder="confirm password" />


    <p> 
      By creating an Account, I consent to the procesing of
      my personal data in accordance with me the 
      <b> Privacy Policy</b>
    </p>

    <button className="doneBtn"> Submit </button>
    </form>
   </div>
  )
}