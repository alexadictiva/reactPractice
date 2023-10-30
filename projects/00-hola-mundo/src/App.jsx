
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){
  return(
    <div className="tw-follows">
      <TwitterFollowCard initialIsFollowing userName='alexadictiva' name='Alexandra Perex Blanco'/>
      <TwitterFollowCard initialIsFollowing={false} userName='midudev' name='Migue'/>
    </div>

  )
}