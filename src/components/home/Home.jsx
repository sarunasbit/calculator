import React from 'react'
import Calculator from '../calculator/Calculator'
import Cards from '../cards/Cards'
import { useLocalStorage } from 'usehooks-ts'
import { calculatePallet } from '../../services/calculate'
import {toast, Toaster} from 'react-hot-toast'
function Home() {
    const[tableItem, setTableItem] = useLocalStorage('products', []);

    const handleSave = (newItem) => {
        newItem = calculatePallet(newItem.productQuantity, newItem.boxQuantity, newItem.productName)
        setTableItem([newItem, ...tableItem]);
        console.log(newItem)
      };

    const handleDelete = (indexToDelete) =>{
        const updatedItems = tableItem.filter((_, index) => index !== indexToDelete);
        setTableItem(updatedItems)
        toast.success('Įrašas sėkmingai ištrintas')
    }

    const handleDeleteAll = () => {
        toast.success('Įrašai sėkmingai ištrinti')
        setTableItem([])
    }

  return (
    <>
    <div className="container">
        <div className="row flex-column flex-md-row mt-3">
            <div className="col-12 col-md-5 mb-3 mb-md-0">
                <Calculator onSave={handleSave} deleteAll={() => handleDeleteAll()}/>
            </div>
            <div className="col-12 col-md-5">
                {tableItem.length > 0 ? (
                    tableItem.map((item, index) => 
                        <Cards
                        key={index}
                        productName={item.product}
                        productQuantity={item.quantity}
                        productBoxQuantity={item.boxquantity}
                        totalPallets={item.pallets}
                        totalBoxes={item.boxes}
                        totalRemainder={item.remainder}
                        onDelete = {() => handleDelete(index)}
                        />
                    )) : (
                        <h2>Įrašų nerasta...</h2>
                    )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Home