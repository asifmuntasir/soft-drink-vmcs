import React from 'react';

const SimulatorPanel = () => {
    return (
        <>
            <div class="container">
                <div class="control-panel">
                    <h2>SIMULATOR CONTROL PANEL</h2>
                    <div class="btn-container">
                        <div class="label">BEGIN SIMULATION</div>
                        <button class="btn btn-primary">PRESS</button>
                    </div>
                    <div class="btn-container">
                        <div class="label">END SIMULATION</div>
                        <button class="btn btn-primary">PRESS</button>
                    </div>
                    <div class="btn-container">
                        <div class="label">ACTIVATED CUSTOMER PANEL</div>
                        <button class="btn btn-primary">PRESS</button>
                    </div>
                    <div class="btn-container">
                        <div class="label">ACTIVATED MAINTAINER PANEL</div>
                        <button class="btn btn-primary">PRESS</button>
                    </div>
                    <div class="btn-container">
                        <div class="label">ACTIVATE MACHINERY SIMULATOR PANEL</div>
                        <button class="btn btn-primary">PRESS</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SimulatorPanel;
