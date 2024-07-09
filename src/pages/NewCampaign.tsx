import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import FormCampaign from '../components/FormCampaign';
//import { postCampaign } from '../api/campaign';

const styles = {
  textAlign: 'center',
  marginBottom: '30px',
} as React.CSSProperties;

const NewCampaign: React.FC = () => {
  const [campaignName, setCampaignName] = useState('');
  const [niche, setNiche] = useState('');
  const [budget, setBudget] = useState('');
  const [platform, setPlatform] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [taskOrder, setTaskOrder] = useState('');
  const [logo, setLogo] = useState<File | null>(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = document.body.classList.contains('dark-mode');
    setIsDarkMode(darkModeClass);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!logo) {
      alert('Por favor, adicione o logo da campanha.');
      return;
    }

    const formData = new FormData();
    formData.append('campaignName', campaignName);
    formData.append('niche', niche);
    formData.append('budget', budget);
    formData.append('platform', platform);
    formData.append('salary', salary);
    formData.append('age', age);
    formData.append('taskOrder', taskOrder);
    formData.append('logo', logo);

    try {
      const response = await postCampaign(formData);
      console.log(response);
      // Aqui você pode adicionar lógica adicional, como redirecionamento ou exibição de mensagem de sucesso
    } catch (error) {
      console.error('Erro ao enviar a campanha:', error);
      // Adicione tratamento de erro adequado aqui
    }
  };

  return (
    <Container>
      <h1 style={styles}>Registre aqui sua campanha</h1>
      <FormCampaign
        campaignName={campaignName}
        setCampaignName={setCampaignName}
        niche={niche}
        setNiche={setNiche}
        budget={budget}
        setBudget={setBudget}
        platform={platform}
        setPlatform={setPlatform}
        salary={salary}
        setSalary={setSalary}
        age={age}
        setAge={setAge}
        taskOrder={taskOrder}
        setTaskOrder={setTaskOrder}
        logo={logo}
        setLogo={setLogo}
        handleSubmit={handleSubmit}
        isDarkMode={isDarkMode}
      />
    </Container>
  );
};

export default NewCampaign;

