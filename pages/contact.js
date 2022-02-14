import Navbar from './nav'
const contact = ()=>{
    return(
        <>
         <Navbar/>
        {/* <h1> Welcome to contact Page</h1> */}
        <section className="main my-5">
  <div  className="text-center">
    <h1 className="display-4"> Contact Us</h1>
    <hr className="w-25 mx-auto"/>  
  </div>

  <div className="container">
      <div className="row">
          <div className="col-xxl-8 col-10 col-md-8 mx-auto">
              <form>
                <div className="mb-3">
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputname" placeholder="Enter your name" required/>
                    </div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email id" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                    <label className="pr-4">Gender</label>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                      <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                    </div>
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleDataList" className="form-label">Select Place</label>
                  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                  <datalist id="datalistOptions">
                    <option value="San Francisco"> </option>
                    <option value="New York"> </option>
                    <option value="Seattle"> </option>
                    <option value="Los Angeles"> </option>
                    <option value="Chicago"> </option>
                  </datalist>        
                </div>
                <div className="mb-3">
                      <div className="form-file">
                             {/* <input type="file" className="form-file-input" id="customfile"/>
                            <label className="form-file-label" htmlFor="customfile">
                                <span className="form-file-text"> Choose file...</span>
                                <span className="form-file-button"> Browser</span>
                            </label> */}
                            <label htmlFor="formFile" className="form-label">Choose your file</label>
                            <input className="form-control" type="file" id="formFile"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            
          </div>
      </div>
    
  </div>
</section>
        </>
    )
}
export default contact