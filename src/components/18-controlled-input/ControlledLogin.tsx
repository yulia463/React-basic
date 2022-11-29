import React, {useState} from "react";

const ControlledLogin = () => {
    const [data, setData] = useState({username: '', password: ''})

    function handleFormSubmit(event: any) {
        event.preventDefault()
        const userData = {
            username: data.username,
            password: data.password
        }
        console.log(userData)
        alert(JSON.stringify(userData))
    }
function handleInputChange(e:any,name:any){
    setData(
        {...data ,[name]:e.target.value})
}
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label> Username:
                    <input onChange={(e) =>handleInputChange(e,'username') }
                           type="text" value={data.username}/>
                </label>
                <label> Password:
                    <input onChange={(e) => handleInputChange(e,'password')}
                           type="password" value={data.password}/>
                </label>
                <button type={"submit"}>
                    Login
                </button>
            </form>
        </>
    )


}
export default ControlledLogin;