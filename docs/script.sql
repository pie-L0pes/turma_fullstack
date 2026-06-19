USE turmas_db;

INSERT INTO professor (nome, email, senha)
VALUES
('Ana Souza', 'ana@email.com', '123456'),
('Carlos Lima', 'carlos@email.com', '123456'),
('Juliana Rocha', 'juliana@email.com', '123456');

INSERT INTO turma (nome, professorId)
VALUES
('Turma A1', 1),
('Turma A2', 1),
('Turma A3', 1),
('Turma B1', 2),
('Turma B2', 2),
('Turma B3', 2),
('Turma C1', 3),
('Turma C2', 3),
('Turma C3', 3);

INSERT INTO atividade (descricao, turmaId)
VALUES
('Atividade 1 - Turma A1', 1),
('Atividade 2 - Turma A1', 1),
('Atividade 3 - Turma A1', 1),
('Atividade 1 - Turma A2', 2),
('Atividade 2 - Turma A2', 2),
('Atividade 3 - Turma A2', 2),
('Atividade 1 - Turma A3', 3),
('Atividade 2 - Turma A3', 3),
('Atividade 3 - Turma A3', 3),
('Atividade 1 - Turma B1', 4),
('Atividade 2 - Turma B1', 4),
('Atividade 3 - Turma B1', 4),
('Atividade 1 - Turma B2', 5),
('Atividade 2 - Turma B2', 5),
('Atividade 3 - Turma B2', 5),
('Atividade 1 - Turma B3', 6),
('Atividade 2 - Turma B3', 6),
('Atividade 3 - Turma B3', 6),
('Atividade 1 - Turma C1', 7),
('Atividade 2 - Turma C1', 7),
('Atividade 3 - Turma C1', 7),
('Atividade 1 - Turma C2', 8),
('Atividade 2 - Turma C2', 8),
('Atividade 3 - Turma C2', 8),
('Atividade 1 - Turma C3', 9),
('Atividade 2 - Turma C3', 9),
('Atividade 3 - Turma C3', 9);
