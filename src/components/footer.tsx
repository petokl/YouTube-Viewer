import packageJson from '../../package.json';

interface Props {
  className?: string
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="text-muted">{new Date().getFullYear()} © Karagiannis Aris Ver.: {packageJson.version}</p>
      </div>
    </footer>
  );
};

export default Footer;
