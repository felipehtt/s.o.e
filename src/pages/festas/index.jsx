import "./index.scss";

import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/footer";

export default function Festas() {
  return (
    <div className="pagina-festas pagina">
      <Cabecalho />

      <main>
        <div className="top">
          <p></p>
        </div>

        <div className="images">
          <div className="conj">
            <img
              src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain"
              alt=""
            />
            <p>Festas Infantis</p>
          </div>

          <div className="conj">
            <img
              src="https://casarpontocom-inspiracoes.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/02/festa-de-casamento-Foto-Freepik-6.jpg"
              alt=""
            />
            <p>Festas Jovens</p>
          </div>

          <div className="conj">
            <img
              src="https://lh7-us.googleusercontent.com/7mf8WmPAFQsRVxxVOXwU4t86HaT-Xk3iucLBXn8K3vcB1-3cVd_M1F--WJZsTQMSHWMSipZNqAz4LRM8gGpavDDTLSpi1ukI0RbNijv0pq1lhuE9xB_NJmPG9WjHmvxxZpebrgFOQJlkl2lx_ZeZFVU"
              alt=""
            />
            <p>Festas Adultos</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
