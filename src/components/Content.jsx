import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  // l'argument props permet de récupérer les props transmises au composant via son parent !
  // Elles se présentent sous forme d'OBJET Javascript !!!
  console.log(props);
  return (
    // <div style={{ color: props.color }}>
    <div style={{ color: "grey" }}>
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
};
export default Content;
