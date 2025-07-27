import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai'

export interface RoadmapSkill {
  id: string
  title: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  prerequisites: string[]
  resources: {
    type: 'course' | 'book' | 'documentation' | 'project' | 'tutorial'
    title: string
    url?: string
    description: string
  }[]
}

export interface RoadmapPath {
  id: string
  title: string
  description: string
  category: string
  skills: RoadmapSkill[]
  estimatedDuration: string
}

export interface CareerRoadmap {
  career: string
  description: string
  paths: RoadmapPath[]
  overview: string
  marketDemand: string
  averageSalary: string
  keySkills: string[]
}

class GeminiService {
  private genAI: GoogleGenerativeAI | null = null
  private model: GenerativeModel | null = null

  initialize(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey)
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  }

  async generateRoadmap(career: string, experience: string, goals: string): Promise<CareerRoadmap> {
    if (!this.model) {
      throw new Error('Gemini AI not initialized. Please provide an API key.')
    }

    const prompt = `Create a career roadmap for "${career}" in JSON format.

Experience: ${experience}
Goals: ${goals}

Return this exact JSON structure:
{
  "career": "${career}",
  "description": "Brief career description",
  "overview": "Career overview and opportunities",
  "marketDemand": "Market demand information",
  "averageSalary": "Salary range",
  "keySkills": ["skill1", "skill2", "skill3"],
  "paths": [
    {
      "id": "path1",
      "title": "Learning Path Name",
      "description": "Path description",
      "category": "Category",
      "estimatedDuration": "6-12 months",
      "skills": [
        {
          "id": "skill1",
          "title": "Skill Name",
          "description": "Skill description",
          "level": "beginner",
          "estimatedTime": "2-4 weeks",
          "prerequisites": [],
          "resources": [
            {
              "type": "course",
              "title": "Resource Name",
              "url": "https://example.com",
              "description": "Resource description"
            }
          ]
        }
      ]
    }
  ]
}

Create 2-3 paths with 3-5 skills each. Return ONLY valid JSON.`

    try {
      const result = await this.model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      
      // Clean up the response to ensure it's valid JSON
      let cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      
      // Remove any leading/trailing non-JSON content
      const jsonStart = cleanedText.indexOf('{')
      const jsonEnd = cleanedText.lastIndexOf('}')
      
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanedText = cleanedText.substring(jsonStart, jsonEnd + 1)
      }
      
      try {
        const roadmap = JSON.parse(cleanedText)
        return roadmap as CareerRoadmap
      } catch {
        console.error('Failed to parse JSON response:', cleanedText)
        // Return a fallback roadmap if parsing fails
        return this.getFallbackRoadmap(career, experience, goals)
      }
    } catch (error) {
      console.error('Error generating roadmap:', error)
      // Return a fallback roadmap if the API call fails
      return this.getFallbackRoadmap(career, experience, goals)
    }
  }

  private getFallbackRoadmap(career: string, _experience: string, _goals: string): CareerRoadmap {
    return {
      career,
      description: `A comprehensive career path for ${career} professionals.`,
      overview: `${career} is a dynamic field with excellent growth opportunities. This roadmap will guide you through the essential skills and knowledge needed to succeed.`,
      marketDemand: "High demand with excellent job prospects and competitive salaries.",
      averageSalary: "$50,000 - $120,000 depending on experience and location",
      keySkills: ["Problem Solving", "Communication", "Technical Skills", "Project Management"],
      paths: [
        {
          id: "fundamentals",
          title: "Fundamentals Path",
          description: "Build your foundation with core concepts and skills",
          category: "Foundation",
          estimatedDuration: "3-6 months",
          skills: [
            {
              id: "basics",
              title: "Core Fundamentals",
              description: `Learn the basic concepts and principles of ${career}`,
              level: "beginner" as const,
              estimatedTime: "4-6 weeks",
              prerequisites: [],
              resources: [
                {
                  type: "course" as const,
                  title: `Introduction to ${career}`,
                  url: "https://www.coursera.org",
                  description: "Comprehensive introduction course"
                },
                {
                  type: "book" as const,
                  title: `${career} Handbook`,
                  description: "Essential reading for beginners"
                }
              ]
            },
            {
              id: "practice",
              title: "Hands-on Practice",
              description: "Apply your knowledge through practical exercises",
              level: "intermediate" as const,
              estimatedTime: "6-8 weeks",
              prerequisites: ["Core Fundamentals"],
              resources: [
                {
                  type: "project" as const,
                  title: "Practice Projects",
                  description: "Build real-world projects to solidify your understanding"
                }
              ]
            }
          ]
        },
        {
          id: "advanced",
          title: "Advanced Skills Path",
          description: "Develop specialized skills and expertise",
          category: "Specialization",
          estimatedDuration: "4-8 months",
          skills: [
            {
              id: "advanced-concepts",
              title: "Advanced Concepts",
              description: "Master complex topics and advanced techniques",
              level: "advanced" as const,
              estimatedTime: "8-12 weeks",
              prerequisites: ["Core Fundamentals", "Hands-on Practice"],
              resources: [
                {
                  type: "course" as const,
                  title: `Advanced ${career} Techniques`,
                  description: "Deep dive into advanced concepts"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

export const geminiService = new GeminiService()
