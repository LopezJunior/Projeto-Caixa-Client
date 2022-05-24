import "./Navbar.css";
import { ActionMode } from "../../constants/index";
import sacola from "../../assets/icons/sacola.svg";
import logo from "../../assets/logo.svg";
import paleta from "../../assets/icons/paleta.svg";
import atualizar from "../../assets/icons/atualizar.svg";
import deletar from "../../assets/icons/deletar.svg";

function Navbar({ createPaleta, updatePaleta, mode, deletePaleta, openBag }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__paleta Paleta ${
              mode === ActionMode.ATUALIZAR && "Paleta--ativa"
            }`}
            onClick={() => updatePaleta()}
          >
            <img
              src={atualizar}
              width="40px"
              className="Paleta__icone"
              alt="Editar paleta"
            />
          </button>

          <button
            type="button"
            className={`Opcoes__paleta Paleta ${mode === ActionMode.DELETAR && 'Paleta--deletar'}`}
            onClick={() => deletePaleta()}>

            <img src={deletar} width="40px" className="Paleta__icone" alt="Deletar paleta" />
          </button>

          <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => createPaleta()}
          >
            <img
              src={paleta}
              width="40px"
              className="Paleta__icone"
              alt="Adiconar paleta"
            />
          </button>
          <div className="Opcoes__sacola Sacola" onClick={openBag}>
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
