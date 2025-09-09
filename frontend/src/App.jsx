import './App.css'
import Layout from './components/layout/Layout.jsx'
import Hero from './components/home/Hero.jsx'
import UploadCard from './components/home/UploadCard.jsx'

function App() {
  return (
    <Layout>
      <div>
        <Hero />
        <UploadCard />
      </div>
    </Layout>
  )
}

export default App
