import React,{useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import "./loginpage.css";
// import Input from "./Input";

function LoginForm(props) {
  const navigate=useNavigate();
    console.log(props);

    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    function handleLogin(e){
      e.preventDefault();
      setIsLoggedIn(true);
      navigate('/home');
      // props.getValueHandler(content)

    }



      return(
        // <div>

        <div style={ImgBackground}>
        {/* <img src="https://media.gettyimages.com/id/1344986876/photo/high-voltage-electricity-tower.jpg?s=612x612&w=gi&k=20&c=M2ay868yZj9L11JvSbMiEDAGcgai6clDD2frqc8EgtI=" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}/> */}
        <div className="text-center parent" style={{alignItems:"center"}}>
        <main className="form-signin w-100 m-auto">
          <div style={{width:"300px",height:"420px",borderRadius:"10px",top:window.innerHeight/4,position:"absolute",paddingRight:"10px",paddingLeft:"10px",paddingTop:"10px",backdropFilter:"blur(5.5px)",border:"0.5px solid #B4E4FF",background:"#fff"}}>
          <form onSubmit={handleLogin}>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/1200px-Larsen%26Toubro_logo.svg.png" alt="" width="100" height="100"/>
            <h1 className="h3 mb-3 fw-normal">SMOC Login</h1>

            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="username"/>
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> <b>Remember me</b>
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            {/* <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p> */}
          </form>
          </div>
        </main>

      </div>
      </div>
  );
}

export default LoginForm;

const ImgBackground={
  backgroundImage: 
  "url('https://smartpmsolution.com/img/login/Picture2.png')",
         height:window.innerHeight,
         width:window.innerWidth,
        //  marginTop:'-70px',
        //  fontSize:'50px',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         display: "flex",
        alignItems: "center",
        justifyContent: "center",
};
