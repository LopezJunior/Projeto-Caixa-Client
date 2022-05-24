import "./Home.css";
import PaletaLista from "../components/PaletaLista/PaletaLista";
import Navbar from "../components/Navbar/Navbar";
import AdicionaEditaPaletaModal from "../components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import { useState } from "react";
import { ActionMode } from "../constants/index";
import DeletaPaletaModal from "../components/DeletaPaletaModal/DeletaPaletaModal";
import SacolaModal from "../components/SacolaModal/SacolaModal";
import { SacolaService } from "../services/SacolaService";

function Home() {
  const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
    useState(false);
  const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [paletaParaEditar, setPaletaParaEditar] = useState();
  const [paletaParaDeletar, setPaletaParaDeletar] = useState();
  const [paletaEditada, setPaletaEditada] = useState();
  const [paletaRemovida, setPaletaRemovida] = useState();
  const [canOpenBag, setCanOpenBag] = useState();

  const abrirSacola = async () => {
    const lista = JSON.parse(localStorage.getItem('sacola'));
    const sacola = lista.filter(i => i.quantidade > 0);

    await  SacolaService.create(sacola);
    setCanOpenBag(true);
  }

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleDeletePaleta = (paletaToDelete) => {
    setPaletaParaDeletar(paletaToDelete);
  };

  const handleUpdatePaleta = (paletaToUpdate) => {
    setPaletaParaEditar(paletaToUpdate);
    setCanShowAdicionaPaletaModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaPaletaModal(false);
    setPaletaParaAdicionar();
    setPaletaParaDeletar();
    setPaletaParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };
  return (
    <div className="Home">
      {/* <Navbar
        mode={modoAtual}
        // createPaleta={() => setCanShowAdicionaPaletaModal(true)}
        // deletePaleta={() => handleActions(ActionMode.DELETAR)}
        // updatePaleta={() => handleActions(ActionMode.ATUALIZAR)}
        openBag={abrirSacola}
      /> */}
      <span className="Home__container">
        <PaletaLista
          mode={modoAtual}
          paletaCriada={paletaParaAdicionar}
          paletaEditada={paletaEditada}
          deletePaleta={handleDeletePaleta}
          updatePaleta={handleUpdatePaleta}
          paletaRemovida={paletaRemovida}
        />
        {canShowAdicionaPaletaModal && (
          <AdicionaEditaPaletaModal
            mode={modoAtual}
            paletaToUpdate={paletaParaEditar}
            onUpdatePaleta={(paleta) => setPaletaEditada(paleta)}
            closeModal={handleCloseModal}
            onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
          />
        )}
        {
          paletaParaDeletar &&
          <DeletaPaletaModal
            paletaParaDeletar={paletaParaDeletar}
            closeModal={handleCloseModal}
            onDeletePaleta={(paleta) => setPaletaRemovida(paleta)}
          />
        }
        {
          canOpenBag && 
          <SacolaModal closeModal={() => setCanOpenBag(false)} />
        }
      <span className="bag">
        <div className="bag-header" >
          <span>
            {/* {paletaSelecionada} */}
          </span>
          <span>
            QUANT
          </span>
          <span>
            VALOR
          </span>
        </div>
        <div>
          
        </div>
      </span>
      </span>
    </div>
  );
}

export default Home;
