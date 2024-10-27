import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const API_BASE_URL = 'https://ftrajano84.pythonanywhere.com/api/v1/';

function QuestoesApp() {
  const [questoes, setQuestoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestoes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/questoes/`);
        setQuestoes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar questões:', error);
        setError('Erro ao carregar questões. Por favor, tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchQuestoes();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Banco de Questões</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          {questoes.length > 0 ? (
            questoes.map((questao) => (
              <Card key={questao.id} className="mb-3">
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <span>Questão {questao.id}</span>
                    <div>
                      <span className="badge bg-primary me-2">{questao.disciplina_nome}</span>
                      <span className="badge bg-secondary">{questao.assunto_nome}</span>
                    </div>
                  </Card.Title>
                  <Card.Text>{questao.latex_text}</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Alert variant="info">
              Nenhuma questão encontrada.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default QuestoesApp;