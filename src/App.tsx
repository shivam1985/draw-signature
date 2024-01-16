import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import { SignaturePad } from "../src/components/DrawSignature";
import TypeSignature from "../src/components/TypeSignatures";
import React, { useState } from "react";


function App() {
  const [dialogOpen, setDialogeOpen] = useState<boolean>(false)
  const [url, setUrl] = useState("")
  const [tabsvalue, setTabsvalue] = useState(0);
  const [fontStyle, setFontstyle] = useState<any>('');
  const [typevalue, setTypevalue] = useState('Selected');

  const handleChange = (e: any, value: any) => {
    setTabsvalue(value);
  };
  const handleTextchange = (e: any) => {
    setTypevalue(e.target.value);
  };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  const [selectedColor, setSelectedColor] = useState<string>('black');

  return (
    <div style={{ backgroundColor: '#f0f8ff' }}>
      <button onClick={() => setDialogeOpen(true)} className="btnPrimary">Click here to add signature</button>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>
        <Dialog open={dialogOpen} style={{ padding: '0px', margin: '0px' }}>
          <DialogTitle>
            <Typography>Add Signature</Typography>
          </DialogTitle>
          <DialogContent style={{ overflowX: 'hidden' }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={tabsvalue}
                onChange={handleChange}
              >
                <Tab label="Draw" />
                <Tab label="Type" />
              </Tabs>
            </Box>
            {tabsvalue === 0 &&
              <SignaturePad setUrl={setUrl} setDialogeOpen={setDialogeOpen} />
            }
            {tabsvalue === 1 &&
              <TypeSignature setFontstyle={setFontstyle} fontStyle={fontStyle} handleTextchange={handleTextchange} typevalue={typevalue} handleColorChange={handleColorChange} selectedColor={selectedColor} />
            }
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setDialogeOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setDialogeOpen(false)}>
              Done
            </Button>
          </DialogActions>
          {/* <SignaturePad clearButton="true" style={{backgroundColor:'lightblue'}}/> */}
        </Dialog>
        <div style={{ marginTop: '20px' }}>
          {url && tabsvalue === 0 && <img
            src={url}
            alt="Generated Signature"
            style={{ maxWidth: '100%', maxHeight: '200px', border: '1px solid #ddd' }}
          />}
          {
            fontStyle && tabsvalue === 1 && <h1 style={{
              fontFamily: fontStyle,
              color: selectedColor
            }}>{typevalue}</h1>
          }
        </div>
      </div>
    </div >
  );
}

export default App;
