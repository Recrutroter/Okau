import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground">Z</span>
          </div>
          <span className="text-lg">Zyntera Interactive</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-primary transition-colors">Головна</a>
          <a href="#about" className="hover:text-primary transition-colors">Про нас</a>
          <a href="#services" className="hover:text-primary transition-colors">Послуги</a>
          <a href="#team" className="hover:text-primary transition-colors">Команда</a>
          <a href="#investors" className="hover:text-primary transition-colors">Інвесторам</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакти</a>
        </nav>
        
        <Button>Приєднатися</Button>
      </div>
    </header>
  );
}