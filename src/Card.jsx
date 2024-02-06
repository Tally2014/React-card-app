import profilePic from './assets/naruto crying.webp'

export default function Card() {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile Picture" />
        <h2 className="card-title">Emotional Naruto</h2>
        <p>Flashbacks reveal Naruto's painful orphaned and outcast childhood.</p>
    </div>
  )
}
