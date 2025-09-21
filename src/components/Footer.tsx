export function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">Z</span>
            </div>
            <span className="text-lg">Zyntera Interactive</span>
          </div>
          
          <p className="text-muted-foreground text-center">
            © 2025 Zyntera Interactive. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}