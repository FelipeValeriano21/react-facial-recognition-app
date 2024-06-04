import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    const [ra, setRa] = useState("");
    const [senha, setSenha] = useState("");
    const [mode, setMode] = useState("aluno");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Adicione esta linha para definir navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!ra) {
            formErrors.ra = "RA é obrigatório";
        }
        if (!senha) {
            formErrors.senha = "Senha é obrigatória";
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            // Lógica para enviar o formulário
            console.log({ ra, senha, mode });
        }
    };

    const handleRegisterAlunoClick = () => {
        navigate("/RegisterAluno"); // Use navigate para redirecionar para a rota RegisterAluno
    };

    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100">
            <div className="40-w p-5 rounded bg-white">
                <form onSubmit={handleSubmit}>
                    <h4 className="mb-4">Login Reconhecimento Facial</h4>
                    <div className="mb-3">
                        <label className="mb-1"><strong>RA</strong></label>
                        <input 
                            type="text" 
                            placeholder="Entre com o RA" 
                            className="form-control"  
                            maxLength="4" 
                            value={ra} 
                            onChange={(e) => setRa(e.target.value)}
                        />
                        {errors.ra && <div className="text-danger">{errors.ra}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="mb-1"><strong>Senha</strong></label>
                        <input 
                            type="password" 
                            placeholder="Entre com a Senha" 
                            className="form-control" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        {errors.senha && <div className="text-danger">{errors.senha}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="identidade" className="mb-1"><strong>Escolha um modo</strong></label>
                        <select 
                            id="identidade" 
                            name="identidade" 
                            className="form-control" 
                            value={mode} 
                            onChange={(e) => setMode(e.target.value)}
                        >
                            <option value="aluno">Aluno</option>
                            <option value="professor">Professor</option>
                        </select>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn mb-3 btn-entrar">Entrar na plataforma</button>
                        <button type="button" className="btn btn-goregister" onClick={handleRegisterAlunoClick}>Sou um novo aluno</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
