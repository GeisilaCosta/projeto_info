import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import FormCompany from "../components/FormCompany";
import { postCompany, getNiches, getMarketingFocus } from "../api/company";

const styles = {
  textAlign: "center",
  marginBottom: "30px",
} as React.CSSProperties;

export default function NewCompany() {
  const [company, setCompany] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [niches, setNiches] = useState([]);
  const [niche, setNiche] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [listMarketingFocus, setListMarketingFocus] = useState([]);
  const [marketingFocus, setMarketingFocus] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchNiches = async () => {
      const { content } = await getNiches();
      setNiches(content);
    };

    fetchNiches();
  }, []);

  useEffect(() => {
    const fetchMarketingFocus = async () => {
      const { content } = await getMarketingFocus();
      setListMarketingFocus(content);
    };

    fetchMarketingFocus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await postCompany({
      nameCompany: company,
      cnpjCpf: cnpj,
      email,
      idNiche: Number(niche),
      // socialMedias: [socialMedia],
      idTargetAudience: Number(marketingFocus),
      cel: contact,
      password,
    });
    console.log(response);
  };

  return (
    <Container>
      <h1 style={styles}>Registre aqui sua empresa</h1>
      <FormCompany
        company={company}
        setCompany={setCompany}
        cnpj={cnpj}
        setCnpj={setCnpj}
        email={email}
        setEmail={setEmail}
        niches={niches}
        setNiche={setNiche}
        socialMedia={socialMedia}
        setSocialMedia={setSocialMedia}
        listMarketingFocus={listMarketingFocus}
        setMarketingFocus={setMarketingFocus}
        contact={contact}
        setContact={setContact}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
