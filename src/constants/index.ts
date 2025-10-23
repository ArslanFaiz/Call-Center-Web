
interface FeatureItem {
  icon: string
  title: string
  description: string
}
import { ThumbsUp, Clock, TrendingUp } from "lucide-react"
import { Phone, Bell, MessageSquare } from "lucide-react"
 
 export const feature = [
    {
      icon: ThumbsUp,
      title: "Save Time And Money",
      highlight: true,
    },
    {
      icon: Clock,
      title: "24/7 Consultant Availability",
      highlight: false,
    },
    {
      icon: TrendingUp,
      title: "Scale Your Business",
      highlight: false,
    },
  ]

   export const leftCards = [
    {
      icon: Phone,
      title: "Call Center",
      description: "25-30 Dials per hour on all Lead types",
      highlight: true,
    },
    {
      icon: Bell,
      title: "Reminder Calls",
      description: "Reminder calls prior to Zoom meeting times",
      highlight: false,
    },
  ]
export const centerCards = [
    {
      icon: MessageSquare,
      title: "Weekend Dialing",
      description: "Providing Saturday and Sunday dialing as per agent's requirements",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Our Team is available and in Touch with agents directly 24/7",
    },
  ]
  
export const features: FeatureItem[] = [
  {
    icon: "🌐",
    title: "Multi Language Support",
    description:
      "Support your customers in their preferred language with our multilingual booking system.",
  },
  {
    icon: "👔",
    title: "Professional Bookers",
    description:
      "Our trained and experienced team ensures professional handling of all your bookings.",
  },
  {
    icon: "📊",
    title: "QA Monitoring",
    description:
      "Comprehensive quality assurance monitoring for all your call and booking interactions.",
  },
]
export const services = [
    {
      title: 'Planning & Briefing',
      icon: '📋',
      description:'Delivering excellence through innovation and strategy.'
    },
    {
      title: 'Execution',
      icon: '📞',
      description:'Delivering excellence through innovation and strategy.'
    },
    {
      title: 'Evaluation',
      icon: '📊',
      description:'Delivering excellence through innovation and strategy.'

    }
  ]
  export const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "BLOG", path: "/blog" },
  ]
