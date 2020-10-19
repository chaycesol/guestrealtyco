import {styled } from "frontity";
import Link from "../link";

const Taxonomies = ({ tax, name }) => {
  const buttonBg =
    name === "Tags" ? "secondary.gradient.small" : "primary.gradient.small";
  return (
    <div className="taxonomies">
      <span>{name}: </span>

      {tax &&
        tax.map(item => (
          <Button variant={buttonBg} key={item.id} sx={{ mx: 5, mb: 10 }}>
            <Link link={item.link}>{item.name}</Link>
          </Button>
        ))}
    </div>
  );
};

export default Taxonomies;

const Button = styled.button`
  height: 50px;
  width: 125px;
  border-radius: 6px;
  margin: 10px;
  font-weight: 600;
  background: #ccb25c;
  color: #013110;
  border: 2px solid #ccb25c;
`