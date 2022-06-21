export default function Header(){
    const navigation=[
        'Home',
        'About',
        "Contact Us"
     ]
        
    return(
        <header>
        <nav>
          <ul>
            {
              navigation.map((li, index)=>{
                return(
                  <li key={index}>
                    <a className='navLink' href={`/${li}`}>{li}</a>
                    </li>
                )
              })
            }
          </ul>
        </nav>
       </header>
          
    )
}