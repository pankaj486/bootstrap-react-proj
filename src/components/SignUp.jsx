import React, { useEffect, useState } from "react";



const SignUp = () => {

    const [text, setText] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [texts, setTexts] = useState([]);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setText((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };



    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTexts((prev) => {
            return [...prev, text]
        });
    }

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(texts))
    }, [onSubmitHandler])



    return (
        <div className=" my-container ui container col-md-6 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">SignUp</h4>
                    {/* <p className="card-description">
                        Basic form layout
                    </p> */}
                    <form className="forms-sample" onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" value={text.username} onChange={onChangeHandler} type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label >Email address</label>
                            <input name="email" value={text.email} onChange={onChangeHandler} type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input name="password" value={text.password} onChange={onChangeHandler} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label >Confirm Password</label>
                            <input name="confirmPassword" value={text.confirmPassword} onChange={onChangeHandler} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-check form-check-flat form-check-primary">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" />
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button className="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SignUp;