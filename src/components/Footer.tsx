import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="text-sm text-muted-foreground">
            © Светлана Геннадьевна Коновалова, 2006–{currentYear}
          </div>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <span className="text-sm text-muted-foreground">•</span>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Пользовательское соглашение
            </Link>
            <span className="text-sm text-muted-foreground">•</span>
            <Link
              to="/blog-index"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
