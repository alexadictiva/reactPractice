import './App.css'

export function App(){
  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/alexadictiva" alt="Avatar image" />
        <div className='tw-followCard-info'>
          <strong className=''>Alexandra</strong>
          <span className='tw-followCard-infoUserName'>@alexadictiva</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  )
}