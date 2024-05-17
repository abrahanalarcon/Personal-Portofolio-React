export default function Cards_Serv({cards}){

    const { id, service , description, url } = cards ;

 return(
    <div className="card">
            <h1 className="centrar-texto">{service}</h1>
                <section className="separacion">
                 <p>{description}</p>
                 
                </section>
                
                 
                <a href={url}
                className="button sin-box-shadow">View</a>
</div>
   )
}