import Profile from "./components/Profile"

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="FullStack JavaScript Developer"
        email="jhondoe@email.com"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        xUrl="https://x.com"
      />
    </div>
  )
}