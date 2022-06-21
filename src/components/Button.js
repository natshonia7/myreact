export default function Button({type, text, onClick}){
    return(
        
            <button 
            onClick={onClick}
            className='Button' style={{fontSize: '22px', color:'yellow',}  }
            type={type}
            
            
            >
            
             {text}
            </button>
            
        
    )
}
