import {
    Box,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

import React, { useState } from "react";
interface TypeSignatureProps {
    setFontstyle: React.Dispatch<React.SetStateAction<any>>;
    fontStyle: any;
    handleTextchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    typevalue: string;
    handleColorChange: (color: string) => void;
    selectedColor: string;
}

const TypeSignature: React.FC<TypeSignatureProps> = ({ setFontstyle, fontStyle, handleTextchange, typevalue, handleColorChange, selectedColor }) => {
    const [isSelected, setSelected] = useState<boolean>(true)
    const handleSelect = (value: string) => {
        setSelected(true)
        setFontstyle(value)
    }

    return (

        <>
            <Box style={{ height: "50px", display: "flex", flexDirection: "column", margin: "10px", alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <span style={{ marginRight: '10px' }}>Select Color:</span>
                    <button
                        className={`colorButton ${selectedColor === 'red' ? 'active' : ''}`}
                        style={{ backgroundColor: 'red' }}
                        onClick={() => handleColorChange('red')}
                    />
                    <button
                        className={`colorButton ${selectedColor === 'blue' ? 'active' : ''}`}
                        style={{ backgroundColor: 'blue' }}
                        onClick={() => handleColorChange('blue')}
                    />
                    <button
                        className={`colorButton ${selectedColor === 'green' ? 'active' : ''}`}
                        style={{ backgroundColor: 'green' }}
                        onClick={() => handleColorChange('green')}
                    />
                </div>
                <div>
                    <TextField
                        variant="standard"
                        InputProps={{
                            style: {
                                textAlign: 'center',
                                fontFamily: fontStyle,
                                fontWeight: 'bold',
                                color: selectedColor

                            },
                        }}
                        placeholder="Signature"
                        value={typevalue}
                        onChange={handleTextchange}
                    />
                </div>
            </Box>
            <Grid container style={{ overflowX: 'hidden' }}>
                <Grid xs={12} md={6}>
                    {/* <Radio /> */}
                    <TextField
                        disabled
                        variant="outlined"
                        fullWidth
                        value={typevalue}
                        InputProps={{
                            style: {
                                fontFamily: "Caveat",
                                fontWeight: 'bold',
                                borderRadius: '0px',
                                backgroundColor: '#f0f3f9',
                                color: selectedColor
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={() => handleSelect('Caveat')}>
                                        {isSelected && fontStyle === "Caveat" ? (<CircleIcon style={{ color: selectedColor }} />) : (<CircleOutlinedIcon style={{ color: selectedColor }} />)}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid xs={12} md={6}>
                    <TextField
                        disabled
                        variant="outlined"
                        fullWidth
                        value={typevalue}
                        InputProps={{
                            style: {
                                fontFamily: "system-ui",
                                fontWeight: 'bold',
                                borderRadius: '0px',
                                backgroundColor: '#f0f3f9',
                                color: selectedColor
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={() => handleSelect('system-ui')}>
                                        {isSelected && fontStyle === "system-ui" ? (<CircleIcon style={{ color: selectedColor }} />) : (<CircleOutlinedIcon style={{ color: selectedColor }} />)}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    ></TextField>
                </Grid>
                <Grid xs={12} md={6}>
                    <TextField
                        disabled
                        variant="outlined"
                        fullWidth
                        value={typevalue}
                        InputProps={{
                            style: {
                                fontFamily: "cursive",
                                fontWeight: 'bold',
                                borderRadius: '0px',
                                backgroundColor: '#f0f3f9',
                                color: selectedColor
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={() => handleSelect('cursive')}>
                                        {isSelected && fontStyle === "cursive" ? (<CircleIcon style={{ color: selectedColor }} />) : (<CircleOutlinedIcon style={{ color: selectedColor }} />)}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    ></TextField>
                </Grid>
                <Grid xs={12} md={6}>
                    <TextField
                        disabled
                        variant="outlined"
                        fullWidth
                        value={typevalue}
                        InputProps={{
                            style: {
                                fontFamily: "monospace",
                                fontWeight: 'bold',
                                borderRadius: '0px',
                                backgroundColor: '#f0f3f9',
                                transition: 'background-color 0.3s ease',
                                color: selectedColor

                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={() => handleSelect('monospace')}>
                                        {isSelected && fontStyle === "monospace" ? (<CircleIcon style={{ color: selectedColor }} />) : (<CircleOutlinedIcon style={{ color: selectedColor }} />)}
                                    </IconButton>
                                </InputAdornment>
                            ),

                        }}
                    ></TextField>
                </Grid>
            </Grid>
        </>

    );
};

export default TypeSignature;
