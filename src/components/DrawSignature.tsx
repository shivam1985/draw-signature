/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
interface SignaturePadProps {
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setDialogeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SignaturePad: React.FC<SignaturePadProps> = ({ setUrl, setDialogeOpen }) => {
    const [sign, setSign] = useState<any>('');
    const [penColor, setPenColor] = useState('black');
    const handleClear = () => {
        sign.clear();
        setUrl('');
    };

    const handleGenerate = () => {
        setUrl(sign?.getTrimmedCanvas().toDataURL('image/png'));
    };

    const handleColorChange = (color: string) => {
        if (sign) {
            const existingData = sign.toData();
            const updatedData = existingData.map((stroke: any) => {
                return stroke.map((point: any) => {
                    return {
                        ...point,
                        color: color
                    };
                });
            });
            sign.clear();
            sign.fromData(updatedData);
            setPenColor(color);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ marginRight: '10px' }}>Select Color:</span>
                    <button
                        className={`colorButton ${penColor === 'red' ? 'active' : ''}`}
                        style={{ backgroundColor: 'red' }}
                        onClick={() => handleColorChange('red')}
                    />
                    <button
                        className={`colorButton ${penColor === 'blue' ? 'active' : ''}`}
                        style={{ backgroundColor: 'blue' }}
                        onClick={() => handleColorChange('blue')}
                    />
                    <button
                        className={`colorButton ${penColor === 'green' ? 'active' : ''}`}
                        style={{ backgroundColor: 'green' }}
                        onClick={() => handleColorChange('green')}
                    />
                </div>
                <div style={{ border: "2px solid black", width: 500, height: 200, marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <SignatureCanvas
                        penColor={penColor}
                        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                        ref={(data: any) => setSign(data)}
                    />

                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        style={{
                            height: "30px",
                            width: "60px",
                            backgroundColor: '#FF5F5F',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button
                        style={{
                            height: "30px",
                            width: "60px",
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            handleGenerate()
                            setDialogeOpen(false)
                        }}
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
}
