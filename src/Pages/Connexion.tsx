import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Gérer la connexion (API, validation, etc.)
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0d6efd',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
          marginBottom: '2rem',
          userSelect: 'none',
        }}
      >
        Wakatii
      </div>

      <Container
        fluid
        style={{
          backgroundColor: 'white',
          borderRadius: '1.5rem',
          padding: '2.5rem 2rem',
          color: '#333',
          maxWidth: '420px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        }}
      >
        <h2 className="mb-4 text-center" style={{ fontWeight: '700' }}>
          Se connecter
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mb-3"
            style={{ fontWeight: '600', fontSize: '1.1rem' }}
          >
            Se connecter
          </Button>
        </Form>

        {/* Deux boutons côte à côte */}
        <Row className="mt-2">
          <Col>
            <Button
              variant="outline-primary"
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={() => navigate('/')}
              style={{ fontWeight: '600' }}
            >
              <FaArrowLeft className="me-2" />
              Accueil
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-success"
              className="w-100"
              onClick={() => navigate('/inscription')}
              style={{ fontWeight: '600' }}
            >
              Créer un compte
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Connexion;
