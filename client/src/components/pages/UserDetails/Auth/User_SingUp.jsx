import React, { useState } from "react";
import "./User_SingUp.css";
import { useSelector, useDispatch } from "react-redux";
import { User_auth_actn } from "../../../../redux/actions/user_actions/auth_actions/Auth_actions";
import { useNavigate } from "react-router-dom";

const User_SingUp = () => {
  const [inputReq, setinputReq] = useState(null);
  const navigate = useNavigate();
  const { User_auth_data } = useSelector((state) => state);
  const Dispatch = useDispatch();

  const OnInput = ({ target: { name, value } }) => {
    console.log(name, value);
    Dispatch(User_auth_actn(name, value));
  };

  const OnNext = ( type) => {
    if(type === "next"){

      if (User_auth_data.fname === '') {
        setinputReq("fname");
        console.log(User_auth_data.fname);
      } else if (User_auth_data.lname === '') {
        setinputReq("lname");
      } else if (User_auth_data.email === '') {
        setinputReq("email");
      } else if (User_auth_data.contry === '') {
        setinputReq("contry");
      } else if (User_auth_data.phone === '') {
        setinputReq("phone");
      } else if (User_auth_data.gender === '') {
        setinputReq("gender");
      } else {
        setinputReq(null);
          navigate("/singup/emailVarification");
      }
    }
    else if(type ==="back" ){
      navigate('/login')
    }
  };

  return (
    <div className="user_singup">
      <div className="user_singup_top">
        <h5>Sign up to socialRepeat</h5>
        <h1>{inputReq}</h1>
          <div className="user_singup_top_name_input">
            <input
              required
              name="fname"
              onChange={OnInput}
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lname"
              onChange={OnInput}
              type="text"
              placeholder="Last name"
            />
          </div>
          <lable>
            {" "}
            Email Address
            <input required name="email" onChange={OnInput} type="email" />
          </lable>

          {/* <lable>
          {" "}
          Company name
          <input />
        </lable> */}

          <div className="user_singup_top_mobile_input">
            <lable>
              Country
              <input required name="contry" onChange={OnInput} />
            </lable>
            <lable>
              {" "}
              Phone #
              <input required name="phone" onChange={OnInput} type="number" />
            </lable>
          </div>

          <lable>
            {" "}
            User type
            <select name="user type" value="Male" onChange={OnInput}>
              <option>Client</option>
              <option>Amploy</option>
            </select>
          </lable>

          <lable>
            {" "}
            Gender
            <select required name="gender" onChange={OnInput}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </lable>

        

        <div className="user_singup_top_btns">
          <button onClick={()=>OnNext("next")}>Next</button>
          <button onClick={()=>OnNext("back")} id="back_btn">BACK to login</button>
        </div>
      </div>
      <div className="user_singup_bottom">
        <label>Terms and conditions</label>
        <span></span>
        <label>Privacy policy</label>
      </div>
    </div>
  );
};

export default User_SingUp;
