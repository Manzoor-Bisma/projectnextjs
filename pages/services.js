import Navbar from './nav'
const service = ()=>{
    return(
        <>
         <Navbar/>
        {/* <h1> Welcome to contact Page</h1> */}
               
<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Welcome To NextJs</h1>
  <p>Code Once, Paste Always</p> 
</div>
<div className="container-fluid p-5 bg-success text-white text-center">
  <h1>About Us</h1>
  <p>We are family</p>
  <div className="d-grid">
  <button type="button" className="btn btn-warning btn-block mt-4">  <a href="29-sep.html" className="text-white"> speciality </a></button>
</div> 
</div>
<div className="">  
		<div className="container mt-5 py-5">
  				<div className="row">
    				<div className="col-sm-6  text-primary">
          				<h3>Coffee</h3>
      					<p> If this is coffee, please bring me some tea; but if this is tea,</p>
      					<p>please bring me some coffee.</p>
    				</div>
    				<div className="col-sm-6  text-danger">
      					<h3>Drinks</h3>
      					<p> Actually! it only takes one drink to get me loaded.</p>
      					<p>Trouble is! I cannot remember if it is the thirteenth or fourteenth.</p>
    				</div>
  				</div>
		</div>
</div>
<div className="container-fluid p-5 bg-warning text-white text-center mt-4">
  <h1>Coffee & Drinks </h1>    
  <p>Please Select Your Choice</p>
  <div className="container mt-5">
  	    <div className="row" style={{marginRight: "calc(var(--bs-gutter-x) * -45.5)"}} >
  			<div className="col-sm-6 bg-warning text-primary">
  				<dl>
    				<dt>Coffee</dt>
    				<dd>- black hot drink</dd>
    				<button className="btn btn-danger text-capitalize"> <a href="cof.html" className="text-white"> order here</a> </button>
    				<dt>Milk</dt>
    				<dd>- white cold drink</dd>
    				<button className="btn btn bg-success text-capitalize"> <a href="mil.html" className="text-white"> order here </a></button>
    				<dt>Cold Coffee</dt>
    				<dd>cold coffee</dd>
    				<button className="btn btn bg-success text-capitalize"> <a href="mil.html" className="text-white"> order here </a></button>
  				</dl>
  			</div>
  		</div>
  	</div>

  	<div className="container mt-5">
  	    <div className="row" style={{ marginRight: 'calc(var(--bs-gutter-x) * -45.5)'}}>
  			<div className="col-sm-6 bg-warning text-primary">
  				<dl>
    				<dt>Burgers</dt>
    				<dd>-Veg & Non Veg Burgers</dd>
    				<button className="btn btn-danger text-capitalize"> <a href="cof.html" className="text-white"> order here</a> </button>
    				<dt>Wraps</dt>
    				<dd>-Veg & Non Veg Wraps</dd>
    				<button className="btn btn bg-success text-capitalize"> <a href="mil.html" className="text-white"> order here </a></button>
  				</dl>
  			</div>
  		</div>
  	</div>      
</div> 

<div className="container-fluid p-5 bg-primary text-white text-center mt-4">
  <h1>Indian Food</h1>    
  <p>Select Your Chioce</p>
  <dl>
    <dt>Butter Chicken</dt>
    <dd>- with bone and boneless</dd>
    <button className="btn btn-danger text-capitalize"> <a href="cof.html" className="text-white"> order here</a> </button>
    <dt>Kadhayi Chicken</dt>
    <dd>-With Bone And Boneless</dd>
    <button className="btn btn bg-success text-capitalize"> <a href="mil.html" className="text-white"> order here </a></button>
    <dt>Shahi Paneer</dt>
    <dd>-with masala gravy</dd>
    <button className="btn btn bg-success text-capitalize"> <a href="mil.html" className="text-white"> order here </a></button>

  </dl>     
</div> 

<div className="container mt-5">
  			<div className="row"  style={{'--bs-gutter-x': '15.5rem'}}>
             
    			<div className="col-sm-6 bg-success text-primary">
    				<dl style={{marginTop: '27px'}}>
    					<div className="alert alert-info">
    					<dt>Pizza</dt>
    					<dd>-Veg And Non Veg</dd>
    						<button className="btn btn-danger text-capitalize"/>
                            <strong>order!</strong>Do You Really  <a href="cof.html" className="alert-link"> want to</a>.
  						</div>
    					
    					<div className="alert alert-info">	
    					<dt>Pasta</dt>
    					<dd>- with white & red sause </dd>
    					<button className="btn btn-white bg-success text-capitalize">
                            <strong>order!</strong>Do You Really  <a href="cof.html" className="alert-link"> want to</a>.
    					    </button>
    				    </div>
  				    </dl> 
          			
    			</div>
    			<div className="col-sm-6 bg-primary text-danger">
    				<dl style={{marginTop: '27px'}}>
    					<div className="alert alert-info">
    					<dt>Coffee</dt>
    					<dd>- black hot drink</dd>
    						<button className="btn btn-danger text-capitalize"/>
                            <strong>order!</strong>Do You Really  <a href="cof.html" className="alert-link"> want to</a>.
  						</div>
    					
    					<div className="alert alert-info">	
    					<dt>Milk</dt>
    					<dd>- white cold drink</dd>
    					<button className="btn btn-white bg-success text-capitalize">
                            <strong>order!</strong>Do You Really  <a href="cof.html" className="alert-link"> want to</a>.
    					    </button>
    				    </div>
  				    </dl>     					
    			</div>
  		    </div>
</div>
<div className="d-grid">
  <button type="button" className="btn btn-dark btn-block mt-4">  <a href="28-sep-b.html" className="text-white"> status list </a></button>
</div>
        </>
    )
}
export default service