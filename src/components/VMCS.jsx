import React from 'react';
// import { Typoghraphy } from 'antd';

// const { Title } = Typoghraphy;

const VMCS = () => {
    return (
        <>
            <div class="container">
                <div class="vending-machine">
                    <h2>VIMTO SOFT DRINKS DISPENSER</h2>
                    <div class="row mb-3">
                        <div class="col-6">
                            <label for="insert-coin" class="form-label">INSERT COIN HERE</label>
                            <input type="text" id="insert-coin" class="form-control form-control-lg" />
                        </div>
                        <div class="col-6">
                            <label class="form-label invisible">Label</label>
                            <button class="btn btn-danger">COINS NOT VALID</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="total-money" class="form-label">TOTAL MONEY INSERTED</label>
                        <input type="text" id="total-money" class="form-control form-control-lg" />
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h4>SELECT DRINKS BRAND BELOW</h4>
                        </div>
                        <div class="col-6">
                            <p>BRAND 1</p>
                        </div>
                        <div class="col-2">
                            <p>70c</p>
                        </div>
                        <div class="col-2 stock-status">
                            <p>NOT IN STOCK</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-primary">SELECT</button>
                        </div>
                        <div class="col-6">
                            <p>BRAND 2</p>
                        </div>
                        <div class="col-2">
                            <p>70c</p>
                        </div>
                        <div class="col-2 stock-status">
                            <p>NOT IN STOCK</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-primary">SELECT</button>
                        </div>
                        <div class="col-6">
                            <p>BRAND 3</p>
                        </div>
                        <div class="col-2">
                            <p>70c</p>
                        </div>
                        <div class="col-2 stock-status">
                            <p>NOT IN STOCK</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-primary">SELECT</button>
                        </div>
                        <div class="col-6">
                            <p>BRAND 4</p>
                        </div>
                        <div class="col-2">
                            <p>60c</p>
                        </div>
                        <div class="col-2 stock-status">
                            <p>NOT IN STOCK</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-primary">SELECT</button>
                        </div>
                        <div class="col-6">
                            <p>BRAND 5</p>
                        </div>
                        <div class="col-2">
                            <p>60c</p>
                        </div>
                        <div class="col-2 stock-status">
                            <p>NOT IN STOCK</p>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-outline-primary">SELECT</button>
                        </div>
                    </div>
                    <div class="text-center my-3">
                        <p>NO CHANGE AVAILABLE</p>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <button class="btn btn-warning">RETURN CASH & TERMINATE TRANSACTION</button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info">COLLECT CHANGE</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button class="btn btn-success">COLLECT CAN HERE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VMCS;
