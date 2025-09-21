import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTgzOTg5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern Office Team Collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl">Хто ми?</h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Zyntera Interactive — це команда професіоналів, які об'єдналися, щоб створювати сучасні ігрові продукти 
              та допомагати новим проєктам знаходити своє місце на ринку.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ми інвестуємо, розробляємо, продаємо та підтримуємо ігрові сервери, ресурси й інноваційні рішення.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}