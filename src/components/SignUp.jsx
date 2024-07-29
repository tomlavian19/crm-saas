export function SignUp(){


    function checkPassword(){
        return true
    }

    return(
        <>
        <form>


        <span>
                <label htmlForfor="firstName">Please fill your first name:</label>
                <input id="firstName" type="text" />
            </span>

            <span>
                <label htmlForfor="lastName">Please fill your last name:</label>
                <input id="lastName" type="text" />
            </span>

            <span>
                <label htmlForfor="businessName">Please fill your business name:</label>
                <input id="ebusinessName" type="text" />
            </span>

            <span>
                <label htmlForfor="email">Please fill your email:</label>
                <input id="email" type="text" />
            </span>

            <span>
                <label htmlForfor="password">Please fill your password:</label>
                <input id="password" type="password" />
            </span>

            <span>
                <label htmlForfor="confirmPassword">Confirm password:</label>
                <input id="confirmPassword" type="password" onChange={checkPassword} />
            </span>

            <button> 
                Sign Up!
            </button>




        </form>
        </>
    )
}