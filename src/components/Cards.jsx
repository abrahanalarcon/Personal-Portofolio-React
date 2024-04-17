export default function Cards({cards}){

    const { id, name , image, url } = cards ;

 return(
    <div className="producto">
    <a href={url} target="_blank">
        <img className="producto__imagen separacion-1" src={`/img/${image}.png`} alt="imagen_ToDoList"/>
        <div className="producto__informacion">
            <p className="producto__nombre">{name}</p>
            
        </div>
    </a>
</div>
   )
}