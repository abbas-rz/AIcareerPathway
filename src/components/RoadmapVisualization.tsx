import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { CareerRoadmap, RoadmapPath, RoadmapSkill } from '@/lib/gemini'
import { 
  Clock, 
  BookOpen, 
  Globe, 
  Code, 
  FileText, 
  Play, 
  GraduationCap,
  ExternalLink,
  DollarSign,
  TrendingUp,
  Target
} from 'lucide-react'

interface RoadmapVisualizationProps {
  roadmap: CareerRoadmap
  onReset: () => void
}

const SkillCard: React.FC<{ skill: RoadmapSkill }> = ({ skill }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'course': return <GraduationCap className="w-4 h-4" />
      case 'book': return <BookOpen className="w-4 h-4" />
      case 'documentation': return <FileText className="w-4 h-4" />
      case 'project': return <Code className="w-4 h-4" />
      case 'tutorial': return <Play className="w-4 h-4" />
      default: return <Globe className="w-4 h-4" />
    }
  }

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{skill.title}</CardTitle>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
              {skill.level}
            </span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {skill.estimatedTime}
            </div>
          </div>
        </div>
        <CardDescription>{skill.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {skill.prerequisites.length > 0 && (
          <div className="mb-4">
            <h5 className="font-medium text-sm mb-2">Prerequisites:</h5>
            <div className="flex flex-wrap gap-2">
              {skill.prerequisites.map((prereq, index) => (
                <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  {prereq}
                </span>
              ))}
            </div>
          </div>
        )}
        <div>
          <h5 className="font-medium text-sm mb-3">Learning Resources:</h5>
          <div className="space-y-2">
            {skill.resources.map((resource, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="text-muted-foreground mt-0.5">
                  {getResourceIcon(resource.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{resource.title}</span>
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const PathCard: React.FC<{ path: RoadmapPath }> = ({ path }) => {
  return (
    <div className="mb-8">
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-primary">{path.title}</CardTitle>
              <CardDescription className="mt-1">{path.description}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="font-semibold">{path.estimatedDuration}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {path.skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export const RoadmapVisualization: React.FC<RoadmapVisualizationProps> = ({ roadmap, onReset }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-primary">{roadmap.career} Roadmap</h1>
          <Button onClick={onReset} variant="outline">
            Generate New Roadmap
          </Button>
        </div>
        <p className="text-lg text-muted-foreground mb-6">{roadmap.description}</p>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Average Salary</div>
                  <div className="font-semibold">{roadmap.averageSalary}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Market Demand</div>
                  <div className="font-semibold">High</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Learning Paths</div>
                  <div className="font-semibold">{roadmap.paths.length}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Skills Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {roadmap.keySkills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Career Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{roadmap.overview}</p>
          </CardContent>
        </Card>

        {/* Market Demand */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Market Demand & Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{roadmap.marketDemand}</p>
          </CardContent>
        </Card>
      </div>

      {/* Learning Paths */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Learning Paths</h2>
        {roadmap.paths.map((path) => (
          <PathCard key={path.id} path={path} />
        ))}
      </div>
    </div>
  )
}
