import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export function Contacts() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "info@zyntera.com",
      href: "mailto:info@zyntera.com"
    },
    {
      icon: "💬",
      title: "Discord HQ",
      value: "Приєднатися до HQ",
      href: "#"
    },
    {
      icon: "💬",
      title: "Discord Community",
      value: "Приєднатися до спільноти",
      href: "#"
    },
    {
      icon: "📱",
      title: "Telegram",
      value: "Написати в Telegram",
      href: "#"
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Залишайся на зв'язку з нами</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((contact, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{contact.icon}</div>
                <CardTitle className="text-lg mb-2">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <a 
                  href={contact.href}
                  className="text-primary hover:underline transition-colors"
                >
                  {contact.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}