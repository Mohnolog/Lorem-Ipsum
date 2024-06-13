// pour le CSS, pas de nom donné à l'import :
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Content
        name="Lorem"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet
         commodo ipsum. Nulla facilisi. Proin interdum tortor sed ipsum elementum
          vehicula. Vestibulum arcu erat, interdum ac ligula eu, consectetur faucibus
           sem. Nullam eu tellus neque. Quisque et congue felis. Duis eget nulla
            finibus, commodo felis sed, molestie felis. Vivamus blandit volutpat
             diam, sed eleifend urna interdum sed. Vivamus molestie suscipit vulputate."
      ></Content>
      <Content
        name="Ipsum"
        text="Cras sit amet justo eget lorem lacinia consectetur
       nec et urna. Vivamus varius ligula aliquet, pulvinar est vitae, finibus magna.
        Vivamus sit amet ligula magna. Maecenas quis posuere tellus. Ut tempus pulvinar
         faucibus. Mauris in ullamcorper erat, ut ullamcorper massa. Integer at rutrum
          lorem. Ut sed viverra risus. In dolor dui, fringilla vitae placerat quis,
           malesuada sit amet nunc. Vestibulum ornare congue consequat. Duis posuere
            urna quis ligula lacinia, et laoreet felis suscipit. Fusce quis orci lorem.
             Vestibulum dignissim, lacus sed ornare rutrum, massa orci vulputate risus,
              sed imperdiet neque enim nec mauris. Nullam orci tortor, aliquam id velit
               in, finibus consequat ligula. Maecenas quis sem non ante tristique
                fringilla sed eu tortor."
      ></Content>
    </>
  );
}

export default App;
