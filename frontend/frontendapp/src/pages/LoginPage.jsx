import { LoginForm } from '../components/LoginForm'

export const LoginPage = () => {
  return (
    <div className="wrapper">
        <div className="container">            
            <div className="row">                            
                <div className="col-md-4 mt-5">
                    <h1 className='title'>LoginPage</h1>
                </div>
                <div className="col-md-4"></div>                
                <div className="col-md-4 mt-5">
                    <LoginForm />
                </div>
            </div>
        </div>            
    </div>    
  )
}
