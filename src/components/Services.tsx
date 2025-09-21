import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: "🎮",
      title: "Розробка серверів та систем",
      description: "створення унікальних проєктів під замовлення."
    },
    {
      icon: "💎",
      title: "Продаж готових продуктів",
      description: "скрипти, карти, ресурси для MTA."
    },
    {
      icon: "📈",
      title: "Інвестиції в проєкти",
      description: "допомога перспективним командам."
    },
    {
      icon: "🎨",
      title: "Дизайн та мапінг",
      description: "брендинг, інтерфейси, ігрові світи."
    },
    {
      icon: "🤝",
      title: "Партнерство та підтримка",
      description: "консультації та технічний супровід."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Що ми пропонуємо?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}