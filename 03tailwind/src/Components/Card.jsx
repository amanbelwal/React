import defaultImage from "../assets/image/hello.png.jpeg"
import amanImage from "../assets/image/Aman.jpeg"

function URL (props)
{
  const obj={1:"https://www.google.com",2:"https://www.youtube.com"}
  if(props.btnText === "Aman")
     window.open(obj[1],"_blank")
    else
    window.open(obj[2],"_blank")
}
function Card(props) {
  const imageSrc = props.btnText === "Aman" ? amanImage : defaultImage;
return (    
<>
<div className = " p-1"></div>
          <div className="flex flex-col rounded-xl p-1"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src={imageSrc}
            alt="nft-gif"
            width="300"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-1 ">
          <button 
            className="bg-pink-400 h-10 flex items-center justify-center" 
            onClick={()=>URL(props)}> 
            {props.btnText}
            </button>
        </div>
        </div>
      </>
 )     
}
export default Card;