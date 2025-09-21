import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Investors() {
  const benefits = [
    {
      icon: "📌",
      title: "Чітка бізнес-модель"
    },
    {
      icon: "💰",
      title: "Прибуткові ігрові проєкти"
    },
    {
      icon: "🤝",
      title: "Прозора співпраця та звітність"
    },
    {
      icon: "🚀",
      title: "Постійний розвиток та нові ідеї"
    }
  ];

  return (
    <section id="investors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl">Чому інвестувати з нами?</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{benefit.icon}</span>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <Button size="lg" className="text-lg px-8">
              Стати інвестором
            </Button>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mzc2OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Digital Innovation Technology"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}