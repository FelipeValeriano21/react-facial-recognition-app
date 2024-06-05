import React, { useEffect, useState } from 'react';
import './DashboardChamada.css';

function formatDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adiciona 1 porque os meses são indexados em 0
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function DashboardChamada() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/alunos")
            .then(response => response.json())
            .then(data => setAlunos(data))
            .catch(error => console.error("Erro ao buscar alunos:", error));
    }, []);


    return (
        <div className="dashboard-chamada">
            <h2 className="mb-4">Lista de Alunos da aula de aprendizado de maquina</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">RA</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Presente</th>
                        <th scope="col">Data do Reconhecimento</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.idtb_aluno}>
                            <td>{aluno.idtb_aluno}</td>
                            <td>{aluno.nome_aluno}</td>
                            <td>Sim</td>
                            <td>{formatDateTime()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DashboardChamada;
