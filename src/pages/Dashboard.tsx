import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const moodData = [
    { day: "Mon", mood: "Happy", score: 85, color: "text-green-500" },
    { day: "Tue", mood: "Neutral", score: 65, color: "text-yellow-500" },
    { day: "Wed", mood: "Stressed", score: 35, color: "text-red-500" },
    { day: "Thu", mood: "Good", score: 75, color: "text-blue-500" },
    { day: "Fri", mood: "Great", score: 90, color: "text-green-500" },
    { day: "Sat", mood: "Relaxed", score: 80, color: "text-blue-500" },
    { day: "Sun", mood: "Happy", score: 85, color: "text-green-500" },
  ];

  const recommendations = [
    {
      icon: "fas fa-meditation",
      title: "Mindfulness Session",
      description: "Take 10 minutes for guided meditation",
      time: "10 min"
    },
    {
      icon: "fas fa-walking",
      title: "Nature Walk",
      description: "Get some fresh air and sunlight",
      time: "20 min"
    },
    {
      icon: "fas fa-music",
      title: "Calming Music",
      description: "Listen to your relaxation playlist",
      time: "15 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-6xl px-5 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-inter mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground font-inter">
            Here's your wellness overview for this week
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-2xl text-green-600"></i>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weekly Average</p>
                <p className="text-2xl font-bold text-foreground">73%</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-calendar-check text-2xl text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Check-ins</p>
                <p className="text-2xl font-bold text-foreground">6/7</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-target text-2xl text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Goals Met</p>
                <p className="text-2xl font-bold text-foreground">4/5</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mood Tracking */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 font-inter">
              Weekly Mood Tracker
            </h3>
            <div className="space-y-4">
              {moodData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground w-8">
                      {data.day}
                    </span>
                    <span className={`text-sm font-medium ${data.color}`}>
                      {data.mood}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 ml-4">
                    <Progress value={data.score} className="flex-1" />
                    <span className="text-sm text-muted-foreground w-8">
                      {data.score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 font-inter">
              Today's Recommendations
            </h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className={`${rec.icon} text-primary`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{rec.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-bold text-foreground mb-6 font-inter">
            Quick Check-in
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-500 hover:bg-green-600">
              <i className="fas fa-smile mr-2"></i>
              Great Day
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              <i className="fas fa-meh mr-2"></i>
              Okay Day
            </Button>
            <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-50">
              <i className="fas fa-frown mr-2"></i>
              Tough Day
            </Button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              <i className="fas fa-sad-tear mr-2"></i>
              Need Support
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;