import { useState } from 'react'
import { RoadmapForm } from './components/RoadmapForm'
import { RoadmapVisualization } from './components/RoadmapVisualization'
import type { CareerRoadmap } from './lib/gemini'
import './App.css'

function App() {
  const [roadmap, setRoadmap] = useState<CareerRoadmap | null>(null)

  const handleRoadmapGenerated = (generatedRoadmap: CareerRoadmap) => {
    setRoadmap(generatedRoadmap)
  }

  const handleReset = () => {
    setRoadmap(null)
  }

  return (
    <div className="dark min-h-screen bg-background">
      {roadmap ? (
        <RoadmapVisualization roadmap={roadmap} onReset={handleReset} />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <RoadmapForm onRoadmapGenerated={handleRoadmapGenerated} />
        </div>
      )}
    </div>
  )
}

export default App
