import Navbar from "./nav"
 
export const getStaticPaths=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map((elem)=>{
        return{
            params:{
                pageno:elem.id.toString(),
            },
        }
    })
    return{
        paths,
        fallback:false ,    
    }
}

export const getStaticProps=async(context)=>{
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return{
        props:{
            data,
        },
    }
}

// ................................................ssr.........................
// export const getServerSideProps=async(context)=>{
//     const id = context.params.pageno;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const data = await res.json()

//     return{
//         props:{
//             data,
//         },
//     }
// }

 const data = ({data}) => {
  return (
    <>
        <Navbar/>
        <div key={data.id} style={{background:'grey', color:'whitesmoke',marginTop:'77px',width:'52rem', marginLeft:'254px',borderRadius:'61px', padding:'10px',borderColor:'black',borderStyle:'groove'}} >
                        
            <h4 style={{background:'black',paddingLeft:'9px' , width:'30px',marginLeft:'24rem',borderRadius:'27px'}}>{data.id}</h4>
             <hr/>           
            <h3 style={{width:'36rem',marginLeft:'132px'}}>{data.title}</h3>

            <p style={{width:'36rem',marginLeft:'132px', color:'black'}}>{data.body }</p>

        </div>
    </>
  )
}
export default data