import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IMaskInput } from "react-imask";
import { MarketingFocus, Niche } from "../types";
import { useState, useEffect } from "react";


// const formStyle = {
//   maxWidth: "500px",
//   margin: "auto",
// };

// const buttonStyle = {
//   width: "100%",
//   marginTop: "5px",
// };

type Props = {
  company: string;
  setCompany: (company: string) => void;
  cnpj: string;
  setCnpj: (cnpj: string) => void;
  email: string;
  setEmail: (email: string) => void;
  niches: Niche[];
  setNiche: (niche: string) => void;
  socialMedia: string;
  setSocialMedia: (socialMedia: string) => void;
  listMarketingFocus: MarketingFocus[];
  setMarketingFocus: (marketingFocus: string) => void;
  contact: string;
  setContact: (companyContact: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function FormCompany({
  company,
  setCompany,
  cnpj,
  setCnpj,
  email,
  setEmail,
  niches,
  setNiche,
  socialMedia,
  setSocialMedia,
  listMarketingFocus,
  setMarketingFocus,
  contact,
  setContact,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleSubmit,
}: Props) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = document.body.classList.contains('dark-mode');
    setIsDarkMode(darkModeClass);
  }, []);

  //const [validated, setValidated] = useState(false);

  // const validate = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     console.log("Formulário inválido");
  //   }

  //   setValidated(true);
  // };
  return (
    <Form  onSubmit={handleSubmit} className="form">
      <Form.Group className="form-group" >
        <Form.Label>Noma da empresa:</Form.Label>
        <Form.Control
          required
          value={company}
          onChange={({ target }) => setCompany(target.value)}
          type="text"
          placeholder="Digite o nome da empresa..."
          aria-label="nome da empresa"
        />
        <Form.Control.Feedback type="invalid">
          Nome da empresa é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>CNPJ:</Form.Label>
        <Form.Control
          required
          value={cnpj}
          onChange={({ target }) => setCnpj(target.value)}
          as={IMaskInput}
          mask="00.000.000/0000-00"
          type="text"
          placeholder="XX.XXX.XXX/XXXX-XX"
          aria-label="campo para o cnpj"
        />
        <Form.Control.Feedback type="invalid">CNPJ é obrigatório!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="email@email.com"
          aria-label="campo para o email"
        />
        <Form.Control.Feedback type="invalid">
          E-mail válido é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Nicho:</Form.Label>
        <Form.Select defaultValue="" onChange={({ target }) => setNiche(target.value)}>
          <option disabled value="" aria-label="campo para o nicho">
            Selecione o nicho da empresa...
          </option>
          {niches.map((niche) => (
            <option key={niche.id} value={niche.id}>
              {niche.name}
            </option>
          ))}
          
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Escolha o nicho da empresa.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Rede social:</Form.Label>
        <Form.Control
          required
          value={socialMedia}
          onChange={({ target }) => setSocialMedia(target.value)}
          type="text"
          placeholder="Rede social"
          aria-label="campo para a rede social"
        />
        <Form.Control.Feedback type="invalid">
          Rede social é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Foco do Marketing:</Form.Label>
        <Form.Select
          defaultValue=""
          onChange={({ target }) => setMarketingFocus(target.value)}
        >
          <option disabled value="" aria-label="campo para o Foco do marketing">
            Selecione o nicho da empresa...
          </option>
          {listMarketingFocus.map((focus) => (
            <option key={focus.id} value={focus.id}>
              {focus.name}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Escolha o foco do marketing.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group" aria-label="campo para o contato da empresa">
        <Form.Label>Contato da empresa:</Form.Label>
        <Form.Control
          required
          value={contact}
          onChange={({ target }) => setContact(target.value)}
          type="text"
          placeholder="Contato da empresa"
        />
      </Form.Group>
      <Form.Group className="form-group" aria-label="campo para a senha">
        <Form.Label>Senha:</Form.Label>
        <Form.Control
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          placeholder="Senha"
        />
        <Form.Control.Feedback type="invalid">Senha é obrigatório!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group" aria-label="campo para confirmar a senha">
        <Form.Label>Confirme a senha:</Form.Label>
        <Form.Control
          required
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
          type="password"
          placeholder="Confirme a senha"
        />
      </Form.Group>
      <Button className={`submit-button ${isDarkMode ? 'dark-mode' : ''}`} type="submit" aria-label="botao de registrar">
        Registrar
      </Button>
      <Button className={`submit-button ${isDarkMode ? 'dark-mode' : ''}`}  type="button" aria-label="botao de voltar">
        Voltar
      </Button>
    </Form>
  );
}
