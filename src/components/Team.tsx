import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function Team() {
  const teamRoles = [
    {
      icon: "👑",
      title: "Адміністратор",
      description: "управління всією діяльністю."
    },
    {
      icon: "👨‍💻",
      title: "Розробник",
      description: "створення ігрових систем."
    },
    {
      icon: "🎨",
      title: "Дизайнер",
      description: "графіка, UI/UX, брендинг."
    },
    {
      icon: "🗺",
      title: "Маппер",
      description: "карти та об'єкти."
    },
    {
      icon: "🎤",
      title: "Менеджер / Ком'юніті",
      description: "координація команди та робота з гравцями."
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Наш мінімальний склад</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamRoles.map((role, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">{role.icon}</div>
                <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                <CardDescription className="text-base">
                  {role.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}