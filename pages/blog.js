import Link from "next/link"
import Navbar from "./nav"


export const getStaticProps=async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    // -----------------page redirecting-----------------------
    // if(data){
    //     return{
    //         redirect:{
    //             destination:`/`,
    //             permanent:false

    //         }
    //     }
    // }



    // ------------------------------not found
    // if(data){
    //     return{
    //         notFound:true
    //     }
    // }
    return{
        props:{
            data,
        },
        // isr...increamental static regeneration .... it develops the bult aftr aevry 10secs but in dynamic api---
        // revalidate:10
    }
}

const blog=({data})=>{
    return(
        <>
        <Navbar/>

        {
            data.slice(0,6).map((elem)=>{
                return(
                    <div key={elem.id} style={{textAlign:'center' , borderRadius:'32px',marginTop:'20px', background:'#817d7e',color:'whitesmoke',marginLeft:'248px',width:'53rem'}}>
                        <Link href={`/${elem.id}`} passHref>
                        <h3 style={{background:'blue' , width:'30px',marginLeft:'25rem',borderRadius:'27px',cursor:'crosshair'}}>{elem.id}</h3>
                        </Link>
                        <hr style={{marginTop:'4px'}}/>
                        {/* // <Link href={`/${elem.id}`}> */}
                        <h5>{elem.title}</h5>
                        {/* // </Link> */}
                        {/* <h3>{elem.title}</h3> */}

                    </div>
                )
            })
        }
        </>
    )
}

export default blog
