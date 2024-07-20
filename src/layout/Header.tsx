import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Header = ({ className, ...props }: HeaderProps): JSX.Element => (
  <header className={className} {...props}>
    <Link to="/">Home</Link>
    <Link to="/acts">Acts Test</Link>
    <Link to="/ds">DesignSystemTest</Link>
    <Link to="/select">AsyncSelect</Link>
    <Link to="/test">Test</Link>
    <Link to="/form">Form (HookForm + Yup)</Link>
    <Link to="/components">Components</Link>
  </header>
);

export default Header;
