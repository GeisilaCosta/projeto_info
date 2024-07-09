import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const audiences = [
  'Adolescentes',
  'Jovens Adultos',
  'Pais e Mães',
  'Aposentados',
  'Gamers',
  'Entusiastas de Tecnologia',
  'Aventureiros e Viajantes',
  'Fãs de Esportes',
  'Amantes da Culinária',
  'Fãs de Moda',
  'Praticantes de Fitness',
  'Investidores e Entusiastas de Finanças'
];

const niches = [
  'Moda',
  'Beleza e Maquiagem',
  'Fitness e Bem-estar',
  'Nutrição e Alimentação Saudável',
  'Gastronomia e Culinária',
  'Tecnologia e Gadgets',
  'Viagens e Turismo',
  'Fotografia e Vídeo',
  'Games e E-sports',
  'Finanças e Investimentos'
];

export default function NewInfluencer()  {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    targetAudience: [] as string[],
    niches: [] as string[],
    socialNetwork: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    photo: '',
    cpf: ''
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [cpfValid, setCpfValid] = useState(true);

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
  
    if (name === 'cpf') {
      const formattedValue = formatCPF(value);
      setFormData({
        ...formData,
        [name]: formattedValue
      });
      setCpfValid(validateCPF(formattedValue));
    } else if (name === 'targetAudience') {
      let updatedAudience;
      if (checked) {
        updatedAudience = [...formData.targetAudience, value];
      } else {
        updatedAudience = formData.targetAudience.filter(item => item !== value);
      }
  
      setFormData({
        ...formData,
        targetAudience: updatedAudience
      });
    } else if (name === 'niches') {
      let updatedNiches;
      if (checked) {
        updatedNiches = [...formData.niches, value];
      } else {
        updatedNiches = formData.niches.filter(item => item !== value);
      }
  
      setFormData({
        ...formData,
        niches: updatedNiches
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);
    if (!cpfValid) {
      alert("O CPF não é válido");
      return;
    }
    console.log(formData);
  };

  const formatCPF = (cpf: string) => {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if (cpf.length > 3) {
      cpf = cpf.replace(/(\d{3})(\d{3})/, '$1.$2');
    } else if (cpf.length > 0) {
      cpf = cpf.replace(/(\d{3})/, '$1');
    }

    return cpf;
  };

  const validateCPF = (cpf: string) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <h2>Maximize seu Potencial como Influenciador com Influencer4You!</h2>
          <br />
          <p>
          Sabemos que você tem o poder de impactar e inspirar uma comunidade significativa. <br></br> 
          Na Influencer4You, não apenas oferecemos oportunidades de colaboração com grandes marcas, mas também capacitamos você com as ferramentas e suporte necessários para levar suas parcerias a um novo patamar.<br></br>
          <br />
          Ao se juntar a nós, você terá acesso a uma plataforma robusta que não apenas conecta você às marcas certas, mas também oferece insights valiosos sobre suas audiências. <br></br>
          Nossa abordagem personalizada permite que você desenvolva campanhas autênticas que ressoam profundamente com seu público, garantindo resultados que transcendem simples métricas.<br></br>
          <br />
          Nosso compromisso vai além do marketing de influência tradicional. Estamos aqui para ajudá-lo a construir relacionamentos duradouros com marcas que compartilham seus valores e visão. <br></br>
          <br /> 
          Juntos, podemos criar não apenas conteúdo, mas experiências que deixam uma marca positiva no mundo digital. <br></br>
          <br />
          Explore o potencial ilimitado de sua influência conosco. Cadastre-se hoje e comece a transformar seu alcance em oportunidades reais e duradouras.<br></br>
          Para quaisquer dúvidas gerais, entre em contato conosco!
          </p>
        </Col>
        <Col xs={6}>
      <h2>Cadastro de Influencers</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Informe seu nome completo*"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Informe sua idade*"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Público Alvo</Form.Label>
          <Row>
            {audiences.map(audience => (
              <Col key={audience} sm={6} md={4}>
                <Form.Check
                  type="checkbox"
                  id={audience}
                  label={audience}
                  name="targetAudience"
                  value={audience}
                  checked={formData.targetAudience.includes(audience)}
                  onChange={handleChange}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nicho</Form.Label>
          <Row>
            {niches.map(niche => (
              <Col key={niche} sm={6} md={4}>
                <Form.Check
                  type="checkbox"
                  id={niche}
                  label={niche}
                  name="niches"
                  value={niche}
                  checked={formData.niches.includes(niche)}
                  onChange={handleChange}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rede Social</Form.Label>
          <Form.Control
            type="text"
            name="socialNetwork"
            value={formData.socialNetwork}
            onChange={handleChange}
            placeholder="Informe sua rede social*"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Informe seu email*"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            className={`${!passwordMatch ? 'is-invalid' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Crie uma senha*"
            required
          />
          {!passwordMatch && (
            <Form.Control.Feedback type="invalid">
              As senhas não coincidem.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmação de Senha</Form.Label>
          <Form.Control
            type="password"
            className={`${!passwordMatch ? 'is-invalid' : ''}`}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua senha*"
            required
          />
          {!passwordMatch && (
            <Form.Control.Feedback type="invalid">
              As senhas não coincidem.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contato</Form.Label>
          <Form.Control
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Informe seu telefone com DDD (ex: 11987654321)*"
            pattern="[0-9]{10,11}"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Foto (opcional)</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            className={`${!cpfValid ? 'is-invalid' : ''}`}
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Informe seu CPF*"
            required
          />
          {!cpfValid && (
            <Form.Control.Feedback type="invalid">
              CPF inválido. O formato correto é 123.456.789-09.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Button type="submit" variant="primary">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
