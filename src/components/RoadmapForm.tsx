import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { geminiService } from '@/lib/gemini'
import type { CareerRoadmap } from '@/lib/gemini'
import { Search, Settings, Loader2, Play } from 'lucide-react'

interface RoadmapFormProps {
  onRoadmapGenerated: (roadmap: CareerRoadmap) => void
}

export const RoadmapForm: React.FC<RoadmapFormProps> = ({ onRoadmapGenerated }) => {
  const [career, setCareer] = useState('')
  const [experience, setExperience] = useState('')
  const [goals, setGoals] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!apiKey) {
      setShowApiKeyInput(true)
      return
    }

    if (!career.trim() || !experience.trim() || !goals.trim()) {
      alert('Please fill in all fields')
      return
    }

    setIsLoading(true)
    try {
      geminiService.initialize(apiKey)
      const roadmap = await geminiService.generateRoadmap(career, experience, goals)
      onRoadmapGenerated(roadmap)
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : 'Failed to generate roadmap'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card className="border-2 border-border/50 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Career Roadmap Generator
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Generate personalized career roadmaps powered by AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {showApiKeyInput && (
            <div className="space-y-2 p-4 bg-muted/50 rounded-lg border border-border">
              <label htmlFor="apiKey" className="text-sm font-medium flex items-center gap-2 text-foreground">
                <Settings className="w-4 h-4" />
                Google Gemini API Key
              </label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-background"
              />
              <p className="text-xs text-muted-foreground">
                Get your free API key from{' '}
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Google AI Studio
                </a>
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="career" className="text-sm font-medium">
                Career Field
              </label>
              <Input
                id="career"
                placeholder="e.g., Software Developer, Data Scientist, UX Designer"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Current Experience Level
              </label>
              <Input
                id="experience"
                placeholder="e.g., Complete beginner, 2 years experience, Intermediate"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="goals" className="text-sm font-medium">
                Career Goals & Interests
              </label>
              <Textarea
                id="goals"
                placeholder="e.g., I want to become a full-stack developer, interested in machine learning, looking to switch careers from marketing"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                disabled={isLoading}
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold"
              disabled={isLoading}
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Your Roadmap...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Generate My Roadmap
                </>
              )}
            </Button>

            {!showApiKeyInput && (
              <div className="space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApiKeyInput(true)}
                  className="w-full"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configure API Key
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    const demoRoadmap = {
                      career: career || "Software Developer",
                      description: `A comprehensive career path for ${career || "Software Developer"} professionals.`,
                      overview: `${career || "Software Development"} is a dynamic field with excellent growth opportunities.`,
                      marketDemand: "High demand with excellent job prospects.",
                      averageSalary: "$70,000 - $150,000+",
                      keySkills: ["Programming", "Problem Solving", "Web Development", "Database Management"],
                      paths: [
                        {
                          id: "frontend",
                          title: "Frontend Development",
                          description: "Master client-side development",
                          category: "Web Development",
                          estimatedDuration: "4-6 months",
                          skills: [
                            {
                              id: "html-css",
                              title: "HTML & CSS",
                              description: "Learn the building blocks of web pages",
                              level: "beginner" as const,
                              estimatedTime: "3-4 weeks",
                              prerequisites: [],
                              resources: [
                                {
                                  type: "course" as const,
                                  title: "HTML & CSS Fundamentals",
                                  url: "https://www.freecodecamp.org",
                                  description: "Free comprehensive course"
                                }
                              ]
                            },
                            {
                              id: "javascript",
                              title: "JavaScript",
                              description: "Master the language of the web",
                              level: "intermediate" as const,
                              estimatedTime: "6-8 weeks",
                              prerequisites: ["HTML & CSS"],
                              resources: [
                                {
                                  type: "course" as const,
                                  title: "JavaScript Complete Course",
                                  url: "https://javascript.info",
                                  description: "Modern JavaScript tutorial"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                    onRoadmapGenerated(demoRoadmap)
                  }}
                  className="w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Demo (No API Key Required)
                </Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
