export function calculatePallet(units, unitsPerBox, productName) {
    // Calculate number of full boxes
    const fullBoxes = Math.floor(units / unitsPerBox);
    
    // Assume 52 boxes per pallet
    const boxesPerPallet = 52;
    
    // Calculate number of full pallets
    const fullPallets = Math.floor(fullBoxes / boxesPerPallet);
    
    // Calculate remaining boxes after full pallets
    const remainingBoxes = fullBoxes % boxesPerPallet;
    
    // Calculate remaining units that don't fill a box
    const remainingUnits = units % unitsPerBox;
    
    return {
        pallets: fullPallets,
        boxes: remainingBoxes,
        remainder: remainingUnits,
        product: productName,
        quantity: units,
        boxquantity: unitsPerBox

    };
}