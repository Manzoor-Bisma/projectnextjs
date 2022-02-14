import Navbar from './nav'
const about = ()=>{
    return(
        <>
         <Navbar/>
        {/* <h1> Welcome to About Page</h1> */}
        
{/* <!-- about us sec start --> */}
<section className="main my-5">
  <div  className="text-center">
    <h1 className="display-4">  About us</h1>
    <hr className="w-25 mx-auto"/>  
  </div>

  <div className="container">
    <div className="row my-5">
        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
          <figure>
            <img src="ghi.jpg" alt="about images" className="img-fluid"/>
          </figure>
          
        </div>
        <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
          <h1> Jannat</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="right" title="want to know more?">More</button>
        </div> 

    </div>   
  </div>

  <div className="container">
      <div className="row">
          <div id="navbar-example" style={{position: 'relative'}}>
        <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
  <a className="navbar-brand" href="#">Navbar</a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0" style={{height: '300px', 'overflow-y': 'scroll'}}>
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley located in the high Himalayas. It provides an ideal setting for activities like hiking, trekking, and fishing. It is also the starting point of the annual pilgrimage to the holy cave of Amarnath.Pahalgam is located in the western part of the state of Jammu and Kashmir, in the northern region of India. It is located at an altitude of 2130 m above sea level amidst the great Himalayan range. It is positioned beside the Liddar River, in the Liddar valley. Pahalgam is 95 km east of Srinagar. The weather in Pahalgam is alpine. Summers (April-June) are mild while winters (November-February) are cold. It experiences rains between July and September. It experiences heavy snowfall from December to February.The best time to visit Pahalgam is during the summers, between mid-April and mid-November. It can also be visited in July-August during the annual pilgrimage to the holy cave of Amarnath.The origin of Pahalgam is obscure. Mughal rulers ruled this region in the medieval period. It was later a part of the Kingdom of Kashmir, which was ruled by local Hindu rulers. This princely state remained independent even during the British period and later on merged into independent India.</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley located in the high Himalayas. It provides an ideal setting for activities like hiking, trekking, and fishing. It is also the starting point of the annual pilgrimage to the holy cave of Amarnath.Pahalgam is located in the western part of the state of Jammu and Kashmir, in the northern region of India. It is located at an altitude of 2130 m above sea level amidst the great Himalayan range. It is positioned beside the Liddar River, in the Liddar valley. Pahalgam is 95 km east of Srinagar. The weather in Pahalgam is alpine. Summers (April-June) are mild while winters (November-February) are cold. It experiences rains between July and September. It experiences heavy snowfall from December to February.The best time to visit Pahalgam is during the summers, between mid-April and mid-November. It can also be visited in July-August during the annual pilgrimage to the holy cave of Amarnath.The origin of Pahalgam is obscure. Mughal rulers ruled this region in the medieval period. It was later a part of the Kingdom of Kashmir, which was ruled by local Hindu rulers. This princely state remained independent even during the British period and later on merged into independent India.</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley located in the high Himalayas. It provides an ideal setting for activities like hiking, trekking, and fishing. It is also the starting point of the annual pilgrimage to the holy cave of Amarnath.Pahalgam is located in the western part of the state of Jammu and Kashmir, in the northern region of India. It is located at an altitude of 2130 m above sea level amidst the great Himalayan range. It is positioned beside the Liddar River, in the Liddar valley. Pahalgam is 95 km east of Srinagar. The weather in Pahalgam is alpine. Summers (April-June) are mild while winters (November-February) are cold. It experiences rains between July and September. It experiences heavy snowfall from December to February.The best time to visit Pahalgam is during the summers, between mid-April and mid-November. It can also be visited in July-August during the annual pilgrimage to the holy cave of Amarnath.The origin of Pahalgam is obscure. Mughal rulers ruled this region in the medieval period. It was later a part of the Kingdom of Kashmir, which was ruled by local Hindu rulers. This princely state remained independent even during the British period and later on merged into independent India.</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley located in the high Himalayas. It provides an ideal setting for activities like hiking, trekking, and fishing. It is also the starting point of the annual pilgrimage to the holy cave of Amarnath.Pahalgam is located in the western part of the state of Jammu and Kashmir, in the northern region of India. It is located at an altitude of 2130 m above sea level amidst the great Himalayan range. It is positioned beside the Liddar River, in the Liddar valley. Pahalgam is 95 km east of Srinagar. The weather in Pahalgam is alpine. Summers (April-June) are mild while winters (November-February) are cold. It experiences rains between July and September. It experiences heavy snowfall from December to February.The best time to visit Pahalgam is during the summers, between mid-April and mid-November. It can also be visited in July-August during the annual pilgrimage to the holy cave of Amarnath.The origin of Pahalgam is obscure. Mughal rulers ruled this region in the medieval period. It was later a part of the Kingdom of Kashmir, which was ruled by local Hindu rulers. This princely state remained independent even during the British period and later on merged into independent India.</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley located in the high Himalayas. It provides an ideal setting for activities like hiking, trekking, and fishing. It is also the starting point of the annual pilgrimage to the holy cave of Amarnath.Pahalgam is located in the western part of the state of Jammu and Kashmir, in the northern region of India. It is located at an altitude of 2130 m above sea level amidst the great Himalayan range. It is positioned beside the Liddar River, in the Liddar valley. Pahalgam is 95 km east of Srinagar. The weather in Pahalgam is alpine. Summers (April-June) are mild while winters (November-February) are cold. It experiences rains between July and September. It experiences heavy snowfall from December to February.The best time to visit Pahalgam is during the summers, between mid-April and mid-November. It can also be visited in July-August during the annual pilgrimage to the holy cave of Amarnath.The origin of Pahalgam is obscure. Mughal rulers ruled this region in the medieval period. It was later a part of the Kingdom of Kashmir, which was ruled by local Hindu rulers. This princely state remained independent even during the British period and later on merged into independent India.</p>
</div>        
      </div>
  </div>
  </div>  
</section>
 
        </>
    )
}
export default about

//FILE BASE ROUTING

