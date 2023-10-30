import { useState } from 'react'
import './App.css'

export function TwitterFollowCard({userName, name, initialIsFollowing}){
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  function manejadorClick(){
    setIsFollowing(!isFollowing)
  }
  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Avatar image" />
        <div className='tw-followCard-info'>
          <strong className=''>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={manejadorClick} className={isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'}>{isFollowing ? 'Siguiendo' : 'Seguir'} </button>
      </aside>
    </article>
  )
}




