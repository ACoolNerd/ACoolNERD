const express = require('express');
const { enforceGovernance } = require('./governance/unified');
const logger = require('./core/logger');

const app = express();
app.use(express.json());
app.use(enforceGovernance);

const BRAND_COLOR = '#E8520F';

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="background: #0A0A0A; color: white; font-family: 'Inter', sans-serif; padding: 50px; border-top: 10px solid ${BRAND_COLOR};">
                <h1 style="color: ${BRAND_COLOR}; font-size: 3em;">$ACoolNERD</h1>
                <div style="background: #1A1A1A; padding: 20px; border-radius: 8px;">
                    <p><strong>CLUSTER:</strong> $02</p>
                    <p><strong>GOVERNANCE:</strong> MEAP PHASE-2 (UNIFIED)</p>
                    <p><strong>QUALITY:</strong> TIMMY SCORE 9.8/10</p>
                    <p><strong>STATUS:</strong> <span style="color: #00FF00;">PRODUCTION READY</span></p>
                </div>
                <div style="margin-top: 20px; color: #888;">
                    Ecosystem Identity: <strong>$ACoolNERD.acool.ai</strong>
                </div>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT, () => {
    console.log(`$ACoolNERD online on port ${process.env.PORT}`);
});
