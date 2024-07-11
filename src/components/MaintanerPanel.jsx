import React from 'react';

const MaintanerPanel = () => {
    return (
        <>
            <div class="container">
                <div class="control-panel">
                    <h2>VIMTO SOFT DRINKS DISPENSER</h2>
                    <h4 class="text-center">MAINTAINER CONTROL PANEL</h4>
                    <div class="mb-3">
                        <label for="password" class="form-label">TYPE PASSWORD HERE</label>
                        <input type="password" id="password" class="form-control form-control-lg" />
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <button class="btn btn-success">PASSWORD VALID</button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-danger">PASSWORD INVALID</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">PRESS BELOW TO DETERMINE NUMBER OF COINS IN SELECTED DENOMINATION</label>
                        <div class="btn-group" role="group">
                            <button class="btn btn-outline-secondary">10c</button>
                            <button class="btn btn-outline-secondary">20c</button>
                            <button class="btn btn-outline-secondary">50c</button>
                            <button class="btn btn-outline-secondary">RM1</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="total-coins" class="form-label">TOTAL NUMBER OF COINS IN SELECTED DENOMINATION</label>
                        <input type="text" id="total-coins" class="form-control form-control-lg" />
                    </div>
                    <div class="mb-3">
                        <label for="new-price" class="form-label">TYPE NEW DRINKS CAN PRICE HERE</label>
                        <input type="text" id="new-price" class="form-control form-control-lg" />
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <button class="btn btn-primary">PRESS HERE FOR TOTAL CASH HELD BY MACHINE</button>
                        </div>
                        <div class="col-6">
                            <input type="text" id="total-cash" class="form-control form-control-lg" placeholder="TOTAL CASH" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-warning w-100">PRESS HERE TO COLLECT ALL CASH</button>
                    </div>
                    <div class="mb-3">
                        <label for="collect-cash" class="form-label">COLLECT ALL CASH HERE</label>
                        <input type="text" id="collect-cash" class="form-control form-control-lg" />
                    </div>
                    <div>
                        <button class="btn btn-success w-100">PRESS HERE WHEN FINISHED</button>
                    </div>
                </div>
            </div> /
        </>
    );
}

export default MaintanerPanel;
