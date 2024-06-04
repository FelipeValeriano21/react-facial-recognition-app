import React, { useState, useEffect } from "react";
import './RegisterAluno.css'

function RegisterAluno() {
    const [professores, setProfessores] = useState([]);
    const [formData, setFormData] = useState({
        idtb_aluno: "",
        nome_aluno: "",
        tb_professor_idtb_professor: "", 
        senha_aluno: "",
        confirmar_senha: ""
    });
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/Professores")
            .then(response => response.json())
            .then(data => setProfessores(data))
            .catch(error => console.error("Error fetching professores:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Adicione uma função para lidar com a mudança na seleção do professor
    const handleProfessorChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            idtb_professor: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar se as senhas coincidem
        if (formData.senha_aluno !== formData.confirmar_senha) {
            alert("As senhas não coincidem.");
            return;
        }
        // Enviar os dados para a API Flask
        fetch("http://127.0.0.1:5000/Insert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([formData])
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Lidar com a resposta da API
            // Limpar o formulário após o envio bem-sucedido
            setFormData({
                idtb_aluno: "",
                nome_aluno: "",
                idtb_professor: "",
                senha_aluno: "",
                confirmar_senha: ""
            });
        })
        .catch(error => console.error("Error:", error));
    };

    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100">
            <div className="40-w p-5 rounded bg-white">
                <form onSubmit={handleSubmit}>
                    <h4 className="mb-4">Cadastro - Reconhecimento Facial</h4>
                    <div className="mb-3">
                    <label className="mb-1"><strong>RA DO ALUNO</strong></label>
                    <input 
                        type="text" 
                        placeholder="Entre com o RA" 
                        className="form-control"  
                        maxLength="4" 
                        name="idtb_aluno" 
                        value={formData.idtb_aluno}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-1"><strong>NOME COMPLETO</strong></label>
                    <input 
                        type="text" 
                        placeholder="Entre com o Nome" 
                        className="form-control"  
                        name="nome_aluno" 
                        value={formData.nome_aluno}
                        onChange={handleChange}
                    />
                </div>

                    <div className="mb-4">
                        <label htmlFor="identidade" className="mb-1"><strong>SEU PROFESSOR</strong></label>
                        <select 
                            id="identidade" 
                            name="idtb_professor" 
                            className="form-control"
                            value={formData.idtb_professor}
                            onChange={handleProfessorChange} // Alterado para handleProfessorChange
                        >
                            <option value="">Selecione o professor</option>
                            {professores.map(professor => (
                                <option key={professor.idtb_professor} value={professor.idtb_professor}>{professor.professor_nome.trim()}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="mb-1"><strong>SENHA</strong></label>
                        <input 
                            type="password" 
                            placeholder="Entre com a Senha" 
                            className="form-control"
                            name="senha_aluno"
                            value={formData.senha_aluno}
                            onChange={handleChange}
                        />    
                    </div>
                    <div className="mb-4">
                        <label className="mb-1"><strong>CONFIRMA SENHA</strong></label>
                        <input 
                            type="password" 
                            placeholder="Confirme a Senha" 
                            className="form-control"
                            name="confirmar_senha"
                            value={formData.confirmar_senha}
                            onChange={handleChange}
                        />    
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn mb-3 btn-entrar">Verificar e Cadastrar</button>
                        <button type="button" className="btn btn-goregister">Já tenho cadastro</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterAluno;
