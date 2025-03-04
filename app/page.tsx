import AgentPulse from "@/components/AgentPulse";
import { Button } from "@/components/ui/button";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Brain, ChartBar, ImageIcon, Link, MessageSquare, Sparkles, Video } from "lucide-react";

const steps = [
  {
    title: "1. Connect Your Content",
    description: "Connect your Youtube channel or upload your video content to get started.",
    icon: Video,
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personal agent analyzes every aspect of your content.",
    icon: Brain,
  },
  {
    title: "3. Receive Intelligence",
    description: "Get detailed insights and strategic recommendations from your AI agent.",
    icon: MessageSquare,
  },
];


const features = [
  {
    title: "AI Analysis",
    description: "Get deep insights into your video content with our advanced AI-powered analysis. Understand viewer engagement and content quality.",
    icon: Brain,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Smart Transcription",
    description: "Get detailed insights and analytics on your video content.",
    icon: ChartBar,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "Thumbnail Generation",
    description: "Generate eye-catching thumbnails for your videos with our AI-powered thumbnail generator.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Title Generation",
    description: "Generate catchy titles for your videos with our AI-powered title generator.",
    icon: MessageSquare,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Shot Script",
    description: "Generate a shot script for your videos with our AI-powered shot script generator.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    title: "Discuss with Your Ai Agent",
    description: "Discuss with your AI agent to get insights and suggestions on your video content.",
    icon: Sparkles,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" >

      {/* Hero Section */}
      < section className="py-20 bg-gradient-to-b from-white to-gray-100" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="orange" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Your Personal{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Ai Content Agent </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your video content with our AI-powered tools. Get deep insights, generate thumbnails, titles, and more.
              Get started in seconds. </p>
            {/* Youtube Video Form */}
            <YoutubeVideoForm />


          </div>

        </div>
      </section >
      {/* Features Section */}
      < section className="py-20 bg-white" >
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{/* Feature Grid */}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-400 transition-all duration-300">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${feature.iconBg}`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}

          </div>
        </div>
      </section >


      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your Ai Agent in 3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}

          </div>
        </div>

      </section>

      {/* Footer Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Meet Your AI Content Agent?
          </h2>
          <p className="text-xl text-orange-50">
            Get started today and transform your video content.
          </p>
          <Button variant="outline" className="mt-8 bg-white text-orange-500 hover:bg-orange-100 hover:text-orange-600">
            Get Started!
          </Button>
        </div>
      </section>

    </div >
  );
}
