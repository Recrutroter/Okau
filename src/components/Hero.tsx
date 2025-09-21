import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl leading-tight">
              Майбутнє ігор починається з{" "}
              <span className="text-primary">Zyntera Interactive</span>
            </h1>
            
            <p className="text-muted-foreground text-lg lg:text-xl max-w-lg">
              Ми — студія та інвестиційна платформа, яка створює, розвиває та підтримує ігрові проєкти на MTA та інших платформах.
              Наша мета — поєднувати талановитих людей і давати їм ресурси для втілення ідей у реальність.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                🔹 Дізнатися більше
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                🔹 Стати інвестором
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684560208011-8d005742d9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODQ0ODc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gaming Technology Workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}