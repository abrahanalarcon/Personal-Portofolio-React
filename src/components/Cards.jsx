import BasicTweet from '../img/1.png';

export default function Cards(){
 return(
    <div className="producto">
    <a href="https://peppy-smakager-6c1516.netlify.app/" target="_blank">
        <img className="producto__imagen separacion-1" src={BasicTweet} alt="imagen_ToDoList"/>
        <div className="producto__informacion">
            <p className="producto__nombre">Basic Tweet</p>
            
        </div>
    </a>
</div>
   )
}