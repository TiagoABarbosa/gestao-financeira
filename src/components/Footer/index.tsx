import * as C from './styles';

const Footer = () => {
  return (
    <C.Footer>
    <footer className="text-center py-2">
      <div className="container">
        <p className="text-secondary">
        ©️ 2022 - Aplicativo desenvolvido por{" "} 
          <a href="https://www.linkedin.com/in/tiagoalvestec/" target="_blank" rel="noreferrer">
            Tiago Barbosa
          </a>
        </p>
      </div>
    </footer>
    </C.Footer>
  );
};

export default Footer;