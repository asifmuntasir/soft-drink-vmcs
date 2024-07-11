import React from 'react';

const MachineryControllPanel = () => {
    return (
        <>
            <div class="container control-panel">
                <h2>Machinery Simulation Control Panel</h2>
                <form>
                    <div class="mb-3">
                        <label for="brand1" class="form-label">Number of Drinks Cans of Brand 1</label>
                        <input type="number" class="form-control" id="brand1" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="brand2" class="form-label">Number of Drinks Cans of Brand 2</label>
                        <input type="number" class="form-control" id="brand2" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="brand3" class="form-label">Number of Drinks Cans of Brand 3</label>
                        <input type="number" class="form-control" id="brand3" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="brand4" class="form-label">Number of Drinks Cans of Brand 4</label>
                        <input type="number" class="form-control" id="brand4" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="brand5" class="form-label">Number of Drinks Cans of Brand 5</label>
                        <input type="number" class="form-control" id="brand5" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="coins10" class="form-label">Number of 10¢ Coins</label>
                        <input type="number" class="form-control" id="coins10" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="coins20" class="form-label">Number of 20¢ Coins</label>
                        <input type="number" class="form-control" id="coins20" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="coins50" class="form-label">Number of 50¢ Coins</label>
                        <input type="number" class="form-control" id="coins50" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="coins1" class="form-label">Number of RM1 Coins</label>
                        <input type="number" class="form-control" id="coins1" placeholder="Enter new value" />
                    </div>
                    <div class="mb-3">
                        <label for="machineLock" class="form-label">Status of Vending Machine Door Lock</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="machineLock" id="locked" value="locked"
                                    checked />
                                <label class="form-check-label" for="locked">Locked</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="machineLock" id="unlocked" value="unlocked" />
                                <label class="form-check-label" for="unlocked">Unlocked</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default MachineryControllPanel;
