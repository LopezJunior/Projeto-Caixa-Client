import "./SacolaModal.css";
import Modal from "../Modal/Modal";
import { SacolaService } from "../../services/SacolaService";
import { useEffect, useState } from "react";
import { PaletaService } from "../../services/PaletaService";
import { useNavigate } from "react-router-dom";

function SacolaModal({ closeModal }) {
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  const purchase = async () => {
    await SacolaService.purchase();
    navigate('/loading');
  };

  const handleClose = async () => {
    await SacolaService.purchase();
    closeModal();
  };

  const getListas = async () => {
    const paletaLista = await PaletaService.getLista();
    const sacolaLista = await SacolaService.getLista();

    const encontraNome = (id) => {
      const obj = paletaLista.find((i) => i.id === id);
      return (obj && obj.titulo) ?? "";
    };

    if (Array.isArray(sacolaLista)) {
      const novaLista = sacolaLista.map(({ paletaId, quantidade }) => ({
        nome: encontraNome(paletaId),
        quantidade,
      }));

      setLista(novaLista);
    }
  };

  useEffect(() => {
    getListas();
  }, []);

  return (
    <Modal closeModal={handleClose}>
      <div className="SacolaModal">
        <h2>Paletas & Quantidades</h2>

        <div>
          {lista.map((i, idx) => (
            <div key={idx}>
              {" "}
              {i.nome + " " + i.quantidade + "x"} <br />
            </div>
          ))}
        </div>

        <br />

        <div>
          <button onClick={purchase} className="SacolaModal__confirmar">
            {" "}
            Fechar compra{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SacolaModal;