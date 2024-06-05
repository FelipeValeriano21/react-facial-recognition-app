import React, { useRef, useState } from "react";
import './ChamadaAluno.css';
import { useParams } from 'react-router-dom';

function Camera() {
    const { id } = useParams(); // Captura o id da URL
    const videoRef = useRef(null);
    const [photoData, setPhotoData] = useState(null);

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
            })
            .catch(err => console.error('Erro ao acessar a câmera:', err));
    };

    const takePhoto = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataURI = canvas.toDataURL('image/png');
        setPhotoData(dataURI);
    };

    return (
        <div className="camera mb-5">
            <h3 className="mb-5">Chamada por reconhecimento facial do aluno: {id}</h3> {/* Exibindo o ID do aluno */}
            <div className="video-container">
                <video className="" ref={videoRef} autoPlay playsInline></video>
            </div>
            <div className="button-container">
                <button onClick={startCamera}>Abrir Câmera</button>
                <button onClick={takePhoto}>Tirar Foto</button>
                <button onClick={takePhoto}>Sair</button>
            </div>
            {photoData && <img src={photoData} alt="Foto" className="captured-photo" />}
        </div>
    );
}

export default Camera;
