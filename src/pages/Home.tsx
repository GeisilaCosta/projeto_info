import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.png';

import marisa from '../assets/marisa.png';
import nike from '../assets/nike.png';
import shopee from '../assets/shopee.png';
import mercadolivre from '../assets/mercadolivre.png';
import uber from '../assets/uber.png';
import ifood from '../assets/ifood.png';

const Home = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      //backgroundColor: '#BBC1DC',
      color: '#000',
      fontFamily: 'Montserrat, sans-serif',
      padding: '20px',
    },
    header: {
      color: '#C071B9',
      textAlign: 'center',
      marginBottom: '20px',
    },
    highlightText: {
      textAlign: 'center',
      marginTop: '40px',
      marginBottom: '40px',
    },
    button: {
      marginBottom: '20px',
    },
    carouselItem: {
      height: '400px',
      alignItems: 'center',
    },
    carouselImage: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      maxHeight: '450px',
    },
    brandCarousel: {
      marginTop: '40px',
      marginBottom: '40px',
    },
    brandImage: {
      width: '190px',
      height: '100px',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto',
    },
    influencerSection: {
      textAlign: 'center',
      padding: '40px 0',
      marginTop: '40px',
      marginBottom: '40px',
    },
    influencerImage: {
      width: '80%',
      height: 'auto',
      maxWidth: '80%',
      display: 'block',
      margin: '0 auto',
    },
    inviteSection: {
      textAlign: 'center',
      padding: '40px 0',
      marginTop: '40px',
      marginBottom: '40px',
    },
    inviteButton: {
      backgroundColor: '#C071B9',
      borderColor: '#C071B9',
      color: '#FFF',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    highlightImage: {
      display: 'block',
      margin: '20px auto',
      maxWidth: '100%',
      height: '300px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
    },
    cardTitle: {
      color: '#C071B9',
    },
    modalTitle: {
      marginBottom: '20px',
    },
    carouselTitle: {
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#5C0C6D',
      marginBottom: '20px',
    },
    carouselCaption: {
      textAlign: 'center',
      color: '#5C0C6D',
      fontWeight: 'bold',
      fontSize: '24px', 
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Contratação de influenciadores de forma simples e eficaz!</h1>
      </div>

      <div style={styles.highlightText}>
        <p>
          Na Influencers4you, oferecemos um gerenciamento simplificado para influenciadores e empresas, tudo em um só lugar.
          Conectamos marcas aos influenciadores ideais para suas campanhas, tornando o processo ágil e eficiente.
          Seja qual for o seu objetivo, somos o ponto de encontro perfeito para garantir o sucesso da sua próxima campanha publicitária.
        </p>
      </div>

      {/* Parte 1: Carrossel com imagens de influenciadores */}
      <Carousel interval={3000}>
        <Carousel.Item style={styles.carouselItem}>
          <img
            className="d-block w-100"
            src={image1}
            alt="Primeiro slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>Cadastra-se</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Segundo slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>Faça Login</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={styles.carouselItem}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Terceiro slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption style={styles.carouselCaption}>
            <p>Ache a campanha e espere o Match perfeito</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Título acima do segundo carrossel */}
      <div style={styles.carouselTitle}>
        Marcas que estão mudando sua forma de gerenciar campanhas
      </div>

      {/* Parte 2: Carrossel com marcas */}
      <Carousel style={styles.brandCarousel} indicators={false} controls={false}>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <img
                  className="d-block"
                  src={marisa}
                  alt="Marca Marisa"
                  style={styles.brandImage}
                />
              </Col>
              <Col>
                <img
                  className="d-block"
                  src={nike}
                  alt="Marca Nike"
                  style={styles.brandImage}
                />
              </Col>
              <Col>
                <img
                  className="d-block"
                  src={shopee}
                  alt="Marca Shopee"
                  style={styles.brandImage}
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <img
                  className="d-block"
                  src={mercadolivre}
                  alt="Marca Mercado Livre"
                  style={styles.brandImage}
                />
              </Col>
              <Col>
                <img
                  className="d-block"
                  src={uber}
                  alt="Marca Uber"
                  style={styles.brandImage}
                />
              </Col>
              <Col>
                <img
                  className="d-block"
                  src={ifood}
                  alt="Marca iFood"
                  style={styles.brandImage}
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>

      {/* Seção Influencer */}
      <div style={styles.influencerSection}>
        <h2>A próxima campanha está a um passo!</h2>
        <img
          src={image4}
          alt="Influencer destacado"
          style={styles.influencerImage}
        />
      </div>

      {/* Parte 3: Convite para empresas e influenciadores */}
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Card style={{ backgroundColor: '#C071B9', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title style={styles.cardTitle}>Cadastre sua empresa/marca</Card.Title>
                <Card.Text style={{ color: '#FFF' }}>
                  Junte-se a nós para gerenciar suas campanhas de publicidade com eficiência.
                </Card.Text>
                <Link to="/sign-up-company">
                  <Button variant="light" style={{ ...styles.inviteButton, backgroundColor: '#FFF', color: '#C071B9' }}>
                    Cadastrar Empresa
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Card style={{ backgroundColor: '#C071B9', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title style={styles.cardTitle}>Cadastre-se como Influenciador</Card.Title>
                <Card.Text style={{ color: '#FFF' }}>
                  Junte-se a nós para fazer parte das campanhas publicitárias de grandes marcas.
                </Card.Text>
                <Link to="/sign-up-influencer">
                  <Button variant="light" style={{ ...styles.inviteButton, backgroundColor: '#FFF', color: '#C071B9' }}>
                    Cadastrar Influenciador
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

