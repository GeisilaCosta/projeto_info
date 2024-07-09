import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Props = {
  campaignName: string;
  setCampaignName: (campaignName: string) => void;
  niche: string;
  setNiche: (niche: string) => void;
  budget: string;
  setBudget: (budget: string) => void;
  platform: string;
  setPlatform: (platform: string) => void;
  salary: string;
  setSalary: (salary: string) => void;
  age: string;
  setAge: (age: string) => void;
  taskOrder: string;
  setTaskOrder: (taskOrder: string) => void;
  logo: File | null;
  setLogo: (logo: File | null) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isDarkMode: boolean;
};

const FormCampaign: React.FC<Props> = ({
  campaignName,
  setCampaignName,
  niche,
  setNiche,
  budget,
  setBudget,
  platform,
  setPlatform,
  salary,
  setSalary,
  age,
  setAge,
  taskOrder,
  setTaskOrder,
  logo,
  setLogo,
  handleSubmit,
  isDarkMode,
}) => {
  return (
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group className="form-group">
        <Form.Label>Nome da Campanha:</Form.Label>
        <Form.Control
          required
          value={campaignName}
          onChange={({ target }) => setCampaignName(target.value)}
          type="text"
          placeholder="Digite o nome da campanha..."
          aria-label="nome da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Nome da campanha é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Nicho:</Form.Label>
        <Form.Control
          required
          value={niche}
          onChange={({ target }) => setNiche(target.value)}
          type="text"
          placeholder="Digite o nicho da campanha..."
          aria-label="nicho da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Nicho é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Orçamento:</Form.Label>
        <Form.Control
          required
          value={budget}
          onChange={({ target }) => setBudget(target.value)}
          type="text"
          placeholder="Digite o orçamento da campanha..."
          aria-label="orçamento da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Orçamento é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Plataforma:</Form.Label>
        <Form.Control
          required
          value={platform}
          onChange={({ target }) => setPlatform(target.value)}
          type="text"
          placeholder="Digite a plataforma da campanha..."
          aria-label="plataforma da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Plataforma é obrigatória!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Salário:</Form.Label>
        <Form.Control
          required
          value={salary}
          onChange={({ target }) => setSalary(target.value)}
          type="text"
          placeholder="Digite o salário da campanha..."
          aria-label="salário da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Salário é obrigatório!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Idade:</Form.Label>
        <Form.Control
          required
          value={age}
          onChange={({ target }) => setAge(target.value)}
          type="text"
          placeholder="Digite a idade da campanha..."
          aria-label="idade da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Idade é obrigatória!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Ordenação de Tarefas:</Form.Label>
        <Form.Control
          required
          value={taskOrder}
          onChange={({ target }) => setTaskOrder(target.value)}
          type="text"
          placeholder="Digite a ordenação de tarefas..."
          aria-label="ordenação de tarefas"
        />
        <Form.Control.Feedback type="invalid">
          Ordenação de tarefas é obrigatória!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label>Logo da Campanha:</Form.Label>
        <Form.Control
          required
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogo(e.target.files ? e.target.files[0] : null)}
          aria-label="logo da campanha"
        />
        <Form.Control.Feedback type="invalid">
          Logo é obrigatória!
        </Form.Control.Feedback>
      </Form.Group>

      <Button className={`submit-button ${isDarkMode ? 'dark-mode' : ''}`} type="submit" aria-label="botao de registrar">
        Registrar
      </Button>
      <Button className={`submit-button ${isDarkMode ? 'dark-mode' : ''}`} type="button" aria-label="botao de voltar">
        Voltar
      </Button>
    </Form>
  );
};

export default FormCampaign;

