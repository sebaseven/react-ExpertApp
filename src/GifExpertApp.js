import React,{useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ()=>{

    const [categorias, setCategorias] = useState(['Robotech'])

    return (
        <>
        <h1>Gif Expert App</h1>
        <hr/>
        <AddCategory setCategorias={setCategorias}>

        </AddCategory>
        <ol>
            {
                categorias.map((categoria) =>
                <GifGrid key={categoria} category={categoria}></GifGrid>
                )
            }
        </ol>
        </>
    );
}
export default GifExpertApp;